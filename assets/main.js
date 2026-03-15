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

    // Contact links (avoid scraping)
    const user = "consult";
    const domain = "hnaik.com";
    const email = `${user}@${domain}`;

    const emailLink = document.getElementById("emailLink");
    if (emailLink) {
        const subj = encodeURIComponent("Project inquiry");
        const body = encodeURIComponent(
            "Hi Harish,\n\nContext:\nTimeline:\nCurrent stack:\nConstraints:\nDefinition of done:\n\nThanks,"
        );
        emailLink.href = `mailto:${email}?subject=${subj}&body=${body}`;
    }

    const introLinks = [
        document.getElementById("introCallLink"),
        document.getElementById("introCallLinkSecondary")
    ];

    for (const link of introLinks) {
        if (!link) continue;
        const subj = encodeURIComponent("20-minute intro call");
        const body = encodeURIComponent(
            "Hi Harish,\n\nI would like to schedule a 20-minute intro call.\n\nPreferred times (include timezone):\nProject context:\n\nThanks,"
        );
        link.href = `mailto:${email}?subject=${subj}&body=${body}`;
    }

})();
