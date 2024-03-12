const Student = require("../models/student");

// Simula una base de datos en memoria
let Students = [
    new Student(20400741, "Juanita Alvarez", 90),
    new Student(20400742, "Topoyiyo Inzuza", 60),
    new Student(20400743, "Pedro Maromas", 80),
];

// Contador para simular el ID único
let IDcount = Students.at(-1).noctrl;

// Obtener todos los estudiantes
function getAllStudents() {
    return Students;
}

// Crear un nuevo estudiante
function createStudent(name, note) {
    IDcount++;
    const newStudent = new Student(IDcount, name, note);
    Students.push(newStudent);
    return newStudent;
}

// Actualizar un estudiante
function updateStudent(id, name, note) {
    const studentIndex = Students.findIndex(student => student.noctrl === id);
    if (studentIndex !== -1) {
        Students[studentIndex].name = name;
        Students[studentIndex].note = note;
        return Students[studentIndex];
    }
    return null;
}

// Eliminar un estudiante
function deleteStudent(id) {
    const studentIndex = Students.findIndex(student => student.noctrl === id);
    if (studentIndex !== -1) {
        return Students.splice(studentIndex, 1)[0]; // Elimina y devuelve el estudiante
    }
    return null;
}

// Función para obtener los mejores promedios
function getTopStudents(limit = 5) {
    // Clonamos el arreglo para no modificar el original
    const sortedStudents = [...Students];
    // Ordenamos los estudiantes por nota de mayor a menor
    sortedStudents.sort((a, b) => b.note - a.note);
    // Retornamos los primeros 'limit' estudiantes
    return sortedStudents.slice(0, limit);
}

// Función para obtener los estudiantes reprobados
function getFailingStudents() {
    // Filtramos y retornamos los estudiantes cuya nota es menor a 60
    return Students.filter(student => student.note < 60);
}

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    getTopStudents,
    getFailingStudents, // Añadir esta línea para exportar la nueva función
};