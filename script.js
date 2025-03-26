document.addEventListener("DOMContentLoaded", function () {
    // すべてのセクション内のh2以外を非表示にする
    document.querySelectorAll("section").forEach(section => {
        Array.from(section.children).forEach(child => {
            if (child.tagName !== "H2") {
                child.style.display = "none";
            }
        });

        // 各セクションに「詳細表示」ボタンを追加
        let button = document.createElement("button");
        button.textContent = "詳細表示";
        button.style.display = "block";
        button.style.marginTop = "10px";
        button.addEventListener("click", function () {
            Array.from(section.children).forEach(child => {
                if (child.tagName !== "H2") {
                    child.style.display = "block";
                }
            });
            button.style.display = "none"; // ボタンを消す
        });
        section.appendChild(button);
    });
});
