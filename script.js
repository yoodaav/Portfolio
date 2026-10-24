/* ==========================================================
   Portfolio Nuit (moderne) : données FR/EN, rendu, animations
   Pour modifier un texte : chercher la clé dans UI ou dans projects.
   ========================================================== */

const GITHUB_BASE = "https://github.com/yoodaav";
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ================= TEXTES DE L'INTERFACE ================= */
const UI = {
  fr: {
    toTop: "Retour en haut", mainNav: "Navigation principale", close: "Fermer le détail du projet",
    nav: { profil: "Profil", stack: "Stack", projets: "Projets", parcours: "Parcours", contact: "Me contacter" },
    status: "Ouvert aux opportunités en Data, BI et Cloud",
    iam: "Je suis",
    roles: ["Data Analyst", "Analytics Engineer", "Data Scientist junior"],
    heroSub: "Des données brutes aux décisions business : je collecte, nettoie, modélise et visualise la donnée pour en tirer des insights actionnables.",
    cv: "Télécharger mon CV",
    seeProjects: "Voir mes projets",
    portraitAlt: "Portrait de NFONRANGOU NJOYA Zakariaou, bras croisés, chemise violette",
    floatA: "accuracy test",
    eyebrow: { profil: "Profil", stack: "Stack technique", projets: "Projets", parcours: "Parcours", contact: "Contact" },
    profilTitle: "Chaque dataset raconte une histoire.",
    profilText1: "Data Analyst en reconversion, je construis des compétences complémentaires : collecte et structuration de données, analyse statistique rigoureuse, data visualization percutante et machine learning appliqué à des problèmes concrets.",
    profilText2: "Python, R, SQL, Power BI ou Tableau : toujours le même objectif, rendre la donnée utile, lisible et actionnable. Je recherche un stage dans une équipe stimulante, pour apprendre et contribuer à des projets à fort impact.",
    facts: { loc: "Localisation", locV: "Douala, Cameroun", seek: "Recherche", seekV: "Stage en Data Analyse, Data Science ou BI", stack: "Stack clé", lang: "Langues", langV: "Français courant, anglais et allemand intermédiaires" },
    stats: { projects: "projets réalisés", certs: "certificats obtenus", cloud: "clouds : AWS, Azure, GCP", langs: "langues parlées" },
    stackTitle: "De la collecte au dashboard.",
    projTitle: "Des données, des décisions.",
    projLead: n => `${n} projets académiques et personnels. Cliquez sur une carte pour le détail.`,
    filterAria: "Filtrer les projets par technologie",
    open: t => `Ouvrir le détail : ${t}`,
    desc: "Description", points: "Points clés", skills: "Compétences liées", github: "Voir sur GitHub",
    parcoursTitle: "Formation et certifications.",
    contactTitle: "Parlons de votre prochain jeu de données.",
    contactLead: "Disponible pour un stage en Data Analyse, Data Science ou Business Intelligence. N'hésitez pas à me contacter.",
    footer: "NFONRANGOU NJOYA Zakariaou, Data Analyst & Analytics Engineer",
    switchLabel: "Passer en anglais"
  },
  en: {
    toTop: "Back to top", mainNav: "Main navigation", close: "Close project details",
    nav: { profil: "About", stack: "Stack", projets: "Projects", parcours: "Journey", contact: "Contact me" },
    status: "Open to opportunities in Data, BI and Cloud",
    iam: "I'm a",
    roles: ["Data Analyst", "Analytics Engineer", "Junior Data Scientist"],
    heroSub: "From raw data to business decisions: I collect, clean, model and visualize data to surface actionable insights.",
    cv: "Download my CV",
    seeProjects: "See my projects",
    portraitAlt: "Portrait of NFONRANGOU NJOYA Zakariaou, arms crossed, purple shirt",
    floatA: "test accuracy",
    eyebrow: { profil: "About", stack: "Tech stack", projets: "Projects", parcours: "Journey", contact: "Contact" },
    profilTitle: "Every dataset tells a story.",
    profilText1: "A career-changing Data Analyst, I've built complementary skills: data collection and structuring, rigorous statistical analysis, impactful data visualization and machine learning applied to real problems.",
    profilText2: "Python, R, SQL, Power BI or Tableau: always the same goal, making data useful, readable and actionable. I'm looking for an internship in a driven team where I can keep learning and contribute to high-impact projects.",
    facts: { loc: "Location", locV: "Douala, Cameroon", seek: "Looking for", seekV: "Internship in Data Analysis, Data Science or BI", stack: "Core stack", lang: "Languages", langV: "Fluent French, intermediate English and German" },
    stats: { projects: "projects shipped", certs: "certificates earned", cloud: "clouds: AWS, Azure, GCP", langs: "languages spoken" },
    stackTitle: "From collection to dashboard.",
    projTitle: "Data in, decisions out.",
    projLead: n => `${n} academic and personal projects. Click a card for the details.`,
    filterAria: "Filter projects by technology",
    open: t => `Open details: ${t}`,
    desc: "Overview", points: "Key points", skills: "Related skills", github: "View on GitHub",
    parcoursTitle: "Education and certifications.",
    contactTitle: "Let's talk about your next dataset.",
    contactLead: "Available for an internship in Data Analysis, Data Science or Business Intelligence. Feel free to reach out.",
    footer: "NFONRANGOU NJOYA Zakariaou, Data Analyst & Analytics Engineer",
    switchLabel: "Switch to French"
  }
};

