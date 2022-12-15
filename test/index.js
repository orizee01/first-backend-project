// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../index');

// //Assertion style
// chai.should()
// chai.use(chaiHttp)

// describe('Todo API',() => {
//     // Test the Get route

//     describe('GET/todo',() => {

//         it('it should GET all the todo table',(done) => {
//          chai.request(server)
//              .get('/todo')
//              .end((err, response) => {
//                  console.log(response.body)
//                 response.should.have.status(200);
//                 response.body.should.be.a('array')
//                 done();
//              })
//         })
//     })

        // it('it should NOT GET all the todo tables',(done) => {
        //  chai.request(server)
        //      .get('/todo')
        //      .end((err, response) => {
        //         response.should.have.status(404);
                
        //         done();
        //      })
        // })
// }) 
 

//Test the Get (by Id) route

// describe('GET/todo/:id',() => {

//     it('it should GET a todo by Id',(done) => {
//      chai.request(server)
//          .get('/todo')
//          .end((err, response) => {
//             response.should.have.status(200);
//             response.body.should.be.a('array')
//             done();
//          })
//     })
// })