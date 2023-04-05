setTimeout(removeLoader, 2500);

function removeLoader(): void {
    const loader: HTMLElement | null = document.getElementById("loader");
    if (loader) document.body.removeChild(loader);
}

const languageElements: NodeListOf<Element> =
    document.querySelectorAll("[data-language]");
languageElements.forEach((element: Element) => {
    element.addEventListener("click", (event: Event) =>
        routingLanguage(event as MouseEvent)
    );
});

function routingLanguage(e: MouseEvent) {
    const languageElement: HTMLElement | null = e.target as HTMLElement | null;
    const language: string | null | undefined = languageElement
        ?.getAttribute("href")
        ?.replace("#", "");
    const routTo: HTMLElement | null = document.getElementById("rout-to");
    routTo?.setAttribute("href", `./${language}/auth.html`);
    const routToCharacter: HTMLElement | undefined =
        routTo?.getElementsByTagName("i")[0];
    routToCharacter?.classList.remove("text-blue-800");
}
