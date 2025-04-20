let charging = false;
let chargeInterval;

function cekBaterai() {
  const value = parseInt(document.getElementById("inputBaterai").value);
  updateBattery(value);
}

function updateBattery(value) {
  const hasil = document.getElementById("hasil");
  const batteryLevel = document.getElementById("batteryLevel");

  if (isNaN(value) || value < 0 || value > 100) {
    hasil.textContent = "⚠️ Masukkan angka antara 0 dan 100!";
    batteryLevel.style.width = "0%";
    batteryLevel.style.backgroundColor = "#ccc";
    batteryLevel.textContent = "0%";
    return;
  }

  batteryLevel.style.width = value + "%";
  batteryLevel.textContent = value + "%";

  if (value > 80) {
    hasil.textContent = "🔋 Baterai Hampir Penuh";
    batteryLevel.style.backgroundColor = "green";
  } else if (value >= 30) {
    hasil.textContent = "✅ Baterai Sudah Cukup";
    batteryLevel.style.backgroundColor = "orange";
  } else {
    hasil.textContent = "⚠️ Baterai Hampir Habis, segera charge!";
    batteryLevel.style.backgroundColor = "red";
  }
}

function startCharging() {
  if (charging) return;
  charging = true;
  let level = parseInt(document.getElementById("inputBaterai").value) || 0;

  chargeInterval = setInterval(() => {
    if (level >= 100) {
      clearInterval(chargeInterval);
      charging = false;
    } else {
      level++;
      document.getElementById("inputBaterai").value = level;
      updateBattery(level);
    }
  }, 100);
}
// Fungsi untuk toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
