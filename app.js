document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chatForm") || document.querySelector(".input-container");
  const userInput = document.getElementById("userInput") || document.querySelector("textarea");
  const messageFeed = document.getElementById("messageFeed");

  if (!form || !userInput || !messageFeed) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const text = userInput.value.trim();
    if (!text) return;

    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerHTML = `<strong>You:</strong> <p>${text}</p>;

    messageFeed.appendChild(userMsg);
    userInput.value = "";
    messageFeed.scrollTop = messageFeed.scrollHeight;
  });
});
