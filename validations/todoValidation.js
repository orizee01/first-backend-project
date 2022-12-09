const joi = require("joi");
const { baseValidator } = require("./userValidation");



const todoValidator = (req, res, next) => {
  const schema = joi.object({
    title: joi
      .string()
      .min(5)
      .max(20)
      .regex(/[a-zA-Z]/)
      .message('the title must have letters')
      .required(), 
  });
  baseValidator(schema, req, res, next);
};

module.exports = {
  todoValidator,
};
