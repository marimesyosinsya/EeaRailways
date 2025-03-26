document.addEventListener("DOMContentLoaded", function () {
    // ボタン要素を取得
    const showButton = document.getElementById("showButton");
    const hideButton = document.getElementById("hideButton");
    
    // すべてのh2以外の要素を取得
    const sections = document.querySelectorAll("section > *:not(h2)");
    
    // 初期状態ではh2以外を非表示にする
    sections.forEach(element => {
        element.style.display = "none";
    });

    // 「表示する」ボタンのクリックイベント
    showButton.addEventListener("click", function () {
        sections.forEach(element => {
            element.style.display = "block"; // h2以外を表示
        });
    });

    // 「隠す」ボタンのクリックイベント
    hideButton.addEventListener("click", function () {
        sections.forEach(element => {
            element.style.display = "none"; // h2以外を非表示
        });
    });
});
