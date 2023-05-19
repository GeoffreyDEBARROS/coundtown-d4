const updateCountdown = () => {
  let today = new Date();
  let launchDay = new Date(2023, 5, 6, 1, 0);
  let countDown = launchDay - today;

  // Convertir la différence en millisecondes en jours, heures, minutes et secondes
  let seconds = Math.floor(countDown / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  // Obtenir les parties restantes pour chaque unité de temps
  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  daysI.innerHTML = days;
  hoursI.innerHTML = hours;
  minutesI.innerHTML = minutes;
  secondsI.innerHTML = seconds;
};

updateCountdown();

setInterval(updateCountdown, 1000);
