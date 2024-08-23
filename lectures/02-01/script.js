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
