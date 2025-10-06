#!/usr/bin/env node

/**
 * Utilidades para la Invitación de XV Años
 * Herramientas para gestionar invitados y generar reportes
 */

const fs = require('fs');
const path = require('path');

// Colores para terminal
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m'
};

// Cargar datos
let eventData, invitados;
try {
    // Leer y procesar el archivo data.js
    const dataContent = fs.readFileSync('./js/data.js', 'utf8');
    
    // Extraer eventData
    const eventDataMatch = dataContent.match(/const eventData = ({[\s\S]*?});/);
    if (eventDataMatch) {
        eventData = eval('(' + eventDataMatch[1] + ')');
    }
    
    // Extraer invitados
    const invitadosMatch = dataContent.match(/const invitados = (\[[\s\S]*?\]);/);
    if (invitadosMatch) {
        invitados = eval('(' + invitadosMatch[1] + ')');
    }
    
    if (!eventData || !invitados) {
        throw new Error('No se pudieron extraer eventData o invitados del archivo');
    }
} catch (error) {
    console.error(`${colors.red}❌ Error al cargar data.js: ${error.message}${colors.reset}`);
    process.exit(1);
}

// Menú principal
function showMenu() {
    console.log(`\n${colors.cyan}${colors.bright}╔═══════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.cyan}${colors.bright}║   🎉 Utilidades XV Años - Shivi   ║${colors.reset}`);
    console.log(`${colors.cyan}${colors.bright}╚═══════════════════════════════════════╝${colors.reset}\n`);
    
    console.log(`${colors.green}1.${colors.reset} 📊 Ver estadísticas`);
    console.log(`${colors.green}2.${colors.reset} 📋 Listar invitados`);
    console.log(`${colors.green}3.${colors.reset} 🔍 Buscar invitado`);
    console.log(`${colors.green}4.${colors.reset} 📝 Generar reporte`);
    console.log(`${colors.green}5.${colors.reset} 🔗 Exportar URLs`);
    console.log(`${colors.green}6.${colors.reset} ✅ Validar datos`);
    console.log(`${colors.green}7.${colors.reset} 🎯 Generar QR codes`);
    console.log(`${colors.green}8.${colors.reset} 📤 Exportar para WhatsApp`);
    console.log(`${colors.green}0.${colors.reset} ❌ Salir\n`);
}

// 1. Estadísticas
function showStatistics() {
    console.log(`\n${colors.cyan}📊 Estadísticas del Evento${colors.reset}`);
    console.log('━'.repeat(50));
    
    console.log(`\n${colors.bright}Evento:${colors.reset}`);
    console.log(`  👑 Quinceañera: ${eventData.quinceañera.nombre}`);
    console.log(`  📅 Fecha: ${new Date(eventData.evento.fecha).toLocaleDateString('es-ES', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    })}`);
    console.log(`  🏰 Lugar: ${eventData.evento.lugar}`);
    
    const totalInvitados = invitados.length;
    const totalPersonas = invitados.reduce((sum, inv) => sum + inv.cantidadInvitados, 0);
    const promedioPersonas = (totalPersonas / totalInvitados).toFixed(1);
    
    console.log(`\n${colors.bright}Invitados:${colors.reset}`);
    console.log(`  👥 Total de invitaciones: ${colors.green}${totalInvitados}${colors.reset}`);
    console.log(`  👨‍👩‍👧‍👦 Total de personas: ${colors.green}${totalPersonas}${colors.reset}`);
    console.log(`  📈 Promedio por invitación: ${colors.yellow}${promedioPersonas}${colors.reset}`);
    
    // Distribución
    const distribucion = {};
    invitados.forEach(inv => {
        const cant = inv.cantidadInvitados;
        distribucion[cant] = (distribucion[cant] || 0) + 1;
    });
    
    console.log(`\n${colors.bright}Distribución:${colors.reset}`);
    Object.keys(distribucion).sort((a, b) => a - b).forEach(cant => {
        const count = distribucion[cant];
        const bar = '█'.repeat(Math.ceil(count / 2));
        console.log(`  ${cant} persona${cant > 1 ? 's' : ' '}: ${bar} ${count} (${((count / totalInvitados) * 100).toFixed(1)}%)`);
    });
    
    // Días restantes
    const eventDate = new Date(eventData.evento.fecha);
    const today = new Date();
    const daysRemaining = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    
    console.log(`\n${colors.bright}Tiempo restante:${colors.reset}`);
    if (daysRemaining > 0) {
        console.log(`  ⏰ Faltan ${colors.green}${daysRemaining} días${colors.reset} para el evento`);
    } else if (daysRemaining === 0) {
        console.log(`  🎉 ${colors.green}¡El evento es hoy!${colors.reset}`);
    } else {
        console.log(`  📅 El evento fue hace ${Math.abs(daysRemaining)} días`);
    }
    
    console.log('\n' + '━'.repeat(50));
}

