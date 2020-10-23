function setText() {

    var barcode = document.getElementById("barcode-input").value.replace(/[！-～]/g, function(str) {
        return String.fromCharCode(str.charCodeAt(0) - 0xFEE0);
    });

    switch (barcode) {
        case "0103943732":
            document.getElementById("result").textContent = "兼用黒ズボンR";
            break;
        case "0103943733":
            document.getElementById("result").textContent = "黒ジャケット";
            break;
        case "0103943734":
            document.getElementById("result").textContent = "白半袖シャツ";
            break;
        case "0103943735":
            document.getElementById("result").textContent = "青長袖シャツ";
            break;
        case "0103943736":
            document.getElementById("result").textContent = "赤スカート";
            break;
        case "0103943737":
            document.getElementById("result").textContent = "茶コート";
            break;
        case "0103943738":
            document.getElementById("result").textContent = "ネクタイ";
            break;
        case "0103943739":
            document.getElementById("result").textContent = "ワイシャツ";
            break;
        default:
            document.getElementById("result").textContent = "登録されていないコードです";
    }
    document.getElementById("barcode-input").blur();
}

function checkInput($this) {
    if ($this.value.length === 10) {
        setText();
    }
}

function clearInput() {
    document.getElementById("barcode-input").value = "";
    document.getElementById("result").textContent = "";
    focusElement();
}

function focusElement() {
    document.getElementById("barcode-input").focus();
}