"use strict";

var Main = ( function(){

    window.onload = function() {
        document.querySelectorAll('.level-bar-inner').forEach((item) => {
            console.log(item);
            item.style.width = item.dataset.level;
        });
    };

})();