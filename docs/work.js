const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-modal');
const nextButton = document.getElementById('next-button');
const nextButton2 = document.getElementById('next-button-2');
const submitButton = document.getElementById('submit-button');
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

nextButton.addEventListener('click', () => {
  question1.style.display = 'none';
  question2.style.display = 'block';
});

nextButton2.addEventListener('click', () => {
  question2.style.display = 'none';
  question3.style.display = 'block';
});

modal.style.display = 'block';


submitButton.addEventListener('click', () => {
  const projectAnswer = document.getElementById('project-input').value;
  const task1Answer = document.getElementById('task-1').value;
  const task2Answer = document.getElementById('task-2').value;
  const task3Answer = document.getElementById('task-3').value;
  const maintenance1Answer = document.getElementById('maintenance-1').value;
  const maintenance2Answer = document.getElementById('maintenance-2').value;
  const maintenance3Answer = document.getElementById('maintenance-3').value;

  // Create and display labeled divs with answers
  const projectDiv = document.createElement('div');
  projectDiv.innerHTML = `<div class="flex"><h2>Focus Project:</h2> <p>${projectAnswer}</p> </div>`;

  const task1Div = document.createElement('div');
  task1Div.innerHTML = `<div class="flex"><h2>Sticky Task 1:</h2> <p>${task1Answer}</p> </div>`;

  const task2Div = document.createElement('div');
  task2Div.innerHTML = `<div class="flex"><h2>Sticky Task 2:</h2> <p>${task2Answer}</p> </div>`;

  const task3Div = document.createElement('div');
  task3Div.innerHTML = `<div class="flex"><h2>Sticky Task 3:</h2> <p>${task3Answer}</p> </div>`;

  const maintenance1Div = document.createElement('div');
  maintenance1Div.innerHTML = `<div class="flex"><h2>Sticky Task 1:</h2> <p>${maintenance1Answer}</p> </div>`;

  const maintenance2Div = document.createElement('div');
  maintenance2Div.innerHTML = `<div class="flex"><h2>Sticky Task 2:</h2> <p>${maintenance2Answer}</p> </div>`;

  const maintenance3Div = document.createElement('div');
  maintenance3Div.innerHTML = `<div class="flex"><h2>Sticky Task 3:</h2> <p>${maintenance3Answer}</p> </div>`;

  answersContainer.appendChild(projectDiv);
  answersContainer.appendChild(task1Div);
  answersContainer.appendChild(task2Div);
  answersContainer.appendChild(task3Div);
  answersContainer.appendChild(maintenance1Div);
  answersContainer.appendChild(maintenance2Div);
  answersContainer.appendChild(maintenance3Div);

  // Close the modal
  modal.style.display = 'none';
});

