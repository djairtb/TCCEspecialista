const { futimesSync } = require('fs');
const resultsRepository = require('../repository/resultsRepository');

exports.getUserResults = async (req, res, next) => {
    let userid = req.body.userId;
    let resp = await resultsRepository.getResultByUserID(userid); 
    if(resp)
        res.status(200).send(resp);
    else
        res.status(505).send('erro ao buscar informações')
};

exports.getDateRange = async (req, res,next) =>{
    let inicio = new Date(req.body.dataInicio);
    let fim = new Date(req.body.dataFim);
    //seta as horas para o final do ultimo dia
    fim.setHours(fim.getHours() +23)
    fim.setMinutes(fim.getMinutes() +59)
    let userid = req.body.userId;
    let resp = await resultsRepository.getResultByDateRange(userid,inicio,fim); 
    if(resp)
        res.status(200).send(resp);
    else
        res.status(505).send('erro ao buscar informações')
}
