// =====================================================
//  Mis Páginas - script.js
//  AQUI EDITAS TUS ENLACES: cambia el valor de "url"
//  de cada proyecto por la dirección real de tu página.
//  Las páginas se abren DENTRO de esta página (visor).
// =====================================================

// URL de tu foto de perfil:
const AVATAR_URL = "https://inmiku.infinityfreeapp.com/u/ImMiku_adddca1a.jpg";

const GITHUB_USER = "ZORRITA-Prog";
const githubBase = (repo) => `https://github.com/${GITHUB_USER}/${repo}`;

// ---- Lista de proyectos (edita "url" a mano) ----
const PROJECTS = [
    {
        "name": "P-47",
        "desc": "Traductor multiversal y telégrafo morse estilo Rick Prime.",
        "cat": "App",
        "url": "https://zorrita-prog.github.io/P-47/",
        "repo": "P-47"
    },
    {
        "name": "Map",
        "desc": "Mapa interactivo.",
        "cat": "Web",
        "url": "https://zorrita-prog.github.io/Map/",
        "repo": "Map"
    },
    {
        "name": "FNAF-effrey-Epstein",
        "desc": "Five Nights at Epstein's: defiéndete con cámaras y señuelos de audio.",
        "cat": "Juego",
        "url": "https://zorrita-prog.github.io/FNAF-effrey-Epstein/",
        "repo": "FNAF-effrey-Epstein"
    },
    {
        "name": "Afinador",
        "desc": "Afinador de instrumentos musicales.",
        "cat": "Herramienta",
        "url": "https://zorrita-prog.github.io/Afinador/",
        "repo": "Afinador"
    },
    {
        "name": "Aprendi-Japones",
        "desc": "Traductor español-japonés con silabarios, vocabulario y práctica interactiva.",
        "cat": "Educación",
        "url": "https://zorrita-prog.github.io/Aprendi-Japones/",
        "repo": "Aprendi-Japones"
    },
    {
        "name": "Sticker-Pack",
        "desc": "Creador de stickers únicos para WhatsApp.",
        "cat": "Diseño",
        "url": "https://zorrita-prog.github.io/Sticker-Pack/",
        "repo": "Sticker-Pack"
    },
    {
        "name": "Traslate",
        "desc": "Traductor interactivo.",
        "cat": "Herramienta",
        "url": "https://zorrita-prog.github.io/Traslate/",
        "repo": "Traslate"
    },
    {
        "name": "Api-Treste",
        "desc": "Detector de APIs: analiza endpoints, latencia y formato de respuesta.",
        "cat": "Desarrollo",
        "url": "https://zorrita-prog.github.io/Api-Treste/",
        "repo": "Api-Treste"
    },
    {
        "name": "MikuQuiz",
        "desc": "Trivia temática de Miku.",
        "cat": "Juego",
        "url": "https://mikuquiz.wuaze.com",
        "repo": "MikuQuiz"
    },
    {
        "name": "Preguntas",
        "desc": "Generador de preguntas.",
        "cat": "Educación",
        "url": "https://github.com/ZORRITA-Prog/Preguntas",
        "repo": "Preguntas"
    },
    {
        "name": "Cultura",
        "desc": "Gastronomía, ritmos, folclore y figuras de Latinoamérica. Edición Rem y Ram.",
        "cat": "Educación",
        "url": "https://zorrita-prog.github.io/Cultura/",
        "repo": "Cultura"
    },
    {
        "name": "InMiku",
        "desc": "Página temática.",
        "cat": "Web",
        "url": "https://inmiku.infinityfreeapp.com",
        "repo": "InMiku"
    },
    {
        "name": "Aqua-Bot-V3",
        "desc": "Bot de Discord, versión 3.",
        "cat": "Desarrollo",
        "url": "https://aquav3.wuaze.com",
        "repo": "Aqua-Bot-V3"
    },
    {
        "name": "Rem",
        "desc": "Ficha completa de Rem de Re:Zero: historia, habilidades y momentos icónicos.",
        "cat": "Web",
        "url": "https://zorrita-prog.github.io/Rem/",
        "repo": "Rem"
    },
    {
        "name": "Acta-Matrimonial",
        "desc": "Generador de acta de matrimonio personalizable con votos.",
        "cat": "Web",
        "url": "https://zorrita-prog.github.io/Acta-Matrimonial-/",
        "repo": "Acta-Matrimonial-"
    },
    {
        "name": "Noviasgo",
        "desc": "Generador de acta de noviazgo con votos personalizados.",
        "cat": "Web",
        "url": "https://zorrita-prog.github.io/Noviasgo/",
        "repo": "Noviasgo"
    },
    {
        "name": "Gumi-Ai",
        "desc": "Proyecto de inteligencia artificial.",
        "cat": "IA",
        "url": "https://zorrita-prog.github.io/Gumi-Ai/",
        "repo": "Gumi-Ai"
    }
];

// ---- Render ----
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const viewer = document.getElementById("viewer");
const viewerFrame = document.getElementById("viewer-frame");
const viewerTitle = document.getElementById("viewer-title");
const btnBack = document.getElementById("btn-back");
let activeCat = "Todas";

document.getElementById("avatar").src = AVATAR_URL;

const categories = ["Todas", ...new Set(PROJECTS.map(p => p.cat))];
categories.forEach(cat => {
  const b = document.createElement("button");
  b.className = "chip" + (cat === "Todas" ? " active" : "");
  b.textContent = cat;
  b.onclick = () => {
    activeCat = cat;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    b.classList.add("active");
    render();
  };
  filtersEl.appendChild(b);
});

searchEl.addEventListener("input", render);

function openViewer(url, name) {
  viewerTitle.textContent = name;
  viewerFrame.src = url;
  viewer.classList.remove("hidden");
  document.body.classList.add("viewer-open");
  window.scrollTo(0, 0);
}

function closeViewer() {
  viewer.classList.add("hidden");
  document.body.classList.remove("viewer-open");
  viewerFrame.src = "about:blank";
  viewerTitle.textContent = "";
}

btnBack.addEventListener("click", closeViewer);

function render(){
  const q = searchEl.value.toLowerCase().trim();
  const list = PROJECTS.filter(p =>
    (activeCat === "Todas" || p.cat === activeCat) &&
    p.name.toLowerCase().includes(q)
  );

  grid.innerHTML = list.length ? "" : `<div class="empty">No se encontró ninguna página con esa búsqueda.</div>`;

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${p.name.replace(/[^a-zA-Z0-9]/g,"").charAt(0).toUpperCase()}</div>
        <div>
          <h3>${p.name}</h3>
          <span class="cat">${p.cat}</span>
        </div>
      </div>
      <p>${p.desc}</p>
      <div class="btn-row">
        <button type="button" class="btn btn-demo" data-url="${p.url}" data-name="${p.name}">Ver página</button>
        <a class="btn btn-git" href="${githubBase(p.repo)}" target="_blank" rel="noopener">GitHub</a>
      </div>`;
    const btn = card.querySelector(".btn-demo");
    btn.addEventListener("click", () => openViewer(p.url, p.name));
    grid.appendChild(card);
  });
}
render();
