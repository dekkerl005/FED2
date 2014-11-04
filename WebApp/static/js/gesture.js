var movies = document.getElementById('movies');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(movies);

var panFilter = document.getElementById('pan-filter');

// listen to events...
mc.on("panleft", function(ev) {
    panFilter.classList.remove('panRight');
    panFilter.classList.add('panLeft');

});

mc.on("panright", function(ev) {
    panFilter.classList.remove('panLeft');
    panFilter.classList.add('panRight');
});