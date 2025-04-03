function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  const hourDegrees = (hours * 30) + (minutes * 0.5);
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;
  
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');
  
  hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000);

updateClock();