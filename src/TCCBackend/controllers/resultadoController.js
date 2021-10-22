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
    let inicio = req.body.dataInicio;
    let fim = req.body.dataFim;
    let userid = req.body.userId;
    let resp = await resultsRepository.getResultByUserID(userid,inicio,fim); 
    if(resp)
        res.status(200).send(resp);
    else
        res.status(505).send('erro ao buscar informações')
}
