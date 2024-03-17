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
