const handler = require("./handler.js");
const routes = [
  "/style.css",
  "/signup.js",
  "/index.html",
  "/auth//authIndex.html"
];

const router = (req, res) => {
  const method = req.method;
  console.log(method);
  const url = req.url;

  if (url === "/login_user") {
    handler.loginUser(req, res);
  } else if (req.method == "POST") {
    handler.handlerPost(req, res);
  } else {
    if (url === "/") {
      console.log("home is home");
      handler.home(req, res);
    } else if (routes.includes(url)) {
      console.log("./public/index.html");
      handler.publicRoute(req, res, url);
    } else if (url === "/favicon.ico") {
      res.end();
    } else if (url === "/signup?") {
      console.log("signup");
      handler.signup(req, res, url);
    } else if (url === "/login?") {
      console.log("we are loggin in");
      handler.login(req, res, url);
    } else if (url === "/logout") {
      console.log("logged out");
      handler.logout(req, res, url);
    } else if (url === "/auth/auth_index.html") {
      console.log("signed up!");
      handler.authIndex(req, res, url);
    } else if (method === "GET" && url === "GET?") {
      console.log("whatever!");
    } else if (method === "GET") {
      handler.dynamic(req, res, url);
      console.log("in dynamic!!!!");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404, file not found!!!!!!");
      console.log("404");
    }
    // }
  }
};
module.exports = router;
