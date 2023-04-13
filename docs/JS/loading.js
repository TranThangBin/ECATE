"use strict";
window.addEventListener("load", () => {
    setTimeout(removeLoader, 2500);
});
function removeLoader() {
    const loader = document.getElementById("loader");
    if (loader)
        document.body.removeChild(loader);
}