/* ================= DONNÉES ================= */
const tools = ["Python", "SQL", "R", "Power BI", "Tableau", "dbt", "DuckDB", "Snowflake", "PySpark", "Scikit-Learn", "AWS", "Azure", "Google Cloud", "PostgreSQL", "MongoDB", "Excel"];

const skillGroups = [
  {
    icon: "code", label: { fr: "Langages et bases de données", en: "Languages and databases" },
    tags: ["Python (NumPy, Pandas, PySpark)", "R", "SQL", "MongoDB"]
  },
  {
    icon: "brain", label: { fr: "Statistiques et machine learning", en: "Statistics and machine learning" },
    tags: [{ fr: "Statistiques descriptives et inférentielles", en: "Descriptive and inferential statistics" }, { fr: "Tests statistiques", en: "Statistical testing" }, { fr: "Analyses prédictives", en: "Predictive analytics" }, "Scikit-Learn", "Flask", "FastAPI", { fr: "Supervisé / Non supervisé", en: "Supervised / Unsupervised" }]
  },
  {
    icon: "chart", label: { fr: "Visualisation et reporting", en: "Visualization and reporting" },
    tags: ["Power BI (DAX, dashboards)", "Tableau Public", "Matplotlib", "Seaborn", "ggplot2"]
  },
  {
    icon: "broom", label: { fr: "Nettoyage et transformation", en: "Cleaning and transformation" },
    tags: ["Pandas", "PySpark", "dbt (Data Build Tool)", "Power Query"]
  },
  {
    icon: "flow", label: { fr: "Analytics engineering", en: "Analytics engineering" },
    tags: ["dbt + DuckDB", "dbt + PostgreSQL", "dbt + Snowflake"]
  },
  {
    icon: "cloud", label: { fr: "Cloud data engineering", en: "Cloud data engineering" },
    tags: ["ETL / ELT", "AWS (S3, Glue, Lambda, Redshift, Athena)", "Azure (Cloud Storage, Data Factory,Databricks, Synapse Analytics)", "Google Cloud Platform (Cloud Storage, BigQuery)"]
  },
  {
    icon: "tools", label: { fr: "Outils", en: "Tools" },
    tags: ["VS Code", "Google Colab", "Anaconda", "MySQL", "PostgreSQL", "SQL Server", "Snowflake", "DuckDB", "RStudio", "Office 365", "SPSS"]
  }
];

const categories = ["Tous", "Python", "Python & ML", "Power BI", "SQL", "dbt"];
const catLabel = { en: { "Tous": "All" } };

