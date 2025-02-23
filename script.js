// Target tanggal: 25 Februari 2025, 00:00 WIB
const targetDate = new Date("2025-02-25T00:00:00+07:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        ${days} Hari ${Math.floor(hours)} Jam ${minutes} Menit ${seconds} Detik
    `;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Pendaftaran Gelombang Kedua Telah Dibuka!";
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Panggil fungsi sekali untuk menghindari delay awal