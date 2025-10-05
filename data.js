// Datos principales del evento
const eventData = {
    quinceañera: {
        nombre: "Karla",
        apellidos: "Silvana"
    },
    padres: {
        madre: "Blanca Yulieth Valero",
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
        nombre: "Familia García",
        cantidadInvitados: 4
    },
    {
        uuid: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
        nombre: "Juan Pérez y Familia",
        cantidadInvitados: 3
    },
    {
        uuid: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
        nombre: "Ana Martínez",
        cantidadInvitados: 2
    },
    {
        uuid: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
        nombre: "Carlos López y Esposa",
        cantidadInvitados: 2
    },
    {
        uuid: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
        nombre: "Familia Hernández",
        cantidadInvitados: 5
    },
    {
        uuid: "f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c",
        nombre: "Laura Sánchez",
        cantidadInvitados: 1
    },
    {
        uuid: "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d",
        nombre: "Miguel Torres y Familia",
        cantidadInvitados: 4
    },
    {
        uuid: "b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e",
        nombre: "Rosa Jiménez",
        cantidadInvitados: 2
    },
    {
        uuid: "c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f",
        nombre: "Familia Morales",
        cantidadInvitados: 6
    },
    {
        uuid: "d0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
        nombre: "Patricia Vargas",
        cantidadInvitados: 1
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
