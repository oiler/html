'use strict';

function setup_totalnav() {
    var nav_icon = document.getElementById("primary_nav_icon");
    var primary_nav = document.getElementById("primary_nav");
    var isMobile = function isMobile() {
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i) ) {
            //alert("You're using Mobile Device!!")
            return true;
        } else {
            return false;
        }
    }

    // nav is mobile by default, this detects viewport width and sets for desktop
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth; 
    //console.log(viewportWidth);
    if (viewportWidth > 640 && !isMobile()) {
        nav_icon.classList.add("desktop");
        primary_nav.classList.add("desktop");
    }

    var toggles = document.querySelectorAll('[data-menu]');
    function run_toggle(content, button) {
        // if is primary nav, then change the menu icon
        if ( content.id === "primary_nav" ) {
            var nav_icon = document.getElementById("primary_nav_icon");
            if ( nav_icon.classList.contains("closed") ) {
                nav_icon.classList.remove("closed");
                nav_icon.classList.add("open");
            } else {
                nav_icon.classList.add("closed");
                nav_icon.classList.remove("open");
            }
        }
        // this is for all other toggles on page, including secondary nav
        var toggle_status = content.getAttribute('data-menu_state');;
        if (toggle_status === 'open') {
            // hide the content
            content.setAttribute('data-menu_state', 'closed');
            content.classList.remove('open');
            button.classList.remove('open');
            return;
        }
        // show the content
        content.setAttribute('data-menu_state', 'open');
        content.classList.add('open');
        button.classList.add('open');
    }

    Object.keys(toggles).forEach(function(key) {
        var toggle = toggles[key];
        var target_id = toggle.getAttribute("data-menu");
        toggle.addEventListener("click", function (toggle) {
            //if (!event.target.classList.contains('toggle')) return;
            event.preventDefault();
            // var target = toggle.getAttribute("data-menu");
            //console.log('target', target);
            // var content = document.querySelector(event.target.hash);
            var content = document.querySelector("#"+target_id);
            var button = event.target;
            //  console.log(button);
            if (!content) return;
            run_toggle(content, button);
        });
    });

}
module.exports = setup_totalnav();