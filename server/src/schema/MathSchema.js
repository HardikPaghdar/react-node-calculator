"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("joi");
var MathSchema = /** @class */ (function () {
    function MathSchema() {
    }
    /**
     * @description This object variable define for the request validation
     */
    MathSchema.additionSchema = Joi.object({
        num1: Joi.number().required(),
        num2: Joi.number().required()
    });
    return MathSchema;
}());
exports.default = MathSchema;
