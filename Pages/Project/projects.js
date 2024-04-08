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
        removeButton.style.fontSize='9px'
        removeButton.style.width='50px';
        removeButton.style.textAlign='center';
        removeButton.style.height='25px';
        removeButton.style.paddingRight ='-25px';
        removeButton.style.marginTop='-7px';
        removeButton.style.marginBottom='15px';
        removeButton.style.marginRight='50px';
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





document.addEventListener('DOMContentLoaded', function() {
    const createProjectButton = document.getElementById('createProjectButton');
    const popup = document.getElementById('popup');
    const taskList = document.getElementById('taskList'); // Added this line

    createProjectButton.addEventListener('click', function() {
        popup.style.display = 'block';
    });

    document.getElementById('ProjectForm').addEventListener('submit', function(event) { // Changed to 'ProjectForm' for correct form ID
        event.preventDefault(); // Prevent form submission

        const projectName = document.getElementById('boardName').value;
        const description = document.getElementById('description').value;
        const collaborators = Array.from(document.querySelectorAll('#personList li')).map(li => li.textContent.trim().split(' - ')[0]); // Updated this line

        if (projectName && description && collaborators.length > 0) {
            // Create new project element
            const newProject = document.createElement('div');
            newProject.classList.add('msg-header');
            newProject.innerHTML = `
                <div class="container1">
                    <div class="active">
                        <p>${projectName}</p>
                    </div>
                </div>
                <div class="displayDiscription">
                    <p>Description:</p>
                    <p>${description}</p>
                    <p>Collaborators:</p>
                    <ol>${collaborators.map(collaborator => `<li>${collaborator}</li>`).join('')}</ol>
                </div>
            `;

            taskList.appendChild(newProject);
            popup.style.display = 'none';
            document.getElementById('ProjectForm').reset(); // Reset form fields

            // Update the style of newly added collaborators
            const newCollaborators = newProject.querySelectorAll('li');
            newCollaborators.forEach(collaborator => {
                collaborator.style.marginLeft = '-260px'; // Set margin-left to 10px
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
});
