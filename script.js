/* ================= DATA (from CV) ================= */
const GITHUB_BASE = "https://github.com/yoodaav";

const skillGroups = [
  {
    label: "Langages & Bases de données",
    tags: ["Python (NumPy, Pandas, PySpark)", "R", "SQL (MySQL, PostgreSQL)", "MongoDB"]
  },
  {
    label: "Statistiques & Machine Learning",
    tags: ["Statistiques descriptives & inférentielles", "Tests statistiques", "Analyses prédictives", "Scikit-Learn", "Flask", "FastAPI", "Supervisé / Non supervisé"]
  },
  {
    label: "Visualisation & Reporting",
    tags: ["Power BI (DAX, Dashboards)", "Tableau Public", "Matplotlib", "Seaborn", "ggplot2"]
  },
  {
    label: "Data Cleaning",
    tags: ["Pandas", "Power Query"]
  },
  {
    label: "Outils",
    tags: ["VS Code", "Google Colab", "Anaconda", "Google Cloud Platform", "Excel (TCD, Power Pivot)", "STATA", "SPSS"]
  }
];

const categories = ["Tous", "Python", "Python & ML", "Power BI", "SQL & Data", "Tableau"];

const projects = [
  {
    id: "healthcare",
    title: "Data_Driven_Healthcare",
    category: "Python",
    metric: "Exploration & Feature Engineering",
    shortDesc: "Exploration de données et feature engineering sur un jeu de données hospitalier.",
    description: "Traitement et analyse exploratoire de données hospitalières : exploration et feature engineering sur les variables, puis étude croisée entre pathologie principale, caractéristiques socio-démographiques, genre du patient et type d'admission (ex : urgence). Le projet se termine par le calcul du prix total facturé par pathologie pour l'hôpital.",
    points: [
      "Exploration de données et feature engineering sur les variables",
      "Relation entre pathologie principale et caractéristiques socio-démographiques",
      "Relation entre pathologie principale et genre (femme & homme)",
      "Relation entre pathologie principale et type d'admission (ex : urgence)",
      "Calcul du prix total par pathologie de l'hôpital"
    ],
    tags: ["Python", "Pandas", "Feature Engineering", "EDA"],
    github: GITHUB_BASE
  },
  {
    id: "pizza",
    title: "Pizza Sales",
    category: ["SQL & Data", "Power BI"],
    metric: "Requêtes analytiques · DuckDB + Power BI",
    shortDesc: "Manipulation et exploration de données de ventes via DuckDB, SQL et Power BI.",
    description: "Manipulation et exploration de données de ventes de pizzas avec DuckDB et JupySQL : connexion à la base, création de la table à partir d'un fichier CSV, puis une série d'analyses de revenu, de volume et de saisonnalité restituées ensuite dans Power BI.",
    points: [
      "Connexion à DuckDB et configuration complète de JupySQL",
      "Création de la table pizza_sales à partir d'un fichier CSV",
      "Calcul du revenu total et de la vente totale par taille de pizza",
      "Nombre de pizzas vendues par mois",
      "Identification des 3 meilleures ventes par catégorie",
      "Identification des 5 pizzas les moins vendues et des 3 plus vendues",
      "Calcul du revenu total au deuxième semestre 2022"
    ],
    tags: ["SQL", "DuckDB", "JupySQL", "Power BI"],
    github: GITHUB_BASE
  },
  {
    id: "dbt-duckdb",
    title: "Projet dbt + DuckDB",
    category: "SQL & Data",
    metric: "Pipeline analytique · dbt + DuckDB",
    shortDesc: "Pipeline analytique moderne pour transformer des données de taxi en données propres et prêtes à l'analyse.",
    description: "Ce projet met en place un pipeline analytique basé sur dbt et DuckDB pour transformer des données brutes de taxi en un jeu de données propre, fiable et prêt à l'analyse.",
    points: [
      "Ingestion des données sources issues de fichiers Parquet",
      "Nettoyage et filtrage des enregistrements incohérents",
      "Standardisation des valeurs métier pour harmoniser les données",
      "Calcul d'indicateurs comme la durée du trajet et le mode de paiement",
      "Production d'un modèle transformé exploitable pour l'analyse"
    ],
    tags: ["SQL", "dbt", "DuckDB", "YAML"],
    github: GITHUB_BASE
  },
  {
    id: "bigmart",
    title: "BigMart Sales",
    category: ["Python", "Power BI"],
    metric: "Exploration de données & Dashboard Power BI",
    shortDesc: "Analyse exploratoire et dashboard Power BI sur les ventes d'un réseau de magasins.",
    description: "Traitement et analyse exploratoire de données de vente pour un réseau de magasins : gestion des valeurs manquantes, formatage des variables et analyse statistique, suivie d'un dashboard Power BI dynamique orienté performance par type et taille de magasin.",
    points: [
      "Gestion de valeurs manquantes et formatage des variables",
      "Analyse statistique et explorative",
      "Somme de vente par année d'établissement de magasin",
      "Performance de vente par type de magasin, taille de magasin et type de localisation",
      "Nombre de ventes par type d'article",
      "Dashboard dynamique Power BI (KPIs : Total Sales, AVG Sales, Item Count)"
    ],
    tags: ["Python", "Power BI", "EDA", "Data Cleaning"],
    github: GITHUB_BASE
  },
  {
    id: "rh",
    title: "Dashboard RH Employés",
    category: "Tableau",
    metric: "Suivi effectifs, salaires & performance",
    shortDesc: "Dashboard Ressources Humaines pour le suivi des indicateurs RH clés.",
    description: "Dashboard Power BI dédié au suivi des indicateurs Ressources Humaines : effectifs, salaires et performance, avec une analyse par département, par pays et des tendances d'embauche annuelles pour appuyer les décisions RH.",
    points: [
      "Suivi des KPI RH : effectifs, salaires, performances",
      "Analyse par département",
      "Analyse par pays",
      "Tendances d'embauche annuelles"
    ],
    tags: ["Power BI", "DAX", "Reporting RH"],
    github: GITHUB_BASE
  },
  {
    id: "diabete",
    title: "Modèle prédictif du diabète",
    category: "Python & ML",
    metric: "ML · GradientBoostingClassifier",
    shortDesc: "Classification supervisée avec GradientBoostingClassifier pour identifier les patients à risque.",
    description: "Modèle de classification supervisée basé sur GradientBoostingClassifier, entraîné pour identifier les patients à risque de diabète à partir de leurs données médicales, avec une accuracy de 84% en entraînement et 83% en test.",
    points: [
      "Modèle de classification pour identifier les patients à risque",
      "Algorithme : GradientBoostingClassifier",
      "Train Accuracy : 84%",
      "Test Accuracy : 83%"
    ],
    tags: ["Python", "Scikit-Learn", "GradientBoosting", "Classification"],
    github: GITHUB_BASE
  },
  {
    id: "clustering",
    title: "Segmentation clients",
    category: "Python & ML",
    metric: "Clustering non supervisé · K-Means",
    shortDesc: "Segmentation de posts Facebook publics en clusters d'interaction via K-Means.",
    description: "Projet de segmentation client non supervisée : des posts Facebook publics sont regroupés en clusters d'interaction à l'aide de l'algorithme K-Means, afin de faire ressortir des profils d'engagement distincts.",
    points: [
      "Segmentation de posts Facebook en clusters d'interaction",
      "Données publiques",
      "Modèle non supervisé (K-Means)"
    ],
    tags: ["Python", "K-Means", "Clustering", "Non supervisé"],
    github: GITHUB_BASE
  },
  {
    id: "basevente",
    title: "Analyse exploratoire de données — BaseVente",
    category: "Python",
    metric: "EDA · Python · Visualisation",
    shortDesc: "Nettoyage, exploration et visualisation des ventes pour identifier les produits et tendances les plus performants.",
    description: "Projet académique dédié à l'analyse exploratoire d'un jeu de données de ventes. Il couvre le nettoyage des données, la visualisation des tendances par région et par commercial, ainsi que l'identification des produits les plus vendus.",
    points: [
      "Nettoyage et préparation des données de ventes",
      "Exploration visuelle des tendances par région",
      "Analyse des performances par commercial",
      "Identification des produits les plus vendus"
    ],
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    github: GITHUB_BASE
  },
  {
    id: "mysql-ventes",
    title: "Exploration de bases de données relationnelles — MySQL",
    category: "SQL & Data",
    metric: "Requêtes avancées · MySQL",
    shortDesc: "Analyse de ventes 2021–2023, classements produits, meilleurs commerciaux et vues filtrées.",
    description: "Projet académique autour d'une base relationnelle MySQL. Il met en œuvre des requêtes avancées pour analyser les ventes 2021–2023, classer les produits, identifier les meilleurs commerciaux par chiffre d'affaires et créer des vues filtrées.",
    points: [
      "Requêtes avancées sur les ventes 2021-2023",
      "Classements des produits par performance",
      "Identification des meilleurs commerciaux par chiffre d'affaires",
      "Création de vues filtrées pour les produits au prix supérieur à 500",
      "Analyse des clients inactifs et des produits vendus en 2023"
    ],
    tags: ["SQL", "MySQL", "Requêtes avancées", "Vues"],
    github: GITHUB_BASE
  },
  {
    id: "kinmarche",
    title: "Dashboard dynamique des ventes — KinMarché",
    category: "Power BI",
    metric: "Power BI · KPI commerciaux",
    shortDesc: "Dashboard interactif de suivi des ventes et des indicateurs commerciaux par produit, région, ville et détaillant.",
    description: "Projet personnel de business intelligence basé sur Power BI. Le dashboard combine un nettoyage de données via Power Query avec des vues interactives permettant de suivre les KPI commerciaux et d'analyser les performances par produit, région, ville et détaillant.",
    points: [
      "Nettoyage des données avec Power Query",
      "Tableau de bord interactif pour le suivi des KPI commerciaux",
      "Analyse des tendances par produit",
      "Analyse des tendances par région, ville et détaillant"
    ],
    tags: ["Power BI", "Power Query", "DAX", "Dashboard"],
    github: GITHUB_BASE
  }
];

