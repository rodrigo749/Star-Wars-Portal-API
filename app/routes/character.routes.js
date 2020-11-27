module.exports = app => {
    const characterController = require('../controllers/character.controller');

    app.route('/api/character')
    .get(characterController.getAll) 

    app.route('/api/character')
    .post(characterController.create);

    app.route('/api/character/:id')
    .put(characterController.update)
    .delete(characterController.delete)

   app.route('/api/character/find/:id')
   .get(characterController.find) 

}