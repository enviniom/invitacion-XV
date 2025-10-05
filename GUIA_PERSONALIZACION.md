# 🎉 Guía de Personalización - Invitación XV Años

Esta guía te ayudará a personalizar cada aspecto de la invitación.

## 📝 Tabla de Contenidos
1. [Datos Básicos del Evento](#datos-básicos-del-evento)
2. [Lista de Invitados](#lista-de-invitados)
3. [Personalización Visual](#personalización-visual)
4. [Itinerario](#itinerario)
5. [Mapas y Ubicación](#mapas-y-ubicación)
6. [WhatsApp y Contacto](#whatsapp-y-contacto)

---

## 📅 Datos Básicos del Evento

Edita el archivo `data.js`:

### Nombre de la Quinceañera
```javascript
quinceañera: {
    nombre: "Shivi",           // Nombre que aparece en el título
    apellidos: "González Rodríguez"  // Apellidos completos
}
```

### Nombres de los Padres
```javascript
padres: {
    madre: "María González",    // Nombre completo de la madre
    padre: "José Rodríguez"     // Nombre completo del padre
}
```

### Fecha y Hora del Evento
```javascript
evento: {
    fecha: "2025-03-15T19:00:00",  // Formato: YYYY-MM-DDTHH:mm:ss
    // Ejemplos:
    // "2025-03-15T19:00:00"  -> 15 de Marzo 2025, 7:00 PM
    // "2025-06-20T18:30:00"  -> 20 de Junio 2025, 6:30 PM
    // "2025-12-24T20:00:00"  -> 24 de Diciembre 2025, 8:00 PM
}
```

💡 **Tip**: La fecha debe estar en formato ISO 8601 para que el contador funcione correctamente.

### Lugar del Evento
```javascript
evento: {
    lugar: "Salón de Eventos \"Jardín Encantado\"",
    direccion: "Av. Principal #123, Colonia Centro, Ciudad"
}
```

---

## 👥 Lista de Invitados

### Agregar un Nuevo Invitado

1. **Generar un UUID único**:
   - Sitio web: https://www.uuidgenerator.net/
   - Terminal: `node -e "console.log(require('crypto').randomUUID())"`
   - Python: `python3 -c "import uuid; print(uuid.uuid4())"`

2. **Agregar al array de invitados**:
```javascript
{
    uuid: "NUEVO-UUID-AQUI",
    nombre: "Nombre del Invitado",
    cantidadInvitados: 3  // Número de personas
}
```

### Ejemplo Completo
```javascript
const invitados = [
    {
        uuid: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
        nombre: "Familia García",
        cantidadInvitados: 4
    },
    {
        uuid: "nuevo-uuid-generado-aqui",
        nombre: "María López y Familia",
        cantidadInvitados: 3
    }
];
```

### Tipos de Invitados Sugeridos
```javascript
// Familia completa
{ nombre: "Familia García", cantidadInvitados: 5 }

// Pareja
{ nombre: "Juan Pérez y Esposa", cantidadInvitados: 2 }

// Individual con acompañante
{ nombre: "Ana Martínez", cantidadInvitados: 2 }

// Individual
{ nombre: "Carlos López", cantidadInvitados: 1 }
```

---

## 🎨 Personalización Visual

### Cambiar Colores

Edita `styles.css` en la sección de variables:

```css
:root {
    /* Color principal (basado en el vestido) */
    --color-primary: #4FC3F7;      /* Azul aqua */
    --color-primary-light: #81D4FA; /* Azul claro */
    --color-primary-dark: #29B6F6;  /* Azul oscuro */
    
    /* Colores secundarios */
    --color-secondary: #E1BEE7;     /* Lila */
    --color-accent: #F48FB1;        /* Rosa */
    --color-gold: #FFD700;          /* Dorado */
}
```

#### Paletas de Colores Sugeridas

**Tema Aqua (Actual)**
```css
--color-primary: #4FC3F7;
--color-secondary: #E1BEE7;
--color-accent: #F48FB1;
```

**Tema Rosa**
```css
--color-primary: #F06292;
--color-secondary: #CE93D8;
--color-accent: #FFB74D;
```

**Tema Lavanda**
```css
--color-primary: #9C27B0;
--color-secondary: #BA68C8;
--color-accent: #FFE082;
```

**Tema Mint**
```css
--color-primary: #26A69A;
--color-secondary: #80CBC4;
--color-accent: #FFD54F;
```

### Cambiar Fuentes

En `index.html`, cambia el enlace de Google Fonts:

```html
<!-- Fuentes actuales -->
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

Fuentes sugeridas:
- **Títulos elegantes**: Great Vibes, Parisienne, Dancing Script, Allura
- **Subtítulos**: Playfair Display, Cormorant Garamond, Cinzel
- **Texto general**: Montserrat, Raleway, Poppins, Nunito

---

## 📋 Itinerario

Edita el itinerario en `data.js`:

```javascript
itinerario: [
    {
        hora: "7:00 PM",                    // Hora del evento
        actividad: "Recepción",             // Nombre de la actividad
        descripcion: "Bienvenida",          // Descripción breve
        icono: "🎊"                         // Emoji representativo
    },
    // ... más actividades
]
```

### Emojis Sugeridos por Actividad
- Recepción: 🎊 🎉 🎈
- Ceremonia: ⛪ 🙏 ✝️
- Coctel: 🥂 🍾 🍷
- Entrada: 👑 ✨ 💫
- Vals: 💃 🕺 🎵
- Cena: 🍽️ 🍴 🥘
- Fiesta: 🎵 🎶 🎤
- Pastel: 🎂 🧁 🍰
- Cierre: 🌙 ⭐ 🌟

### Ejemplo de Itinerario Completo
```javascript
itinerario: [
    {
        hora: "6:00 PM",
        actividad: "Misa",
        descripcion: "Ceremonia religiosa en la Parroquia",
        icono: "⛪"
    },
    {
        hora: "7:30 PM",
        actividad: "Recepción",
        descripcion: "Llegada al salón",
        icono: "🎊"
    },
    {
        hora: "8:00 PM",
        actividad: "Gran Entrada",
        descripcion: "Presentación de la quinceañera",
        icono: "👑"
    },
    {
        hora: "8:30 PM",
        actividad: "Vals",
        descripcion: "Baile con chambelanes",
        icono: "💃"
    },
    {
        hora: "9:00 PM",
        actividad: "Tiempo de Dios",
        descripcion: "Brindis y ceremonia especial",
        icono: "🙏"
    },
    {
        hora: "9:30 PM",
        actividad: "Cena",
        descripcion: "Servicio de alimentos",
        icono: "🍽️"
    },
    {
        hora: "10:30 PM",
        actividad: "Pastel",
        descripcion: "Corte del pastel",
        icono: "🎂"
    },
    {
        hora: "11:00 PM",
        actividad: "Baile",
        descripcion: "Fiesta hasta el amanecer",
        icono: "🎵"
    },
    {
        hora: "2:00 AM",
        actividad: "Cierre",
        descripcion: "Despedida",
        icono: "🌙"
    }
]
```

---

## 🗺️ Mapas y Ubicación

### Obtener Coordenadas

1. **Google Maps**:
   - Abre https://maps.google.com
   - Busca el lugar del evento
   - Haz clic derecho en el punto exacto
   - Selecciona "¿Qué hay aquí?"
   - Copia las coordenadas que aparecen

2. **Formato**:
   ```javascript
   coordenadas: {
       lat: 19.432608,   // Latitud
       lng: -99.133209   // Longitud
   }
   ```

### Ejemplo de Ubicaciones

```javascript
// Ciudad de México (Zócalo)
coordenadas: { lat: 19.432608, lng: -99.133209 }

// Guadalajara (Centro)
coordenadas: { lat: 20.676682, lng: -103.347292 }

// Monterrey (Macroplaza)
coordenadas: { lat: 25.669194, lng: -100.309349 }

// Cancún
coordenadas: { lat: 21.161908, lng: -86.851528 }
```

---

## 📱 WhatsApp y Contacto

### Configurar Número de WhatsApp

```javascript
contacto: {
    whatsapp: "5212221234567",  // Formato: [código país][código área][número]
    mensaje: "¡Hola! Confirmo mi asistencia a los XV años de Shivi"
}
```

### Formato de Números

**México**: `52` + código de área (2-3 dígitos) + número (7-8 dígitos)
```javascript
// Ejemplo CDMX: 52 55 12345678
whatsapp: "525512345678"

// Ejemplo Guadalajara: 52 33 12345678
whatsapp: "523312345678"

// Con código de área de 3 dígitos: 52 222 1234567
whatsapp: "522221234567"
```

**Otros países**:
```javascript
// USA: +1 (área) número
whatsapp: "14155551234"

// España: +34 número
whatsapp: "34612345678"

// Argentina: +54 9 área número
whatsapp: "5491123456789"
```

### Personalizar Mensaje
```javascript
// Mensaje simple
mensaje: "Confirmo asistencia a los XV años"

// Mensaje formal
mensaje: "Buenos días, confirmo mi asistencia al evento de XV años de [Nombre]"

// Mensaje con pregunta
mensaje: "Hola, quisiera confirmar mi asistencia y conocer más detalles del evento"
```

---

## 🎁 Mesa de Regalos (Opcional)

Si deseas agregar información de mesa de regalos, edita la sección en `index.html`:

```html
<div class="gift-options">
    <!-- Lluvia de sobres -->
    <div class="gift-option">
        <div class="gift-icon">💰</div>
        <div class="gift-label">Lluvia de Sobres</div>
    </div>
    
    <!-- Liverpool -->
    <div class="gift-option">
        <div class="gift-icon">🏬</div>
        <div class="gift-label">Liverpool</div>
        <div class="gift-details">Evento: 12345678</div>
    </div>
    
    <!-- Amazon -->
    <div class="gift-option">
        <div class="gift-icon">📦</div>
        <div class="gift-label">Amazon</div>
        <a href="URL_LISTA_AMAZON" class="gift-link">Ver lista</a>
    </div>
</div>
```

---

## 🚀 Después de Personalizar

### 1. Generar Páginas Individuales
```bash
node generate.js
```

### 2. Probar Localmente
```bash
python3 -m http.server 8000
```

### 3. Ver Vista Previa
Abre: http://localhost:8000/preview.html

### 4. Compartir URLs
Cada invitado recibirá su URL única:
```
https://tudominio.com/[uuid-del-invitado].html
```

---

## 💡 Consejos Finales

1. **Prueba en múltiples dispositivos**: Móvil, tablet, desktop
2. **Verifica fechas**: Asegúrate de que el contador funcione correctamente
3. **Comprueba el mapa**: Verifica que las coordenadas sean correctas
4. **Prueba WhatsApp**: Envía un mensaje de prueba
5. **Backup**: Guarda una copia de `data.js` antes de hacer cambios
6. **URLs cortas**: Considera usar un acortador de URLs para facilitar el envío

---

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio la imagen de fondo?**
R: Los fondos son gradientes. Puedes cambiarlos en `styles.css` en la sección `body`.

**P: ¿Puedo agregar más secciones?**
R: Sí, copia el HTML de una sección existente y modifícalo.

**P: ¿Funciona sin internet?**
R: Las fuentes de Google requieren internet, pero puedes descargarlas localmente.

**P: ¿Puedo cambiar los emojis?**
R: Sí, son caracteres Unicode estándar. Cópialos de emojipedia.org

**P: El mapa no funciona**
R: Verifica las coordenadas y tu conexión a internet.

---

## 📞 Soporte

Si tienes problemas, verifica:
1. ✅ Formato de fecha correcto
2. ✅ UUIDs únicos para cada invitado
3. ✅ Coordenadas válidas
4. ✅ Número de WhatsApp en formato internacional
5. ✅ Archivos en el directorio correcto

---

¡Disfruta tu evento! 🎉✨🦋
