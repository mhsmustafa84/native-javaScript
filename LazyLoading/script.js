const images = document.querySelectorAll("img");

// window.addEventListener("scroll", () => {
//     images.forEach((img) => {
//         const rect = img.getBoundingClientRect().top;
//         if (rect <= window.innerHeight) {
//             const src = img.getAttribute("data-src");
//             img.setAttribute("src", src);
//         }
//     });
// });

images.forEach((item) => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                const img = item.target;
                const src = img.getAttribute("data-src");
                img.setAttribute("src", src);
                img.classList.add("fade");
                observer.disconnect();
            }
        });
    });
    io.observe(item);
});

