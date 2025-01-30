document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById("loveButton");
    const secretMessage = document.getElementById("secretMessage");

    loveButton.addEventListener("click", function () {
        secretMessage.classList.remove("hidden");
        createHearts();
    });

    function createHearts() {
        for (let i = 0; i < 50; i++) {
            let heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 4 + 6 + "s";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 10000);
        }
    }

    setInterval(createHearts, 5000);
});
