document.addEventListener("DOMContentLoaded", function() {
    // h2以外の要素を非表示にする
    document.querySelectorAll("main > section > *:not(h2)").forEach(element => {
        element.style.display = "none";
    });

    // 表示/非表示の切り替えボタンを作成
    document.querySelectorAll("main > section").forEach(section => {
        let toggleButton = document.createElement("button");
        toggleButton.textContent = "詳細を表示";
        toggleButton.classList.add("toggle-button");
        section.insertBefore(toggleButton, section.children[1]);

        toggleButton.addEventListener("click", function() {
            let isHidden = section.querySelector("h3")?.style.display === "none";
            section.querySelectorAll("*:not(h2):not(button)").forEach(el => {
                el.style.display = isHidden ? "block" : "none";
            });
            toggleButton.textContent = isHidden ? "詳細を隠す" : "詳細を表示";
        });
    });
});
