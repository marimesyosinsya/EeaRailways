document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("main > section").forEach(section => {
        // すでにボタンがある場合は追加しない
        if (section.querySelector(".toggle-button")) return;

        // h2 以外の要素を非表示にする
        section.querySelectorAll("*:not(h2)").forEach(element => {
            element.style.display = "none";
        });

        // ボタンを作成
        let toggleButton = document.createElement("button");
        toggleButton.textContent = "詳細を表示";
        toggleButton.classList.add("toggle-button");

        // h2 の直後にボタンを挿入
        let h2 = section.querySelector("h2");
        if (h2) {
            h2.insertAdjacentElement("afterend", toggleButton);
        }

        // ボタンクリックで詳細の表示/非表示を切り替え
        toggleButton.addEventListener("click", function() {
            let isHidden = section.querySelector("*:not(h2):not(.toggle-button)").style.display === "none";

            // 詳細の表示・非表示を切り替え
            section.querySelectorAll("*:not(h2):not(.toggle-button)").forEach(el => {
                el.style.display = isHidden ? "block" : "none";
            });

            // ボタンのテキストを変更
            toggleButton.textContent = isHidden ? "詳細を隠す" : "詳細を表示";
        });
    });
});
