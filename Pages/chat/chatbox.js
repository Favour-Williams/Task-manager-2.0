document.getElementById('sendButton').addEventListener('click', function() {
    // Get the message from the input field
    var message = document.getElementById('messageInput').value.trim();
    
    // Get the selected file from the file input
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    // Define a maximum file size (in bytes)
    var MAX_FILE_SIZE = 9000000000000000; // 5MB for example

    // Check if either the message or the file is not empty
    if (message !== '' || file) {
        // Create a new message element
        var messageElement = document.createElement('div');
        messageElement.className = 'message sent';

        // Append the message content to the message element
        var messageContent = document.createElement('p');
        messageContent.textContent = message;
        messageElement.appendChild(messageContent);

        // Create a container for the file element
        var fileContainer = document.createElement('div');

        // If a file is selected, handle file upload here
        if (file) {
            // Check if the file is too large
            if (file.size > MAX_FILE_SIZE) {
                console.error("File is too large.");
                // Optionally, show an error message to the user
                return;
            }

            var reader = new FileReader();
            reader.onload = function(event) {
                var fileUrl = event.target.result;

                // Create an image, video, or document element based on the file type
                var fileType = file.type.split('/')[0]; // 'image', 'video', or 'application'
                var fileElement;

                if (fileType === 'image') {
                    fileElement = document.createElement('img');
                    fileElement.style.width = '190px';
                    fileElement.style.maxHeight = '120px';
                } else if (fileType === 'video') {
                    fileElement = document.createElement('video');
                    fileElement.controls = true;
                    fileElement.style.width = '190px';
                    fileElement.style.maxHeight = '120px';
                } else if (fileType === 'application') {
                    // For documents, create a link element
                    fileElement = document.createElement('a');
                    fileElement.href = fileUrl;
                    fileElement.download = file.name; // Set the download attribute to the file name
                    fileElement.textContent = file.name; // Display the file name as the link text
                }

                if (fileElement) {
                    // For images and videos, set the src attribute
                    if (fileType !== 'application') {
                        fileElement.src = fileUrl;
                    }

                    // Append the file element to the file container
                    fileContainer.appendChild(fileElement);
                }
            };
            reader.onerror = function(error) {
                console.error("Error reading file:", error);
                // Handle the error appropriately, e.g., show an error message to the user
            };
            reader.readAsDataURL(file);
        }

        // Append the file container to the message element
        messageElement.appendChild(fileContainer);

        // Append the message element to the chat messages container
        var chatMessages = document.querySelector('.chat-messages');
        chatMessages.appendChild(messageElement);

        // Clear the input field after sending the message
        document.getElementById('messageInput').value = '';

        // Reset the file input
        fileInput.value = '';

        // Reset the file label text to '+'
        var fileLabel = document.getElementById('fileLabel');
        fileLabel.textContent = '+';

        // Scroll to the bottom of the chat messages container
        chatMessages.scrollTop = chatMessages.scrollHeight;
    } else {
        // Optionally, show a message to the user if both the message and file are empty
        console.log("Please enter a message or attach a file.");
    }
});


document.getElementById('fileInput').addEventListener('change', function() {
    var fileLabel = document.getElementById('fileLabel');
    fileLabel.textContent = this.files[0].name;
});
