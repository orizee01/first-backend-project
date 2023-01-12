const chai = require('chai');
const sinon = require('sinon');
const server = require("../.././index");
const {CheckIfTodoBelongsToUser } =  require('../.././src/middlewares/todo')
const { CheckIfTodoExist } = require('../../src/middlewares/todo');
const { verifyAuth } = require('./.././..//src/middlewares/verifyTokenMiddle')
const { checkIfUserExists} = require('./.././.././src/middlewares/index')
const { CheckIfUserWithEmailExist} = require('../.././.../../src/middlewares/Authorization-middleware')
const { expect } = chai

describe('', () => {
    let status,
    json, 
    res;


beforeEach( ()  => {
 status = sinon.stub();
 json = sinon.spy();
res = {json, status}
status.returns(res)
})


it('it should return error message with not authenticated',async() => {

  const next = () => {}
  await verifyAuth('req', res, next);
  expect(status.calledOnce).to.equal(true)
 
})

it('it should return todo does not exist', async() => {
    const next = () => {}
    await  CheckIfTodoExist('req', res , next)
    expect(status.calledOnce).to.equal(true)
})

it('it should return todo belongs to user', async() => {
    const next = () => {}
    await  CheckIfTodoBelongsToUser ('req', res , next)
    expect(status.calledOnce).to.equal(true)
})

it('it should return error message email already exist', async() => {
    const next = () => {}
    await checkIfUserExists('req', res , next)
    expect(status.calledOnce).to.equal(true)
})

it('it should return invalid credentials"', async() => {
    const next = () => {}
    await  CheckIfUserWithEmailExist('req', res , next)
    expect(status.calledOnce).to.equal(true)
})



}) 


