document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".scope-of-therapy-item");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = [...items].indexOf(entry.target);

                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 100); // 100 ms odstępu między kafelkami

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    items.forEach((item) => observer.observe(item));
});