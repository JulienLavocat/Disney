const app = require("express")();
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();

app.use(helmet());
app.use(morgan('tiny'));

app.use(require("express").static("public", {
    extensions: ['html', 'htm']
}));

app.use(require("./router"));

app.listen(5674, () => {
    console.log("Listenning to 5674");
});