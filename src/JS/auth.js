"use strict";
location.hash = "";
navigate();
window.addEventListener("hashchange", navigate);
function navigate() {
    const hash = window.location.hash;
    let navigateSection = "0";
    if (hash == "#register")
        navigateSection = "-100%";
    if (hash == "#login")
        navigateSection = "-200%";
    if (hash == "#subject")
        navigateSection = "-300%";
    const currentSection = document.getElementById("current-section");
    const sectionLocation = currentSection?.getElementsByTagName("div");
    if (!sectionLocation)
        return;
    let sectionPoint = 0;
    let state = "bottom-state_1";
    if (hash != "#" && hash != "")
        state = "bottom-state_2";
    if (hash == "#login" || hash == "#register")
        sectionPoint = 1;
    if (hash == "#subject")
        sectionPoint = 2;
    document.documentElement.style.setProperty("--auth-navigation", navigateSection);
    for (let i = 0; i < 3; i++) {
        sectionLocation[i].classList.replace("bg-white", "bg-gray-400");
        sectionLocation[i].classList.replace("w-8", "w-3");
    }
    sectionLocation[sectionPoint].classList.replace("bg-gray-400", "bg-white");
    sectionLocation[sectionPoint].classList.replace("w-3", "w-8");
    currentSection?.classList.remove("bottom-state_1", "bottom-state_2");
    currentSection?.classList.add(state);
}
