let myFunction = () => {
	let x = document.getElementById("navbar-id");
	let y = document.getElementById("navbar-icon-id");
    if (x.className === "navbar") {
        x.className += " navbar-responsive";
        y.className = "fa fa-times fa-lg";
    } else {
        x.className = "navbar";
        y.className = "fa fa-bars fa-lg";
    }
}
