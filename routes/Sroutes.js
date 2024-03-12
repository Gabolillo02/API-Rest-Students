const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers");

// Ruta para obtener todos los estudiantes
router.get('/', (req, res) => {
    res.json(studentController.getAllStudents());
});

// Ruta para crear un nuevo estudiante
router.post('/', (req, res) => {
    const { name, note } = req.body;
    if (!name || note === undefined) {
        return res.status(400).json({ message: 'Falta información del estudiante.' });
    }
    const newStudent = studentController.createStudent(name, note);
    return res.status(201).json(newStudent);
});

// Ruta para actualizar un estudiante
router.put('/:id', (req, res) => {
    const { name, note } = req.body;
    const { id } = req.params;
    const updatedStudent = studentController.updateStudent(parseInt(id), name, note);
    if (updatedStudent) {
        return res.status(200).json(updatedStudent);
    }
    return res.status(404).json({ message: 'Estudiante no encontrado.' });
});

// Ruta para eliminar un estudiante
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deletedStudent = studentController.deleteStudent(parseInt(id));
    if (deletedStudent) {
        return res.status(200).json(deletedStudent);
    }
    return res.status(404).json({ message: 'Estudiante no encontrado.' });
});

// Nuevo endpoint para obtener los mejores promedios
router.get('/top', (req, res) => {
    // Puedes cambiar el límite por defecto aquí si lo deseas
    const limit = req.query.limit ? parseInt(req.query.limit) : 5;
    const topStudents = studentController.getTopStudents(limit);
    res.json(topStudents);
});

// Nuevo endpoint para obtener los estudiantes reprobados
router.get('/failing', (req, res) => {
    const failingStudents = studentController.getFailingStudents();
    res.json(failingStudents);
});

module.exports = router;

module.exports = router;