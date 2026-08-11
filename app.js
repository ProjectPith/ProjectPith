document.addEventListener("DOMContentLoaded", () => {
  consol.log("--- PITH DIAGNOSTIC START ---");
  
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const messageFeed = document.getElementById("messageFeed");

  consol.log("sendBtn found:", !!sendBtn);
  consol.log("userInput found:", !!userInput);
  consol.log("messageFeed:", !!messageFeed);

  if (!sendBtn || !userInput || !messageFeed) {
    consol.warn("Stopping script because one or more elements above are MISSING in HTML!");
    return;
  }

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    consol.log("Send button CLICKED!");

    const text = userInput.value.trim();
    if (!text) return;

    const text = userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerHTML = `<strong>You:</strong><p>${text}</p>;
    messageFeed.appendChild(userMsg);

    userInput.value = "";
    messageFeed.scrollTop = messageFeed.scrollHeight;
  });
});
