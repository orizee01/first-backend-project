
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");
const request = require("supertest");

//Assertion style
// chai.should();
// chai.use(chaiHttp);

describe("Todo API", () => {
  // Test the user/sigin up endpoint
  describe("POST/API/users", () => {
    it("it should register a user", (done) => {
      request(server)
        .post("/users")
        .send({
          firstname: "reenmi",
          lastname: "yemi",
          email: "kgr@gmail.com",
        })
        .end((err, res) => {
          chai.expect(res.status).to.equal(200);
          done();
        });
    });
  });

  // Test the user/login endpoint
  describe("POST/API/login", () => {
    it("it should login with token", (done) => {
      request(server)
        .post("/users/login")
        .send({
          email: "kgr@gmail.com",
        })

        .end((err, res) => {
          process.env.TODO_TOKEN = res.body.data.token;
          chai.expect(res.status).to.equal(200);
          chai.expect(res.body).to.haveOwnProperty("message");
          chai.expect(res.body.message).to.equal("login successful");
          done();
        });
    });
  });
});

// Test the POST/todo endpoint (create todo)

describe("POST/API/todo", () => {
  it("it should create a todo", (done) => {
    request(server)
      .post("/todo")
      .set("Authorization", process.env.TODO_TOKEN)
      .send({
        title: "go to gym",
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.haveOwnProperty("message");
        chai.expect(res.body.message).to.equal("Todo has been created");
        chai.expect(res.body).to.be.an("object");
        done();
      });
  });
});

// Test the Get/todo endpoint

describe("GET/todo", () => {
  it("it should GET todo all the todos", (done) => {
    request(server)
      .get("/todo")
      .set("Authorization", process.env.TODO_TOKEN)
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.haveOwnProperty("message");
        chai.expect(res.body.message).to.equal("Todo gotten");
        chai.expect(res.body).to.be.a("object");
        done();
      });
  });
});


describe("PATCH/todo", () => {
  it("it should update  todos", (done) => {
    request(server)
      .patch("/todo/1")
      .set("Authorization", process.env.TODO_TOKEN)
      .send({
        title: "create a new test for a new student",
      })
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.haveOwnProperty("message");
        chai.expect(res.body.message).to.equal("Todo updated");
        chai.expect(res.body).be.a("object");
        done();
      });
  });
});


describe("GET/todo/:id", () => {
  it("it should get one todo", (done) => {
    request(server)
      .get("/todo/1")
      .set("Authorization", process.env.TODO_TOKEN)
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.haveOwnProperty("message");
        chai.expect(res.body.message).to.equal("todo Retrieved");
        done();
      });
  });
});


describe("DELETE/todo", () => {
  it("it should delete todos", (done) => {
    request(server)
      .delete("/todo/1")
      .set("Authorization", process.env.TODO_TOKEN)
      .end((err, res) => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).to.haveOwnProperty("message");
        chai.expect(res.body.message).to.equal("Todo Removed");
        done();
      });
  });
});



