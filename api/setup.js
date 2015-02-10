var sys = require("sys"),  
my_http = require("http"),  
path = require("path"),  
url = require("url"),  
filesys = require("fs"); 

var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());
app.use(express.bodyParser());
  app.use(app.router);

var Sequelize = require('sequelize')
  , sequelize = new Sequelize('youtubeHttp', 'root', '', {
      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
      port:    3306, // or 5432 (for postgres)
    })
 
sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })

  var task = sequelize.define('Task', {
    title: Sequelize.STRING,
    desc: Sequelize.STRING,
    color: Sequelize.STRING,
    done: Sequelize.BOOLEAN

  })

// var User = sequelize.define('User', {
//   firstName: Sequelize.STRING,
//   lastName: Sequelize.STRING,
//   email: Sequelize.STRING,
//   dateOfBirth: Sequelize.DATE,
//   password: Sequelize.STRING,
//   imageUrl: Sequelize.STRING,
//   sex: Sequelize.ENUM('male', 'female')
// })



sequelize.sync();