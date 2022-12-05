const entitiesRouter = require('express').Router();
const controller = require('../controllers/entities');


entitiesRouter.post('/create', controller.create);
//entitiesRouter.post('/read', controller.getAll);
//entitiesRouter.post('/update', controller.update);
//entitiesRouter.post('/delete', controller.delete);

module.exports = entitiesRouter;