/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ["pocketbase", "/^beercss.*/", "/^material-dynamic-colors.*/"],
};
