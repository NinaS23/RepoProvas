import { ItestInput } from "../types/testTypes";
import * as errorTypes from '../utils/errorUtils';
import * as teacherRepository from "../repositories/teacherRepository";
import * as disciplineRepository from "../repositories/disciplineRepository";

export async function createTest(test: ItestInput) {
    console.log(test)
    const teacher = await getTeacherId(test.teacher);
    const discipline = await getDisciplineId(test.discipline) 
}

async function getTeacherId(teacher: string) {
    const isTeacherExistent = await teacherRepository.findTeacherId(teacher);
    if (!isTeacherExistent) throw errorTypes.notFoundError("teacher does not exist")
    return isTeacherExistent;
}

async function getDisciplineId(category: string) {
    const isDisciplineExistent = await disciplineRepository.findDisciplineId(category);
    if (!isDisciplineExistent) throw errorTypes.notFoundError("discipline does not exist")
    return isDisciplineExistent;
} 