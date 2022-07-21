class Empleado {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = libros;
      this.mascotas = mascotas;
      this.nombresADevolver = [];
    }
  
    getFullName() {
      return console.log(
        `El empleado se llama ${this.nombre} y se apellida ${this.apellido}`
      );
    }
    addMascota(nombreMascota) {
      this.mascotas.push(nombreMascota);
    }
    countMascotas() {
      return console.log(`La cantidad de mascotas es ${this.mascotas.length}`);
    }
    addBook(libro) {
      this.libros.push(libro);
    }
    getBookNames() {
      this.libros.forEach((libro) => {
        this.nombresADevolver.push(libro.nombre);
      });
  
      console.log(this.nombresADevolver);
    }
  }
  
  let empleadoP = new Empleado(
    'Raul',
    'Ahumada',
    [
      { nombre: 'Cien años de soledad', Autor: 'Garcia Marquez' },
      { nombre: 'Cien años de soledad 2', Autor: 'Garcia Marquez 2' },
    ],
    ['Perro', 'Tortuga']
  );
  
  empleadoP.getFullName();
  
  empleadoP.addMascota('Gato');
  
  empleadoP.countMascotas();
  
  empleadoP.addBook({ nombre: 'CoderHouse Tutoriales', Autor: 'Raúl Ahumada' });
  
  empleadoP.getBookNames();
  