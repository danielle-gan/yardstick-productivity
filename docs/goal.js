const modal = document.getElementById('goal-modal');
const closeButton = document.getElementById('close-modal');
const questionsForm = document.getElementById('questions-form');

const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');

const nextButton1 = document.getElementById('next-button-1');
const nextButton2 = document.getElementById('next-button-2');
const nextButton3 = document.getElementById('next-button-3');
const submitButton = document.getElementById('submit-button');

const goal1Input = document.getElementById('g1');
const goal2Input = document.getElementById('g2');
const goal3Input = document.getElementById('g3');
const g1Tagline = document.getElementById('g1-tagline');
const g2Tagline = document.getElementById('g2-tagline');
const g3Tagline = document.getElementById('g3-tagline');

const g1task1 = document.getElementById('g1-task1');
const g1task2 = document.getElementById('g1-task2');
const g1task3 = document.getElementById('g1-task3');

const g2task1 = document.getElementById('g2-task1');
const g2task2 = document.getElementById('g2-task2');
const g2task3 = document.getElementById('g2-task3');

const g3task1 = document.getElementById('g3-task1');
const g3task2 = document.getElementById('g3-task2');
const g3task3 = document.getElementById('g3-task3');


const answers = {
  goals: ['', '', ''],
  goalTasks: [[], [], []]
};


nextButton1.addEventListener('click', () => {

    g1Tagline.textContent = `What are 3 tasks you can accomplish to "${goal1Input.value}"?`;
    g2Tagline.textContent = `What are 3 tasks you can accomplish to "${goal2Input.value}"?`;
    g3Tagline.textContent = `What are 3 tasks you can accomplish to "${goal3Input.value}"?`;

    const goal1 = document.getElementById('goal1');
    const goal2 = document.getElementById('goal2');
    const goal3 = document.getElementById('goal3');

    goal1.innerHTML = `<u>${goal1Input.value}</u>`;
    goal2.innerHTML = `<u>${goal2Input.value}</u>`;
    goal3.innerHTML = `<u>${goal3Input.value}</u>`;

  question1.style.display = 'none';
  question2.style.display = 'block';

});

nextButton2.addEventListener('click', () => {

  const g1t1 = document.getElementById('g1t1').value;
  const g1t2 = document.getElementById('g1t2').value;
  const g1t3 = document.getElementById('g1t3').value;


  document.getElementById('g1-task1').nextElementSibling.textContent = g1t1;
  document.getElementById('g1-task2').nextElementSibling.textContent = g1t2;
  document.getElementById('g1-task3').nextElementSibling.textContent = g1t3;

  question2.style.display = 'none';
  question3.style.display = 'block';

});

nextButton3.addEventListener('click', () => {
  const g2t1 = document.getElementById('g2t1').value;
  const g2t2 = document.getElementById('g2t2').value;
  const g2t3 = document.getElementById('g2t3').value;


  document.getElementById('g2-task1').nextElementSibling.textContent = g2t1;
  document.getElementById('g2-task2').nextElementSibling.textContent = g2t2;
  document.getElementById('g2-task3').nextElementSibling.textContent = g2t3;

  question3.style.display = 'none';
  question4.style.display = 'block';

});

modal.style.display = 'block';

submitButton.addEventListener('click', () => {
  questionsForm.style.display = 'flex';

  const g3t1 = document.getElementById('g3t1').value;
  const g3t2 = document.getElementById('g3t2').value;
  const g3t3 = document.getElementById('g3t3').value;


  document.getElementById('g3-task1').nextElementSibling.textContent = g3t1;
  document.getElementById('g3-task2').nextElementSibling.textContent = g3t2;
  document.getElementById('g3-task3').nextElementSibling.textContent = g3t3;

  questionsForm.reset();

  modal.style.display = 'none';



});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
