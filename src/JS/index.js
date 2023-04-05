"use strict";
setTimeout(removeLoader, 2500);
function removeLoader() {
    const loader = document.getElementById("loader");
    if (loader)
        document.body.removeChild(loader);
}
const languageElements = document.querySelectorAll("[data-language]");
languageElements.forEach((element) => {
    element.addEventListener("click", (event) => routingLanguage(event));
});
function routingLanguage(e) {
    const languageElement = e.target;
    const language = languageElement
        ?.getAttribute("href")
        ?.replace("#", "");
    const routTo = document.getElementById("rout-to");
    routTo?.setAttribute("href", `./${language}/auth.html`);
    const routToCharacter = routTo?.getElementsByTagName("i")[0];
    routToCharacter?.classList.remove("text-blue-800");
}
