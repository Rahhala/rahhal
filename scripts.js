document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const skillBars = document.querySelectorAll('.skill-bar');
    const datetimeElement = document.getElementById('datetime');

    // Function to update datetime
    function updateDateTime() {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Amman',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        };
        datetimeElement.textContent = now.toLocaleString('en-US', options);
    }

    // Update datetime initially and set interval
    updateDateTime();
    setInterval(updateDateTime, 1000);

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove 'active' class from all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Add 'active' class to the clicked section
            const targetSectionId = link.getAttribute('data-section');
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }

    // Animate skill bars
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-skill');
        bar.querySelector('span').style.width = width + '%';
    });
});
