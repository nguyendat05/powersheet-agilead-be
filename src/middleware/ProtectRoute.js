export function ProtectRoute(req, res, next) {
  const now = Date.now();

  if (req.session && req.session.user) {
    const expires = req.session.cookie.expires;
    if (expires && now > new Date(expires).getTime()) {
      req.session.destroy((err) => {
        if (err) {
          console.error('Failed to destroy session:', err);
        }
        res.clearCookie('connect.sid');
        return res.status(401).json({ message: 'Session_expired' });
      });
    } else {
      return next();
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}