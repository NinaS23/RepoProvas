import joi from "joi";
import {ItestInput} from "../types/testTypes"

export const testSchema = joi.object<ItestInput>({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    discipline: joi.string().required(),
    category: joi.string().required(),
    teacher: joi.string().required()

})