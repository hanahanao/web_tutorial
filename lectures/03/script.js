// ウェブページが完全に読み込まれたときに実行される
window.onload = function() {
    // コンソールにメッセージを表示
    console.log("ウェブページが読み込まれました");

    // ヘッダーの色をクリックで変更する
    var header = document.querySelector('header');
    header.addEventListener('click', function() {
        header.style.backgroundColor = header.style.backgroundColor === 'blue' ? '#333' : 'blue';
    });
};

// 変数の定義
let message = "Hello, World!";
console.log(message);

// データ型
let number = 42;      // 数値
let text = "文字列";  // 文字列
let isTrue = true;    // 真偽値

// 簡単な演算
let sum = number + 10; // 足し算
console.log("合計:", sum);

// DOM操作: ボタンがクリックされたときにテキストを変更する
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('myText').textContent = "ボタンがクリックされました!";
});