// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../index');

// //Assertion style
// chai.should()
// chai.use(chaiHttp)

// describe('User API', () => {
//     //Assertion style
//      describe('POST/users', () => {
//         it('should register all users', (done) => {
//               chai.request(server)
//              .get ('/users')
//               .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.should.be.a('array');
//                 res.body.length.should.be.above(0)
//                 done()
//               })
//         })
//      })   
// })

//describe('Todo API',() => {
    // Test the Get route

//     describe('GET/todo', () => {

//         it('it should GET all the todo table',(done) => {
//          chai.request(server)
//              .get('/todo')
//              .end((err, response) => {
//                  console.log(response.body)
//                 response.should.have.status(200);
//                 response.body.should.be.a('array')
//                 response.body.length.should.be.above(0);
//                 done();
//              })
//         })
  //  })

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
//})