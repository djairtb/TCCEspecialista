const express = require("express");
const userRepository = require("./repository/userRepository")
const jwt = require('express-jwt');
const app = express();
const fs = require('fs');
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const bcrypt = require("bcryptjs")

//Rotas
const index = require("./routes/index");
const resultadosRoute = require("./routes/resultadoRoute");

//Middlewares
// ----------------------------------------------------------------

let secRoutes = (req) => {
  return [req.url.startsWith("/login"), req.url.startsWith("/register")];
  
};

let fromHeaderOrCookie = (req) => {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
  } else if (req.cookies && req.cookies["token"]) {
      return req.cookies["tcc-token"];
  }
  return null;
}
let publicKey = fs.readFileSync('./certs/public.pem', 'utf8');

app.use(jwt({
  secret: publicKey,
  algorithms: ['RS256'],
  requestProperty: 'jwt',
  getToken: fromHeaderOrCookie
},
).unless(
  { custom: secRoutes }
)
);
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


require("./auth")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", index);
app.use("/resultados", resultadosRoute);
// ----------------------------------------------------------------

// Tratamento de login
//-----------------------------------------------------------------
app.post("/login", (req, res, next) => {
  passport.authenticate('login',
  (err, user, info) => {
    if (err) {
      res.status(401).send()
    }
    if (!user) {
      res.status(401).send()
    }
    let retorno = {isAuthenticated: true, ...user, token: 'eyJhbGciOiJSUzI1NiJ9.eyJ0Y2NhdXRlbnRpY2FjYW8iOiJ0cnVlIiwidG9rZW5leGVtcGxvIjoiMDEifQ.I61JfnWsC2LGpN9jpJe45PGF4JSh9wYID0PZ3BIfICUrrYfEjUnYcgrtIH2Ccph23pH-NmUpg8OSaJ27bZFzSw6BInkvxaREmMvy2-KCdXQmy4VABx-CclDIMsIoytlIDDspiqWxz-Z8hQKm-44jIpdA8doWcE_-UhsAsbivX1_Biwz0huYcLp1Bq7LnVdPO6lq6zOzUdU1QLzwFUlE1mPLF7GSEoWMfDDHPbH-s-554Ofizn6117U0pu7ivhOocyh0UWTLKEavcnD5Wsxm8Vx4sS_CgIP66YAfzLE4yEm_vry5bBJT6pWBtGOBHzdvv0nNu9ebbs8bnHj36YSCX5g'}
    res.json(retorno);
  })(req, res, next);
});
app.post("/register", async (req, res) => {
  let retorno
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const username = req.body.username;
  const email = req.body.email;
  const name = req.body.name;
  let check = await userRepository.checkUserExists(username,email)
  try {
    if(check.length > 0) {
      retorno = {
        criado : 0
      }
      res.json(retorno);
    }else{
      await userRepository.userRegister(username, hashedPassword,email,name)
      retorno = {
        criado : 1
      }
      res.json(retorno);
    }
    
  } catch (error) {
    res.send("Erro ao criar usuário");
  }
 
});

app.get("/user", (req, res) => {
  res.send(req.user);
});

//-----------------------------------------------------------------

const port = process.env.PORT || "4000";

app.listen(port, function () {
  console.log(`Backend iniciado na porta ${port}!`);
});
