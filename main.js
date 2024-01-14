document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('popupForm'), {});
    myModal.show();

    // // Handle form submission and close the modal
    //     var form = document.querySelector('#popupForm form');
    //     form.addEventListener('submit', function (event) {
    //         event.preventDefault();
    //         myModal.hide();
    // });
});
$(document).ready(function () {
    // Intercept the form submission
    $('form').submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Send the form data to Formspree via AJAX
        $.ajax({
            url: 'https://formspree.io/f/mkndgbwa',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function () {
                // Handle success, e.g., show a thank you message
                alert('Form submitted successfully!');
                $('#popupForm').modal('hide');

                // Clear the form fields if needed
                document.getElementById("form").reset();
            },
            error: function () {
                // Handle error, e.g., show an error message
                alert('Error submitting the form.');
            }
        });
    });
});