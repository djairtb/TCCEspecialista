const repo = require("../repository/userRepository")
const bcrypt = require("bcryptjs")
const nodemailer = require('nodemailer');

exports.sendForgotMail = async (req, res, next) => {
    let email = req.body.email;
    let userInfo = await repo.checkUserExists('',email);
    if (!userInfo[0]){
        res.status(404).send('usuario não existe')
    }
    let transporte = nodemailer.createTransport({
        service: 'Gmail', 
        auth: {
          user: 'cdrecognization@gmail.com', 
          pass: 'tcc2021cdr'             
        } 
    });
    var emailInfo = {
        from: 'cdrecognization@gmail.com', 
        to: email, 
        subject: 'Recuperação de senha CDR',
        html: `<h3> Olá ${userInfo[0].nome}, <br /> 
        <p> Solicitação de mudança de senha CDR, se foi voce clique no link abaixo, caso não seja, desconsidere</p></br>
        <p>http://20.72.92.42:3000/recoverpass?id=${userInfo[0].id}&username=${userInfo[0].nome}</p>
        </br><p>Att, Equipe CDR</p></br>
        Essa é uma mensagem automática por favor não responda.`
    
    };
    transporte.sendMail(emailInfo, function(err, info){
        if(err)
            res.status(401).send(err).
        else
            res.status(200).send(info);
      });
        
};

exports.changePassword = async (req, res, next) => {
    let userid = req.body.id;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let id = await repo.changeForgottenPassword(userid, hashedPassword);
    
    if(id[0].id == req.body.id){
        retorno = {
            alterado : 1
        }
      res.json(retorno);
    }
    else{
        retorno = {
            criado : 0
          }
        res.json(retorno);
    }
       
}