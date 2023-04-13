window.addEventListener("load", () => {
    setTimeout(removeLoader, 2500);
});

function removeLoader(): void {
    const loader: HTMLElement | null = document.getElementById("loader");
    if (loader) document.body.removeChild(loader);
}
