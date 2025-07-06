 // ========== VOICE COMMANDS ==========
const voiceBtn = document.createElement("button");
voiceBtn.innerText = "🎤 Voice Input";
voiceBtn.classList.add("voice-btn"); // ✅ just use the class
document.body.appendChild(voiceBtn);
// Use Web Speech API
voiceBtn.addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById("inputBox").value = transcript;
    newLine = true;
  };

  recognition.onerror = function (event) {
    alert("Voice input failed: " + event.error);
  };
});