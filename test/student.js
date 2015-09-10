//test cases for controllers/student.js

var should = require('should-http'),
	request = require('supertest');

	describe("student", function(){ //for student
		var url = "localhost:5000";

		//can have multiple describe functions
		describe("find()", function(){ //for find() function
			it("should retrieve all student records", function(done){
				request(url)
					.get('/students')
					.end(function(err, res){
						if(err) throw err;
						res.should.have.status(200); //assertions
						res.body.should.be.an.instanceOf(Array); //because it returns an array without it
						done();
					});
			});
		});

		describe("insert()", function(){
			it("should return newly created student record", function(){
				request(url)
					.post('/students')
					.send({'studno':'2013-12345','name':'Betel'})
					.end(function(err, res){
						if(err) throw err;
						res.should.have.status(200);
						res.body.should.be.an.instanceOf(Object);
						res.body.should.have.properties(["id", "studno", "name"]);
						
						done();
					});
			});
			it("missing student number", function(){
				request(url)
					.post('/students')
					.send({'name':'Betel'})
					.end(function(err, res){
						if(err) throw err;
						res.should.have.status(200);
						res.body.should.be.an.instanceOf(Object);
						res.body.should.have.properties(["studno"]).and.not.equal('null');
						
						done();
					});
			});
			
			/*
			create test cases for insert
			- should return newly created record
			- missing student number
			- missing name
			- missing student number & name

			*/

		
		});
	});
