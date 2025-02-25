function expandTopnav() {
    var topnavElement = document.getElementById("topnav");
    console.log(topnavElement)
    if (topnavElement.className === "topnav") {
        topnavElement.className += " expanded";
    } else {
        topnavElement.className = "topnav";
    }
}