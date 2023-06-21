use simplejwt; 

var cines = [
  {
    nombre: "Cineplex Paradise",
    calle: "Avenida Central",
    numero: "123",
    telefono: "555-1234",
  },
  {
    nombre: "Cinemark Metropolis",
    calle: "Calle Principal",
    numero: "456",
    telefono: "555-5678",
  },
  {
    nombre: "Cinema City Plaza",
    calle: "Calle del Sol",
    numero: "789",
    telefono: "555-9012",
  },
  {
    nombre: "Starlight Cinemas",
    calle: "Avenida Libertad",
    numero: "321",
    telefono: "555-3456",
  },
  {
    nombre: "Majestic Theatre",
    calle: "Calle del Centro",
    numero: "654",
    telefono: "555-7890",
  },
];

db.cines.insertMany(cines);

var peliculas = [
  {
    titulo: "El Despertar",
    director: "Alejandro González",
    clasificacion: "PG-13",
    protagonista: "Sofía Gutiérrez",
    genero: "Drama",
  },
  {
    titulo: "La Herencia Perdida",
    director: "Carlos Martínez",
    clasificacion: "R",
    protagonista: "Juan López",
    genero: "Suspenso",
  },
  {
    titulo: "El Secreto de la Montaña",
    director: "María Sánchez",
    clasificacion: "PG",
    protagonista: "Ana Rodríguez",
    genero: "Romance",
  },
  {
    titulo: "La Última Aventura",
    director: "Roberto Fernández",
    clasificacion: "PG",
    protagonista: "Pedro Ramírez",
    genero: "Acción",
  },
  {
    titulo: "El Laberinto de los Sueños",
    director: "Laura Medina",
    clasificacion: "PG-13",
    protagonista: "Carolina Vargas",
    genero: "Fantasía",
  },
  // Agrega más películas según tus necesidades...
];

db.peliculas.insertMany(peliculas);