const timelineData = [
  {
    year: "2025",
    title: "Certificate — Data Science",
    sub: "Statistics Of Home"
  },
  {
    year: "2025",
    title: "Certificate — Statistiques et Probabilités",
    sub: "Eureka Services"
  },
  {
    year: "2025",
    title: "Certificate — Python, SQL, Excel, Power BI, Tableau, SPSS",
    sub: "Eureka Services"
  },
  {
    year: "2022",
    title: "Licence en Civilisation — Économie et Politique de l'Allemagne",
    sub: "Université de Yaoundé I"
  }
];

/* ================= RENDER: SKILLS ================= */
const skillGroupsEl = document.getElementById("skillGroups");
skillGroups.forEach(group => {
  const wrap = document.createElement("div");
  wrap.className = "skill-group";
  wrap.innerHTML = `
    <div class="skill-group-label">${group.label}</div>
    <div class="tag-row">${group.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  `;
  skillGroupsEl.appendChild(wrap);
});

/* ================= RENDER: FILTERS ================= */
const filterRow = document.getElementById("filterRow");
let activeCategory = "Tous";

categories.forEach(cat => {
  const btn = document.createElement("button");
  btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
  btn.textContent = cat;
  btn.addEventListener("click", () => {
    activeCategory = cat;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects();
  });
  filterRow.appendChild(btn);
});

