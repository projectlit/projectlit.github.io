document.addEventListener('keydown', function(event) {
    if (event.key === '.') {
        changeSize();
    }
});

var sz = 1;

function changeSize() {
    document.getElementById("pl1").style.lineHeight = sz;
    console.log("Key pressed.");
    sz++;
    console.log(sz);
}