function content_toggle() {
    console.log('content_toggle');
    // Listen for click events
    document.addEventListener('click', function (event) {
        console.log('toggle');
        // Make sure clicked element is our toggle
        if (!event.target.classList.contains('toggle')) return;
        
        // Prevent default link behavior
        event.preventDefault();
        
        // Get the content
        var content = document.querySelector(event.target.hash);
        console.log(content);
        if (!content) return;
        
        // Toggle the content
        toggle(content);
        
    }, false);

}

module.exports = content_toggle();