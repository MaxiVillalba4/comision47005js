prendas = [
  { id: 1, name: "buzo", price: 12000 },
  { id: 2, name: "jean", price: 10000 },
  { id: 3, name: "remera", price: 4000 },
  { id: 4, name: "short", price: 5000 },
  { id: 5, name: "gorra", price: 1500 },
];


const mostrarPrendas = () => {
  console.log("Catálogo de Ropa:");

  prendas.forEach(prenda => {
    console.log(`
      ID: ${prenda.id}, 
      Nombre: ${prenda.name}, 
      Precio: $${prenda.price}
      `);
  });
};

  const prendaPorId = id => prendas.find(prenda => prenda.id === id);

  const filtradoPrecio = maxPrice => prendas.filter(prenda => prenda.price <= maxPrice);


let opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar Ropa por codigo \n2. Ver catálogo\n3. Buscar producto por nombre\n4. Filtrar por precio maximo\n5. Salir"));

while (opcion !== 5) {
  switch (opcion) {

    case 1:
      let respuesta = "si";
      let contador = 0;
      while (respuesta === "si") {
        const prendaId = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
        const prenda = prendaPorId(prendaId);
      
        if (prenda) {
          alert(`Ha comprado ${prenda.name} por $${prenda.price}. ¡Gracias por su compra!`);
          contador = contador + prenda.price;
          respuesta = prompt("¿Quiere seguir comprando? si/no");
        } else {
          alert("No se encontró la prenda seleccionada.");
        }
      }
      alert(`Total a pagar: $${contador}`);
      break;

    case 2:
      let catalogo = "si"
      alert (" buzo $12000 id=1 \ jean $10000 id=2 \ remera $4000 id=3 \ short $5000 id=4 \ gorra $1500 id=5 ");
      if (catalogo === "si")
        catalogo = prompt ("¿Quiere seguir comprando? si/no");
        else (catalogo === "no")
        break;

    case 3:
      const nombre = prompt("Ingrese el nombre del producto que busca");
      const prendaEncontrada = prendas.find(prenda => prenda.name === nombre);
      if (prendaEncontrada) {
          alert (`Se encontro el producto ${nombre} en el catálogo.`);
      } else {
        alert(`El producto ${nombre} no se encontró en el catálogo.`);
      }
      break;

      case 4:
          const maxPrice = parseFloat(prompt("Ingrese el precio máximo para el filtrado:"));
          const prendasFiltradas = filtradoPrecio(maxPrice);
    
          if (prendasFiltradas.length > 0) {
            console.log("Prendas filtradas por precio:");
            prendasFiltradas.forEach(Prenda => {
              console.log(`
                ID: ${Prenda.id},
                Nombre: ${Prenda.name},
                Precio: $${Prenda.price}
              `);
          });
          alert ("Los productos menores a ese precio se mostraron por consola");
          } else {
            alert(`No se encontraron prendas dentro del rango de precio $${maxPrice}.`);
          }
          break;

    default:
      alert("Opción no válida. Por favor, ingrese una opción válida.");
      break;
  }

  opcion = parseInt(prompt("Ingrese una opción:\n1. Comprar Ropa por codigo ID\n2. Ver catálogo\n3. Buscar producto por nombre\n4. Filtrar por precio maximo\n5. Salir"));
}