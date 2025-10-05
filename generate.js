const fs = require('fs');
const path = require('path');

// Importar datos
const dataContent = fs.readFileSync('./data.js', 'utf8');

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
console.log(`      https://tudominio.com/UUID.html`);
console.log(`\n📋 Lista de URLs generadas:\n`);

invitados.forEach(invitado => {
    console.log(`   ${invitado.nombre}:`);
    console.log(`   https://tudominio.com/${invitado.uuid}.html\n`);
});

// Generar un archivo de texto con todas las URLs
const urlsContent = invitados.map(inv => {
    return `${inv.nombre} (${inv.cantidadInvitados} personas)\nhttps://tudominio.com/${inv.uuid}.html\n`;
}).join('\n');

fs.writeFileSync('./urls-invitados.txt', urlsContent);
console.log('📄 Archivo "urls-invitados.txt" creado con todas las URLs');
