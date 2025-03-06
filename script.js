// script.js
document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('#projects');
    const projects = [
        {title: 'Registro de Medidas', description: 'Registro de Medidas', link: 'https://github.com/franchescaycr/Registro_de_medidas'},
        { title: 'Mokepon', description: 'Repositorio github mokepon', link: 'https://github.com/franchescaycr/Juego_Mokepon' },
        { title: 'Piedra,Papel y Tijera', description: 'Repositorio github', link: 'https://github.com/franchescaycr/Juego_piedra_papel_tijera' },
       // { title: 'Proyecto 3', description: 'Descripción del proyecto 3', link: '#' }
    ];

    const projectList = document.createElement('ul');
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver Proyecto</a>
        `;
        projectList.appendChild(listItem);
    });

    projectsSection.appendChild(projectList);
});

window.onload = function() {
    const texto = document.getElementById('mi-parrafo').textContent;
    const parrafo = document.getElementById('mi-parrafo');
    parrafo.textContent = ''; // Limpiamos el contenido original

    const velocidad = 60; // Velocidad de escritura en milisegundos

    // Usamos un bucle for para escribir el texto letra por letra
    let i = 0;
    for (let i = 0; i < texto.length; i++) {
        setTimeout(() => {
            parrafo.textContent += texto.charAt(i); // Añadimos una letra al texto
        }, velocidad * i); // El tiempo de espera aumenta con cada letra
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el párrafo por su ID
    const parrafo = document.getElementById('mi-parrafo');
    
    // Define el texto con los saltos de línea
    const texto = `
      ¡Hola! Me llamo Franchesca y soy desarrolladora web con una gran pasión por aprender y crecer profesionalmente. Me encanta enfrentar desafíos y explorar nuevas tecnologías que me permitan encontrar soluciones creativas y efectivas.<br>
      <br>
      Por un tiempo, también me desempeñé como diseñadora UX/UI, trabajando en proyectos freelance donde realicé tareas como diseño de interfaces, análisis de experiencia de usuario y prototipado. Esta experiencia me permitió entender mejor la importancia de crear productos funcionales y atractivos enfocados en el usuario.<br>
      <br>
      Recientemente decidí tomarme una pausa profesional para dedicarme a mis hijos, pero durante este tiempo nunca dejé de aprender. Me mantuve en constante capacitación y desarrollo de habilidades, consolidando mi perfil como autodidacta.<br>
      <br>
      Disfruto resolver problemas y trabajar en proyectos que combinen creatividad y funcionalidad. Siempre estoy en busca de nuevas oportunidades para seguir aprendiendo y aportar valor con mi trabajo.
    `;
  
    // Actualiza el contenido del párrafo
    parrafo.innerHTML = texto;
  });

