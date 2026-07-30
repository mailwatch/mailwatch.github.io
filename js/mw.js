document.addEventListener("DOMContentLoaded", function () {
    const featureLinks = document.querySelectorAll("a[href='#features']");
    const featureSection = document.getElementById("features");

    if (featureSection) {
        featureLinks.forEach(function(link) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                featureSection.scrollIntoView({ behavior: "smooth" });
            });
        });
    }
});