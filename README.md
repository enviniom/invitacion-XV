# Invitación de XV Años - Karla

Invitación interactiva y responsiva para la celebración de XV años con diseño inspirado en hadas, mariposas y flores.

## 🌟 Características

- ✨ **Diseño Mobile First**: Optimizado para dispositivos móviles
- 🦋 **Animaciones**: Mariposas, flores y destellos flotantes
- 📱 **View Transitions API**: Transiciones suaves entre páginas
- ⏰ **Contador regresivo**: Tiempo restante hasta el evento en tiempo real
- 📍 **Integración con Google Maps**: Ubicación y direcciones del Salón Dannkarlo
- 📅 **Añadir a Calendario**: Botón para agregar el evento a Google Calendar
- 💬 **Confirmación por WhatsApp**: Enlace directo para confirmar asistencia
- 🎨 **Glassmorphism**: Efectos de vidrio modernos
- 👗 **Código de vestimenta**: Con paleta de colores sugeridos
- 📋 **Itinerario completo**: Timeline con todas las actividades del evento
- 🎯 **Invitaciones personalizadas**: Cada invitado tiene su propia URL única
- 🎵 **Música de fondo**: Reproducción automática de vals
- 🎨 **Galería de fotos**: Carrusel con imágenes de la quinceañera
- 📊 **Panel de preview**: Vista previa con estadísticas y reporte de invitados
- 🛠️ **Utilidades CLI**: Herramientas de línea de comandos para gestión de invitados

## 📁 Estructura del Proyecto

```
inv4/
├── index.html              # Página principal HTML (template)
├── preview.html            # Vista previa con estadísticas y reporte
├── generate.js             # Script para generar páginas de invitados
├── deploy.sh               # Script de despliegue
├── package.json            # Configuración de Node.js
├── nginx.conf              # Configuración de Nginx
├── README.md               # Este archivo
├── .gitignore              # Archivos ignorados por Git
│
├── css/
│   └── styles.css          # Estilos CSS con animaciones
│
├── js/
│   ├── app.js              # Lógica JavaScript principal
│   ├── data.js             # Datos del evento e invitados
│   └── utils.js            # Utilidades CLI para gestión
│
├── images/
│   ├── hero.jpeg           # Imagen principal de portada
│   ├── s1.jpeg             # Galería: Foto 1
│   ├── s2.jpeg             # Galería: Foto 2
│   ├── s3.jpeg             # Galería: Foto 3
│   ├── s4.jpeg             # Galería: Foto 4
│   └── s5.jpeg             # Galería: Foto 5
│
├── assets/
│   └── vals.mp3            # Música de fondo (vals)
│
├── mensajes-whatsapp.txt   # Mensajes generados para WhatsApp
├── urls-invitados.txt      # URLs de todas las invitaciones
│
└── [UUID].html             # Páginas individuales generadas (59 archivos)
```

## 🚀 Inicio Rápido

### 1. Generar Invitaciones

```bash
# Generar todas las páginas de invitados
node generate.js

# Esto creará:
# - 59 archivos HTML individuales
# - urls-invitados.txt
# - mensajes-whatsapp.txt
```

### 2. Iniciar Servidor

```bash
# Con Python 3 (recomendado)
python3 -m http.server 8000

# Con Node.js
npx http-server -p 8000
```

### 3. Acceder

- **Página principal:** http://localhost:8000/index.html
- **Vista previa:** http://localhost:8000/preview.html
- **Invitación ejemplo:** http://localhost:8000/a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d.html

## 🚀 Instalación

### Opción 1: Servidor Local Simple (Python)

```bash
# Navegar al proyecto
cd /home/enviniom/shivi/inv4

# Con Python 3
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

Este script automáticamente:
1. ✅ Lee los datos desde `js/data.js`
2. ✅ Genera archivos HTML individuales (59 invitaciones)
3. ✅ Crea `urls-invitados.txt` con todas las URLs
4. ✅ Crea `mensajes-whatsapp.txt` con mensajes personalizados

### Archivos generados:

**Páginas HTML individuales:**
- `a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d.html`
- `b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e.html`
- ... (59 archivos en total)

**Archivo de URLs** (`urls-invitados.txt`):
```
Stephanie Melendez (1 personas)
https://karla.playkru.com/a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d.html

Ana Florez (1 personas)
https://karla.playkru.com/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e.html
...
```

**Archivo de mensajes** (`mensajes-whatsapp.txt`):
```
══════ Stephanie Melendez ══════

🎉 ¡Hola Stephanie Melendez!

¡Tenemos el honor de invitarte a la celebración de los XV años de Karla! 🦋✨

📅 Fecha: sábado, 18 de octubre de 2025
⏰ Hora: 19:00
📍 Lugar: Salón de Eventos "Dannkarlo"

