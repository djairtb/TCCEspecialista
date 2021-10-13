exports.getUserResults = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.getById = (req, res, next) => {
    let userId = req.body.userId;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
