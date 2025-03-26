document.addEventListener("DOMContentLoaded", function() {
    // table-container に display: flex を追加して、テーブルを横並びにする
    let tableContainer = document.querySelector(".table-container");
    if (tableContainer) {
        tableContainer.style.display = "flex";
        tableContainer.style.gap = "20px"; // テーブル間のスペースを追加
    }
});

    // 表示/非表示の切り替えボタンを作成
    document.querySelectorAll("main > section").forEach(section => {
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        
        let showButton = document.createElement("button");
        showButton.textContent = "詳細を表示";
        showButton.classList.add("toggle-button");
        
        let hideButton = document.createElement("button");
        hideButton.textContent = "詳細を隠す";
        hideButton.classList.add("toggle-button");
        
        buttonContainer.appendChild(showButton);
        buttonContainer.appendChild(hideButton);

        // 最初の h2 の次にボタンを挿入（h2が必ず存在する前提）
        let h2 = section.querySelector("h2");
        if (h2) {
            h2.insertAdjacentElement("afterend", buttonContainer);
        }

        showButton.addEventListener("click", function() {
            section.querySelectorAll("*:not(h2):not(button)").forEach(el => {
                el.style.display = "block";
            });
        });

        hideButton.addEventListener("click", function() {
            section.querySelectorAll("*:not(h2):not(button)").forEach(el => {
                el.style.display = "none";
            });
        });
    });
});
