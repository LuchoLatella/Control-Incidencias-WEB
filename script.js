function cargarArchivo() {
    const input = document.getElementById('fileInput');
    const file = input.files[0];

    if (file) {
        // Aquí puedes cargar el archivo en el frontend o enviar al backend para procesar
        console.log('Archivo cargado:', file.name);
    }
}

function limpiarDatos() {
    // Elimina la primera fila y columnas específicas
    console.log("Limpieza de datos: Eliminando primera fila y columnas específicas");
    // Lógica para eliminar la primera fila y las columnas: ID Tipo Básico, ID Prioridad, Inicio, Fin, Fecha inicio corrección, Fin corrección
    // Aquí se podría hacer una llamada a backend o un procesamiento directo si estás utilizando un framework como Pandas en Python
}

function eliminarUsuarios() {
    // Eliminar usuarios específicos de la columna "Nombre Usuario aplicación"
    console.log("Eliminando usuarios especificados...");
    // Lista de usuarios a eliminar
    const usuariosAEliminar = [
        "AGUILAR, HUGO EMILIO",
        "ALBORNOZ, CAROLINA ELIZABETH",
        // Añadir el resto de nombres
    ];
    // Procesamiento para eliminar las filas con estos nombres
}

function generarTablaDinamica() {
    // Crear una tabla dinámica
    console.log("Generando tabla dinámica...");
    // Filtrar y agrupar datos en una nueva hoja
}

function guardarComo() {
    // Guardar el archivo en diferentes formatos
    console.log("Guardando archivo en formato seleccionado...");
    // Logica para guardar el archivo, como CSV o versiones de Excel
}