// 2. Listar invitados
function listGuests() {
    console.log(`\n${colors.cyan}📋 Lista de Invitados${colors.reset}`);
    console.log('━'.repeat(80));
    
    console.log(`\n${'#'.padEnd(4)} ${'Nombre'.padEnd(35)} ${'Personas'.padEnd(10)} ${'UUID'.substring(0, 8)}`);
    console.log('─'.repeat(80));
    
    invitados.forEach((inv, index) => {
        const num = String(index + 1).padEnd(4);
        const nombre = inv.nombre.padEnd(35);
        const personas = String(inv.cantidadInvitados).padEnd(10);
        const uuidShort = inv.uuid.substring(0, 8);
        
        console.log(`${num}${nombre}${personas}${uuidShort}...`);
    });
    
    console.log('─'.repeat(80));
    console.log(`Total: ${invitados.length} invitaciones\n`);
}

// 3. Buscar invitado
function searchGuest(query) {
    const results = invitados.filter(inv => 
        inv.nombre.toLowerCase().includes(query.toLowerCase()) ||
        inv.uuid.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length === 0) {
        console.log(`\n${colors.red}❌ No se encontraron resultados para: "${query}"${colors.reset}\n`);
        return;
    }
    
    console.log(`\n${colors.green}✅ Se encontraron ${results.length} resultado(s):${colors.reset}\n`);
    
    results.forEach(inv => {
        console.log(`${colors.bright}Nombre:${colors.reset} ${inv.nombre}`);
        console.log(`${colors.bright}Personas:${colors.reset} ${inv.cantidadInvitados}`);
        console.log(`${colors.bright}UUID:${colors.reset} ${inv.uuid}`);
        console.log(`${colors.bright}URL:${colors.reset} https://karla.playkru.com/${inv.uuid}.html`);
        console.log('─'.repeat(80));
    });
}

// 4. Generar reporte
function generateReport() {
    const reportName = `reporte-${Date.now()}.txt`;
    let report = '';
    
    report += '═'.repeat(80) + '\n';
    report += `           REPORTE DE INVITADOS - XV AÑOS ${eventData.quinceañera.nombre.toUpperCase()}\n`;
    report += '═'.repeat(80) + '\n\n';
    
    report += `Fecha del evento: ${new Date(eventData.evento.fecha).toLocaleDateString('es-ES')}\n`;
    report += `Lugar: ${eventData.evento.lugar}\n`;
    report += `Fecha del reporte: ${new Date().toLocaleDateString('es-ES')}\n\n`;
    
    report += '─'.repeat(80) + '\n';
    report += 'LISTA DE INVITADOS\n';
    report += '─'.repeat(80) + '\n\n';
    
    invitados.forEach((inv, index) => {
        report += `${index + 1}. ${inv.nombre}\n`;
        report += `   Personas invitadas: ${inv.cantidadInvitados}\n`;
        report += `   UUID: ${inv.uuid}\n`;
        report += `   URL: https://karla.playkru.com/${inv.uuid}.html\n\n`;
    });
    
    report += '─'.repeat(80) + '\n';
    report += 'RESUMEN\n';
    report += '─'.repeat(80) + '\n';
    report += `Total de invitaciones: ${invitados.length}\n`;
    report += `Total de personas esperadas: ${invitados.reduce((sum, inv) => sum + inv.cantidadInvitados, 0)}\n`;
    
    fs.writeFileSync(reportName, report);
    console.log(`\n${colors.green}✅ Reporte generado: ${reportName}${colors.reset}\n`);
}

