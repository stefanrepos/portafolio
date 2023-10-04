document.getElementById("agregarFila").addEventListener("click", function () {
    // Obtener una referencia a la tabla y su cuerpo
    var table = document.querySelector("table");
    var tbody = table.querySelector("tbody");
  
    // Crear una nueva fila y sus celdas
    var newRow = document.createElement("tr");
    var cells = Array.from({ length: 11 }, function () {
      return document.createElement("td");
    });
  
    // Puedes establecer los valores de las celdas aquí
    cells[0].textContent = "Nuevo Usuario";
    cells[1].textContent = "Nuevo Proyecto";
    cells[2].textContent = "Descripción del Nuevo Proyecto";
    // Y así sucesivamente...
  
    // Crear botones para la nueva fila
    var editButton = document.createElement("button");
    editButton.textContent = "Editar";
    editButton.className = "btn btn-primary btn-sm";
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "btn btn-danger btn-sm";
  
    cells[10].appendChild(editButton);
    cells[10].appendChild(deleteButton);
  
    // Agregar celdas a la fila
    cells.forEach(function (cell) {
      newRow.appendChild(cell);
    });
  
    // Agregar la nueva fila al cuerpo de la tabla
    tbody.appendChild(newRow);
  });
  
