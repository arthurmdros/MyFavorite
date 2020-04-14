const express = require('express');
const UserController = require('./controllers/UserController');
const FavoriteController = require('./controllers/FavoriteController');
const LoginController = require('./controllers/LoginController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);
routes.put('/users/:id', UserController.update);

routes.get('/favorites', FavoriteController.index);
routes.post('/favorites', FavoriteController.create);
routes.delete('/favorites/:id', FavoriteController.delete);
routes.put('/favorites/:id', FavoriteController.update);

routes.get('/profile', ProfileController.index);

routes.post('/login', LoginController.create);

module.exports = routes;