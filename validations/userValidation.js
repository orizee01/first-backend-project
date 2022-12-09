const Joi = require('joi');

const baseValidator = async (schema, req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      res.status(400).send({
        message: error.message.replace(/["]/gi, ''),
        status: 'fail',
        data: null
      })
    }
  }
  
  const loginValidator = (req, res, next) => {
    const schema = Joi.object({
     email: Joi.string().email().required(),
    });
    baseValidator(schema, req, res, next);
  }
  
  const signupValidator = (req, res, next) => {
    const schema = Joi.object({
    firstname: Joi.string().min(3).max(20).required(),
    lastname: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    });
    baseValidator(schema, req, res, next);

  }

module.exports= {
    loginValidator,
    signupValidator,
    baseValidator

}