👥 Invitación para 1 persona

🔗 Tu invitación personalizada:
https://karla.playkru.com/a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d.html

¡Esperamos contar con tu presencia! 💕

Por favor confirma tu asistencia. ¡Gracias! 🙏
```

### URLs Personalizadas

Cada invitado tendrá una URL única:
- `https://karla.playkru.com/a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d.html`
- `https://karla.playkru.com/b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e.html`

## 🛠️ Utilidades CLI

El proyecto incluye un poderoso script de utilidades en `js/utils.js`:

```bash
# Ver estadísticas del evento
node js/utils.js stats

# Listar todos los invitados
node js/utils.js list

# Buscar un invitado específico
node js/utils.js search "nombre"

# Generar reporte completo
node js/utils.js report

# Exportar URLs
node js/utils.js urls

# Validar datos (UUIDs, fechas, etc.)
node js/utils.js validate

# Info para generar QR codes
node js/utils.js qr

# Exportar mensajes de WhatsApp
node js/utils.js whatsapp
```

### Ejemplos de uso:

**Ver estadísticas:**
```bash
node js/utils.js stats
```
Muestra: total de invitados, personas, distribución, días restantes

**Buscar invitado:**
```bash
node js/utils.js search "Garcia"
```
Encuentra todos los invitados con "Garcia" en el nombre

**Validar datos:**
```bash
node js/utils.js validate
```
Verifica: fechas, UUIDs únicos, coordenadas, WhatsApp, etc.

## 🎨 Vista Previa (preview.html)

Panel de administración visual con:

### 📊 Estadísticas del Evento
- Información de la quinceañera
- Fecha y lugar del evento
- Total de invitaciones y personas
- Distribución visual de invitados
- Contador de días restantes

### 📝 Reporte de Invitados
- Lista completa con scroll
- UUID de cada invitado
- Enlaces directos a invitaciones
- Resumen de totales

### 🎯 Características
- **Responsive**: Se adapta a móvil y escritorio
- **Vista en grid**: Instrucciones (2/3) + Página principal (1/3)
- **Tarjetas individuales**: Cada invitado con su información
- **Copiar URLs**: Botón para copiar enlace al portapapeles

**Acceso:**
```
http://localhost:8000/preview.html
```

## ⚙️ Configuración

### Editar Datos del Evento

Abre `js/data.js` y modifica:

```javascript
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
            lat: 7.885717129347547,  // Latitud (Salón Dannkarlo)
            lng: -72.47809064266407  // Longitud
        }
    },
    contacto: {
        whatsapp: "573183752777", // Número en formato internacional (Colombia)
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
```

### Agregar/Editar Invitados

En `js/data.js`, modifica el array `invitados`:

```javascript
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
        uuid: "d0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
        nombre: "Douglas y Mia Toscano",
        cantidadInvitados: 2
    },
    // ... más invitados (59 en total)
];
```

### Estadísticas Actuales

- **Total de invitaciones:** 59
- **Total de personas:** 83
- **Promedio por invitación:** 1.4 personas

### Distribución de invitados:
- 1 persona: 51 invitaciones (86.4%)
- 2 personas: 4 invitaciones (6.8%)
- 3 personas: 3 invitaciones (5.1%)
- 4 personas: 1 invitación (1.7%)

### Generar UUIDs Nuevos

Para nuevos invitados, genera UUIDs usando:

**Node.js (recomendado):**
```bash
node -e "console.log(require('crypto').randomUUID())"
```

**Online:**
- https://www.uuidgenerator.net/
- https://www.uuidtools.com/generate/v4

**Validar datos después de agregar invitados:**
```bash
node js/utils.js validate
```

### Cambiar Coordenadas del Mapa

**Ubicación actual:** Salón de Eventos "Dannkarlo", Cúcuta

Para cambiar la ubicación:

