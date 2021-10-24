const express = require("express");
const app = express();
const User = require("./user");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("./auth")(passport);
//Rotas
const index = require("./routes/index");
const resultadosRoute = require("./routes/resultadoRoute");

//Middlewares
// ----------------------------------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const originFrontEnd = process.env.ORIGIN_FRONTEND || "http://localhost:3000";
app.use(
  cors({
    origin: originFrontEnd, //Caminho do react para permitir
    credentials: true,
  })
);
app.use(
  session({
    secret: "123",
    resave: false, //salvar a sessão a cada requisção
    saveUninitialized: false, //salvar sessão anonima
    cookie: { maxAge: 2 * 60 * 1000 }, // tempo para expirar a sesão
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", index);
app.use("/resultados", resultadosRoute);
// ----------------------------------------------------------------

// Tratamento de login
//-----------------------------------------------------------------
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    console.log(user);
    if (!user) res.send("Usuário não existe");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        let retorno = {isAuthenticated: true, ...user, token: 'sdfbgvhgfsvhj'}
        res.json(retorno);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("Usuário já existe");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Usuario Criado");
    }
  });
});
app.get("/user", (req, res) => {
  res.send(req.user);
});
//-----------------------------------------------------------------

const port = process.env.PORT || "4000";

app.listen(port, function () {
  console.log(`Backend iniciado na porta ${port}!`);
});
