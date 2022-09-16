// BT1: Tìm số nguyên dương nhỏ nhất
function ex1() {
    var n;
    var sum = 0;
    for (var i = 1; sum <= 10000; i++) {
        n = i;
        sum += i;
    }

    document.getElementById("result").innerHTML = "Số nguyên dương nhỏ nhất là: " + n;
}

// BT2: Tính tổng
function ex2() {
    var x = +document.getElementById("numberX").value;
    var n = +document.getElementById("numberN").value;
    var t = 1;
    var s = 0;

    for (var i = 1; i <= n; i++) {
        t = t * x;
        s = s + t;
    }

    document.getElementById("calcsum").innerHTML = "Tổng: " + s;
}

// BT3: Tính giao thừa
function ex3() {
    var n = +document.getElementById("num").value;
    var t = 1;
    for (var k = 1; k <= n; k++) {
        t *= k;
    }

    document.getElementById("calcfactorial").innerHTML = "Giai thừa:" + t;
}

// BT4: Tạo thẻ Div
function changeBackground() {
    var addDiv = document.getElementById("addDiv");
    var showDiv = "";
    for (var k = 1; k <= 10; k++) {

        if (k % 2 === 0) {
            // Vị trí chẵn => màu đỏ
            showDiv += `<div class="addDiv" id="addDiv" style="background-color: red; display: block"><p>Div Chan</p></div>`;
        }
        else {
            // Vị trí lẻ => màu xanh
            showDiv += `<div class="addDiv" id="addDiv" style="background-color: blue; display: block"><p>Div Le</p></div>`;
        }
    }
    addDiv.innerHTML = showDiv;
    addDiv.style.display = "block";
}

// BT5: In số nguyên tố
function testInteger (n) {
    var isPrime = true;

    if (n < 2) {
        isPrime = false;
    }
    else if (n === 2) {
        isPrime = true;
    }
    else if (n % 2 === 0) {
        isPrime = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

function printInteger() {
    var number = document.getElementById("number").value;
    number = parseInt(number);
    var print = "";
    for (var i = 1; i <= number; i++) {

        if (testInteger(i)) {
            print += i + ", ";
        }
    }
    document.getElementById("printInteger").innerHTML = "Các số nguyên tố trong dãy số từ 1 đến " + number + " là: " + print;
}