1. Ve a [Google Maps](https://maps.google.com)
2. Busca tu ubicación (ej: "Salón de Eventos Dannkarlo")
3. Haz clic derecho en el marcador > "¿Qué hay aquí?"
4. Copia las coordenadas que aparecen (lat, lng)
5. Pégalas en `js/data.js`:

```javascript
coordenadas: {
    lat: 7.885717129347547,   // ← Reemplaza con tu latitud
    lng: -72.47809064266407   // ← Reemplaza con tu longitud
}
```

### Agregar Música de Fondo

1. Coloca tu archivo de audio en `assets/` (formato MP3 recomendado)
2. El archivo actual es `assets/vals.mp3`
3. Para cambiar, renombra tu archivo o actualiza en `index.html`:

```html
<audio id="backgroundMusic" autoplay loop preload="auto">
    <source src="assets/tu-musica.mp3" type="audio/mpeg">
</audio>
```

### Agregar Imágenes a la Galería

1. Coloca tus imágenes en la carpeta `images/`
2. Nombres actuales: `s1.jpeg`, `s2.jpeg`, `s3.jpeg`, `s4.jpeg`, `s5.jpeg`
3. Imagen principal: `hero.jpeg`
4. Actualiza el HTML en `index.html` si cambias los nombres

## 🎨 Personalización de Estilos

### Cambiar Colores

En `css/styles.css`, puedes modificar los colores principales:

**Colores actuales del tema:**
- Fondo degradado: `#667eea` → `#764ba2` (morado/azul)
- Color primario: `#667eea`
- Colores de acento: `#f093fb`, `#f5576c`

**Variables CSS personalizables:**
```css
:root {
    --color-primary: #667eea;       /* Color principal (azul/morado) */
    --color-primary-dark: #764ba2;  /* Color oscuro */
    --color-accent-1: #f093fb;      /* Acento 1 (rosa claro) */
    --color-accent-2: #f5576c;      /* Acento 2 (rosa fuerte) */
}
```

### Cambiar Fuentes

Las fuentes actuales son:
- **Great Vibes** - cursiva elegante para títulos principales
- **Playfair Display** - títulos secundarios
- **Montserrat** - texto general

Puedes cambiarlas en el `<head>` de `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

### Código de Vestimenta

**Colores prohibidos:** Azul y Plateado

Actualiza en `index.html` la sección de dress code:
```html
<p class="dress-note">No usar color azul y plateado</p>
```

## 📱 Funcionalidades

### 🎵 Música de Fondo
- Reproducción automática de vals (`assets/vals.mp3`)
- Control de volumen al 70%
- Loop continuo
- Botón de mute/unmute con manejo inteligente de autoplay
- Función de unmute automático tras interacción del usuario

### ⏰ Contador Regresivo
- Se actualiza automáticamente cada segundo
- Muestra días, horas, minutos y segundos hasta el evento
- Fecha del evento: **18 de octubre de 2025, 7:00 PM**

### 📅 Añadir a Calendario
- Genera enlace para Google Calendar
- Incluye todos los detalles: fecha, hora, lugar, descripción
- Compatible con otros calendarios

### 📍 Google Maps
- Mapa embebido con ubicación del Salón Dannkarlo
- Coordenadas: 7.8857, -72.4781
- Botón para abrir en Google Maps app
- Dirección: Cl. 19 #11-05, Cúcuta

### 💬 Confirmación por WhatsApp
- Mensaje predefinido personalizado por invitado
- Incluye nombre y cantidad de personas
- WhatsApp: +57 318 375 2777

### 🎨 Animaciones
- 🦋 Mariposas flotantes (5 animaciones)
- 🌸 Flores que se balancean (6 animaciones)
- ✨ Destellos brillantes (8 partículas)
- Efectos parallax al hacer scroll
- Transiciones suaves entre secciones
- Hover effects en tarjetas

### 🖼️ Galería de Fotos
- Carrusel con 5 imágenes
- Navegación con flechas
- Indicadores de posición (dots)
- Autoplay cada 5 segundos
- Soporte para swipe en móviles
- Navegación con teclado (← →)
- Pausa en hover

### 🎯 Personalización por Invitado
- Cada invitado tiene su UUID único
- Nombre personalizado en la invitación
- Cantidad específica de personas invitadas
- URL única e irrepetible

### 📋 Itinerario Completo
Timeline con 7 actividades:
1. **7:00 PM** - Recepción 🎊
2. **8:00 PM** - Cena 🍽️
3. **9:00 PM** - Vals 🥂
4. **9:30 PM** - Cumpleaños 👑
5. **10:00 PM** - Baile Sorpresa 💃
6. **11:00 PM** - Hora Loca 🎵
7. **2:00 AM** - Cierre 🌙

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

## � Despliegue

### Script de Despliegue Automático

El proyecto incluye `deploy.sh` para despliegue rápido:

```bash
chmod +x deploy.sh
./deploy.sh
```

Este script:
1. Genera todas las páginas de invitados
2. Valida los datos
3. Muestra estadísticas
4. Copia archivos al servidor (si está configurado)

### Configuración de Nginx

El archivo `nginx.conf` incluye configuración optimizada:

```nginx
server {
    listen 80;
    server_name karla.playkru.com;
    root /var/www/html/karla;
    index index.html;
    
    # Compresión gzip
    gzip on;
    gzip_types text/css application/javascript application/json;
    
    # Cache de assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|mp3)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Dominio Actual

**Producción:** https://karla.playkru.com

## �🔧 Troubleshooting

### El mapa no se muestra
- ✅ Verifica las coordenadas en `js/data.js`
- ✅ Verifica la conexión a internet
- ✅ Algunos navegadores bloquean iframes (verifica consola)
- ✅ Coordenadas actuales: 7.8857, -72.4781 (Salón Dannkarlo)

### La música no se reproduce automáticamente
- ✅ El navegador puede bloquear autoplay
- ✅ La música se silencia inicialmente y se activa con la primera interacción
- ✅ Verifica que el archivo `assets/vals.mp3` existe
- ✅ Aparecerá un botón de control de música si el autoplay falla

### Las animaciones no funcionan
- ✅ Verifica que JavaScript esté habilitado
- ✅ Algunos usuarios tienen "prefers-reduced-motion" activado
- ✅ Verifica la consola del navegador por errores

### El contador no actualiza
- ✅ Verifica el formato de fecha en `js/data.js` (YYYY-MM-DDTHH:mm:ss)
- ✅ Fecha actual: 2025-10-18T19:00:00
- ✅ Verifica que la fecha sea futura (el evento es el 18 de octubre de 2025)

### Los archivos HTML de invitados no se generan
- ✅ Ejecuta `node generate.js` en la raíz del proyecto
- ✅ Verifica que `js/data.js` tenga el formato correcto
- ✅ Verifica que todos los invitados tengan UUID válido
- ✅ Usa `node js/utils.js validate` para verificar datos

### Errores en preview.html
- ✅ Verifica que `js/data.js` esté cargado correctamente
- ✅ Abre la consola del navegador para ver errores
- ✅ Verifica que todos los UUIDs sean únicos

### WhatsApp no abre correctamente
- ✅ Verifica el número en formato internacional: 573183752777
- ✅ El mensaje se genera automáticamente con datos del invitado
- ✅ Funciona mejor en dispositivos móviles con WhatsApp instalado

## � Estadísticas del Proyecto

### Archivos Generados
- 📄 59 páginas HTML individuales
- �📝 1 archivo de URLs (`urls-invitados.txt`)
- 💬 1 archivo de mensajes WhatsApp (`mensajes-whatsapp.txt`)

### Invitados
- 👥 **59 invitaciones** enviadas
- 👨‍👩‍👧‍👦 **83 personas** esperadas
- 📈 **1.4 personas** promedio por invitación

### Recursos
- 🖼️ 6 imágenes (1 hero + 5 galería)
- 🎵 1 archivo de audio (vals)
- 📱 100% responsive
- ✨ 19 elementos animados

### Tecnologías
- **HTML5** - Estructura semántica
- **CSS3** - Animaciones y efectos
- **JavaScript ES6+** - Lógica y funcionalidades
- **Node.js** - Scripts de generación
- **Nginx** - Servidor web en producción

## 🔐 Seguridad

- ✅ UUIDs únicos e impredecibles para cada invitado
- ✅ Sin base de datos (archivos estáticos)
- ✅ No se recopila información del usuario
- ✅ Enlaces privados no indexables por buscadores

## 🎯 Mejores Prácticas

### Performance
- ✅ Imágenes optimizadas
- ✅ CSS y JS minificados en producción
- ✅ Lazy loading de recursos
- ✅ Cache de assets estáticos

### Accesibilidad
- ✅ Semántica HTML correcta
- ✅ Textos alt en imágenes
- ✅ Contraste de colores adecuado
- ✅ Navegación por teclado

### SEO (solo para página principal)
- ✅ Meta tags descriptivos
- ✅ Estructura de headings correcta
- ✅ URLs amigables

## 📚 Documentación Adicional

### Archivos de Configuración

**package.json**
```json
{
  "name": "invitacion-xv-karla",
  "version": "1.0.0",
  "description": "Invitación digital para XV años",
  "scripts": {
    "generate": "node generate.js",
    "validate": "node js/utils.js validate",
    "stats": "node js/utils.js stats"
  }
}
```

**.gitignore**
- Archivos HTML generados ([UUID].html)
- Archivos temporales
- Configuraciones locales

## 📞 Información del Evento

**Evento:** XV Años de Karla Silvana  
**Fecha:** Sábado, 18 de octubre de 2025  
**Hora:** 7:00 PM  
**Lugar:** Salón de Eventos "Dannkarlo"  
**Dirección:** Cl. 19 #11-05, Cúcuta, Norte de Santander  
**Confirmaciones:** WhatsApp +57 318 375 2777  

## 📝 Licencia

Proyecto personal para evento privado.

## 👤 Contacto

Para soporte o preguntas sobre la invitación:
- WhatsApp: +57 318 375 2777
- Padres: Blanca Valero y Jhon Colmenares

## 🙏 Créditos

- **Diseño y Desarrollo:** Sistema de invitaciones personalizadas
- **Música:** Vals tradicional
- **Fotografía:** Fotos de la quinceañera
- **Hosting:** karla.playkru.com

---

**¡Esperamos contar con tu presencia en esta celebración! 🎉✨🦋**

#XVKarla2025
