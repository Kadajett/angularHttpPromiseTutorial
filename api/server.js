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






 
app.get('/tasks', function(req, res) {
	sequelize.query('SELECT * FROM Tasks')
	.success(function(list){
		res.status(200);
		res.send(list)
	})
	// .complete(function(err, list){
	// 	if(!!err){
	// 		console.log('Error occurred while getting the users', err)
	// 	}
	// 	else if(!list){
	// 		console.log('No Users Found')
	// 	}
	// 	else{
	// 		res.send(list);
	// 	}
	// })
    
});

app.post('/newTask', function(req, res){
	var taskReq = req.body;
	
	// User.create({
	// 	firstName: user.firstName,
	// 	lastName: user.lastName,
	// 	email: user.email,
	// 	dateOfBirth: user.dateOfBirth,
	// 	password: user.password,
	// 	imageUrl: user.imageUrl || '',
	// 	sex: user.sex || 'NA'

	// })
	task.create({
		title: taskReq.title,
		desc: taskReq.desc,
		color: taskReq.color,
		done: false
	})
	.complete(function(err, taskRes){
		if(err){
			res.status(400)
			res.send({'success': false, 'message': 'Failed to Create Task'})
		}
		else{
			res.status(200)
			
			res.send({'success': true, 'obj': taskRes, 'message': 'successfully created task!'});
		}
	})
	// res.send(user);
}) 

app.post('/toggle', function(req, res){
	sequelize.query('SELECT * FROM Tasks WHERE id=' + request.query.taskId)
 	.success(function(task){
 		task.updateAttributes({
 			done: !task.done
 		})
 		.success(function(task){
 			res.status(200);
 			res.send({success:true, task: task, message: 'successfully toggled task.'})
 		})
 		.error(function(err){
 			res.status(500);
 			res.send({success: false, message: 'failed to toggle task'})
 		})
 	})
 	.error(function(err){
 		res.status(500)
 		res.send({success: false, message: 'failed to find task'})
 	})
})

app.get('/task', function(req, res){
 var request = req;
 sequelize.query('SELECT * FROM Tasks WHERE id=' + request.query.taskId)
 .success(function(task){
 	res.status(200);
 	res.send({success: true, task: task});
 })
 .error(function(){
 	res.status(400);
 	res.send({success: false, message: 'Failed to Get Task'});
 })
})


app.delete('/deleteTask', function(req, res){
	var request = req;
	
	sequelize.query('DELETE FROM Tasks WHERE id=' + request.query.taskId)
	.success(function(user){
		res.send({'success': true, 'message': 'Task Deleted'});
	})
}) 

app.listen(8080);
console.log('Listening on post 8080')





/* 

*/






