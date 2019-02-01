const controller = require('./controller');

module.exports = (app) => {

    app
        .get('/api/all', controller.getAll)
        .get('/api/:id', controller.getOne)
        .post('/api/create', controller.create)
        .put('/api/update/:id', controller.update)
        .put('/api/createnested/:id', controller.createNested)
        .delete('/api/delete/:id', controller.delete)

}   