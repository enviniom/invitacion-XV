# Invitación de XV Años - Shivi

Invitación interactiva y responsiva para la celebración de XV años con diseño inspirado en hadas, mariposas y flores.

## 🌟 Características

- ✨ **Diseño Mobile First**: Optimizado para dispositivos móviles
- 🦋 **Animaciones**: Mariposas, flores y destellos flotantes
- 📱 **View Transitions API**: Transiciones suaves entre páginas
- ⏰ **Contador regresivo**: Tiempo restante hasta el evento en tiempo real
- 📍 **Integración con Google Maps**: Ubicación y direcciones
- 📅 **Añadir a Calendario**: Botón para agregar el evento a Google Calendar
- 💬 **Confirmación por WhatsApp**: Enlace directo para confirmar asistencia
- 🎨 **Glassmorphism**: Efectos de vidrio modernos
- 👗 **Código de vestimenta**: Con paleta de colores sugeridos
- 📋 **Itinerario completo**: Timeline con todas las actividades
- 🎯 **Invitaciones personalizadas**: Cada invitado tiene su propia URL

## 📁 Estructura del Proyecto

```
inv4/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS con animaciones
├── app.js             # Lógica JavaScript
├── data.js            # Datos del evento e invitados
├── generate.js        # Script para generar páginas de invitados
└── README.md          # Este archivo
```

## 🚀 Instalación

### Opción 1: Servidor Local Simple (Python)

```bash
# Con Python 3
cd /home/enviniom/shivi/inv4
python3 -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000
```

Luego abre: `http://localhost:8000`

### Opción 2: Nginx (Producción)

1. Copia todos los archivos al directorio de Nginx:

```bash
sudo cp -r /home/enviniom/shivi/inv4/* /var/www/html/invitacion/
```

2. Configura Nginx (opcional, si necesitas configuración personalizada):

```nginx
server {
    listen 80;
    server_name tudominio.com;
    root /var/www/html/invitacion;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Habilitar compresión
    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

3. Reinicia Nginx:

```bash
sudo systemctl restart nginx
```

### Opción 3: Node.js (Desarrollo)

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar servidor
cd /home/enviniom/shivi/inv4
http-server -p 8000
```

## 🎯 Generar Páginas de Invitados

Para crear páginas individuales para cada invitado con su UUID:

```bash
# Ejecutar el script generador
node generate.js
```

Este script creará archivos HTML individuales como:
- `a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d.html`
- `b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e.html`
- etc.

Cada archivo mostrará la información personalizada del invitado.

### URLs Personalizadas

Cada invitado tendrá una URL única:
- `https://tudominio.com/a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d.html`
- `https://tudominio.com/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e.html`

## ⚙️ Configuración

### Editar Datos del Evento

Abre `data.js` y modifica:

```javascript
const eventData = {
    quinceañera: {
        nombre: "Shivi",
        apellidos: "González Rodríguez"
    },
    padres: {
        madre: "María González",
        padre: "José Rodríguez"
    },
    evento: {
        fecha: "2025-03-15T19:00:00", // Formato: YYYY-MM-DDTHH:mm:ss
        lugar: "Salón de Eventos \"Jardín Encantado\"",
        direccion: "Av. Principal #123, Colonia Centro, Ciudad",
        coordenadas: {
            lat: 19.432608,  // Latitud
            lng: -99.133209  // Longitud
        }
    },
    contacto: {
        whatsapp: "5212221234567", // Número en formato internacional
        mensaje: "¡Hola! Confirmo mi asistencia a los XV años de Shivi"
    },
    // ... itinerario
};
```

### Agregar/Editar Invitados

En `data.js`, modifica el array `invitados`:

```javascript
const invitados = [
    {
        uuid: "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
        nombre: "Familia García",
        cantidadInvitados: 4
    },
    // ... más invitados
];
```

### Generar UUIDs Nuevos

Puedes usar herramientas online como:
- https://www.uuidgenerator.net/
- O con Node.js: `node -e "console.log(require('crypto').randomUUID())"`

### Cambiar Coordenadas del Mapa

1. Ve a Google Maps
2. Busca tu ubicación
3. Haz clic derecho > "¿Qué hay aquí?"
4. Copia las coordenadas (lat, lng)
5. Pégalas en `data.js`

## 🎨 Personalización de Estilos

### Cambiar Colores

En `styles.css`, modifica las variables CSS:

```css
:root {
    --color-primary: #4FC3F7;      /* Color principal */
    --color-primary-light: #81D4FA; /* Color claro */
    --color-primary-dark: #29B6F6;  /* Color oscuro */
    --color-secondary: #E1BEE7;     /* Color secundario */
    --color-accent: #F48FB1;        /* Color de acento */
}
```

### Cambiar Fuentes

Las fuentes actuales son:
- `Great Vibes` (cursiva elegante)
- `Playfair Display` (títulos)
- `Montserrat` (texto general)

Puedes cambiarlas en el `<head>` de `index.html`.

## 📱 Funcionalidades

### Contador Regresivo
Se actualiza automáticamente cada segundo mostrando días, horas, minutos y segundos hasta el evento.

### Añadir a Calendario
Genera un enlace para Google Calendar con todos los detalles del evento.

### Google Maps
- Mapa embebido con la ubicación
- Botón para abrir en la app de Google Maps

### Confirmación por WhatsApp
Envía un mensaje predefinido con el nombre del invitado y cantidad de personas.

### Animaciones
- Mariposas flotantes
- Flores que se balancean
- Destellos brillantes
- Efectos parallax al hacer scroll
- Transiciones suaves entre secciones

## 🌐 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (iOS 13+)
- ✅ Opera
- ✅ Navegadores móviles

### View Transitions API
Si el navegador no soporta View Transitions, se usa un fallback automático.

## 📊 SEO y Performance

### Optimizaciones incluidas:
- Mobile First Design
- Lazy loading de imágenes
- CSS optimizado
- Animaciones con GPU
- Compresión recomendada (gzip)

## 🔧 Troubleshooting

### El mapa no se muestra
- Verifica las coordenadas en `data.js`
- Verifica la conexión a internet
- Algunos navegadores bloquean iframes

### Las animaciones no funcionan
- Verifica que JavaScript esté habilitado
- Algunos usuarios pueden tener "prefers-reduced-motion" activado

### El contador no actualiza
- Verifica el formato de fecha en `data.js` (YYYY-MM-DDTHH:mm:ss)
- Verifica que la fecha sea futura

## 📝 Licencia

Proyecto personal para evento privado.

## 👤 Contacto

Para soporte o preguntas sobre la invitación, contacta al organizador del evento.

---

**¡Gracias por celebrar con nosotros! 🎉✨🦋**
