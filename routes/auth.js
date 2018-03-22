const Models    = require('../models');
const Joi       = require('joi');
const Boom      = require('boom');
const JWT       = require('jsonwebtoken');
const Pack      = require('../package');

module.exports = function () {
    return [{
        method: 'POST',
        path: '/auth',
        config: {
            description : 'Authenticate via username & password',
            notes       : 'authorize user and send token as reply',
            tags        : ['api'],
            auth        : false, // ignore authentication
            validate: {
                payload: {
                    username : Joi.string().required(),
                    password : Joi.string().required()
                }
            },
            handler: async (req, h) => {

                const user = await Models.User.findOne({
                    attributes: ['id', 'username'],
                    where : {
                        username : req.payload.username,
                        password : req.payload.password
                    }
                });

                if(user == null){
                    return Boom.unauthorized('Bad credentials');
                }

                const token = JWT.sign(user.toJSON(), Pack.my_app.secret_key);

                return h.response({
                    "token" : token
                });
            }
        }
    }];
}();
