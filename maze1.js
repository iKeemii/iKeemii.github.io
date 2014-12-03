var loser = false;

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    var i = 0;
    while (i < boundaries.length ) {
        boundaries[i].onmouseover = overBoundary;
        i++;
    }
};

function overBoundary() {
    loser = true;
    var boundaries = $$("div#maze div.boundary");
    i = 0; 
    $("status").textContent = "You lose!";
    while (i < boundaries.length) {
        boundaries[i].addClassName("youlose");
         i++;
    }
};

function startClick() {
    loser = false;
    var boundaries = $$("div#maze div.boundary");
    i = 0;
    $("status").textContent = "Find the end!";
    while (var i = 0; i < boundaries.length) {
        boundaries[i].removeClassName("youlose");
         i++;
    }
};

function overEnd() {
    if(!loser) {
        $("status").textContent = "You win!";}
};
