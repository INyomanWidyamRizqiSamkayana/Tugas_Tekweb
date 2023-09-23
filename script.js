// Fungsi untuk menghitung deret Fibonacci
function calculateFibonacci() {
    const n = parseInt(document.getElementById("fibonacci-input").value);
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    document.getElementById("fibonacci-result").textContent = fib.slice(0, n + 1).join(", ");
}
// Fungsi untuk menghitung volume bangun ruang
function calculateVolume() {
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const volume = length * width * height;

    document.getElementById("volume-result").textContent = volume.toFixed(2);
}
