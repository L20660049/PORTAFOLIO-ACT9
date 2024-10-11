let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');

let seconds = 0;
let intervalId = null;
let isRunning = false;

// Función para convertir los segundos a formato hh:mm:ss
function formatTime(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Función para actualizar el cronómetro
function updateTimer() {
  timerDisplay.textContent = formatTime(seconds);
}

// Función para iniciar el cronómetro
function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(() => {
      seconds++;
      updateTimer();
    }, 1000);
    isRunning = true;
  }
}

// Función para pausar el cronómetro
function pauseTimer() {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
}

// Función para reiniciar el cronómetro
function resetTimer() {
  clearInterval(intervalId);
  seconds = 0;
  updateTimer();
  isRunning = false;
}

// Asignar eventos a los botones
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Inicializar el cronómetro
updateTimer();
