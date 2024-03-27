// Function to adjust the height of the textarea
function adjustHeight(textarea) {
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scrollHeight
}

// Select the textarea and project dropdown
const description = document.getElementById('description');
const projectDropdown = document.getElementById('projectDropdown');
const optionsContainer = document.getElementById('optionsContainer');
const selectedOptionsContainer = document.getElementById('selectedOptionsContainer');

// Listen for the input event
description.addEventListener('input', function() {
    adjustHeight(this);
});

// Adjust the height on page load
adjustHeight(description);
 // Listen for project dropdown changes
 projectDropdown.addEventListener('change', function() {
    const selectedProject = this.value;
    optionsContainer.innerHTML = ''; // Clear the options container

    if (selectedProject) {
        document.innerHTML = "Assign task to";
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
    var newTaskButton = document.getElementById('newTaskButton');
    var popup = document.getElementById('popup');

    // Add a click event listener to the button
    newTaskButton.addEventListener('click', function() {
        // Toggle the display property of the popup
        if (popup.style.display === 'none') {
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    });
});
const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
  });
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});

function addNewTask(taskName, description, project, assignedTo) {
    const taskList = document.getElementById('taskList');

    // Create a new task container
    const newTaskContainer = document.createElement('div');
    newTaskContainer.classList.add('msg-header');

    // Create the container for task details
    const container1 = document.createElement('div');
    container1.classList.add('container1');
    const activeDiv = document.createElement('div');
    activeDiv.classList.add('active');
    const taskNameParagraph = document.createElement('p');
    taskNameParagraph.textContent = taskName;

    // Create task status buttons
    const taskStatusDiv = document.createElement('div');
    taskStatusDiv.classList.add('task-status');
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('status-btn', 'complete');
    completeBtn.textContent = 'Complete';
    const incompleteBtn = document.createElement('button');
    incompleteBtn.classList.add('status-btn', 'incomplete');
    incompleteBtn.textContent = 'Incomplete';

    // Add event listeners to task status buttons
    completeBtn.addEventListener('click', function() {
        newTaskContainer.style.backgroundColor = 'lightgreen';
    });
    incompleteBtn.addEventListener('click', function() {
        newTaskContainer.style.backgroundColor = 'lightcoral';
    });

    // Append task status buttons to the container
    taskStatusDiv.appendChild(completeBtn);
    taskStatusDiv.appendChild(incompleteBtn);

    // Append task name and status to the active div
    activeDiv.appendChild(taskNameParagraph);
    activeDiv.appendChild(taskStatusDiv);

    // Append active div to container1
    container1.appendChild(activeDiv);

    // Create the description display div
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('displayDiscription');

    // Add description text to the description display div
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = 'Description:';
    const descriptionText = document.createElement('p');
    descriptionText.textContent = description;
    const projectParagraph = document.createElement('p');
    projectParagraph.textContent = 'Project: ' + project;
    const assignedToParagraph = document.createElement('p');
    assignedToParagraph.textContent = 'Assigned to:';

    // Create an ordered list for assigned users
    const assignedList = document.createElement('ol');
    assignedList.style.color = 'white';
    assignedList.style.textAlign = 'left'; // Align the list items to the left
    assignedList.style.marginTop = '-5px'; // Adjust margin as needed
    assignedTo.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user;
        assignedList.appendChild(listItem);
    });

    // Append description details to the description display div
    descriptionDiv.appendChild(descriptionParagraph);
    descriptionDiv.appendChild(descriptionText);
    descriptionDiv.appendChild(projectParagraph);
    descriptionDiv.appendChild(assignedToParagraph);
    descriptionDiv.appendChild(assignedList);

    // Append container1 and descriptionDiv to new task container
    newTaskContainer.appendChild(container1);
    newTaskContainer.appendChild(descriptionDiv);

    // Append new task container to the task list
    taskList.appendChild(newTaskContainer);
}
document.querySelectorAll('.status-btn').forEach(button => {
    button.addEventListener('click', function() {
        const task = this.closest('.msg-header');
        if (this.classList.contains('complete')) {
            task.style.backgroundColor = 'lightgreen';
        } else if (this.classList.contains('incomplete')) {
            task.style.backgroundColor = 'lightcoral';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('popup');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('boardName').value;
        const description = document.getElementById('description').value;
        const projectDropdown = document.getElementById('projectDropdown');
        const selectedProject = projectDropdown.options[projectDropdown.selectedIndex].text;
        const selectedOptions = document.querySelectorAll('.optionCheckbox:checked');
        const assignedTo = Array.from(selectedOptions).map(option => option.value);

        addNewTask(taskName, description, selectedProject, assignedTo);

        // Reset form fields
        form.reset();
        document.getElementById('optionsContainer').innerHTML = ''; // Clear selected options
        document.getElementById('popup').style.display = 'none'; // Hide the popup
    });
});
