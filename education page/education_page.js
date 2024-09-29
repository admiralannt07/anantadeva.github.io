document.addEventListener('DOMContentLoaded', () => {
    const certificateLinks = document.querySelectorAll('.certificate-link');
    const unviewButtons = document.querySelectorAll('.unview-btn');

    certificateLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const certId = link.getAttribute('data-certificate');
            const certImage = document.getElementById(certId);

            // Show the certificate image with fade-in
            document.querySelectorAll('.certificate-image').forEach(img => {
                if (!img.classList.contains('fade-out')) {
                    img.classList.remove('fade-in');
                    img.style.display = 'none';
                }
            });

            certImage.style.display = 'block'; // Set display first to ensure fade works
            setTimeout(() => {
                certImage.classList.add('fade-in');
                certImage.classList.remove('fade-out');
            }, 10); // Slight delay for smooth transition
        });
    });

    unviewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const certImage = button.closest('.certificate-image');

            // Fade out the certificate image
            certImage.classList.add('fade-out');

            // After fading out, hide it fully after the transition completes
            setTimeout(() => {
                certImage.classList.remove('fade-in');
                certImage.style.display = 'none'; // Hide after the fade-out
            }, 200); // Match the duration of the fade-out transition
        });
    });
});