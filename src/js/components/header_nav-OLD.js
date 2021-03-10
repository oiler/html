function setup_nav() {
    //console.log('setup_nav');
    //https://codepen.io/escherina/pen/pyxYqz
    var nav = document.querySelector("#nav"),
        navToggle = document.querySelector("#menu");
    if (navToggle) {
      navToggle.addEventListener("click", function(e) {
        if (nav.className == "open") {
          nav.className = "closed";
        } else {
          nav.className = "open";
        }
        e.preventDefault();
      }, false);
    }
    /* Any click outside of the nav element will close the menu if it's open */
    var specifiedElement = document.querySelector('#menu');
    document.addEventListener('click', function(event) {
      var isClickInside = specifiedElement.contains(event.target);
      if (!isClickInside && nav.className == "open") {
        nav.className = "closed";
      } 
    });
}

module.exports = setup_nav();
