const fs = require('fs');
const path = require('path');

// Importar datos
const dataContent = fs.readFileSync('./js/data.js', 'utf8');

// Extraer eventData
const eventDataMatch = dataContent.match(/const eventData = ({[\s\S]*?});/);
if (!eventDataMatch) {
    console.error('No se pudo encontrar eventData en data.js');
    process.exit(1);
}
const eventData = eval('(' + eventDataMatch[1] + ')');

// Extraer el array de invitados usando regex
const invitadosMatch = dataContent.match(/const invitados = (\[[\s\S]*?\]);/);
if (!invitadosMatch) {
    console.error('No se pudo encontrar el array de invitados en data.js');
    process.exit(1);
}

// Evaluar el array de invitados
const invitados = eval(invitadosMatch[1]);

// Leer el template HTML
const templateHTML = fs.readFileSync('./index.html', 'utf8');

console.log('🎉 Generando páginas de invitación personalizadas...\n');

// Generar un archivo HTML para cada invitado
invitados.forEach(invitado => {
    const filename = `${invitado.uuid}.html`;
    const filepath = path.join(__dirname, filename);
    
    // Crear una copia del template
    fs.writeFileSync(filepath, templateHTML);
    
    console.log(`✅ Creado: ${filename}`);
    console.log(`   Invitado: ${invitado.nombre}`);
    console.log(`   Personas: ${invitado.cantidadInvitados}`);
    console.log(`   URL: /${filename}\n`);
});

console.log(`\n🎊 ¡Generación completada!`);
console.log(`📝 Total de invitaciones generadas: ${invitados.length}`);
console.log(`\n💡 Instrucciones:`);
console.log(`   1. Sube todos los archivos HTML generados a tu servidor`);
console.log(`   2. Comparte los enlaces únicos con cada invitado:`);
console.log(`      https://karla.playkru.com/UUID.html`);
console.log(`\n📋 Lista de URLs generadas:\n`);

invitados.forEach(invitado => {
    console.log(`   ${invitado.nombre}:`);
    console.log(`   https://karla.playkru.com/${invitado.uuid}.html\n`);
});

// Generar un archivo de texto con todas las URLs
const urlsContent = invitados.map(inv => {
    return `${inv.nombre} (${inv.cantidadInvitados} personas)\nhttps://karla.playkru.com/${inv.uuid}.html\n`;
}).join('\n');

fs.writeFileSync('./urls-invitados.txt', urlsContent);
console.log('📄 Archivo "urls-invitados.txt" creado con todas las URLs');

// Función para exportar mensajes de WhatsApp
function exportWhatsApp() {
    const filename = 'mensajes-whatsapp.txt';
    let content = '';
    
    content += `MENSAJES PARA WHATSAPP - XV AÑOS ${eventData.quinceañera.nombre}\n`;
    content += '═'.repeat(80) + '\n\n';
    content += 'Copia y pega estos mensajes para enviar las invitaciones:\n\n';
    content += '─'.repeat(80) + '\n\n';
    
    invitados.forEach(inv => {
        const mensaje = `🎉 ¡Hola ${inv.nombre}!

¡Tenemos el honor de invitarte a la celebración de los XV años de ${eventData.quinceañera.nombre}! 🦋✨

📅 Fecha: ${new Date(eventData.evento.fecha).toLocaleDateString('es-ES', { 
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
        })}
⏰ Hora: ${new Date(eventData.evento.fecha).toLocaleTimeString('es-ES', { 
            hour: '2-digit', minute: '2-digit' 
        })}
📍 Lugar: ${eventData.evento.lugar}

👥 Invitación para ${inv.cantidadInvitados} persona${inv.cantidadInvitados > 1 ? 's' : ''}

🔗 Tu invitación personalizada:
https://karla.playkru.com/${inv.uuid}.html

¡Esperamos contar con tu presencia! 💕

Por favor confirma tu asistencia. ¡Gracias! 🙏`;
        
        content += `══════ ${inv.nombre} ══════\n\n`;
        content += mensaje + '\n\n';
        content += '─'.repeat(80) + '\n\n';
    });
    
    fs.writeFileSync(filename, content);
    console.log(`\n📱 Archivo "${filename}" creado con todos los mensajes de WhatsApp`);
    console.log(`   Tip: Copia cada mensaje y envíalo por WhatsApp\n`);
}

// Generar mensajes de WhatsApp
exportWhatsApp();
