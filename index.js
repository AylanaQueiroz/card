var acc = document.getElementsByClassName("button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var testeesconderp = this.nextElementSibling;
    if (testeesconderp.style.display === "block") {
        testeesconderp.style.display = "none";
    } else {
        testeesconderp.style.display = "block";
    }
  });
}