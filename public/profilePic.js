document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const profilePic = document.getElementById('profilePic');

    // Event listener for clicking on the image
    profilePic.addEventListener('click', function() {
        imageInput.click(); // Trigger file input click
    });

    // Event listener for file input change
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0]; // Get the selected file

        if (file) {
            const reader = new FileReader();

            // Closure to capture the file information
            reader.onload = function(event) {
                profilePic.src = event.target.result; // Set the image source to the selected file
            };      

            // Read in the image file as a data URL
            reader.readAsDataURL(file);
        }
    });
});
