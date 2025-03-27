document.addEventListener("DOMContentLoaded", function() {
    // h2以外の要素を非表示にする（ボタンを含めない）
    document.querySelectorAll("main > section > *:not(h2):not(.button-container)").forEach(element => {
        element.style.display = "none";
    });

    // 各セクションにボタンを追加
    document.querySelectorAll("main > section").forEach(section => {
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container"); // CSSクラスを追加

        let showButton = document.createElement("button");
        showButton.textContent = "詳細を表示";
        showButton.classList.add("toggle-button");

        let hideButton = document.createElement("button");
        hideButton.textContent = "詳細を隠す";
        hideButton.classList.add("toggle-button");

        buttonContainer.appendChild(showButton);
        buttonContainer.appendChild(hideButton);

        // h2 の直後にボタンを挿入
        let h2 = section.querySelector("h2");
        if (h2) {
            h2.insertAdjacentElement("afterend", buttonContainer);
        }

        // 表示ボタンのイベント
        showButton.addEventListener("click", function() {
            section.querySelectorAll("*:not(h2):not(.button-container)").forEach(el => {
                el.style.display = "block"; // 要素を表示
            });
        });

        // 非表示ボタンのイベント（ボタンコンテナは非表示にしない）
        hideButton.addEventListener("click", function() {
            section.querySelectorAll("*:not(h2):not(.button-container)").forEach(el => {
                el.style.display = "none"; // 要素を非表示
            });
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // h2以外の要素を非表示にする（ボタンを含めない）
    document.querySelectorAll("main > section > *:not(h2):not(.button-container)").forEach(element => {
        element.style.display = "none";
    });

    // 各セクションにボタンを追加
    document.querySelectorAll("main > section").forEach(section => {
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container"); // CSSクラスを追加

        let showButton = document.createElement("button");
        showButton.textContent = "詳細を表示";
        showButton.classList.add("toggle-button");

        let hideButton = document.createElement("button");
        hideButton.textContent = "詳細を隠す";
        hideButton.classList.add("toggle-button");

        buttonContainer.appendChild(showButton);
        buttonContainer.appendChild(hideButton);

        // h2 の直後にボタンを挿入
        let h2 = section.querySelector("h2");
        if (h2) {
            h2.insertAdjacentElement("afterend", buttonContainer);
        }

        // 表示ボタンのイベント
        showButton.addEventListener("click", function() {
            section.querySelectorAll("*:not(h2):not(.button-container)").forEach(el => {
                el.style.display = "block"; // 要素を表示
            });
        });

        // 非表示ボタンのイベント（ボタンコンテナは非表示にしない）
        hideButton.addEventListener("click", function() {
            section.querySelectorAll("*:not(h2):not(.button-container)").forEach(el => {
                el.style.display = "none"; // 要素を非表示
            });
        });
    });
});
