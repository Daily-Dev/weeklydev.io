import Joi from 'joi'

const projectSchema = Joi.object({
  title: Joi.string().min(3).max(72).required(),
  description: Joi.string().max(512).required(),
  deadline: Joi.date().min('now')
});

export default projectSchema
