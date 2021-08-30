/***
 * src: https://dev.to/dailydevtips1/vanilla-javascript-modal-pop-up-2oki
 ***/

function content_modal() {
    // console.log('content_modal');
    const modals = document.querySelectorAll("[data-modal]");

    modals.forEach(function (trigger) {
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        const modal = document.getElementById(trigger.dataset.modal);
        modal.classList.add("open");
        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach(function (exit) {
          exit.addEventListener("click", function (event) {
            event.preventDefault();
            modal.classList.remove("open");
          });
        });
      });
    });
    
}

module.exports = content_modal();