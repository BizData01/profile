
// Tab Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    function switchTab(event) {
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to clicked button
        const clickedButton = event.target;
        clickedButton.classList.add('active');

        // Find corresponding panel and activate it
        const targetId = clickedButton.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetId);
        targetPanel.classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Scroll Reveal Animation (Simple Implementation)
    const scrollElements = document.querySelectorAll("[data-scroll]");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
        element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    };

    // Initial style for scroll elements
    scrollElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
    });

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        })
    }

    window.addEventListener('scroll', () => { 
        handleScrollAnimation();
    });

    // Trigger once on load
    handleScrollAnimation();
});
