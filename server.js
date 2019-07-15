const app = require("express")();
const helmet = require("helmet");
const basicAuth = require("express-basic-auth");

app.use(helmet());
// app.use(basicAuth({
//     users: {
//         "user": "disneyPassword"
//     }
// }));

app.use(require("express").static("public"));

app.use(require("./router"));

app.listen(5674, () => {
    console.log("Listenning to 5674");
});