function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
 ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var target = ev.target;
    // Find the closest parent with the class 'kanban-block'
    while (target && !target.classList.contains('kanban-block')) {
        target = target.parentElement;
    }
    if (target) {
        target.appendChild(document.getElementById(data));
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.task').forEach(task => {
        task.addEventListener('dragstart', drag);
    });

    document.querySelectorAll('.kanban-block').forEach(block => {
        block.addEventListener('dragover', allowDrop);
        block.addEventListener('drop', drop);
    });
});


function adjustHeight(textarea) {
    textarea.style.height = 'auto'; 
    textarea.style.height = textarea.scrollHeight + 'px'; 
}

const description = document.getElementById('description');

description.addEventListener('input', function() {
    adjustHeight(this);
});

adjustHeight(description);
document.addEventListener('DOMContentLoaded', function() {
    const createProjectButton = document.getElementById('createProjectButton');
    const popup = document.getElementById('popup');

    createProjectButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });
    
});


document.addEventListener('DOMContentLoaded', function() {
    const createTaskButton = document.getElementById('createTaskButton'); // Change this to match your button ID
    const popup = document.getElementById('popup1');
    const projectDropdown = document.getElementById('projectDropdown'); // Define projectDropdown here

    createTaskButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    const form = document.querySelector('#popup1 form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the form inputs
        const taskName = document.getElementById('taskName').value;
        const description = document.getElementById('taskDescription').value; // Use the correct ID here
        const selectedProject = projectDropdown.value; // Use the defined projectDropdown here

        // Create a new task element
        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.draggable = true;
        newTask.addEventListener('dragstart', drag);

        // Set the task content
        newTask.innerHTML = `<span>${taskName}</span>`;

        // Find the appropriate board based on the selected project
        let board;
        if (selectedProject === 'project1') {
            board = document.getElementById('todo'); // Example board ID, change as needed
        } else if (selectedProject === 'project2') {
            board = document.getElementById('inprogress'); // Example board ID, change as needed
        } else {
            board = document.getElementById('done'); // Example board ID, change as needed
        }

        // Append the new task to the board
        board.appendChild(newTask);

        // Reset the form and close the popup
        form.reset();
        popup.style.display = 'none';
    });

    // Add event listener to projectDropdown
     projectDropdown.addEventListener('change', function() {
         const selectedProject = this.value;
         optionsContainer.innerHTML = ''; // Clear the options container

         if (selectedProject) {
             if (selectedProject === 'project1') {
                 addOptions(['Favour', 'Aarron', 'Letso']);
             } else if (selectedProject === 'project2') {
                 addOptions(['Terrence', 'Daniel', 'Naruto']);
             }
         }
     });
});



function Display() {
    var element = document.getElementById("dis");
    var text = document.getElementById("text");
    if (element.style.display === "none") {
        element.style.display = "block";
        text.textContent ="see less...";
    } else {
        element.style.display = "none";
        text.textContent ="see more...";
    }
}
function Display1() {
    var element = document.getElementById("disp");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
  });
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});




projectDropdown.addEventListener('change', function() {
    const selectedProject = this.value;
    optionsContainer.innerHTML = ''; // Clear the options container

    if (selectedProject) {
        if (selectedProject === 'project1') {
            addOptions(['Favour', 'Aarron', 'Letso']);
        } else if (selectedProject === 'project2') {
            addOptions(['Terrence', 'Daniel', 'Naruto']);
        }
    }
});

// Function to add options with checkboxes
function addOptions(optionsArray) {
    optionsArray.forEach(optionText => {
        const optionLabel = document.createElement('label');
        const optionCheckbox = document.createElement('input');
        optionCheckbox.type = 'checkbox';
        optionCheckbox.classList.add('optionCheckbox');
        optionCheckbox.value = optionText;
        optionLabel.appendChild(optionCheckbox);
        optionLabel.appendChild(document.createTextNode(optionText));
        optionsContainer.appendChild(optionLabel);

        optionCheckbox.addEventListener('change', function() {
            if (this.checked) {
                addSelectedOption(this.value);
            } else {
                removeSelectedOption(this.value);
            }
        });
    });
}

// Function to add a selected option
function addSelectedOption(optionText) {
    const optionElement = document.createElement('div');
    optionElement.classList.add('selectedOption');
    optionElement.textContent = optionText;
    selectedOptionsContainer.appendChild(optionElement);
}

// Function to remove a selected option
function removeSelectedOption(optionText) {
    const selectedOptions = selectedOptionsContainer.querySelectorAll('.selectedOption');
    selectedOptions.forEach(option => {
        if (option.textContent === optionText) {
            option.remove();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the button and popup elements


    const addToDoButton = document.getElementById('addToDo');
    const addInProgressButton = document.getElementById('addInProgress');
    const addDoneButton = document.getElementById('addDone');

    const popup = document.getElementById('popup1');

    // Add a click event listener to the button
    addToDoButton.addEventListener('click', function() {
        // Toggle the display property of the popup
        if (popup.style.display === 'none') {
            popup.style.display = 'block';
            popup.style.top = '50px';
        } else {
            popup.style.top = '-50px'; // Move back up
            setTimeout(function() {
                popup.style.display = 'none'; // Hide after the animation completes
            }, 500);
        }
        console.log('Popup:', popup);
    });

    addInProgressButton.addEventListener('click', function() {
        // Toggle the display property of the popup
        if (popup.style.display === 'none') {
            popup.style.display = 'block';
            popup.style.top = '50px';
        } else {
            popup.style.top = '-50px'; // Move back up
            setTimeout(function() {
                popup.style.display = 'none'; // Hide after the animation completes
            }, 500);
        }
        console.log('Popup:', popup);
    });

    addDoneButton.addEventListener('click', function() {
        // Toggle the display property of the popup
        if (popup.style.display === 'none') {
            popup.style.display = 'block';
            popup.style.top = '50px';
        } else {
            popup.style.top = '-50px'; // Move back up
            setTimeout(function() {
                popup.style.display = 'none'; // Hide after the animation completes
            }, 500);
        }
        console.log('Popup:', popup);
    });

    
});
