document.addEventListener("DOMContentLoaded", ()=> {
  const chatForm = document.querySelector(".input-container") || document.querySelector("form");
  const userInput = document.querySelector("textarea") || document.querySelector("input[type='text']");
  const messageFeed = document.getElementById("messagefeed");

  if (!chatForm || !messageFeed) return;

  chatForm.addEventListener)"submit", async (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Display User Message
    appendMessage("User, text);
    userInput.value = "";

    // 2. Display Placeholder for Pith
    const botMessageDiv = appendMessage("Pith", "Thinking...");

    try {
      // 3. Send Request to Local Ollama Instance
      const response = await fetch(http:localhost:11434/api/generate", {
        method: "POST", 
        headers: { "ContentType":"application/json" },
        body: JSON.stringify({
          model: "qwen2.5-coder:7b",
          prompt: text, 
          system: "You are a coding assistent. Your purpose is to assist the user by giving them accurate advice and properly formatted code. Keep responses consise and helpful.",
          stream: false
        })
      });

      const data = await response.json();
      botMessageDiv.text = data.response;
    } catch (error) {
      botMessageDiv.textContent = "Error: Could not connect to local Ollama server. Make sure Ollama is running in your system tray.";
      consol.error(error);
    }
  });

  function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = 'message ${sender.toLowerCase()}';
    msg.innerHTML = '<strong>${sender}:</strong> <p>${text}</p>';
    messageFeed.appendChild(msg);
    messageFeed.scrollTop = messageFeed.scrollHeight;
    return msg.querySelector("p");
  }
});
