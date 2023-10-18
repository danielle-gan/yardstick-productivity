const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-modal');
const nextButton = document.getElementById('next-button');
const nextButton2 = document.getElementById('next-button-2');
const submitButton = document.getElementById('submit-button');
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const questionsForm = document.getElementById('questions-form');

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
  
  questionsForm.style.display = 'flex';

  const projectAnswer = document.getElementById('project-input').value;
  const task1Answer = document.getElementById('task-1').value;
  const task2Answer = document.getElementById('task-2').value;
  const task3Answer = document.getElementById('task-3').value;
  const maintenance1Answer = document.getElementById('maintenance-1').value;
  const maintenance2Answer = document.getElementById('maintenance-2').value;
  const maintenance3Answer = document.getElementById('maintenance-3').value;

  // Update labels with user input
  document.getElementById('project-output').nextElementSibling.textContent = projectAnswer;
  document.getElementById('task1').nextElementSibling.textContent = task1Answer;
  document.getElementById('task2').nextElementSibling.textContent = task2Answer;
  document.getElementById('task3').nextElementSibling.textContent = task3Answer;
  document.getElementById('maintenance1').nextElementSibling.textContent = maintenance1Answer;
  document.getElementById('maintenance2').nextElementSibling.textContent = maintenance2Answer;
  document.getElementById('maintenance3').nextElementSibling.textContent = maintenance3Answer;
  
  questionsForm.reset();

  modal.style.display = 'none';
});
