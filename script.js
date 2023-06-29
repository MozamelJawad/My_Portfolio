function changeIcon() {
  const HeaderMenu = document.querySelector('.header-menu');
  HeaderMenu.classList.toggle('active');

  const mainHeader = document.querySelector('.main-header');
  mainHeader.classList.toggle('active');

  const iconX = document.querySelector('.bi-list');
  iconX.classList.toggle('active');
}

changeIcon();

function chanageMenu() {
  const HeaderMenu = document.querySelector('.header-menu');
  const listIcon = document.querySelector('.bi-list');
  const mainHeader = document.querySelector('.main-header');
  const iconX = document.querySelector('.bi-list');

  HeaderMenu.classList.remove('active');
  listIcon.classList.remove('bi-x');
  mainHeader.classList.remove('active');
  iconX.classList.remove('active');
}
chanageMenu();

// add project to index page via javascript code

const projects = [
  {
    id: 1,
    title: 'Tonic',
    snapshot: 'assets/works/snap1.png',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    projectInfo: { company: 'CANOPY', role: 'Back END Dev', year: 2015 },
    seeLive: 'https://github.com/MozamelJawad/My_Portfolio',
    seeSource: 'https://github.com/MozamelJawad/My_Portfolio.git',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    snapshot: 'assets/works/snap2.png',
    projectDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    projectInfo: { company: 'Facebook', role: 'Back END Dev', year: 2016 },
    seeLive: 'https://github.com/MozamelJawad/My_Portfolio',
    seeSource: 'https://github.com/MozamelJawad/My_Portfolio.git',
  },
  {
    id: 3,
    title: 'Facebook 360',
    snapshot: 'assets/works/snap3.png',
    projectDescription: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    projectInfo: { company: 'Facebook', role: 'Back END Dev', year: 2017 },
    seeLive: 'https://github.com/MozamelJawad/My_Portfolio',
    seeSource: 'https://github.com/MozamelJawad/My_Portfolio.git',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    snapshot: 'assets/works/snap4.png',
    projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    skills: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    projectInfo: { company: 'UBER', role: 'Back END Dev', year: 2018 },
    seeLive: 'https://github.com/MozamelJawad/My_Portfolio',
    seeSource: 'https://github.com/MozamelJawad/My_Portfolio.git',
  },

];

// add the object code and properties to index page via loop
projects.forEach((project) => {
  const bodySection = document.querySelector('.works-container');
  const section = document.createElement('section');
  section.className = 'card-works';
  section.innerHTML = `<div class="portfolio-image">
      <img class="snapshot-portfolio-1" src=${project.snapshot} alt="Snap image for background">
  </div>
  <div class="left-block">
      <h2 class="title">${project.title}</h2>
      <ul class="items">
      <li class="list-item canopy">${project.projectInfo.company}</li>
      <li class="list-item backend-dev">${project.projectInfo.role}</li>
      <li class="list-item year">${project.projectInfo.year}</li>
      </ul>
      <p class="card-text">${project.projectDescription}</p>
      <div class="card-btn">
      <button class="sm-btn" type="button" name="button">${project.skills[0]}</button>
      <button class="sm-btn" type="button" name="button">${project.skills[1]}</button>
      <button class="sm-btn" type="button" name="button">${project.skills[2]}</button>
      <button class="sm-btn" type="button" name="button">${project.skills[3]}</button>
      </div>
      <div class="action-btn-container">
      <button class="action-btn" type="button" id="btn-${project.id}" name="button">See project</button>
      </div>
  </div>
  `;

  bodySection.append(section);
});

// Popup Window code start here
const body = document.querySelector('body');
projects.forEach((project) => {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'popup-window';
  popupWindow.id = `card-${project.id}`;
  popupWindow.innerHTML = `
  <section class="card-popup">
  <div class="pop-header">
      <h2 class="title pop-title">${project.title}</h2>
      <i id="close-${project.id}" class="bi bi-x close-icon"></i>
  </div>
  <div class="popup-skills">
     <ul class="items popup-items">
          <li class="list-item canopy">${project.projectInfo.company}</li>
          <li class="list-item backend-dev">${project.projectInfo.role}</li>
          <li class="list-item year">${project.projectInfo.year}</li>
        </ul>
  </div>
      <div class="portfolio-popup-image">
        <img class="popup-image" src="${project.snapshot}" alt="Snap image for background">
      </div>
      <div class="popup-left-block">
       
      
        <div class="card-btn-para">
        <p class="card-text">${project.projectDescription} <br>
        ${project.description}
        </p>
        <div class="card-buttons">
        <div class="card-btn btn-popup">
          <button class="sm-btn" type="button" name="button">${project.skills[0]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[1]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[2]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[3]}</button>
        </div>
        <div class="action-btn-container">
          <button class="action-btn popupBtn" type="button" name="button">See Live <i class="bi bi-box-arrow-up-right"></i></button>
          <button class="action-btn popupBtn" type="button" name="button">See Source <i class="bi bi-github"></i></button>
        </div>
        </div>
        </div>
      </div>
    </section>
 `;
  body.appendChild(popupWindow);
});

const feature1 = document.getElementById('btn-1');
const feature2 = document.getElementById('btn-2');
const feature3 = document.getElementById('btn-3');
const feature4 = document.getElementById('btn-4');

const IconClose1 = document.getElementById('close-1');
const IconClose2 = document.getElementById('close-2');
const IconClose3 = document.getElementById('close-3');
const IconClose4 = document.getElementById('close-4');

const popup1 = document.getElementById('card-1');
const popup2 = document.getElementById('card-2');
const popup3 = document.getElementById('card-3');
const popup4 = document.getElementById('card-4');

feature1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

IconClose1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

feature2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

IconClose2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

feature3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

IconClose3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

feature4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});

IconClose4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});

// Form Validation

const contactForm = document.getElementById('contact-form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorMessage = document.getElementById('error-message');

function formValidate(event) {
  if (fullName.value === '' || fullName.value == null) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your full name.';
    event.preventDefault();
  } else if (email.value === '') {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your email address.';
    event.preventDefault();
  } else if (email.value !== email.value.toLowerCase()) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your valid email address in lowercase.';
    event.preventDefault();
  } else if (/[A-Z]/.test(email.value)) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please use Lowercase in your email address';
    event.preventDefault();
  } else if (message.value === '') {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Please write your message.';
    event.preventDefault();
  } else {
    errorMessage.style.display = 'none';
  }
}

contactForm.addEventListener('submit', formValidate);
