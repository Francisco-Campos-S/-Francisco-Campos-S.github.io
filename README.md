<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Francisco Campos Sandi - Portafolio</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #1e1e2f;
      color: #e0e0e0;
      line-height: 1.6;
      padding: 20px;
      max-width: 960px;
      margin: auto;
    }

    a {
      color: #6cc0f7;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }

    header img {
      width: 150px;
      border-radius: 12px;
      box-shadow: 0 0 15px #6cc0f7aa;
    }

    header div {
      flex: 1;
    }

    h1 {
      font-size: 2.4rem;
      color: #61dafb;
      margin-bottom: 10px;
    }

    h2 {
      color: #6cc0f7;
      margin-top: 40px;
      margin-bottom: 15px;
      border-bottom: 2px solid #6cc0f7;
      padding-bottom: 6px;
    }

    p {
      margin-bottom: 15px;
      font-size: 1.05rem;
    }

    ul {
      margin-left: 20px;
      margin-bottom: 20px;
    }

    li {
      margin-bottom: 8px;
    }

    .badges img {
      margin: 5px 6px 5px 0;
      vertical-align: middle;
      height: 28px;
    }

    .contact-links a {
      display: inline-block;
      margin-right: 12px;
      margin-bottom: 12px;
      transition: transform 0.2s ease;
    }

    .contact-links a:hover {
      transform: scale(1.1);
    }

    .github-stats img,
    .github-trophies img,
    .github-quote img,
    .github-contrib img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 0 20px #6cc0f7aa;
      display: block;
      margin: 20px auto;
    }

    .proyectos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .card {
      background: #2c2c3e;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 0 10px #0006;
    }

    .card h3 {
      color: #61dafb;
      margin-bottom: 10px;
    }

    footer {
      margin-top: 60px;
      text-align: center;
      font-size: 0.9rem;
      color: #888;
    }
  </style>
</head>
<body>
  <header>
    <img src="https://avatars.githubusercontent.com/u/00000000?v=4" alt="Foto de perfil">
    <div>
      <h1>Francisco Campos Sandi</h1>
      <p>Docente universitario, desarrollador de software y entusiasta de la tecnología educativa. Apasionado por el uso de herramientas de código abierto en la enseñanza.</p>
      <div class="contact-links">
        <a href="https://github.com/francampos" target="_blank">🐙 GitHub</a>
        <a href="mailto:francampos@email.com">📧 Email</a>
        <a href="https://www.linkedin.com/in/francampos" target="_blank">🔗 LinkedIn</a>
      </div>
    </div>
  </header>

  <h2>🛠️ Habilidades Técnicas</h2>
  <ul>
    <li>Python, Java, JavaScript</li>
    <li>HTML, CSS, React</li>
    <li>Git, GitHub, GitHub Actions</li>
    <li>Jupyter, LaTeX, Pandas, NumPy</li>
  </ul>

  <h2>🚀 Proyectos Destacados</h2>
  <div class="proyectos">
    <div class="card">
      <h3>Generador de Exámenes 📄</h3>
      <p>Automatización de generación de exámenes con Python, LaTeX y Excel. Proyecto educativo para universidad.</p>
    </div>
    <div class="card">
      <h3>Simulador de Árboles Binarios 🌳</h3>
      <p>Visualización e interacción de árboles binarios para clases de estructuras de datos en Java.</p>
    </div>
    <div class="card">
      <h3>Portafolio Personal ⚙️</h3>
      <p>Este mismo sitio como ejemplo de integración HTML, CSS y GitHub Pages.</p>
    </div>
  </div>

  <h2>📊 Estadísticas de GitHub</h2>
  <div class="github-stats">
    <img src="https://github-readme-stats.vercel.app/api?username=francampos&show_icons=true&theme=tokyonight" alt="GitHub Stats">
  </div>

  <footer>
    © 2025 Francisco Campos Sandi · Portafolio personal
  </footer>
</body>
</html>

