// View Transitions API
if (!document.startViewTransition) {
    document.startViewTransition = (callback) => {
        callback();
    };
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Obtener UUID de la URL
    const uuid = getUUIDFromURL();
    let invitado = null;
    
    if (uuid) {
        invitado = getInvitadoByUUID(uuid);
    }
    
    // Si no hay invitado válido, usar datos de ejemplo
    if (!invitado) {
        invitado = {
            nombre: "Estimado Invitado",
            cantidadInvitados: 2
        };
    }
    
    // Cargar datos del evento
    loadEventData(invitado);
    
    // Iniciar countdown
    startCountdown();
    
    // Configurar botones
    setupButtons(invitado);
    
    // Animaciones de entrada
    animateOnScroll();
    
    // Generar itinerario
    generateItinerary();
}

function loadEventData(invitado) {
    // Datos de la quinceañera
    document.getElementById('quinceaneraName').textContent = eventData.quinceañera.nombre;
    
    // Datos del invitado
    document.getElementById('guestName').textContent = invitado.nombre;
    document.getElementById('guestCount').textContent = invitado.cantidadInvitados;
    
    // Datos de los padres
    document.getElementById('parentsMom').textContent = eventData.padres.madre;
    document.getElementById('parentsDad').textContent = eventData.padres.padre;
    
    // Datos del evento
    const eventDate = new Date(eventData.evento.fecha);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = eventDate.toLocaleDateString('es-ES', options);
    const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    
    document.getElementById('fullDate').textContent = capitalizedDate;
    
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedTime = eventDate.toLocaleTimeString('es-ES', timeOptions).toUpperCase();
    document.getElementById('eventTime').textContent = formattedTime;
    
    document.getElementById('venueName').textContent = eventData.evento.lugar;
    document.getElementById('venueAddress').textContent = eventData.evento.direccion;
    
    // Configurar mapa
    const mapFrame = document.getElementById('mapFrame');
    const { lat, lng } = eventData.evento.coordenadas;
    mapFrame.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=15`;
}

function startCountdown() {
    const eventDate = new Date(eventData.evento.fecha).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function setupButtons(invitado) {
    // Botón de calendario
    document.getElementById('addToCalendar').addEventListener('click', function() {
        const eventDate = new Date(eventData.evento.fecha);
        const title = `XV Años de ${eventData.quinceañera.nombre}`;
        const details = `Celebración de los XV años de ${eventData.quinceañera.nombre}`;
        const location = `${eventData.evento.lugar}, ${eventData.evento.direccion}`;
        
        // Formato para Google Calendar
        const startDate = eventDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const endDate = new Date(eventDate.getTime() + (5 * 60 * 60 * 1000)).toISOString().replace(/-|:|\.\d\d\d/g, "");
        
        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
        
        window.open(googleCalendarUrl, '_blank');
    });
    
    // Botón de Google Maps
    document.getElementById('openMapsBtn').addEventListener('click', function() {
        const { lat, lng } = eventData.evento.coordenadas;
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        window.open(mapsUrl, '_blank');
    });
    
    // Botón de WhatsApp
    document.getElementById('confirmWhatsapp').addEventListener('click', function(e) {
        e.preventDefault();
        const message = `${eventData.contacto.mensaje} - ${invitado.nombre} (${invitado.cantidadInvitados} persona${invitado.cantidadInvitados > 1 ? 's' : ''})`;
        const whatsappUrl = `https://wa.me/${eventData.contacto.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
}

function generateItinerary() {
    const itineraryContainer = document.getElementById('itinerary');
    
    eventData.itinerario.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item';
        itemDiv.style.animationDelay = `${index * 0.1}s`;
        
        itemDiv.innerHTML = `
            <div class="timeline-marker">
                <span class="timeline-icon">${item.icono}</span>
            </div>
            <div class="timeline-content">
                <div class="timeline-time">${item.hora}</div>
                <div class="timeline-title">${item.actividad}</div>
                <div class="timeline-desc">${item.descripcion}</div>
            </div>
        `;
        
        itineraryContainer.appendChild(itemDiv);
    });
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Efecto parallax suave en scroll
let ticking = false;

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            const scrolled = window.pageYOffset;
            const butterflies = document.querySelectorAll('.butterfly');
            const flowers = document.querySelectorAll('.flower');
            const sparkles = document.querySelectorAll('.sparkle');
            
            butterflies.forEach((butterfly, index) => {
                const speed = 0.1 + (index * 0.05);
                butterfly.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            flowers.forEach((flower, index) => {
                const speed = 0.05 + (index * 0.02);
                flower.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
            
            sparkles.forEach((sparkle, index) => {
                const speed = 0.15 + (index * 0.03);
                sparkle.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            ticking = false;
        });
        
        ticking = true;
    }
});

// Añadir efecto de brillo al hacer hover en las tarjetas
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});
