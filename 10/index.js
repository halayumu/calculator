const cnt = parseInt(prompt('160円の商品をいくつ購入しますか?'));

if (Number.isFinite(cnt)) {
    document.write(`${cnt * 160}円です`);
} else {
    document.write('数字を入力してください');
}