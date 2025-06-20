export const joyasLog = (req, _, next) => {
  console.log(
    {
      method: req.method,
      path: req.originalUrl,
      consulta: req.query
    })
  next()
}
