import joi from "joi";

export const testSchema = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    discipline: joi.string().required(),
    category: joi.string().valid('Projeto', 'Prática', 'Recuperação').required(),
    teacher: joi.string().required()
})