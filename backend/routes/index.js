const
  bodyParser = require('body-parser'),
  cors = require('cors'),

  routers = {
    users: require('./users'),
    questions: require('./questions')
  };


module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());


  for (var key in routers)
    app.use(`/api/${key}`, routers[key]);
};