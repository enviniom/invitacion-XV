// View Transitions API
if (!document.startViewTransition) {
    document.startViewTransition = (callback) => {
        callback();
    };
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Inicializar audio de fondo
    initializeBackgroundMusic();

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

    // Inicializar galería
    initializeGallery();
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
    document.getElementById('addToCalendar').addEventListener('click', function () {
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
    document.getElementById('openMapsBtn').addEventListener('click', function () {
        const { lat, lng } = eventData.evento.coordenadas;
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        window.open(mapsUrl, '_blank');
    });

    // Botón de WhatsApp
    document.getElementById('confirmWhatsapp').addEventListener('click', function (e) {
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

window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
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
    card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Funcionalidad de la galería
function initializeGallery() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.gallery-item');
    const dots = document.querySelectorAll('.gallery-dot');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');

    if (!slides.length) return; // Exit if no gallery found

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-play functionality (optional)
    let autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Pause autoplay on hover
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        galleryContainer.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });

        galleryContainer.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(nextSlide, 5000);
        });
    }

    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    const carousel = document.querySelector('.gallery-carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide(); // Swipe left
                } else {
                    prevSlide(); // Swipe right
                }
            }
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

// Inicializar música de fondo
function initializeBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');

    if (audio) {
        // Configurar el audio
        audio.volume = 0.7; // Volumen al 70%
        audio.loop = true;
        audio.muted = false; // Asegurar que no esté silenciado

        // Función para reproducir con múltiples intentos
        const playAudio = async () => {
            try {
                // Primero intentar con mute para que funcione el autoplay
                audio.muted = true;
                await audio.play();

                // Si funciona, quitar el mute después de un momento
                setTimeout(() => {
                    audio.muted = false;
                    console.log('🎵 Audio reproduciendo con sonido');
                }, 1000);

                console.log('🎵 Audio reproduciendo automáticamente');
                return true;
            } catch (error) {
                // Si falla, intentar sin mute
                try {
                    audio.muted = false;
                    await audio.play();
                    console.log('🎵 Audio reproduciendo sin mute');
                    return true;
                } catch (secondError) {
                    console.log('Autoplay bloqueado por el navegador:', secondError);
                    return false;
                }
            }
        };

        // Intentar reproducir inmediatamente
        playAudio().then(success => {
            if (!success) {
                createMusicToggleButton(audio);
            }
        });

        // Intentar reproducir cuando la página esté completamente cargada
        if (document.readyState === 'complete') {
            setTimeout(() => playAudio(), 500);
        } else {
            window.addEventListener('load', () => {
                setTimeout(() => playAudio(), 500);
            });
        }

        // Intentar reproducir en la primera interacción del usuario
        const enableAudioOnInteraction = async () => {
            try {
                audio.muted = false; // Asegurar que no esté silenciado
                await audio.play();
                console.log('🎵 Audio activado por interacción del usuario');
                // Remover listeners después del éxito
                document.removeEventListener('click', enableAudioOnInteraction);
                document.removeEventListener('touchstart', enableAudioOnInteraction);
                document.removeEventListener('keydown', enableAudioOnInteraction);
                document.removeEventListener('scroll', enableAudioOnInteraction);
            } catch (error) {
                console.log('No se pudo reproducir el audio:', error);
            }
        };

        // Múltiples eventos para capturar la primera interacción
        document.addEventListener('click', enableAudioOnInteraction);
        document.addEventListener('touchstart', enableAudioOnInteraction);
        document.addEventListener('keydown', enableAudioOnInteraction);
        document.addEventListener('scroll', enableAudioOnInteraction);

        // Manejar errores de carga del audio
        audio.addEventListener('error', (e) => {
            console.error('Error al cargar el audio:', e);
        });

        // Cuando el audio se pueda reproducir
        audio.addEventListener('canplaythrough', () => {
            console.log('Audio listo para reproducir');
            if (audio.paused) {
                playAudio();
            }
        });
    }
}

// Crear botón para controlar la música
function createMusicToggleButton(audio) {
    // Verificar si ya existe el botón
    if (document.getElementById('musicToggle')) return;

    const musicButton = document.createElement('button');
    musicButton.id = 'musicToggle';
    musicButton.innerHTML = '🎵';
    musicButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;

    let isPlaying = false;

    musicButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.muted = false;
            audio.play().then(() => {
                musicButton.innerHTML = '🎵';
                musicButton.style.opacity = '1';
                isPlaying = true;
            }).catch(error => {
                console.log('Error al reproducir audio:', error);
            });
        } else {
            audio.pause();
            musicButton.innerHTML = '🔇';
            musicButton.style.opacity = '0.6';
            isPlaying = false;
        }
    });

    // Listener para actualizar el estado del botón
    audio.addEventListener('play', () => {
        isPlaying = true;
        musicButton.innerHTML = '🎵';
        musicButton.style.opacity = '1';
    });

    audio.addEventListener('pause', () => {
        isPlaying = false;
        musicButton.innerHTML = '🔇';
        musicButton.style.opacity = '0.6';
    });

    document.body.appendChild(musicButton);
}
