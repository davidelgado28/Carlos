document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    let botRules = [];
    let fallbackResponses = [];

    async function loadKnowledgeBase() {
        try {
            const response = await fetch('respostas.json');
            const data = await response.json();
            botRules = data.rules;
            fallbackResponses = data.fallbacks;
            console.log("Knowledge base loaded successfully!");
        } catch (error) {
            console.error("Erro ao carregar", error);
            addMessage("System error: Unable to load my knowledge base.", "bot");
        }
    }
    loadKnowledgeBase();

    function getBotResponse(text) {
        for (let rule of botRules) {
            const regex = new RegExp(rule.pattern, 'i');
            const match = text.match(regex);
            
            if (match) {
                const responseList = rule.responses;
                let response = responseList[Math.floor(Math.random() * responseList.length)];
                
                if (match[1]) response = response.replace("$1", match[1]);
                if (match[2]) response = response.replace("$2", match[2]);
                return response;
            }
        }
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = text; 
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSend() {
        const text = userInput.value.trim();
        if (text === "") return;

        addMessage(text, "user");
        userInput.value = "";
        
        setTimeout(() => {
            if (botRules.length === 0) {
                addMessage("I'm still loading my brain. Try again in a second!", "bot");
                return;
            }
            const response = getBotResponse(text);
            addMessage(response, "bot");
        }, Math.random() * 1000 + 500);
    }

    sendBtn.addEventListener("click", handleSend);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSend();
    });
});
