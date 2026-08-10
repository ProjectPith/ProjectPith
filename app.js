document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".input-container");
  const textarea = document.querySelector(".input-container textarea");
  const messageFeed = document.getElementById("messagefeed");

  if (!form || !messageFeed) return;

  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault(); 
    
    const userText = textarea.value.trim();
    if (!userText) return;

    // 1. Display User Message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerHTML = `<strong?You:</strong><p>${userText}</p>`;
    messageFeed.appendChild(userMsg);

    textarea.value = "";
    messageFeed.scrollTop = messageFeed.scrollHeight; //Auto-scroll down

    // 2. Display Placeholder for Pith
    const botMsg = document.createElement("div");
    botMsg.className = "message pith";
    botMsg.innerHTML = `<strong>Pith:</strong>
    messageFeed.appendChild(botMsg);
    messageFeed.scrollTop = messageFeed.scrollHeight;
    
    // 3. Send Request to Local Ollama Instance
    try {
      const response = await fetch("http://localhost:11434/api/generate", {
        method: "POST", 
        headers: { "ContentType": "application/json" },
        body: JSON.stringify({
          model: "qwen2.5-coder:7b",
          prompt: userText, 
          stream: false
        })
      });

      const data = await response.json();
      botMessage.querySelector("p").innerText = data.response;
      messageFeed.scrollTop = messageFeed.scrollHeight;
    } catch (error) {
      botMsg.querySelector("p").innerText = "Error: Could not connect to local Ollama server. Make sure Ollama is running in your system tray.";
      consol.error(err);
    }
  });
});
