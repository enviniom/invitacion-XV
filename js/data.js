// Datos principales del evento
const eventData = {
    quinceañera: {
        nombre: "Karla",
        apellidos: "Silvana"
    },
    padres: {
        madre: "Blanca Valero",
        padre: "Jhon Colmenares"
    },
    evento: {
        fecha: "2025-10-18T19:00:00", // Formato ISO: YYYY-MM-DDTHH:mm:ss
        lugar: "Salón de Eventos \"Dannkarlo\"",
        direccion: "Cl. 19 #11-05, Cúcuta, Norte de Santander",
        coordenadas: {
            lat: 7.885717129347547,
            lng: -72.47809064266407
        }
    },
    contacto: {
        whatsapp: "573183752777", // Formato internacional
        mensaje: "¡Hola! Confirmo mi asistencia a los XV años de Karla"
    },
    itinerario: [
        {
            hora: "7:00 PM",
            actividad: "Recepción",
            descripcion: "Bienvenida a los invitados",
            icono: "🎊"
        },
        {
            hora: "8:00 PM",
            actividad: "Cena",
            descripcion: "Plato fuerte",
            icono: "🍽️"
        },
        {
            hora: "9:00 PM",
            actividad: "Vals",
            descripcion: "Ceremonia y baile de XV años",
            icono: "🥂"
        },
        {
            hora: "9:30 PM",
            actividad: "Cumpleaños",
            descripcion: "Canto de Cumpleaños y partida de torta",
            icono: "👑"
        },
        {
            hora: "10:00 PM",
            actividad: "Baile Sorpresa",
            descripcion: "Baile preparado de la quinceañera con sus amigos",
            icono: "💃"
        },
        {
            hora: "11:00 PM",
            actividad: "Hora Loca",
            descripcion: "Fiesta y diversión",
            icono: "🎵"
        },
        {
            hora: "2:00 AM",
            actividad: "Cierre",
            descripcion: "Despedida",
            icono: "🌙"
        }
    ]
};

// Lista de invitados
const invitados = [
    {
        uuid: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
        nombre: "Stephanie Melendez",
        cantidadInvitados: 1
    },
    {
        uuid: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
        nombre: "Ana Florez",
        cantidadInvitados: 1
    },
    {
        uuid: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
        nombre: "Fabiana Melo",
        cantidadInvitados: 1
    },
    {
        uuid: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
        nombre: "Isabella Cristo",
        cantidadInvitados: 1
    },
    {
        uuid: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
        nombre: "Valery Barbosa",
        cantidadInvitados: 1
    },
    {
        uuid: "f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c",
        nombre: "Danna Molina",
        cantidadInvitados: 1
    },
    {
        uuid: "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d",
        nombre: "Ana Rodríguez",
        cantidadInvitados: 1
    },
    {
        uuid: "b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e",
        nombre: "Sofía Soto",
        cantidadInvitados: 1
    },
    {
        uuid: "c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f",
        nombre: "Ashley",
        cantidadInvitados: 1
    },
    {
        uuid: "d0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
        nombre: "Douglas y Mia Toscano",
        cantidadInvitados: 2
    },
    {
        uuid: "3c1c5d4e-bc97-4431-89f9-00919555a4b1",
        nombre: "Anyelina Rangel",
        cantidadInvitados: 1
    },
    {
        uuid: "68ed9a30-221c-4a87-9b72-1c445204e6c5",
        nombre: "Reishel",
        cantidadInvitados: 1
    },
    {
        uuid: "ea4abb8e-0272-43f3-9005-727349133715",
        nombre: "Gabriella Jácome",
        cantidadInvitados: 1
    },
    {
        uuid: "5de66dd2-3c9b-4f03-bc40-7c757aac30b2",
        nombre: "Valerie Álvarez",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Hanna Escudero ",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Stephanny Arévalo",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Isabella Peñaranda",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Soffi",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Gabriela",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Nicolás",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Keiner",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Valentina Fonseca",
        cantidadInvitados: 2
    },
    {
        uuid: "",
        nombre: "Elitza Ramírez",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Karen Tarazona",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Camila Guerrero",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Paola Acuña",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Angie Rodríguez",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Lesli Anyelith",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Laura Alvarez",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Miguel Angel",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Annie Sandoval",
        cantidadInvitados: 2
    },
    {
        uuid: "",
        nombre: "Valentina Florez",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Eliana Archila",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Joshua",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "CamiUchis",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Daniel Rudess",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Karen Quiroga",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Sarah Espinoza",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Carmen Peñaloza",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Gabriel Valero",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Alejandro Valero",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Marcela Valero",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Myriam Rodríguez",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Daniel Colmenares",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Familia Lizcano Colmenares",
        cantidadInvitados: 3
    },
    {
        uuid: "",
        nombre: "Familia Cuberos Mendoza",
        cantidadInvitados: 4
    },
    {
        uuid: "",
        nombre: "Familia Peñaloza Torres",
        cantidadInvitados: 4
    },
    {
        uuid: "",
        nombre: "Familia Jácome Quintero",
        cantidadInvitados: 3
    },
    {
        uuid: "",
        nombre: "Johanna Quintero",
        cantidadInvitados: 3
    },
    {
        uuid: "",
        nombre: "Familia Rosales Quintero",
        cantidadInvitados: 4
    },
    {
        uuid: "",
        nombre: "Mariela Rodríguez",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Familia Romero Pérez",
        cantidadInvitados: 4
    },
    {
        uuid: "",
        nombre: "Familia Sanchez Peñaloza",
        cantidadInvitados: 3
    },
    {
        uuid: "",
        nombre: "Sonia Peñaloza",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Familia Peñaloza Güiza",
        cantidadInvitados: 2
    },
    {
        uuid: "",
        nombre: "Familia Durán Peñaloza",
        cantidadInvitados: 4
    },
    {
        uuid: "",
        nombre: "Isaías Peñaloza",
        cantidadInvitados: 1
    },
    {
        uuid: "",
        nombre: "Gladys Peñaloza",
        cantidadInvitados: 2
    },
    {
        uuid: "",
        nombre: "Familia García Saez",
        cantidadInvitados: 3
    }
];

// Función para obtener invitado por UUID
function getInvitadoByUUID(uuid) {
    return invitados.find(inv => inv.uuid === uuid);
}

// Función para obtener UUID de la URL
function getUUIDFromURL() {
    const pathParts = window.location.pathname.split('/');
    const lastPart = pathParts[pathParts.length - 1];
    
    // Si termina en .html, quitarlo
    const uuid = lastPart.replace('.html', '');
    
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid) ? uuid : null;
}
