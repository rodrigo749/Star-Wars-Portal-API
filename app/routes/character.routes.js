module.exports = app => {
    const characterController = require('../controllers/character.controller');

    app.route('/api/character')
    .get(characterController.getAll) 

    app.route('/api/character')
    .post(characterController.create);

}