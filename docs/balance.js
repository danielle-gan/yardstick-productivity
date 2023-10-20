const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-modal');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const questionsForm = document.getElementById('questions-form');

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

nextButton.addEventListener('click', () => {
  question1.style.display = 'none';
  question2.style.display = 'block';
});

modal.style.display = 'block';


submitButton.addEventListener('click', () => {
  
  questionsForm.style.display = 'flex';

  const phys1Answer = document.getElementById('phys-1').value;
  const phys2Answer = document.getElementById('phys-2').value;
  const phys3Answer = document.getElementById('phys-3').value;
  const mind1Answer = document.getElementById('mind-1').value;
  const mind2Answer = document.getElementById('mind-2').value;
  const mind3Answer = document.getElementById('mind-3').value;

  // Update labels with user input
  document.getElementById('phys1').nextElementSibling.textContent = phys1Answer;
  document.getElementById('phys2').nextElementSibling.textContent = phys2Answer;
  document.getElementById('phys3').nextElementSibling.textContent = phys3Answer;
  document.getElementById('mind1').innerHTML = `<b>I am grateful for:</b> ${mind1Answer}`;
  document.getElementById('mind2').innerHTML = `<b>The most important thing to me is:</b> ${mind2Answer}`;
  document.getElementById('mind3').innerHTML= `<b>I am letting go of:</b> ${mind3Answer}`;
  
  questionsForm.reset();

  modal.style.display = 'none';
});
