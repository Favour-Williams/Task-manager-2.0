// Function to adjust the height of the textarea
function adjustHeight(textarea) {
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scrollHeight
}

// Select the textarea
const description = document.getElementById('description');

// Listen for the input event
description.addEventListener('input', function() {
    adjustHeight(this);
});

// Adjust the height on page load
adjustHeight(description);

document.getElementById('addPersonButton').addEventListener('click', function() {
    var personName = document.getElementById('personInput').value;
    if (personName) {
        // Add person to the list
        var list = document.getElementById('personList');
        var listItem = document.createElement('li');
        listItem.textContent = personName + ' - ';
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            list.removeChild(listItem);
        });
        listItem.appendChild(removeButton);
        list.appendChild(listItem);
        // Clear the input field
        document.getElementById('personInput').value = '';
    } else {
        alert('Please enter a person\'s name.');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const createProjectButton = document.getElementById('createProjectButton');
    const popup = document.getElementById('popup');

    createProjectButton.addEventListener('click', function() {
        popup.style.display = 'block';
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
