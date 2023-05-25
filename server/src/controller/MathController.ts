import { Request, Responce } from "express";

class MathController {
  /**
   * @description This handler function user for the addition of two parameter
   * @param req
   * @param res
   */
  static addition = async (req: Request, res: Responce) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    return res.status(200).send({
      data: {
        sum
      },
      resCode: 200,
      message: "Success"
    });
  };
}

export default MathController;
