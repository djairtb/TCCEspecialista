const resultsRepository = require('../repository/resultsRepository');

exports.getUserResults = async (req, res, next) => {
    let userid = req.params.user_id;
    let resp = await resultsRepository.getResultByUserID(userid); 
    if(resp)
        res.status(200).send(resp);
    else
        res.status(505).send('erro ao buscar informações')
};

exports.getDateRange = async (req, res,next) =>{
    let inicio = req.params.dataInicio;
    let fim = req.params.dataFim;
    let userid = req.params.user_id;
    let resp = await resultsRepository.getResultByUserID(userid); 
    if(resp)
        res.status(200).send(resp);
    else
        res.status(505).send('erro ao buscar informações')
}
