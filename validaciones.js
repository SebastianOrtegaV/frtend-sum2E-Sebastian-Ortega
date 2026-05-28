// Objeto de médicos por especialidad
const medicosPorEspecialidad = {
  "clinica": ["Dr. Gomez, Carlos", "Dra. Lopez, Maria"],
  "cardiologia": ["Dr. Perez, Juan", "Dra. Torres, Ana"],
  "pediatria": ["Dra. Diaz, Laura", "Dr. Soto, Pablo"],
  "ginecologia": ["Dra. Romero, Valeria", "Dra. Castro, Elena"],
  "traumatologia": ["Dr. Ramos, Sergio", "Dr. Herrera, Diego"],
  "neurologia": ["Dr. Molina, Andres", "Dra. Vargas, Cecilia"]
};

// Hacer accesible en el scope global para uso desde otros scripts
window.medicosPorEspecialidad = medicosPorEspecialidad;
