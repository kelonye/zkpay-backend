require("dotenv").config({
  path: ".env.local"
})
const app = require("../src")
const port = process.env.PORT
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
