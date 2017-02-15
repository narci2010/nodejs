var student = require('./student.js');
var teacher = require('./teacher.js');

//teacher.add('zhangsan');

function add(name,students){
	teacher.add(name);
	students.forEach(function(item,index){
		student.add(item);
	});
}

// exports.add = add;
module.exports = add;
