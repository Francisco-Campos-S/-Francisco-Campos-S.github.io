// Portfolio Script - Francisco Campos Sandi
// Versión optimizada para GitHub Pages

console.log('Script loaded successfully');

// Función principal que inicializa toda la funcionalidad
function initializePortfolio() {
    console.log('Initializing portfolio...');
    
    // Verificar que los elementos principales existan
    const themeToggle = document.getElementById('themeToggle');
    const languageSelector = document.getElementById('languageSelector');
    const body = document.body;
    
    if (!themeToggle || !languageSelector) {
        console.error('Required elements not found:', {
            themeToggle: !!themeToggle,
            languageSelector: !!languageSelector
        });
        return;
    }
    
    console.log('All required elements found');

    // ===== SISTEMA DE TRADUCCIONES =====
    const translations = {
        es: {
            'logo': 'Portafolio',
            'nav-about': 'Sobre mí',
            'nav-skills': 'Habilidades',
            'nav-experience': 'Experiencia',
            'nav-projects': 'Proyectos',
            'nav-certifications': 'Certificaciones',
            'nav-contact': 'Contacto',
            'profile-title': 'Estudiante de Ingeniería en Inteligencia Artificial',
            'about-title': 'Sobre mí',
            'about-p1': 'Soy Francisco Campos Sandi, un apasionado estudiante de Ingeniería en Inteligencia Artificial en la Universidad Estatal a Distancia (UNED) y profesor con experiencia en el sector educativo público de Costa Rica. Mi trayectoria combina la enseñanza tradicional con la innovación tecnológica, buscando siempre integrar nuevas herramientas digitales en el proceso educativo.',
            'about-p2': 'Mi interés por la inteligencia artificial nace de la convicción de que la tecnología puede transformar la educación y resolver problemas complejos de la sociedad actual. Durante mi formación, he desarrollado proyectos en machine learning, procesamiento de lenguaje natural y visión por computadora, aplicando estos conocimientos tanto en el ámbito académico como en mi práctica docente.',
            'about-p3': 'Como educador, he trabajado en la implementación de metodologías híbridas y el uso de plataformas digitales para mejorar la experiencia de aprendizaje. Mi objetivo profesional es seguir creciendo en el campo de la IA mientras continúo contribuyendo a la formación de nuevas generaciones, creando un puente entre la educación tradicional y las tecnologías emergentes.',
            'experience-title': 'Experiencia Académica y Profesional',
            'present': 'Presente',
            'exp1-title': 'Estudiante de Ingeniería en Inteligencia Artificial',
            'exp1-desc': 'Cursando carrera especializada en Inteligencia Artificial, desarrollando conocimientos en machine learning, deep learning, procesamiento de lenguaje natural y visión por computadora. Participando en proyectos académicos que combinan teoría y práctica en IA.',
            'exp2-title': 'Profesor de Educación',
            'exp2-desc': 'Docente especializado en integración de tecnologías educativas y metodologías innovadoras. Aplicación de herramientas digitales para mejorar el proceso de enseñanza-aprendizaje y desarrollo de contenidos educativos interactivos.',
            'exp3-title': 'Desarrollador de Proyectos Académicos',
            'exp3-company': 'Proyectos Personales y Universitarios',
            'exp3-desc': 'Desarrollo de aplicaciones web y proyectos de programación utilizando Python, JavaScript, Java y C#. Enfoque en soluciones tecnológicas aplicadas a problemas reales y desarrollo de habilidades en diferentes paradigmas de programación.',
            'projects-title': 'Proyectos Destacados',
            'certifications-title': 'Certificaciones y Cursos',
            'contact-title': 'Contacto',
            'contact-info-title': 'Información de Contacto',
            'phone': 'Teléfono',
            'location': 'Ubicación',
            'university': 'Universidad',
            'ai-degree': 'Inteligencia Artificial',
            'send-message': 'Enviar Mensaje',
            'name': 'Nombre',
            'subject': 'Asunto',
            'message': 'Mensaje',
            'send-btn': 'Enviar Mensaje',
            'project1-title': 'Sistema de Reconocimiento Facial',
            'project1-desc': 'Aplicación de IA desarrollada en Python usando OpenCV y TensorFlow para detectar y reconocer rostros en tiempo real. Implementa algoritmos de deep learning para clasificación facial.',
            'project2-title': 'Chatbot Educativo Inteligente',
            'project2-desc': 'Bot conversacional desarrollado con procesamiento de lenguaje natural para asistir estudiantes en consultas académicas. Integra API de OpenAI y base de datos educativa.',
            'view-code': 'Ver Código',
            'footer-text': '© 2025 Francisco Campos Sandi. Todos los derechos reservados.'
        },
        en: {
            'logo': 'Portfolio',
            'nav-about': 'About me',
            'nav-skills': 'Skills',
            'nav-experience': 'Experience',
            'nav-projects': 'Projects',
            'nav-certifications': 'Certifications',
            'nav-contact': 'Contact',
            'profile-title': 'Artificial Intelligence Engineering Student',
            'about-title': 'About me',
            'about-p1': 'I am Francisco Campos Sandi, a passionate Artificial Intelligence Engineering student at Universidad Estatal a Distancia (UNED) and a teacher with experience in Costa Rica\'s public education sector. My journey combines traditional teaching with technological innovation, always seeking to integrate new digital tools into the educational process.',
            'about-p2': 'My interest in artificial intelligence stems from the conviction that technology can transform education and solve complex problems in today\'s society. During my training, I have developed projects in machine learning, natural language processing, and computer vision, applying this knowledge both in academia and in my teaching practice.',
            'about-p3': 'As an educator, I have worked on implementing hybrid methodologies and using digital platforms to improve the learning experience. My professional goal is to continue growing in the field of AI while continuing to contribute to the formation of new generations, creating a bridge between traditional education and emerging technologies.',
            'experience-title': 'Academic and Professional Experience',
            'present': 'Present',
            'exp1-title': 'Artificial Intelligence Engineering Student',
            'exp1-desc': 'Pursuing specialized degree in Artificial Intelligence, developing knowledge in machine learning, deep learning, natural language processing, and computer vision. Participating in academic projects that combine theory and practice in AI.',
            'exp2-title': 'Education Teacher',
            'exp2-desc': 'Teacher specialized in integrating educational technologies and innovative methodologies. Application of digital tools to improve the teaching-learning process and development of interactive educational content.',
            'exp3-title': 'Academic Projects Developer',
            'exp3-company': 'Personal and University Projects',
            'exp3-desc': 'Development of web applications and programming projects using Python, JavaScript, Java, and C#. Focus on technological solutions applied to real problems and development of skills in different programming paradigms.',
            'projects-title': 'Featured Projects',
            'certifications-title': 'Certifications and Courses',
            'contact-title': 'Contact',
            'contact-info-title': 'Contact Information',
            'phone': 'Phone',
            'location': 'Location',
            'university': 'University',
            'ai-degree': 'Artificial Intelligence',
            'send-message': 'Send Message',
            'name': 'Name',
            'subject': 'Subject',
            'message': 'Message',
            'send-btn': 'Send Message',
            'project1-title': 'Facial Recognition System',
            'project1-desc': 'AI application developed in Python using OpenCV and TensorFlow to detect and recognize faces in real time. Implements deep learning algorithms for facial classification.',
            'project2-title': 'Intelligent Educational Chatbot',
            'project2-desc': 'Conversational bot developed with natural language processing to assist students with academic queries. Integrates OpenAI API and educational database.',
            'view-code': 'View Code',
            'footer-text': '© 2025 Francisco Campos Sandi. All rights reserved.'
        }
    };

    // Función para cambiar idioma
    function changeLanguage(lang) {
        console.log('Changing language to:', lang);
        
        const elements = document.querySelectorAll('[data-lang]');
        console.log('Found elements to translate:', elements.length);
        
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Guardar preferencia
        localStorage.setItem('language', lang);
        
        // Actualizar selector
        if (languageSelector) {
            languageSelector.value = lang;
        }
        
        // Actualizar título
        document.title = lang === 'en' ? 
            'Francisco Campos Sandi - Professional Portfolio' : 
            'Francisco Campos Sandi - Portafolio Profesional';
        
        console.log('Language changed successfully');
    }

    // ===== SISTEMA DE TEMAS =====
    function getSystemPreference() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
                themeToggle.setAttribute('title', 'Cambiar a modo claro');
            } else {
                icon.className = 'fas fa-moon';
                themeToggle.setAttribute('title', 'Cambiar a modo oscuro');
            }
        }
    }

    // ===== INICIALIZACIÓN =====
    
    // Configurar idioma
    const savedLanguage = localStorage.getItem('language') || 'es';
    changeLanguage(savedLanguage);
    
    languageSelector.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    // Configurar tema
    const savedTheme = localStorage.getItem('theme') || getSystemPreference();
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // ===== FORMULARIO DE CONTACTO =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            const mailtoLink = `mailto:profesorfranciscocampos@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
            
            window.location.href = mailtoLink;
            alert('Se abrirá tu cliente de correo para enviar el mensaje.');
            this.reset();
        });
    }

    // ===== NAVEGACIÓN SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ===== ANIMACIONES DE SCROLL =====
    const sections = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    console.log('Portfolio initialized successfully!');
}

// ===== EJECUCIÓN =====
// Múltiples estrategias para asegurar que el script se ejecute
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}

// Respaldo adicional
window.addEventListener('load', () => {
    // Verificar si ya se inicializó correctamente
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector && !languageSelector.hasAttribute('data-initialized')) {
        console.log('Running backup initialization...');
        setTimeout(initializePortfolio, 100);
    }
});
