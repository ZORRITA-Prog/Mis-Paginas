// ============ Mis Páginas - Versión GitHub Pages ============
// Cambia la URL de tu avatar aquí abajo cuando tengas la foto:
const AVATAR_URL = "https://inmiku.infinityfreeapp.com/u/ImMiku_adddca1a.jpg";

const GITHUB_USER = "ZORRITA-Prog";
const pagesBase = (repo) => `https://${GITHUB_USER.toLowerCase()}.github.io/${repo}/`;
const githubBase = (repo) => `https://github.com/${GITHUB_USER}/${repo}`;

// ---- Lista de proyectos ----
const PROJECTS = [
  {
    "name": "P-47",
    "repo": "P-47",
    "desc": "Repositorio de proyectos personales.",
    "cat": "App"
  },
  {
    "name": "Map",
    "repo": "Map",
    "desc": "Mapa interactivo.",
    "cat": "Web"
  },
  {
    "name": "FNAF-effrey-Epstein",
    "repo": "FNAF-effrey-Epstein",
    "desc": "Proyecto temático.",
    "cat": "Juego"
  },
  {
    "name": "Afinador",
    "repo": "Afinador",
    "desc": "Afinador de instrumentos musicales.",
    "cat": "Herramienta"
  },
  {
    "name": "Aprendi-Japones",
    "repo": "Aprendi-Japones",
    "desc": "Apuntes y recursos para aprender japonés.",
    "cat": "Educación"
  },
  {
    "name": "Sticker-Pack",
    "repo": "Sticker-Pack",
    "desc": "Colección de stickers.",
    "cat": "Diseño"
  },
  {
    "name": "Traslate",
    "repo": "Traslate",
    "desc": "Traductor.",
    "cat": "Herramienta"
  },
  {
    "name": "Api-Treste",
    "repo": "Api-Treste",
    "desc": "Pruebas con APIs.",
    "cat": "Desarrollo"
  },
  {
    "name": "MikuQuiz",
    "repo": "MikuQuiz",
    "desc": "Trivia temática de Miku.",
    "cat": "Juego"
  },
  {
    "name": "Preguntas",
    "repo": "Preguntas",
    "desc": "Generador de preguntas.",
    "cat": "Educación"
  },
  {
    "name": "Cultura",
    "repo": "Cultura",
    "desc": "Contenido cultural.",
    "cat": "Educación"
  },
  {
    "name": "InMiku",
    "repo": "InMiku",
    "desc": "Página temática.",
    "cat": "Web"
  },
  {
    "name": "Aqua-Bot-V3",
    "repo": "Aqua-Bot-V3",
    "desc": "Bot para Discord, tercera versión.",
    "cat": "Desarrollo"
  },
  {
    "name": "Rem",
    "repo": "Rem",
    "desc": "Proyecto temático.",
    "cat": "Web"
  },
  {
    "name": "Acta-Matrimonial-",
    "repo": "Acta-Matrimonial-",
    "desc": "Generador de acta matrimonial.",
    "cat": "Web"
  },
  {
    "name": "Noviasgo",
    "repo": "Noviasgo",
    "desc": "Sitio de noviasgo.",
    "cat": "Web"
  }
];

// ---- Render ----
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
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
        <a class="btn btn-demo" href="${pagesBase(p.repo)}" target="_blank" rel="noopener">Ver página</a>
        <a class="btn btn-git" href="${githubBase(p.repo)}" target="_blank" rel="noopener">GitHub</a>
      </div>`;
    grid.appendChild(card);
  });
}
render();
