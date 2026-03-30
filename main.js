const toggle = document.getElementById('theme-toggle');
const assistantQuestion = document.getElementById('assistant-question');
const assistantAnswer = document.getElementById('assistant-answer');
const assistantButtons = document.querySelectorAll('.assistant__chip');

let storedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (storedTheme) document.documentElement.setAttribute('data-theme', storedTheme);

toggle.onclick = function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';

    if (currentTheme === 'light') {
        targetTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
};

const assistantResponses = {
    perfil: {
        question: '¿Quién es Sebastián?',
        answer:
            'Sebastián Larrotta es Ingeniero en Multimedia con enfoque en desarrollo web, experiencias interactivas y soluciones digitales. Combina programación, diseño y UX/UI para construir productos funcionales, visuales y bien estructurados.'
    },
    tecnologias: {
        question: '¿Qué tecnologías maneja?',
        answer:
            'Trabaja con HTML, CSS, JavaScript, React, Node.js, Express.js, Three.js, SQL, Python y C++. También usa herramientas como GitHub, Figma, Illustrator, Photoshop, Unity, Power BI y MySQL Workbench.'
    },
    proyectos: {
        question: '¿Qué proyectos ha desarrollado?',
        answer:
            'Ha desarrollado proyectos como Brain Brokers con tiempo real y realidad aumentada, una web para un emprendimiento con visualizaciones 3D, un resumidor de noticias con inteligencia artificial, una app de rutas por Colombia y experiencias en Unity con Monte Carlo Tree Search.'
    },
    certificados: {
        question: '¿Dónde veo sus certificados?',
        answer:
            'Puedes ver los certificados en el botón "Ver certificados" de la sección de formación o en el acceso directo del asistente. Ahí encontrarás la carpeta compartida con sus respaldos académicos y cursos.'
    },
    contacto: {
        question: '¿Cómo puedo contactarlo?',
        answer:
            'Puedes contactarlo por correo en juansebastianlarrotta.dev@gmail.com, revisar su perfil de LinkedIn o ver su GitHub para conocer más de su trabajo y proyectos.'
    }
};

assistantButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const key = button.dataset.question;
        const response = assistantResponses[key];

        if (!response) return;

        assistantQuestion.textContent = response.question;
        assistantAnswer.textContent = response.answer;
    });
});
