function launchPhoto(image) {
    var cl = document.getElementById("viewer");
    cl.innerHTML = document.write('<img src="'+image+'"/>');
}