const projects = [
  {
    id: "healthcare", category: "Python", github: "https://github.com/yoodaav/Healthcare_Analyse",
    tags: { fr: ["Python", "Pandas", "Feature Engineering", "EDA"] },
    fr: {
      title: "Data_Driven_Healthcare", metric: "Exploration et feature engineering",
      shortDesc: "Exploration de données et feature engineering sur un jeu de données hospitalier.",
      description: "Traitement et analyse exploratoire de données hospitalières : exploration et feature engineering sur les variables, puis étude croisée entre pathologie principale, caractéristiques socio-démographiques, genre du patient et type d'admission (ex : urgence). Le projet se termine par le calcul du prix total facturé par pathologie pour l'hôpital.",
      points: ["Exploration de données et feature engineering sur les variables", "Relation entre pathologie principale et caractéristiques socio-démographiques", "Relation entre pathologie principale et genre (femme et homme)", "Relation entre pathologie principale et type d'admission (ex : urgence)", "Calcul du prix total par pathologie de l'hôpital"]
    },
    en: {
      title: "Data_Driven_Healthcare", metric: "Exploration and feature engineering",
      shortDesc: "Data exploration and feature engineering on a hospital dataset.",
      description: "Processing and exploratory analysis of hospital data: exploration and feature engineering, then a cross-study of primary diagnosis against socio-demographics, patient gender and admission type (e.g. emergency). The project ends by computing the total billed price per diagnosis for the hospital.",
      points: ["Data exploration and feature engineering", "Primary diagnosis vs socio-demographic characteristics", "Primary diagnosis vs gender (female and male)", "Primary diagnosis vs admission type (e.g. emergency)", "Total price per diagnosis for the hospital"]
    }
  },
  {
    id: "pizza", category: ["SQL", "Power BI"], github: "https://github.com/yoodaav/Analyse__PizzaSales",
    tags: { fr: ["SQL", "DuckDB", "JupySQL", "Power BI"] },
    fr: {
      title: "Pizza Sales", metric: "Requêtes analytiques · DuckDB + Power BI",
      shortDesc: "Manipulation et exploration de données de ventes via DuckDB, SQL et Power BI.",
      description: "Manipulation et exploration de données de ventes de pizzas avec DuckDB et JupySQL : connexion à la base, création de la table à partir d'un fichier CSV, puis une série d'analyses de revenu, de volume et de saisonnalité restituées ensuite dans Power BI.",
      points: ["Connexion à DuckDB et configuration complète de JupySQL", "Création de la table pizza_sales à partir d'un fichier CSV", "Calcul du revenu total et de la vente totale par taille de pizza", "Nombre de pizzas vendues par mois", "Identification des 3 meilleures ventes par catégorie", "Identification des 5 pizzas les moins vendues et des 3 plus vendues", "Calcul du revenu total au deuxième semestre 2022"]
    },
    en: {
      title: "Pizza Sales", metric: "Analytical queries · DuckDB + Power BI",
      shortDesc: "Sales data wrangling and exploration with DuckDB, SQL and Power BI.",
      description: "Wrangling and exploring pizza sales data with DuckDB and JupySQL: database connection, table creation from a CSV file, then a series of revenue, volume and seasonality analyses, visualized in Power BI.",
      points: ["DuckDB connection and full JupySQL setup", "pizza_sales table created from a CSV file", "Total revenue and total sales by pizza size", "Pizzas sold per month", "Top 3 sellers per category", "Bottom 5 and top 3 pizzas by sales", "Total revenue for H2 2022"]
    }
  },
  {
    id: "dbt-duckdb", category: ["SQL", "dbt"], github: GITHUB_BASE,
    tags: { fr: ["SQL", "dbt", "DuckDB", "YAML"] },
    fr: {
      title: "Projet dbt + DuckDB", metric: "Pipeline analytique · dbt + DuckDB",
      shortDesc: "Pipeline analytique moderne pour transformer des données de taxi en données propres et prêtes à l'analyse.",
      description: "Ce projet met en place un pipeline analytique basé sur dbt et DuckDB pour transformer des données brutes de taxi en un jeu de données propre, fiable et prêt à l'analyse.",
      points: ["Ingestion des données sources issues de fichiers Parquet", "Nettoyage et filtrage des enregistrements incohérents", "Standardisation des valeurs métier pour harmoniser les données", "Calcul d'indicateurs comme la durée du trajet et le mode de paiement", "Production d'un modèle transformé exploitable pour l'analyse"]
    },
    en: {
      title: "dbt + DuckDB project", metric: "Analytics pipeline · dbt + DuckDB",
      shortDesc: "Modern analytics pipeline turning raw taxi data into clean, analysis-ready data.",
      description: "This project builds an analytics pipeline with dbt and DuckDB to transform raw taxi data into a clean, reliable, analysis-ready dataset.",
      points: ["Ingestion of source data from Parquet files", "Cleaning and filtering of inconsistent records", "Standardization of business values", "Metrics such as trip duration and payment type", "Transformed model ready for analysis"]
    }
  },
  {
    id: "bigmart", category: ["Python", "Power BI"], github: "https://github.com/yoodaav/Analyse-du-Dataset-Bigmart",
    tags: { fr: ["Python", "Power BI", "EDA", "Data Cleaning"] },
    fr: {
      title: "BigMart Sales", metric: "Exploration de données et dashboard Power BI",
      shortDesc: "Analyse exploratoire et dashboard Power BI sur les ventes d'un réseau de magasins.",
      description: "Traitement et analyse exploratoire de données de vente pour un réseau de magasins : gestion des valeurs manquantes, formatage des variables et analyse statistique, suivie d'un dashboard Power BI dynamique orienté performance par type et taille de magasin.",
      points: ["Gestion de valeurs manquantes et formatage des variables", "Analyse statistique et exploratoire", "Somme de vente par année d'établissement de magasin", "Performance de vente par type de magasin, taille de magasin et type de localisation", "Nombre de ventes par type d'article", "Dashboard dynamique Power BI (KPIs : Total Sales, AVG Sales, Item Count)"]
    },
    en: {
      title: "BigMart Sales", metric: "Data exploration and Power BI dashboard",
      shortDesc: "Exploratory analysis and Power BI dashboard on a retail chain's sales.",
      description: "Processing and exploratory analysis of sales data for a store network: missing values, variable formatting and statistical analysis, followed by a dynamic Power BI dashboard focused on performance by store type and size.",
      points: ["Missing values handling and variable formatting", "Statistical and exploratory analysis", "Sales by store establishment year", "Sales performance by store type, size and location type", "Sales count by item type", "Dynamic Power BI dashboard (KPIs: Total Sales, AVG Sales, Item Count)"]
    }
  },
  {
    id: "rh", category: "Power BI", github: GITHUB_BASE,
    tags: { fr: ["Power BI", "DAX", "Reporting RH"], en: ["Power BI", "DAX", "HR reporting"] },
    fr: {
      title: "Dashboard RH Employés", metric: "Suivi des effectifs, salaires et performance",
      shortDesc: "Dashboard Ressources Humaines pour le suivi des indicateurs RH clés.",
      description: "Dashboard Power BI dédié au suivi des indicateurs Ressources Humaines : effectifs, salaires et performance, avec une analyse par département, par pays et des tendances d'embauche annuelles pour appuyer les décisions RH.",
      points: ["Suivi des KPI RH : effectifs, salaires, performances", "Analyse par département", "Analyse par pays", "Tendances d'embauche annuelles"]
    },
    en: {
      title: "HR Employee Dashboard", metric: "Headcount, salary and performance tracking",
      shortDesc: "Human Resources dashboard tracking key HR indicators.",
      description: "Power BI dashboard dedicated to HR indicators: headcount, salaries and performance, with analysis by department, by country and yearly hiring trends to support HR decisions.",
      points: ["HR KPIs: headcount, salaries, performance", "Analysis by department", "Analysis by country", "Yearly hiring trends"]
    }
  },
  {
    id: "diabete", category: "Python & ML", github: GITHUB_BASE,
    tags: { fr: ["Python", "Scikit-Learn", "GradientBoosting", "Classification"] },
    fr: {
      title: "Modèle prédictif du diabète", metric: "ML · GradientBoostingClassifier",
      shortDesc: "Classification supervisée avec GradientBoostingClassifier pour identifier les patients à risque.",
      description: "Modèle de classification supervisée basé sur GradientBoostingClassifier, entraîné pour identifier les patients à risque de diabète à partir de leurs données médicales, avec une accuracy de 84 % en entraînement et 83 % en test.",
      points: ["Modèle de classification pour identifier les patients à risque", "Algorithme : GradientBoostingClassifier", "Train accuracy : 84 %", "Test accuracy : 83 %"]
    },
    en: {
      title: "Diabetes prediction model", metric: "ML · GradientBoostingClassifier",
      shortDesc: "Supervised classification with GradientBoostingClassifier to flag at-risk patients.",
      description: "Supervised classification model based on GradientBoostingClassifier, trained to identify patients at risk of diabetes from their medical data, with 84% training accuracy and 83% test accuracy.",
      points: ["Classification model to identify at-risk patients", "Algorithm: GradientBoostingClassifier", "Train accuracy: 84%", "Test accuracy: 83%"]
    }
  },
  {
    id: "clustering", category: "Python & ML", github: GITHUB_BASE,
    tags: { fr: ["Python", "K-Means", "Clustering", "Non supervisé"], en: ["Python", "K-Means", "Clustering", "Unsupervised"] },
    fr: {
      title: "Segmentation clients", metric: "Clustering non supervisé · K-Means",
      shortDesc: "Segmentation de posts Facebook publics en clusters d'interaction via K-Means.",
      description: "Projet de segmentation client non supervisée : des posts Facebook publics sont regroupés en clusters d'interaction à l'aide de l'algorithme K-Means, afin de faire ressortir des profils d'engagement distincts.",
      points: ["Segmentation de posts Facebook en clusters d'interaction", "Données publiques", "Modèle non supervisé (K-Means)"]
    },
    en: {
      title: "Customer segmentation", metric: "Unsupervised clustering · K-Means",
      shortDesc: "Segmenting public Facebook posts into engagement clusters with K-Means.",
      description: "Unsupervised segmentation project: public Facebook posts are grouped into engagement clusters with K-Means to surface distinct engagement profiles.",
      points: ["Facebook posts segmented into engagement clusters", "Public data", "Unsupervised model (K-Means)"]
    }
  },
  {
    id: "basevente", category: "Python", github: "https://github.com/yoodaav/Analyse_BaseVente",
    tags: { fr: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"] },
    fr: {
      title: "Analyse exploratoire de données : BaseVente", metric: "EDA · Python · Visualisation",
      shortDesc: "Nettoyage, exploration et visualisation des ventes pour identifier les produits et tendances les plus performants.",
      description: "Projet académique dédié à l'analyse exploratoire d'un jeu de données de ventes. Il couvre le nettoyage des données, la visualisation des tendances par région et par commercial, ainsi que l'identification des produits les plus vendus.",
      points: ["Nettoyage et préparation des données de ventes", "Exploration visuelle des tendances par région", "Analyse des performances par commercial", "Identification des produits les plus vendus"]
    },
    en: {
      title: "Exploratory data analysis: BaseVente", metric: "EDA · Python · Visualization",
      shortDesc: "Cleaning, exploring and visualizing sales to surface top products and trends.",
      description: "Academic project on exploratory analysis of a sales dataset: data cleaning, trend visualization by region and sales rep, and identification of best-selling products.",
      points: ["Sales data cleaning and preparation", "Visual exploration of trends by region", "Performance analysis by sales rep", "Best-selling products identified"]
    }
  },
  {
    id: "mysql-ventes", category: "SQL", github: "https://github.com/yoodaav/Analyse_de_donn-es_relationnelles_avec_MySQL",
    tags: { fr: ["SQL", "MySQL", "Requêtes avancées"], en: ["SQL", "MySQL", "Advanced queries"] },
    fr: {
      title: "Exploration de bases relationnelles : MySQL", metric: "Requêtes avancées · MySQL",
      shortDesc: "Analyse de ventes 2021–2023, classements produits, meilleurs commerciaux et vues filtrées.",
      description: "Projet académique autour d'une base relationnelle MySQL. Il met en œuvre des requêtes avancées pour analyser les ventes 2021–2023, classer les produits, identifier les meilleurs commerciaux par chiffre d'affaires et créer des vues filtrées.",
      points: ["Requêtes avancées sur les ventes 2021-2023", "Classements des produits par performance", "Identification des meilleurs commerciaux par chiffre d'affaires", "Création de vues filtrées pour les produits au prix supérieur à 500", "Analyse des clients inactifs et des produits vendus en 2023"]
    },
    en: {
      title: "Relational database exploration: MySQL", metric: "Advanced queries · MySQL",
      shortDesc: "2021–2023 sales analysis, product rankings, top sales reps and filtered views.",
      description: "Academic project on a MySQL relational database, using advanced queries to analyze 2021–2023 sales, rank products, identify top sales reps by revenue and build filtered views.",
      points: ["Advanced queries on 2021-2023 sales", "Product performance rankings", "Top sales reps by revenue", "Filtered views for products priced above 500", "Inactive customers and products sold in 2023"]
    }
  },
  {
    id: "kinmarche", category: "Power BI", github: "https://github.com/yoodaav/Analyses_KinMarche",
    tags: { fr: ["Power BI", "Power Query", "DAX", "Dashboard"] },
    fr: {
      title: "Dashboard dynamique des ventes : KinMarché", metric: "Power BI · KPI commerciaux",
      shortDesc: "Dashboard interactif de suivi des ventes et des indicateurs commerciaux par produit, région, ville et détaillant.",
      description: "Projet personnel de business intelligence basé sur Power BI. Le dashboard combine un nettoyage de données via Power Query avec des vues interactives permettant de suivre les KPI commerciaux et d'analyser les performances par produit, région, ville et détaillant.",
      points: ["Nettoyage des données avec Power Query", "Tableau de bord interactif pour le suivi des KPI commerciaux", "Analyse des tendances par produit", "Analyse des tendances par région, ville et détaillant"]
    },
    en: {
      title: "Dynamic sales dashboard: KinMarché", metric: "Power BI · Sales KPIs",
      shortDesc: "Interactive dashboard tracking sales and KPIs by product, region, city and retailer.",
      description: "Personal business intelligence project in Power BI, combining Power Query data cleaning with interactive views to track sales KPIs and analyze performance by product, region, city and retailer.",
      points: ["Data cleaning with Power Query", "Interactive dashboard tracking sales KPIs", "Trend analysis by product", "Trend analysis by region, city and retailer"]
    }
  },
  {
    id: "uci-credit-card", category: "Python & ML", github: "https://github.com/yoodaav/Prediction_Defaut_de_Paiement",
    tags: { fr: ["Python", "Pandas", "Scikit-Learn", "LightGBM", "SMOTE", "EDA"] },
    fr: {
      title: "UCI Credit Card : défaut de paiement", metric: "Nettoyage, EDA et apprentissage supervisé",
      shortDesc: "Nettoyage, EDA et modélisation (LightGBM) du jeu UCI Credit Card pour prédire le défaut de paiement.",
      description: "Projet en deux notebooks : nettoyage/EDA puis modélisation. Prépare le jeu (filtrage des catégories invalides, recodage, EDA) et compare plusieurs modèles avant de retenir et sauvegarder un LightGBM optimisé.",
      points: ["Chargement et inspection du jeu brut `UCI_Credit_Card.csv`", "Nettoyage des catégories invalides et recodage (`EDUCATION`, `MARRIAGE`, `SEX`, `PAY_*`)", "Analyse exploratoire : distributions, heatmaps", "Séparation train/test stratifiée et comparaison de modèles (Logistic, RF, AdaBoost, XGBoost, LightGBM)", "Gestion du déséquilibre (RandomUnderSampler, SMOTE) et optimisation des hyperparamètres", "Modèle final retenu : LightGBM optimisé, sauvegardé sous `best_lightgbm_model.pkl`, avec 78,2 % d'accuracy en test (contre 83,7 % en entraînement) : un écart de 5,5 % qui témoigne d'un sur-apprentissage léger et sous contrôle"]
    },
    en: {
      title: "UCI Credit Card: payment default", metric: "Cleaning, EDA and supervised learning",
      shortDesc: "Cleaning, EDA and LightGBM modeling of UCI Credit Card data to predict payment default.",
      description: "Two-notebook project: cleaning/EDA, then modeling. Prepares the dataset (invalid categories filtered, recoding, EDA) and compares several models before keeping and saving a tuned LightGBM.",
      points: ["Loading and inspecting the raw `UCI_Credit_Card.csv`", "Cleaning invalid categories and recoding (`EDUCATION`, `MARRIAGE`, `SEX`, `PAY_*`)", "Exploratory analysis: distributions, heatmaps", "Stratified train/test split and model comparison (Logistic, RF, AdaBoost, XGBoost, LightGBM)", "Class imbalance handling (RandomUnderSampler, SMOTE) and hyperparameter tuning", "Final model: tuned LightGBM saved as `best_lightgbm_model.pkl`, 78.2% test accuracy (vs 83.7% train), a 5.5-point gap showing mild, controlled overfitting"]
    }
  }
];

const timelineData = [
  { cert: true, year: { fr: "Novembre 2025", en: "November 2025" }, title: { fr: "Data Science", en: "Data Science" }, sub: "Statistics Of Home" },
  { cert: true, year: { fr: "Septembre 2025", en: "September 2025" }, title: { fr: "Cloud et Big Data pour l'analyse de données", en: "Cloud and Big Data for data analysis" }, sub: "Eureka Services" },
  { cert: true, year: { fr: "Mars - Octobre 2025", en: "March - October 2025" }, title: { fr: "Intelligence artificielle et analyse de données", en: "Artificial intelligence and data analysis" }, sub: "Fitech Live" },
  { cert: true, year: { fr: "Mars - Juin 2025", en: "March - June 2025" }, title: { fr: "Python, SQL, Excel, Power BI, Tableau, SPSS", en: "Python, SQL, Excel, Power BI, Tableau, SPSS" }, sub: "Eureka Services" },
  { cert: true, year: { fr: "Mars 2025", en: "March 2025" }, title: { fr: "Statistiques et probabilités", en: "Statistics and probability" }, sub: "Eureka Services" },
  { cert: false, year: { fr: "2022", en: "2022" }, title: { fr: "Licence en Civilisation : économie et politique de l'Allemagne", en: "Bachelor's in Civilization: German economics and politics" }, sub: { fr: "Université de Yaoundé I", en: "University of Yaoundé I" } }
];

/* ================= OUTILS ================= */
let lang = document.documentElement.lang === "en" ? "en" : "fr";
const t = () => UI[lang];
const tr = v => (v && typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.fr) : v);
const get = (obj, path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = s => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");
const cats = p => (Array.isArray(p.category) ? p.category : [p.category]);
const cat = c => (catLabel[lang] && catLabel[lang][c]) || c;
const pj = p => p[lang] || p.fr;
const ptags = p => p.tags[lang] || p.tags.fr;

const ICON_ARROW = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 12L12 4M12 4H5.5M12 4v6.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const ICON_DIAMOND = `<svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0l6 6-6 6-6-6z" fill="currentColor"/></svg>`;
const SK = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
const ICONS = {
  code: `<svg viewBox="0 0 24 24" ${SK}><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>`,
  brain: `<svg viewBox="0 0 24 24" ${SK}><circle cx="6" cy="7" r="2"/><circle cx="18" cy="7" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="12" cy="9" r="1.2"/><path d="M7.7 8.2L11 9M16.3 8.2L13 9M12 10.2v4.8M7 9l4 6.5M17 9l-4 6.5"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" ${SK}><path d="M4 20h16M7 16v-5M12 16V6M17 16v-8"/></svg>`,
  broom: `<svg viewBox="0 0 24 24" ${SK}><path d="M4 6h16M7 12h10M10 18h4"/></svg>`,
  flow: `<svg viewBox="0 0 24 24" ${SK}><rect x="3" y="4" width="6" height="5" rx="1.5"/><rect x="15" y="4" width="6" height="5" rx="1.5"/><rect x="9" y="15" width="6" height="5" rx="1.5"/><path d="M6 9v2a2 2 0 002 2h8a2 2 0 002-2V9M12 13v2"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" ${SK}><path d="M7 18a4 4 0 01-.6-7.96A6 6 0 0118 9a4.5 4.5 0 01-1 9z"/></svg>`,
  tools: `<svg viewBox="0 0 24 24" ${SK}><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 9l3 2.5L7 14M12 14h5"/></svg>`
};

/* ================= BANDEAU D'OUTILS ================= */
(function buildMarquee() {
  const track = $("#marquee");
  const group = () => {
    const g = document.createElement("div");
    g.className = "marquee-group";
    g.innerHTML = tools.map(x => `<span class="marquee-item"><span>${esc(x)}</span>${ICON_DIAMOND}</span>`).join("");
    return g;
  };
  track.append(group(), group());
})();

/* ================= RENDUS DÉPENDANT DE LA LANGUE ================= */
function renderSkills() {
  $("#skills").innerHTML = skillGroups.map((g, i) => `
    <article class="card skill spot ${i === 1 || i === 5 ? "skill-wide" : ""}">
      <span class="skill-ico" aria-hidden="true">${ICONS[g.icon]}</span>
      <h3 class="skill-label">${esc(tr(g.label))}</h3>
      <div class="chips">${g.tags.map(x => `<span class="chip">${esc(tr(x))}</span>`).join("")}</div>
    </article>`).join("");
  bindSpot($("#skills"));
}

const filtersEl = $("#filters");
const rowsEl = $("#rows");
let activeCat = "Tous";
let rowsVisible = false;

function renderFilters() {
  filtersEl.setAttribute("aria-label", t().filterAria);
  filtersEl.innerHTML = `<span class="filter-pill" aria-hidden="true"></span>` + categories.map(c => {
    const n = c === "Tous" ? projects.length : projects.filter(p => cats(p).includes(c)).length;
    return `<button type="button" class="filter${c === activeCat ? " active" : ""}" data-cat="${esc(c)}" aria-pressed="${c === activeCat}">${esc(cat(c))}<sup>${n}</sup></button>`;
  }).join("");
  $$(".filter", filtersEl).forEach(b => b.addEventListener("click", () => {
    activeCat = b.dataset.cat;
    $$(".filter", filtersEl).forEach(x => { const on = x === b; x.classList.toggle("active", on); x.setAttribute("aria-pressed", on); });
    movePill();
    renderProjects();
  }));
  requestAnimationFrame(movePill);
}

function movePill() {
  const a = $(".filter.active", filtersEl);
  const pill = $(".filter-pill", filtersEl);
  if (!a || !pill) return;
  pill.style.width = `${a.offsetWidth}px`;
  pill.style.height = `${a.offsetHeight}px`;
  pill.style.transform = `translate(${a.offsetLeft}px, ${a.offsetTop}px)`;
}
window.addEventListener("resize", movePill);

function renderProjects() {
  const list = activeCat === "Tous" ? projects : projects.filter(p => cats(p).includes(activeCat));
  rowsEl.classList.remove("in");
  rowsEl.innerHTML = "";
  list.forEach((p, i) => {
    const d = pj(p);
    const li = document.createElement("li");
    li.style.setProperty("--i", i);
    li.innerHTML = `
      <button type="button" class="pcard spot" aria-label="${esc(t().open(d.title))}">
        <span class="pcard-top">
          <span class="pcard-cats">${cats(p).map(c => `<span>${esc(c)}</span>`).join("")}</span>
          <i class="go" aria-hidden="true">${ICON_ARROW}</i>
        </span>
        <span class="pcard-title">${fmt(d.title)}</span>
        <span class="pcard-desc">${fmt(d.shortDesc)}</span>
        <span class="pcard-metric">${fmt(d.metric)}</span>
      </button>`;
    const btn = $(".pcard", li);
    btn.addEventListener("click", () => openPanel(p, btn));
    rowsEl.appendChild(li);
  });
  bindSpot(rowsEl);
  if (rowsVisible) { void rowsEl.offsetWidth; rowsEl.classList.add("in"); }
}

function renderTimeline() {
  $("#tlList").innerHTML = timelineData.map(item => `
    <li class="tl-item">
      <span class="tl-dot" aria-hidden="true"></span>
      <span class="tl-year">${esc(tr(item.year))}</span>
      <h3 class="tl-title">${item.cert ? `<em>${lang === "en" ? "Certificate" : "Certificat"}</em>` : ""}${esc(tr(item.title))}</h3>
      <p class="tl-sub">${esc(tr(item.sub))}</p>
    </li>`).join("");
  tlItems = $$(".tl-item", timelineEl);
  onScroll();
}

/* Halo qui suit le curseur sur les cartes */
function bindSpot(root) {
  $$(".spot", root).forEach(el => {
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* ================= TRADUCTION DES TEXTES FIXES ================= */
function applyStatic() {
  const dict = t();
  $$("[data-i18n]").forEach(el => { const v = get(dict, el.dataset.i18n); if (typeof v === "string") el.textContent = v; });
  $$("[data-i18n-aria]").forEach(el => { const v = get(dict, el.dataset.i18nAria); if (v) el.setAttribute("aria-label", v); });
  $$("[data-i18n-alt]").forEach(el => { const v = get(dict, el.dataset.i18nAlt); if (v) el.alt = v; });
  $("#projectsLead").textContent = dict.projLead(projects.length);
  document.documentElement.lang = lang;
  const sw = $("#langSwitch");
  sw.setAttribute("aria-checked", lang === "en");
  sw.setAttribute("aria-label", dict.switchLabel);
  sw.dataset.lang = lang;
}

function renderAll() {
  applyStatic();
  renderSkills();
  renderFilters();
  renderProjects();
  renderTimeline();
  if (currentPanel) fillPanel(currentPanel);
}

/* Bascule FR / EN avec un fondu */
function setLang(next) {
  if (next === lang) return;
  try { localStorage.setItem("nz-lang", next); } catch (e) { }
  const swap = () => { lang = next; renderAll(); restartTyped(); };
  if (reduceMotion) { swap(); return; }
  document.body.classList.add("lang-out");
  setTimeout(() => {
    swap();
    document.body.classList.remove("lang-out");
  }, 220);
}
$("#langSwitch").addEventListener("click", () => setLang(lang === "fr" ? "en" : "fr"));

/* ================= PANNEAU DE DÉTAIL ================= */
const overlay = $("#overlay");
const panel = $("#panel");
const panelBody = $("#panelBody");
const panelClose = $("#panelClose");
let lastFocus = null;
let currentPanel = null;

function fillPanel(p) {
  const d = pj(p), L = t();
  panelBody.innerHTML = `
    <div class="pcard-cats">${cats(p).map(c => `<span>${esc(c)}</span>`).join("")}</div>
    <h3 class="panel-title" id="panelTitle">${fmt(d.title)}</h3>
    <p class="panel-metric">${fmt(d.metric)}</p>
    <h4 class="panel-h">${L.desc}</h4>
    <p class="panel-desc">${fmt(d.description)}</p>
    <h4 class="panel-h">${L.points}</h4>
    <ul class="panel-points">${d.points.map(x => `<li>${fmt(x)}</li>`).join("")}</ul>
    <h4 class="panel-h">${L.skills}</h4>
    <div class="chips">${ptags(p).map(x => `<span class="chip">${esc(x)}</span>`).join("")}</div>
    <a href="${esc(p.github)}" target="_blank" rel="noopener" class="btn btn-primary panel-gh">
      <svg width="17" height="17" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2a8 8 0 00-2.53 15.6c.4.07.55-.17.55-.38v-1.36c-2.22.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.71 1.23 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.98 0-.88.31-1.6.83-2.16-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.83a7.5 7.5 0 014 0c1.53-1.05 2.2-.83 2.2-.83.44 1.11.16 1.93.08 2.13.52.56.82 1.28.82 2.16 0 3.1-1.87 3.78-3.65 3.98.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0010 2z" fill="currentColor"/></svg>
      <span>${L.github}</span>
    </a>`;
}

function openPanel(p, trigger) {
  lastFocus = trigger || document.activeElement;
  currentPanel = p;
  fillPanel(p);
  panel.scrollTop = 0;
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
  setTimeout(() => panelClose.focus(), 60);
}

function closePanel() {
  if (!panel.classList.contains("open")) return;
  currentPanel = null;
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
  if (lastFocus && lastFocus.focus && document.contains(lastFocus)) lastFocus.focus();
}
panelClose.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePanel();
  if (e.key === "Tab" && panel.classList.contains("open")) {
    const f = $$("a[href], button:not([disabled])", panel);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

/* ================= NAVIGATION ================= */
const nav = $("#nav");
const navToggle = $("#navToggle");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
$$("#navMenu a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

const navLinks = $$(".nav-links a");
const sectionIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
["profil", "competences", "projets", "parcours", "contact"].forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionIO.observe(el);
});

/* ================= SCROLL ================= */
const progress = $("#progress");
const timelineEl = $("#timeline");
const tlFill = $("#tlFill");
let tlItems = [];
let ticking = false;

function onScroll() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? clamp(scrollY / max, 0, 1) : 0})`;
  nav.classList.toggle("scrolled", scrollY > 24);
  const r = timelineEl.getBoundingClientRect();
  const line = innerHeight * 0.68;
  tlFill.style.transform = `scaleY(${clamp((line - r.top) / r.height, 0, 1)})`;
  tlItems.forEach(it => it.classList.toggle("on", it.getBoundingClientRect().top < line));
  ticking = false;
}
window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
window.addEventListener("resize", onScroll);

/* ================= PREMIER RENDU ================= */
renderAll();
$("#statProjects").dataset.count = projects.length;
$("#statCerts").dataset.count = timelineData.filter(x => x.cert).length;

/* ================= RÉVÉLATIONS ================= */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); revealIO.unobserve(en.target); } });
}, { rootMargin: "0px 0px -12% 0px" });
$$(".reveal, .card, .eyebrow").forEach(el => { el.classList.add("will-in"); revealIO.observe(el); });

new IntersectionObserver((entries, obs) => {
  if (entries[0].isIntersecting) { rowsVisible = true; rowsEl.classList.add("in"); obs.disconnect(); }
}, { threshold: 0.05 }).observe(rowsEl);

/* Les cartes de compétences sont recréées à chaque changement de langue : on les observe à nouveau */
const skillsMO = new MutationObserver(() => $$("#skills .card").forEach(el => el.classList.add("will-in", "in")));
skillsMO.observe($("#skills"), { childList: true });

/* ================= COMPTEURS ================= */
const countIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const target = Number(el.dataset.count) || 0;
    countIO.unobserve(el);
    if (reduceMotion) { el.textContent = target; return; }
    const t0 = performance.now(), dur = 1400;
    (function tick(now) {
      const k = clamp((now - t0) / dur, 0, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  });
}, { threshold: 0.6 });
$$(".stat-num").forEach(el => countIO.observe(el));

/* ================= HERO : texte animé ================= */
const typedEl = $("#typed");
const sleep = ms => new Promise(res => setTimeout(res, ms));
let typedRun = 0;

async function typeLoop(run) {
  let i = 0;
  typedEl.textContent = t().roles[0];
  await sleep(1700);
  while (run === typedRun) {
    const roles = t().roles;
    const word = typedEl.textContent;
    for (let c = word.length; c >= 0 && run === typedRun; c--) { typedEl.textContent = word.slice(0, c); await sleep(40); }
    await sleep(220);
    i = (i + 1) % roles.length;
    const next = roles[i];
    for (let c = 0; c <= next.length && run === typedRun; c++) { typedEl.textContent = next.slice(0, c); await sleep(75); }
    await sleep(1700);
  }
}
function restartTyped() {
  typedRun++;
  if (reduceMotion) { typedEl.textContent = t().roles[0]; return; }
  typeLoop(typedRun);
}
restartTyped();

/* ================= HERO : portrait qui suit le curseur ================= */
const hero = $(".hero");
const portrait = $("#portrait");
if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
  hero.addEventListener("pointermove", e => {
    const r = portrait.getBoundingClientRect();
    const x = clamp((e.clientX - (r.left + r.width / 2)) / innerWidth, -0.5, 0.5);
    const y = clamp((e.clientY - (r.top + r.height / 2)) / innerHeight, -0.5, 0.5);
    portrait.style.setProperty("--ry", `${(x * 14).toFixed(2)}deg`);
    portrait.style.setProperty("--rx", `${(-y * 12).toFixed(2)}deg`);
  });
  hero.addEventListener("pointerleave", () => {
    portrait.style.setProperty("--ry", "0deg");
    portrait.style.setProperty("--rx", "0deg");
  });
}

/* ================= FOND : constellation de données (inchangé) ================= */
(function network() {
  const canvas = $("#net");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const mouse = { x: -9999, y: -9999 };
  let w = 0, h = 0, pts = [], raf = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = clamp(Math.round((w * h) / 17000), 26, 85);
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.4 + 0.7
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    const link = w < 720 ? 110 : 140;
    const reach = 170;
    for (const p of pts) {
      if (!reduceMotion) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(196,181,253,0.75)";
      ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      for (let j = i + 1; j < pts.length; j++) {
        const b = pts[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < link) {
          ctx.strokeStyle = `rgba(139,92,246,${(1 - d / link) * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < reach) {
        ctx.strokeStyle = `rgba(216,204,255,${(1 - dm / reach) * 0.65})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    if (!reduceMotion) raf = requestAnimationFrame(frame);
  }

  resize(); frame();
  window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); frame(); });
  window.addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  window.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  document.addEventListener("visibilitychange", () => {
    if (reduceMotion) return;
    if (document.hidden) cancelAnimationFrame(raf);
    else { cancelAnimationFrame(raf); frame(); }
  });
})();

/* ================= PIED DE PAGE ================= */
$("#year").textContent = `© ${new Date().getFullYear()}`;
