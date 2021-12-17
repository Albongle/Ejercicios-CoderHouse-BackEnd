/*
    Alejandro Bongioanni
    1) Declarar una clase Usuario
    2) Hacer que Usuario cuente con los siguientes atributos:
    nombre: String
    apellido: String
    libros: Object[]
    mascotas: String[]
    Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.
    3) Hacer que Usuario cuente con los siguientes métodos:
    getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
    addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
    countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
    addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
    getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
    4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

*/
class Usuario {
  #nombre;
  #apellido;
  #libros;
  #mascotas;
  constructor(nombre, apellido, libros, mascotas) {
    this.#nombre = nombre || "Nombre no definido";
    this.#apellido = apellido || "Apellido no definido";
    this.#libros = libros || [];
    this.#mascotas = mascotas || [];
  }

  get Mascotas() {
    return this.#mascotas;
  }
  get Libros() {
    return this.#libros;
  }

  getFullName = () => `${this.#nombre}, ${this.#apellido}`;
  addMascota = (...mascota) => this.#mascotas.push(...mascota);
  countMascotas = () => this.#mascotas.length;
  addBook = (nombre, autor) =>
    this.#libros.push({
      nombre: nombre || "Nombre no definido",
      autor: autor || "Autor no definido",
    });
  getBookNames = () => this.#libros.length > 0 ? this.#libros.map(libro => libro.nombre) : "Sin Libros" ;
}

const usuarioA = new Usuario("Alejandro", "Bongioanni");
usuarioA.addMascota("Princesa", "Mike");
usuarioA.addMascota("Rosalinda");


console.log(`Nombre del usuario: ${usuarioA.getFullName()}`);
console.log(`Array de mascotas ${usuarioA.Mascotas}`);
console.log(`Cantidad de mascotas: ${usuarioA.countMascotas()}`);
console.log(`Libros no definidos: ${usuarioA.getBookNames()}`);
usuarioA.addBook("Libro1", "Autor1");
usuarioA.addBook("Libro2", "Autor2");
usuarioA.addBook("Libro3");
console.log(`Libros: ${usuarioA.getBookNames()}`);