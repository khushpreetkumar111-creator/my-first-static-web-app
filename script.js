// Select elements
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Add event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

// Function to send user message
function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage("user", "🧑", text);
  userInput.value = "";

  setTimeout(() => {
    simulateBotResponse(text);
  }, 800);
}

// Function to add messages to the chat
function addMessage(sender, avatar, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);

  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("avatar");
  avatarDiv.textContent = avatar;

  const textDiv = document.createElement("div");
  textDiv.classList.add("text");
  textDiv.textContent = text;

  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(textDiv);
  chatContainer.appendChild(messageDiv);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to simulate bot response
function simulateBotResponse(userText) {
  let reply = "";

  if (userText.toLowerCase().includes("hello")) {
    reply = "Hello there! 👋 How are you today?";
  } else if (userText.toLowerCase().includes("name")) {
    reply = "I’m Helper GPT, your friendly AI assistant.";
  } else if (userText.toLowerCase().includes("help")) {
    reply = "Sure! I can assist you with information, coding, or study tips.";
  } else {
    reply = "That’s interesting! Tell me more about it.";
  }

  addMessage("bot", "🤖", reply);
}
