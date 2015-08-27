var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher')

module.exports = function(router){ //exportable functions
	router.route('/students')
		.get(student.find)
		.post(student.insert);

	router.route('/students/:id')
		.get(student.findOne)
		.put(student.update)
		.delete(student.remove);
/*	router.route('/teachers')
		.get(teacher.view);
		.post(teacher.add);
		.put(teacher.update);
		.delete(teacher.delete);
*/	router.route('/teachers')
		.get(teacher.view);

	router.route('/teachers')
		.post(teacher.add);

	router.route('/teachers')
		.put(teacher.update);

	router.route('/teachers')
		.delete(teacher.delete);

	return router;
}