(function () {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Mobile menu
    const nav = document.querySelector(".nav");
    const btn = document.querySelector(".hamburger");
    if (nav && btn) {
        btn.addEventListener("click", () => {
            const open = nav.classList.toggle("open");
            btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
    }

    // Email link (avoid scraping)
    // const emailLink = document.getElementById("emailLink");
    // if (emailLink) {
    //     const user = "harish";
    //     const domain = "hnaik.com";
    //     const subj = encodeURIComponent("Project inquiry");
    //     emailLink.href = `mailto:${user}@${domain}?subject=${subj}`;
    // }
    // Email link (avoid scraping)
    const emailLink = document.getElementById("emailLink");
    if (emailLink) {
        const user = "consult";
        const domain = "hnaik.com";
        const subj = encodeURIComponent("Project inquiry");
        emailLink.href = `mailto:${user}@${domain}?subject=${subj}`;
    }

})();