/* ================= RENDER: PROJECTS ================= */
const projectGrid = document.getElementById("projectGrid");

function getProjectCategories(project) {
  return Array.isArray(project.category) ? project.category : [project.category];
}

function renderProjects() {
  projectGrid.innerHTML = "";
  const list = activeCategory === "Tous"
    ? projects
    : projects.filter(project => getProjectCategories(project).includes(activeCategory));

  list.forEach((project, i) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.animationDelay = `${i * 0.05}s`;
    const categoryLabel = getProjectCategories(project).join(" · ");
    card.innerHTML = `
      <div class="card-top">
        <span class="card-category">${categoryLabel}</span>
      </div>
      <div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-metric">${project.metric}</p>
      </div>
      <p class="card-desc">${project.shortDesc}</p>
      <div class="card-tags">${project.tags.slice(0, 3).map(t => `<span>${t}</span>`).join("")}</div>
      <div class="card-cta">
        <span>Voir le détail</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
    `;
    card.addEventListener("click", () => openPanel(project));
    projectGrid.appendChild(card);
  });
}
renderProjects();

/* ================= RENDER: TIMELINE ================= */
const timelineEl = document.getElementById("timeline");
timelineData.forEach(item => {
  const row = document.createElement("div");
  row.className = "tl-item";
  row.innerHTML = `
    <div class="tl-dot-col">
      <div class="tl-dot"></div>
      <div class="tl-line"></div>
    </div>
    <div>
      <span class="tl-year">${item.year}</span>
      <div class="tl-title">${item.title}</div>
      <p class="tl-sub">${item.sub}</p>
    </div>
  `;
  timelineEl.appendChild(row);
});

