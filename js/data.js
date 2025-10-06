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
        uuid: "6b9e0e1e-60b5-4f56-8795-fb70752d2f91",
        nombre: "Hanna Escudero ",
        cantidadInvitados: 1
    },
    {
        uuid: "f463b9f4-965a-4a92-a4a2-9e13dbbd9de7",
        nombre: "Stephanny Arévalo",
        cantidadInvitados: 1
    },
    {
        uuid: "7a1d3f82-e9b4-4c2a-8f6e-3d5b9c0a1e2f",
        nombre: "Isabella Peñaranda",
        cantidadInvitados: 1
    },
    {
        uuid: "8b2e4a93-f0c5-4d3b-9a7f-4e6c0d1b2f3a",
        nombre: "Soffi",
        cantidadInvitados: 1
    },
    {
        uuid: "9c3f5b04-a1d6-4e4c-0b8a-5f7d1e2c3a4b",
        nombre: "Gabriela",
        cantidadInvitados: 1
    },
    {
        uuid: "0d4a6c15-b2e7-4f5d-1c9b-6a8e2f3d4b5c",
        nombre: "Nicolás",
        cantidadInvitados: 1
    },
    {
        uuid: "1e5b7d26-c3f8-4a6e-2d0c-7b9f3a4e5c6d",
        nombre: "Keiner",
        cantidadInvitados: 1
    },
    {
        uuid: "2f6c8e37-d4a9-4b7f-3e1d-8c0a4b5f6d7e",
        nombre: "Valentina Fonseca",
        cantidadInvitados: 2
    },
    {
        uuid: "3a7d9f48-e5b0-4c8a-4f2e-9d1b5c6a7e8f",
        nombre: "Elitza Ramírez",
        cantidadInvitados: 1
    },
    {
        uuid: "4b8e0a59-f6c1-4d9b-5a3f-0e2c6d7b8f9a",
        nombre: "Karen Tarazona",
        cantidadInvitados: 1
    },
    {
        uuid: "5c9f1b60-a7d2-4e0c-6b4a-1f3d7e8c9a0b",
        nombre: "Camila Guerrero",
        cantidadInvitados: 1
    },
    {
        uuid: "6d0a2c71-b8e3-4f1d-7c5b-2a4e8f9d0b1c",
        nombre: "Paola Acuña",
        cantidadInvitados: 1
    },
    {
        uuid: "7e1b3d82-c9f4-4a2e-8d6c-3b5f9a0e1c2d",
        nombre: "Angie Rodríguez",
        cantidadInvitados: 1
    },
    {
        uuid: "8f2c4e93-d0a5-4b3f-9e7d-4c6a0b1f2d3e",
        nombre: "Lesli Anyelith",
        cantidadInvitados: 1
    },
    {
        uuid: "9a3d5f04-e1b6-4c4a-0f8e-5d7b1c2a3e4f",
        nombre: "Laura Alvarez",
        cantidadInvitados: 1
    },
    {
        uuid: "0b4e6a15-f2c7-4d5b-1a9f-6e8c2d3b4f5a",
        nombre: "Miguel Angel",
        cantidadInvitados: 1
    },
    {
        uuid: "1c5f7b26-a3d8-4e6c-2b0a-7f9d3e4c5a6b",
        nombre: "Annie Sandoval",
        cantidadInvitados: 2
    },
    {
        uuid: "2d6a8c37-b4e9-4f7d-3c1b-8a0e4f5d6b7c",
        nombre: "Valentina Florez",
        cantidadInvitados: 1
    },
    {
        uuid: "3e7b9d48-c5f0-4a8e-4d2c-9b1f5a6e7c8d",
        nombre: "Eliana Archila",
        cantidadInvitados: 1
    },
    {
        uuid: "4f8c0e59-d6a1-4b9f-5e3d-0c2a6b7f8d9e",
        nombre: "Joshua",
        cantidadInvitados: 1
    },
    {
        uuid: "5a9d1f60-e7b2-4c0a-6f4e-1d3b7c8a9e0f",
        nombre: "CamiUchis",
        cantidadInvitados: 1
    },
    {
        uuid: "6b0e2a71-f8c3-4d1b-7a5f-2e4c8d9b0f1a",
        nombre: "Daniel Rudess",
        cantidadInvitados: 1
    },
    {
        uuid: "7c1f3b82-a9d4-4e2c-8b6a-3f5d9e0c1a2b",
        nombre: "Karen Quiroga",
        cantidadInvitados: 1
    },
    {
        uuid: "8d2a4c93-b0e5-4f3d-9c7b-4a6e0f1d2b3c",
        nombre: "Sarah Espinoza",
        cantidadInvitados: 1
    },
    {
        uuid: "9e3b5d04-c1f6-4a4e-0d8c-5b7f1a2e3c4d",
        nombre: "Carmen Peñaloza",
        cantidadInvitados: 1
    },
    {
        uuid: "0f4c6e15-d2a7-4b5f-1e9d-6c8a2b3f4d5e",
        nombre: "Gabriel Valero",
        cantidadInvitados: 1
    },
    {
        uuid: "1a5d7f26-e3b8-4c6a-2f0e-7d9b3c4a5e6f",
        nombre: "Alejandro Valero",
        cantidadInvitados: 1
    },
    {
        uuid: "2b6e8a37-f4c9-4d7b-3a1f-8e0c4d5b6f7a",
        nombre: "Marcela Valero",
        cantidadInvitados: 1
    },
    {
        uuid: "3c7f9b48-a5d0-4e8c-4b2a-9f1d5e6c7a8b",
        nombre: "Myriam Rodríguez",
        cantidadInvitados: 1
    },
    {
        uuid: "4d8a0c59-b6e1-4f9d-5c3b-0a2e6f7d8b9c",
        nombre: "Daniel Colmenares",
        cantidadInvitados: 1
    },
    {
        uuid: "5e9b1d60-c7f2-4a0e-6d4c-1b3f7a8e9c0d",
        nombre: "Familia Lizcano Colmenares",
        cantidadInvitados: 3
    },
    {
        uuid: "6f0c2e71-d8a3-4b1f-7e5d-2c4a8b9f0d1e",
        nombre: "Familia Cuberos Mendoza",
        cantidadInvitados: 4
    },
    {
        uuid: "a0b1c2d3-e4f5-4a6b-7c8d-9e0f1a2b3c4d",
        nombre: "Familia Peñaloza Torres",
        cantidadInvitados: 4
    },
    {
        uuid: "b1c2d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e",
        nombre: "Familia Jácome Quintero",
        cantidadInvitados: 3
    },
    {
        uuid: "c2d3e4f5-a6b7-4c8d-9e0f-1a2b3c4d5e6f",
        nombre: "Johanna Quintero",
        cantidadInvitados: 3
    },
    {
        uuid: "d3e4f5a6-b7c8-4d9e-0f1a-2b3c4d5e6f7a",
        nombre: "Familia Rosales Quintero",
        cantidadInvitados: 4
    },
    {
        uuid: "e4f5a6b7-c8d9-4e0f-1a2b-3c4d5e6f7a8b",
        nombre: "Mariela Rodríguez",
        cantidadInvitados: 1
    },
    {
        uuid: "f5a6b7c8-d9e0-4f1a-2b3c-4d5e6f7a8b9c",
        nombre: "Familia Romero Pérez",
        cantidadInvitados: 4
    },
    {
        uuid: "a6b7c8d9-e0f1-4a2b-3c4d-5e6f7a8b9c0d",
        nombre: "Familia Sanchez Peñaloza",
        cantidadInvitados: 3
    },
    {
        uuid: "b7c8d9e0-f1a2-4b3c-4d5e-6f7a8b9c0d1e",
        nombre: "Sonia Peñaloza",
        cantidadInvitados: 1
    },
    {
        uuid: "c8d9e0f1-a2b3-4c4d-5e6f-7a8b9c0d1e2f",
        nombre: "Familia Peñaloza Güiza",
        cantidadInvitados: 2
    },
    {
        uuid: "d9e0f1a2-b3c4-4d5e-6f7a-8b9c0d1e2f3a",
        nombre: "Familia Durán Peñaloza",
        cantidadInvitados: 4
    },
    {
        uuid: "e0f1a2b3-c4d5-4e6f-7a8b-9c0d1e2f3a4b",
        nombre: "Isaías Peñaloza",
        cantidadInvitados: 1
    },
    {
        uuid: "f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c",
        nombre: "Gladys Peñaloza",
        cantidadInvitados: 2
    },
    {
        uuid: "a2b3c4d5-e6f7-4a8b-9c0d-1e2f3a4b5c6d",
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