// 5. Exportar URLs
function exportURLs() {
    const filename = 'urls-compartir.txt';
    let content = '';
    
    content += `ENLACES DE INVITACIÓN - XV AÑOS ${eventData.quinceañera.nombre}\n`;
    content += '═'.repeat(80) + '\n\n';
    
    invitados.forEach(inv => {
        content += `${inv.nombre} (${inv.cantidadInvitados} personas):\n`;
        content += `https://karla.playkru.com/${inv.uuid}.html\n\n`;
    });
    
    fs.writeFileSync(filename, content);
    console.log(`\n${colors.green}✅ URLs exportadas a: ${filename}${colors.reset}\n`);
}

// 6. Validar datos
function validateData() {
    console.log(`\n${colors.cyan}✅ Validando datos...${colors.reset}\n`);
    
    let errors = 0;
    let warnings = 0;
    
    // Validar fecha
    const eventDate = new Date(eventData.evento.fecha);
    if (isNaN(eventDate.getTime())) {
        console.log(`${colors.red}❌ ERROR: Fecha del evento inválida${colors.reset}`);
        errors++;
    } else {
        console.log(`${colors.green}✓${colors.reset} Fecha del evento válida`);
    }
    
    // Validar coordenadas
    if (!eventData.evento.coordenadas.lat || !eventData.evento.coordenadas.lng) {
        console.log(`${colors.red}❌ ERROR: Coordenadas faltantes${colors.reset}`);
        errors++;
    } else {
        console.log(`${colors.green}✓${colors.reset} Coordenadas configuradas`);
    }
    
    // Validar WhatsApp
    if (!eventData.contacto.whatsapp || eventData.contacto.whatsapp.length < 10) {
        console.log(`${colors.yellow}⚠${colors.reset} ADVERTENCIA: Número de WhatsApp puede ser inválido`);
        warnings++;
    } else {
        console.log(`${colors.green}✓${colors.reset} Número de WhatsApp configurado`);
    }
    
    // Validar UUIDs únicos
    const uuids = new Set();
    const duplicates = [];
    invitados.forEach(inv => {
        if (uuids.has(inv.uuid)) {
            duplicates.push(inv.uuid);
        }
        uuids.add(inv.uuid);
    });
    
    if (duplicates.length > 0) {
        console.log(`${colors.red}❌ ERROR: UUIDs duplicados encontrados: ${duplicates.length}${colors.reset}`);
        errors++;
    } else {
        console.log(`${colors.green}✓${colors.reset} Todos los UUIDs son únicos`);
    }
    
    // Validar formato UUID
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const invalidUUIDs = invitados.filter(inv => !uuidRegex.test(inv.uuid));
    
    if (invalidUUIDs.length > 0) {
        console.log(`${colors.red}❌ ERROR: ${invalidUUIDs.length} UUID(s) con formato inválido${colors.reset}`);
        errors++;
    } else {
        console.log(`${colors.green}✓${colors.reset} Todos los UUIDs tienen formato válido`);
    }
    
    // Validar nombres no vacíos
    const emptyNames = invitados.filter(inv => !inv.nombre || inv.nombre.trim() === '');
    if (emptyNames.length > 0) {
        console.log(`${colors.red}❌ ERROR: ${emptyNames.length} invitado(s) sin nombre${colors.reset}`);
        errors++;
    } else {
        console.log(`${colors.green}✓${colors.reset} Todos los invitados tienen nombre`);
    }
    
    // Validar cantidad de invitados
    const invalidCounts = invitados.filter(inv => !inv.cantidadInvitados || inv.cantidadInvitados < 1);
    if (invalidCounts.length > 0) {
        console.log(`${colors.red}❌ ERROR: ${invalidCounts.length} invitación(es) con cantidad inválida${colors.reset}`);
        errors++;
    } else {
        console.log(`${colors.green}✓${colors.reset} Todas las cantidades son válidas`);
    }
    
    console.log('\n' + '─'.repeat(50));
    console.log(`\nResultado: ${errors === 0 ? colors.green + '✅ Sin errores' : colors.red + `❌ ${errors} error(es)`}${colors.reset}`);
    if (warnings > 0) {
        console.log(`Advertencias: ${colors.yellow}⚠ ${warnings} advertencia(s)${colors.reset}`);
    }
    console.log();
}

