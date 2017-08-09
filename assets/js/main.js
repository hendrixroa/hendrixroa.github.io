"use strict";

var Main = ( function(){
    window.onload = function() {
        document.querySelectorAll('.level-bar-inner').forEach((item) => {
            item.style.width = item.dataset.level;
        });
    };
})();