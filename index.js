const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/Sroutes");

// Crear la instancia de la aplicación Express
const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Usar rutas
app.use("/students", studentRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});