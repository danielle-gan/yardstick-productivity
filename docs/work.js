function saveData(event) {
    event.preventDefault();  // Prevent form submission
  
    // Get the input values
    const projectFocus = document.getElementById('projectFocus').value;
    const stickyTask1 = document.getElementById('stickyTask1').value;
    const stickyTask2 = document.getElementById('stickyTask2').value;
    const stickyTask3 = document.getElementById('stickyTask3').value;
  
    // Store the data in local storage
    localStorage.setItem('projectFocus', projectFocus);
    localStorage.setItem('stickyTask1', stickyTask1);
    localStorage.setItem('stickyTask2', stickyTask2);
    localStorage.setItem('stickyTask3', stickyTask3);
    localStorage.setItem('maintenanceTask1', maintenanceTask1);
    localStorage.setItem('maintenanceTask2', maintenanceTask2);
    localStorage.setItem('maintenanceTask3', maintenanceTask3);
  
    // Display a confirmation
    alert('Data saved.');
  }


  function displayContent(fieldId) {
    const field = document.getElementById(fieldId);
    const contentDisplay = document.getElementById('contentDisplay');
  
    const content = field.value;
    const styledContent = `<p class="styled-content">${content}</p>`;
    
    contentDisplay.innerHTML = styledContent;
  }