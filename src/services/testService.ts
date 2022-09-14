import { ItestInput, TtestsData } from "../types/testTypes";
import * as errorTypes from '../utils/errorUtils';
import * as testRepository from "../repositories/testRepository";
import * as teacherRepository from "../repositories/teacherRepository";
import * as disciplineRepository from "../repositories/disciplineRepository";
import * as categoryRepository from "../repositories/categoryRepository";
import * as teacherDisciplinesRepository from "../repositories/teachersDisciplinesRepository";

export async function createTest(test: ItestInput) {
    const teacher = await getTeacherId(test.teacher);
    const discipline = await getDisciplineId(test.discipline);
    const categories = await getCategory(test.category);
    const teacherDisciplines = await getTeacherDisciplinesId(teacher.id, discipline.id);
    for (let categorie of categories) {
        const testObj: TtestsData = {
            name: test.name,
            pdfUrl: test.pdfUrl,
            categoryId: categorie.item.id,
            teachersDisciplineId: teacherDisciplines.id
        }
        await testRepository.insertTest(testObj)
    }
    return { status: "created" }

}

async function getTeacherId(teacher: string) {
    const isTeacherExistent = await teacherRepository.findTeacherId(teacher);
    if (!isTeacherExistent) throw errorTypes.notFoundError("teacher does not exist");
    return isTeacherExistent;
}

async function getDisciplineId(discipline: string) {
    const isDisciplineExistent = await disciplineRepository.findDisciplineId(discipline);
    if (!isDisciplineExistent) throw errorTypes.notFoundError("discipline does not exist");
    return isDisciplineExistent;
}

async function getCategory(category: string) {
    const categories = category.trim().split(",");
    let categoriesArr = [];
    let hash = {};
    for (let i = 0; i < categories.length; i++) {
        let item = categories[i];
        let category = await categoryRepository.findCategory(item)
        if (category && hash[item] === undefined) hash[item] = category
        if (!category) throw errorTypes.notFoundError("category does not exists")
        categoriesArr.push({ item: hash[item] })
    }
    return categoriesArr;
}

async function getTeacherDisciplinesId(teacherId: number, disciplineId: number) {
    const isTeacherDisciplineValid = await teacherDisciplinesRepository.getTeacherDisciplines(teacherId, disciplineId);
    if(!isTeacherDisciplineValid) throw errorTypes.conflictError("teacher does not teach this subject");
    return isTeacherDisciplineValid;
}

export async function getTests(groupBy: string) {
    if (groupBy === "disciplines") {
        return await testRepository.findByDiscipline();
    } else if (groupBy === "teachers") {
        return await testRepository.findByTeacher();
    } else {
        throw errorTypes.notFoundError("query string is invalid! The query string should be 'disciplines' or 'teachers")
    }
}