// 7. Generar info para QR codes (requiere qrcode package)
function generateQRInfo() {
    console.log(`\n${colors.cyan}🎯 Información para QR Codes${colors.reset}\n`);
    console.log(`Para generar códigos QR, instala: npm install qrcode\n`);
    console.log(`Luego puedes usar esta lista de URLs:\n`);
    
    invitados.forEach(inv => {
        console.log(`${inv.nombre}: https://karla.playkru.com/${inv.uuid}.html`);
    });
    
    console.log(`\n${colors.yellow}Puedes usar servicios online como:${colors.reset}`);
    console.log('  - https://www.qr-code-generator.com/');
    console.log('  - https://www.qrcode-monkey.com/');
    console.log();
}

// 8. Exportar para WhatsApp (Ahora se genera automáticamente con generate.js)
function exportWhatsApp() {
    console.log(`\n${colors.cyan}📱 Generando mensajes de WhatsApp...${colors.reset}\n`);
    console.log(`${colors.yellow}Nota: Los mensajes de WhatsApp ahora se generan automáticamente`);
    console.log(`al ejecutar 'node generate.js'${colors.reset}\n`);
    console.log(`${colors.green}Busca el archivo: mensajes-whatsapp.txt${colors.reset}\n`);
}

// Ejecutar según argumento
const args = process.argv.slice(2);

if (args.length === 0) {
    // Modo interactivo
    showMenu();
    console.log(`${colors.dim}Ejecuta con argumentos para modo rápido:${colors.reset}`);
    console.log(`${colors.dim}  node utils.js stats     - Ver estadísticas${colors.reset}`);
    console.log(`${colors.dim}  node utils.js list      - Listar invitados${colors.reset}`);
    console.log(`${colors.dim}  node utils.js search XX - Buscar invitado${colors.reset}`);
    console.log(`${colors.dim}  node utils.js report    - Generar reporte${colors.reset}`);
    console.log(`${colors.dim}  node utils.js urls      - Exportar URLs${colors.reset}`);
    console.log(`${colors.dim}  node utils.js validate  - Validar datos${colors.reset}`);
    console.log(`${colors.dim}  node utils.js qr        - Info para QR codes${colors.reset}`);
    console.log(`${colors.dim}  node utils.js whatsapp  - Exportar mensajes WhatsApp${colors.reset}\n`);
} else {
    // Modo comando
    const command = args[0].toLowerCase();
    
    switch (command) {
        case 'stats':
        case 'estadisticas':
            showStatistics();
            break;
        case 'list':
        case 'lista':
            listGuests();
            break;
        case 'search':
        case 'buscar':
            if (args[1]) {
                searchGuest(args[1]);
            } else {
                console.log(`${colors.red}❌ Debes proporcionar un término de búsqueda${colors.reset}`);
            }
            break;
        case 'report':
        case 'reporte':
            generateReport();
            break;
        case 'urls':
            exportURLs();
            break;
        case 'validate':
        case 'validar':
            validateData();
            break;
        case 'qr':
            generateQRInfo();
            break;
        case 'whatsapp':
        case 'wa':
            exportWhatsApp();
            break;
        default:
            console.log(`${colors.red}❌ Comando desconocido: ${command}${colors.reset}\n`);
            console.log('Comandos disponibles: stats, list, search, report, urls, validate, qr, whatsapp');
    }
}
