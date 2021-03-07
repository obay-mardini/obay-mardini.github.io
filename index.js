const express = require("express");
const path = require("path");
const helmet = require("helmet");
const basicAuth = require("express-basic-auth");
const template = require("./template");

const app = express();

app.use(
  basicAuth({
    users: { sara: "hermosa123" },
    challenge: true,
    realm: "Hermosa Palace"
  })
);

app.use(helmet());

app.use("/css", express.static("html/css"));
app.use("/favicons", express.static("html/favicons"));
app.use("/fonts", express.static("html/fonts"));
app.use("/img", express.static("html/img"));
app.use("/js", express.static("html/js"));
app.use("/styles", express.static("html/styles"));
app.use("/vendor", express.static("html/vendor"));

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.resolve("favicon.ico"));
});

app.get("/", (req, res) => {
  const htmlBody = template("index");
  res
    .type("text/html")
    .status(200)
    .send(htmlBody);
});

app.get("/:pagename.html", (req, res) => {
  const htmlBody = template(req.params.pagename);
  res
    .type("text/html")
    .status(200)
    .send(htmlBody);
});

const port = process.env.port || 3000;
app.listen(port, () =>
  console.log(`App is listening on http://localhost:${port}`)
);