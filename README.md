<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Francisco Campos Sandi - Portfolio</title>
  <style>
    /* Reset básico */
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
      max-width: 900px;
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
      width: 160px;
      border-radius: 12px;
      box-shadow: 0 0 15px #6cc0f7aa;
    }
    header div {
      flex: 1;
    }
    h1 {
      font-size: 2.4rem;
      margin-bottom: 10px;
      color: #61dafb;
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
    hr {
      border: none;
      border-top: 1px solid #444;
      margin: 40px 0;
    }
    /* Center GitHub stats images */
    .github-stats img,
    .github-trophies img,
    .github-quote img,
    .github-contrib img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 0 20px #6cc0f7aa;
      display: block;
      margin: 10px auto;
    }
  </style>
</head>
<body>

  <header>
    <img src="https://github.com/user-attachments/assets/336b3c2d-64a3-498b-9ee9-9091f44b940c" alt="Code Coding GIF by EscuelaDevRock" />
    <div>
      <h1>👋 Hi! I'm Francisco Campos Sandi</h1>
      <p>🎓 I'm a <strong>Computer Engineering</strong> student passionate about software development, automation, and artificial intelligence applied to education.</p>
      <p>🧠 Founder of <a href="https://www.facebook.com/profile.php?id=61563914024424" target="_blank" rel="noopener noreferrer"><strong>Profe Artificial</strong></a>, an educational project promoting the use of AI tools in classrooms.</p>
    </div>
  </header>

  <section>
    <h2>💡 About Me</h2>
    <p>I'm passionate about creating innovative software solutions that enhance learning experiences using AI. I enjoy automating workflows and continuously learning new technologies to improve my skills.</p>
  </section>

  <section>
    <h2>🚀 Featured Projects</h2>
    <ul>
      <li><a href="https://github.com/tuUsuario/proyectoAI" target="_blank" rel="noopener noreferrer">AI Educativo</a> – Application to integrate AI in classrooms.</li>
      <li><a href="https://github.com/tuUsuario/automatizacion-python" target="_blank" rel="noopener noreferrer">Python Automation</a> – Scripts for repetitive tasks.</li>
      <li><a href="https://tuUsuario.github.io/portfolio" target="_blank" rel="noopener noreferrer">Portfolio Website</a> – My personal website.</li>
    </ul>
  </section>

  <section>
    <h2>💻 Programming Languages</h2>
    <div class="badges">
      <img src="https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
      <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
      <img src="https://img.shields.io/badge/-Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
      <img src="https://img.shields.io/badge/-C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C#" />
      <img src="https://img.shields.io/badge/-C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
      <img src="https://img.shields.io/badge/-LaTeX-008080?style=for-the-badge&logo=latex&logoColor=white" alt="LaTeX" />
      <img src="https://img.shields.io/badge/-MATLAB-0076A8?style=for-the-badge&logo=matlab&logoColor=white" alt="MATLAB" />
      <img src="https://img.shields.io/badge/-R-276DC3?style=for-the-badge&logo=r&logoColor=white" alt="R" />
    </div>
  </section>

  <section>
    <h2>🌐 Web Development</h2>
    <div class="badges">
      <img src="https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
      <img src="https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
      <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
      <img src="https://img.shields.io/badge/-Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js" />
      <img src="https://img.shields.io/badge/-PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
      <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
      <img src="https://img.shields.io/badge/-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
    </div>
  </section>

  <section>
    <h2>⚙️ Tools</h2>
    <div class="badges">
      <img src="https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
      <img src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      <img src="https://img.shields.io/badge/-VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" />
      <img src="https://img.shields.io/badge/-Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
      <img src="https://img.shields.io/badge/-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
    </div>
  </section>

  <section>
    <h2>🌍 Languages Spoken</h2>
    <ul>
      <li>Spanish (Native) 🇨🇷</li>
      <li>English (Intermediate) 🇺🇸</li>
    </ul>
  </section>

  <section>
    <h2>📫 Contact Me</h2>
    <p>Want to collaborate or just say hi? Feel free to reach out!</p>
    <div class="contact-links">
      <a href="https://www.facebook.com/profile.php?id=61563914024424" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" />
      </a>
      <a href="https://www.linkedin.com/in/francisco-campos-8269832a5/" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
      </a>
      <a href="https://wa.me/506XXXXXXXX" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
      </a>
    </div>
  </section>

  <section class="github-stats">
    <h2>🔥 GitHub Streak</h2>
    <a href="https://git.io/streak-stats" target="_blank" rel="noopener noreferrer">
      <img src="https://streak-stats.demolab.com?user=Francisco-Campos-S&theme=gruvbox_duo&hide_border=false&border_radius=6.5" alt="GitHub Streak" />
    </a>
  </section>

  <section class="github-stats">
    <h2>📊 GitHub Stats</h2>
    <a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noopener noreferrer">
      <img src="https://github-readme-stats.vercel.app/api?username=Francisco-Campos-S&show_icons=true&theme=gruvbox&hide_border=false&border_radius=6.5" alt="GitHub Stats" />
    </a>
  </section>

  <section class="github-stats">
    <h2>🛠️ Most Used Languages</h2>
    <a href="https://github.com/Francisco-Campos-S/github-readme-stats" target="_blank" rel="noopener noreferrer">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Francisco-Campos-S&layout=compact&theme=tokyonight" alt="Top Languages" />
    </a>
  </section>

  <section class="github-trophies">
    <h2>🏆 GitHub Trophies</h2>
    <img src="https://github-profile-trophy.vercel.app/?username=Francisco-Campos-S&theme=radical&no-frame=false&no-bg=true&margin-w=4" alt="GitHub Trophies" />
  </section>

  <section class="github-quote">
    <h2>✍️ Random Dev Quote</h2>
    <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Dev Quote" />
  </section>

  <section class="github-contrib">
    <h2>🔝 Top Contributed Repo</h2>
    <img src="https://github-contributor-stats.vercel.app/api?username=Francisco-Campos-S&limit=5&theme=dark&combine_all_yearly_contributions=true" alt="Top Contributed Repos" />
  </section>

</body>
</html>

