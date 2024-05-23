document.getElementById('calculate-btn').addEventListener('click', function () {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;

    if (base && height) {
        const area = 0.5 * base * height;
        document.getElementById('result').textContent = `Luas Segitiga: ${area}`;
    } else {
        document.getElementById('result').textContent = 'Mohon masukkan nilai alas dan tinggi.';
    }
});

document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('base').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
});
