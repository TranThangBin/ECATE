routingLanguage();
window.addEventListener("hashchange", routingLanguage);

function routingLanguage(): void {
    const hash: string = window.location.hash;
    if (hash == "#" || hash == "") return;
    const language: string = hash.replace("#", "");
    const routTo = document.getElementById("rout-to");
    const routToIcon = routTo?.getElementsByTagName("i")[0];
    routToIcon?.classList.remove("text-gray-500");
    routTo?.setAttribute("href", `./${language}/auth.html`);
}
