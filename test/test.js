const request = require('supertest'),
  express = require('express');
 
var app = require('../app');
 
describe('Index Page', function() {
  it("renders successfully", function(done) {
    request(app).get('/').expect(200, done);    
  })
});

describe('User Page', function() {
  it("renders successfully", function(done) {
    request(app).get('/users').expect(200, done);    
  })
});

describe('Undefined route', function() {
  it("renders the not found error status", function(done) {
    request(app).get('/hi').expect(404, done);    
  })
});