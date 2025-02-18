// Language Auto-Detection
const detectedLanguage = document.getElementById('detected-language');
const userLanguage = navigator.language || navigator.userLanguage;
detectedLanguage.textContent = userLanguage;

// Mood Tracker
const moodResponse = document.getElementById('mood-response');
const moods = {
  happy: "Great to hear! Keep smiling! 😊",
  neutral: "Thanks for checking in. Let us know if you need anything! 😐",
  stressed: "We're here to help. Would you like to talk to someone? 😔"
};

document.getElementById('happy').addEventListener('click', () => {
  moodResponse.textContent = moods.happy;
});

document.getElementById('neutral').addEventListener('click', () => {
  moodResponse.textContent = moods.neutral;
});

document.getElementById('stressed').addEventListener('click', () => {
  moodResponse.textContent = moods.stressed;
});

// Floating "Need Help?" Button
function openHelpMenu() {
  const helpMenu = document.getElementById('help-menu');
  helpMenu.classList.toggle('hidden');
}

function connectToNHS111() {
  alert("Connecting you to NHS 111...");
}

function connectToAdvocate() {
  alert("Connecting you to a local advocate...");
}

function callEmergency() {
  alert("Calling emergency services...");
}
