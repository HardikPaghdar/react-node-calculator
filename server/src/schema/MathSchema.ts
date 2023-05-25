import * as Joi from "joi";

class MathSchema {
  /**
   * @description This object variable define for the request validation
   */
  static additionSchema = Joi.object({
    num1: Joi.number().required(),
    num2: Joi.number().required()
  });
}

export default MathSchema;
