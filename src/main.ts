import './style.css'

interface Actividad {
  id: number
  nombre: string
  descripcion: string
  icono: string
  imagen: string
  video?: string
}

interface Paquete {
  id: number
  nombre: string
  precio: number
  duracion: string
  incluye: string[]
}

const actividades: Actividad[] = [
  { id: 1, nombre: "Metegol", descripcion: "Ideal para jugar con tus amigos", icono: "🏆",  imagen: "https://images.unsplash.com/photo-1529336322266-4915f4295abc?w=400&h=300&fit=crop" },
  { id: 2, nombre: "Sala de Fútbol", descripcion: "Matches intensos de Fútbol", icono: "⚽", imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=300&fit=crop", video: "/play-house/futbol.mp4" },
  { id: 3, nombre: "Simulador", descripcion: "Competencia de Carreras", icono: "🎮", imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop", video: "/play-house/simulador.mp4" },
  { id: 4, nombre: "Mesa de Cumpleaños", descripcion: "exceente lugar para comer con tus amigos", icono: "🎂", imagen: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop", video: "/play-house/salon.mp4" },
  { id: 5, nombre: "Karaoke", descripcion: "Canta tus hits favoritos", icono: "🎤", imagen: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop", video: "/play-house/history.mp4" },
  { id: 6, nombre: "Sala de Maquillajes", descripcion: "Lugar para encontrarse con tu belleza", icono: "😍", imagen: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?w=400&h=300&fit=crop" },
]

const paquetes: Paquete[] = [
  { id: 1, nombre: "Basic", precio: 15000, duracion: "1 horas", incluye: ["3 actividades", "2 bebidas", "Música"] },
  { id: 2, nombre: "Premium", precio: 25000, duracion: "2 horas", incluye: ["Todas las actividades", "Bebidas ilimitadas", "Picada", "Música", "Karaoke"] },
  { id: 3, nombre: "VIP", precio: 60000, duracion: "5 horas", incluye: ["Todo del Premium", "Cumpleañero gratis", "Pastel", "Souvenirs", "Video/fotos"] },
]

const appHTML = `
  <header class="header">
    <div class="logo"><img src="/play-house/image.png" /><img src="/play-house/nombre.jpg" /></div>
    <nav class="nav">
      <a href="#actividades">Actividades</a>
      <a href="#paquetes">Paquetes</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h1>El Mejor Cumpleaños<br>Esta Aquí! 🎉</h1>
      <p class="subtitle">Sala de diversiones para chicos desde 10 años</p>
      <p class="subtitle">¡Diversión asegurada en tu día especial!</p>
      <a href="#paquetes" class="btn-primary">Ver Paquetes</a>
    </div>
    <div class="hero-visual">
      <div class="icons-float">
        <span>🎱</span>
        <span>🎮</span>
        <span>⚽</span>
        <span>🎤</span>
      </div>
    </div>
  </section>

  <section id="actividades" class="section">
    <h2>Nuestras Actividades</h2>
    <div class="activities-grid">
      ${actividades.map(act => `
        <div class="activity-card">
          <div class="activity-image ${act.video ? 'video-activity' : ''}" ${act.video ? `onclick="playVideo('${act.video}')"` : ''}>
            <img src="${act.imagen}" alt="${act.nombre}" />
            <div class="activity-icon">${act.icono}</div>
            ${act.video ? '<div class="play-icon">▶</div>' : ''}
          </div>
          <h3>${act.nombre}</h3>
          <p>${act.descripcion}</p>
        </div>
      `).join('')}
    </div>
  </section>

  <section id="paquetes" class="section alt">
    <h2>Paquetes de Cumpleaños</h2>
    <div class="packages-grid">
      ${paquetes.map(pq => `
        <div class="package-card ${pq.id === 2 ? 'featured' : ''}">
          ${pq.id === 2 ? '<div class="badge">Más Popular</div>' : ''}
          <h3>${pq.nombre}</h3>
          <div class="price">$${pq.precio.toLocaleString()}</div>
          <div class="duration">${pq.duracion}</div>
          <ul class="includes">
            ${pq.incluye.map(item => `<li>✓ ${item}</li>`).join('')}
          </ul>
          <button class="btn-secondary" onclick="window.open('https://wa.me/5492993260471?text=Hola!%20Quiero%20el%20paquete%20${encodeURIComponent(pq.nombre)}', '_blank')">
            Reservar 💬
          </button>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="section">
    <h2>¿Por qué elegirnos?</h2>
    <div class="features">
      <div class="feature-card">
        <div class="feature-icon">👨‍🏫</div>
        <h3>Supervisión</h3>
        <p>Monitores capacitados cuidando tu fiesta</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🍕</div>
        <h3>Comida Incluida</h3>
        <p>PiZzA, bebidas y picada incluido</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📸</div>
        <h3>Recuerdos</h3>
        <p>Foto y video de tu celebración</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎵</div>
        <h3>Música</h3>
        <p> playlist personalizada</p>
      </div>
    </div>
  </section>

  <section id="contacto" class="section alt">
    <h2>¡Reservá tu fecha!</h2>
    <p class="contact-text">Escríbenos por WhatsApp para reservar tu cumpleaños</p>
    <a href="https://wa.me/5492993260471?text=Hola!%20Quiero%20información%20para%20mi%20cumpleaños" class="btn-whatsapp">
      💬 Escribinos por WhatsApp
    </a>
  </section>

<footer class="footer">
    <p>© 2026 La Play House - Diversión garantizada 🎮</p>
    <p>© Av. Alem 1415, Cipolletti, Rio Negro</p>
    <p>Diseñado por Gustavo Genco - Contacto: gustavogenconqn@gmail.com</p>
  </footer>

  <div id="video-modal" class="modal">
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <video id="modal-video" controls autoplay></video>
    </div>
  </div>

function playVideo(src: string, title: string) {
  const modal = document.getElementById('video-modal')!;
  const video = document.getElementById('modal-video') as HTMLVideoElement;
  video.src = src;
  modal.style.display = 'flex';
  video.play();
}

document.querySelector('.close-modal')?.addEventListener('click', () => {
  const modal = document.getElementById('video-modal')!;
  const video = document.getElementById('modal-video') as HTMLVideoElement;
  video.pause();
  video.src = '';
  modal.style.display = 'none';
});

modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    const video = document.getElementById('modal-video') as HTMLVideoElement;
    video.pause();
    video.src = '';
    modal.style.display = 'none';
  }
});
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = appHTML