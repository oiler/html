/***
 * src: https://dev.to/dailydevtips1/vanilla-javascript-modal-pop-up-2oki
 * additional: https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
 ***/

function content_modal() {
    // console.log('content_modal');
    const modals = document.querySelectorAll("[data-modal]");

    modals.forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add("open");
        
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;

        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach(function (exit) {
          exit.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.remove("open");
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
          });
        });
      });
    });
    
}

module.exports = content_modal();