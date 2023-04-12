const toSections = document.querySelectorAll("[data-toSection]");
for (let i: number = 0; i < 4; i++) {
    const toThisSection = toSections[i] as HTMLElement;
    toThisSection.addEventListener("click", changeSection);
}

function changeSection(e: MouseEvent) {
    const thisButton = e.currentTarget as HTMLElement;
    for (let i: number = 0; i < 4; i++) {
        toSections[i].classList.remove("text-white");
        toSections[i].classList.replace(
            "border-t-blue-300",
            "border-t-transparent"
        );
    }
    if (!thisButton.classList.contains("text-white")) {
        thisButton.classList.add("text-white");
        thisButton.classList.replace(
            "border-t-transparent",
            "border-t-blue-300"
        );
    }
}
