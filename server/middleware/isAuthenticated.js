const isAuthentificathed = (req, res, next) => {
  if (!req.session || !req.session.id) {
    const err = new Error("Access denied");
    err.statusCode = 401;
  }
  next(err);
};
