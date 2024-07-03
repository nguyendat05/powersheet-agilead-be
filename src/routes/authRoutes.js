import express from "express";
import { generateAuthUrl, handleOAuth2Callback } from "../auth/auth.js";
import { ProtectRoute } from "../middleware/ProtectRoute.js";

const router = express.Router();

router.get('/login', (req, res) => {
  const url = generateAuthUrl();
  res.redirect(url);
});

router.get('/oauth2callback', handleOAuth2Callback);

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Failed to logout.');
    }
    res.clearCookie('connect.sid');
    res.status(200).send('Logout successful');
  });
});

router.get('/profile', ProtectRoute, (req, res) => {
  res.json(req.session.user);
});

export default router;