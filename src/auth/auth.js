import * as dotenv from "dotenv";
dotenv.config();
import { OAuth2Client } from "google-auth-library";
import { User } from "../postgres/postgres.js";
import url from "url";

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URIS
);

export const generateAuthUrl = () => {
  return oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "consent",
  });
};

export const handleOAuth2Callback = async (req, res) => {
  try {
    const qs = new url.URL(req.url, process.env.URL_BACKEND).searchParams;
    const code = qs.get("code");

    const r = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(r.tokens);

    const ticket = await oAuth2Client.verifyIdToken({
      idToken: r.tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { sub, email, name, picture } = ticket.getPayload();
    const [user, created] = await User.findOrCreate({
      where: { id: sub },
      defaults: {
        email,
        name,
        picture,
        access_token: r.tokens.access_token,
        refresh_token: r.tokens.refresh_token,
      },
    });

    if (!created) {
      user.access_token = r.tokens.access_token;
      if (r.tokens.refresh_token) {
        user.refresh_token = r.tokens.refresh_token;
      }
      await user.save();
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      picture: user.picture,
      isAdmin: user.isAdmin,
    };

    res.redirect(`${process.env.URL_CLIENT}/login-success`);
  } catch (e) {
    console.error(e);
    res.status(500).send("Authentication failed");
  }
};