/* ================= DETAIL PANEL ================= */
const panelOverlay = document.getElementById("panelOverlay");
const detailPanel = document.getElementById("detailPanel");
const panelContent = document.getElementById("panelContent");
const panelClose = document.getElementById("panelClose");

function openPanel(project) {
  panelContent.innerHTML = `
    <span class="panel-category">${project.category}</span>
    <h3 class="panel-title">${project.title}</h3>
    <div class="panel-metric">${project.metric}</div>

    <div class="panel-section-label">Description</div>
    <p class="panel-desc">${project.description}</p>

    <div class="panel-section-label">Points clés</div>
    <ul class="panel-points">${project.points.map(p => `<li>${p}</li>`).join("")}</ul>

    <div class="panel-section-label">Compétences liées</div>
    <div class="panel-tags">${project.tags.map(t => `<span>${t}</span>`).join("")}</div>

    <a href="${project.github}" target="_blank" rel="noopener" class="panel-github">
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 00-2.53 15.6c.4.07.55-.17.55-.38v-1.36c-2.22.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.71 1.23 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.98 0-.88.31-1.6.83-2.16-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.83a7.5 7.5 0 014 0c1.53-1.05 2.2-.83 2.2-.83.44 1.11.16 1.93.08 2.13.52.56.82 1.28.82 2.16 0 3.1-1.87 3.78-3.65 3.98.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0010 2z" fill="currentColor"/></svg>
      <span>Voir sur GitHub</span>
    </a>
  `;
  detailPanel.classList.add("open");
  detailPanel.setAttribute("aria-hidden", "false");
  panelOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closePanel() {
  detailPanel.classList.remove("open");
  detailPanel.setAttribute("aria-hidden", "true");
  panelOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

panelClose.addEventListener("click", closePanel);
panelOverlay.addEventListener("click", closePanel);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePanel();
});

/* ================= NAV: mobile toggle + scroll style ================= */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-mobile a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

/* ================= HERO: profile photo upload ================= */
const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");

photoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    profilePhoto.classList.add("has-photo");
    let img = profilePhoto.querySelector("img");
    if (!img) {
      img = document.createElement("img");
      profilePhoto.prepend(img);
    }
    img.src = ev.target.result;
    img.alt = "Photo de profil";
  };
  reader.readAsDataURL(file);
});

/* Trigger hero animations once, on load */
window.addEventListener("load", () => { });

/* ================= SCROLL REVEAL ================= */
const revealTargets = document.querySelectorAll(".info-card, .skill-group, .project-card, .tl-item");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeReveal() {
  document.querySelectorAll(".info-card, .skill-group, .project-card, .tl-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity .5s ease, transform .5s ease";
    io.observe(el);
  });
}
// run after initial render
setTimeout(observeReveal, 0);
