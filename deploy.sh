#!/bin/bash

# Script de despliegue para invitación XV Años
# Este script automatiza el proceso de generación y despliegue

set -e

echo "🎉 Script de Despliegue - Invitación XV Años"
echo "============================================"
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar que estamos en el directorio correcto
if [ ! -f "index.html" ]; then
    echo "❌ Error: No se encuentra index.html"
    echo "   Asegúrate de ejecutar este script desde el directorio del proyecto"
    exit 1
fi

echo -e "${BLUE}📝 Paso 1: Verificando archivos...${NC}"
required_files=("index.html" "css/styles.css" "js/app.js" "js/data.js")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file"
    else
        echo "   ❌ $file - NO ENCONTRADO"
        exit 1
    fi
done
echo ""

# 2. Generar páginas de invitados
echo -e "${BLUE}📝 Paso 2: Generando páginas de invitados...${NC}"
if command -v node &> /dev/null; then
    node generate.js
    echo ""
else
    echo -e "${YELLOW}   ⚠️  Node.js no está instalado. Saltando generación de páginas.${NC}"
    echo "   Para generar páginas individuales, instala Node.js y ejecuta:"
    echo "   $ node generate.js"
    echo ""
fi

# 3. Opción de despliegue
echo -e "${BLUE}📝 Paso 3: Selecciona método de despliegue${NC}"
echo "   1) Servidor de desarrollo local (Python)"
echo "   2) Copiar a directorio Nginx"
echo "   3) Solo generar archivos (no desplegar)"
echo ""
read -p "Selecciona una opción (1-3): " deploy_option

case $deploy_option in
    1)
        echo ""
        echo -e "${GREEN}🚀 Iniciando servidor de desarrollo...${NC}"
        echo "   Abre tu navegador en: http://localhost:8000"
        echo "   Presiona Ctrl+C para detener el servidor"
        echo ""
        if command -v python3 &> /dev/null; then
            python3 -m http.server 8000
        elif command -v python &> /dev/null; then
            python -m SimpleHTTPServer 8000
        else
            echo "❌ Python no está instalado"
            exit 1
        fi
        ;;
    2)
        echo ""
        read -p "Directorio de Nginx [/var/www/html/invitacion]: " nginx_dir
        nginx_dir=${nginx_dir:-/var/www/html/invitacion}
        
        echo -e "${BLUE}📦 Copiando archivos a $nginx_dir...${NC}"
        
        # Crear directorio si no existe
        sudo mkdir -p "$nginx_dir"
        
        # Copiar archivos
        sudo cp *.html "$nginx_dir/" 2>/dev/null || true
        sudo cp *.css "$nginx_dir/"
        sudo cp *.js "$nginx_dir/"
        sudo cp *.txt "$nginx_dir/" 2>/dev/null || true
        
        # Establecer permisos
        sudo chown -R www-data:www-data "$nginx_dir"
        sudo chmod -R 755 "$nginx_dir"
        
        echo -e "${GREEN}✅ Archivos copiados exitosamente${NC}"
        echo ""
        echo "📋 Próximos pasos:"
        echo "   1. Verifica la configuración de Nginx (ver nginx.conf)"
        echo "   2. Reinicia Nginx: sudo systemctl restart nginx"
        echo "   3. Accede a tu sitio en: http://tudominio.com"
        echo ""
        ;;
    3)
        echo ""
        echo -e "${GREEN}✅ Archivos generados correctamente${NC}"
        echo "   Los archivos están listos en el directorio actual"
        echo ""
        ;;
    *)
        echo "❌ Opción inválida"
        exit 1
        ;;
esac

# 4. Mostrar resumen
echo ""
echo -e "${GREEN}🎊 ¡Proceso completado!${NC}"
echo ""
echo "📚 Recursos disponibles:"
echo "   - README.md: Documentación completa"
echo "   - nginx.conf: Configuración de ejemplo para Nginx"
echo "   - urls-invitados.txt: Lista de URLs generadas (si aplica)"
echo ""
echo "💡 Comandos útiles:"
echo "   - Generar invitaciones: node generate.js"
echo "   - Servidor local: python3 -m http.server 8000"
echo "   - Ver logs Nginx: sudo tail -f /var/log/nginx/invitacion-access.log"
echo ""
echo -e "${YELLOW}🔗 No olvides compartir los enlaces únicos con tus invitados${NC}"
echo ""
