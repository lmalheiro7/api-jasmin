const entitiesRouter = require('express').Router();
const controller = require('../controllers/entities');

entitiesRouter.get('/', controller.get);
entitiesRouter.get('/:id', controller.getById);
entitiesRouter.post('/create', controller.create);

module.exports = entitiesRouter;