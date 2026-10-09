# Carlos - Symbolic Conversational Assistant

![Status](https://img.shields.io/badge/Status-Active-success)
![Language](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

**Carlos** is an intelligent, rule-based (pattern matching) virtual assistant inspired by the classic ELIZA model. Built with a focus on high performance and a lightweight architecture, this project runs entirely in the browser (client-side), eliminating the need for GPUs, heavy cloud processing, or Large Language Models (LLMs).

The interface features a minimalist design with a clean, bright theme, ensuring an excellent user experience.

## Features

- **Regex-based Intent Engine:** Ultra-lightweight Natural Language Processing (NLP) using Regular Expressions to identify intents, regardless of minor typos or word order.
- **Decoupled Data Architecture:** The knowledge base and responses are isolated in a `respostas.json` file, separating application logic (JavaScript) from static data.
- **Dynamic Variables:** Ability to capture groups from the user's input and reuse them in the bot's response (e.g., mirroring names or technologies).
- **Responsive, Modern Interface:** Pure CSS built from scratch—with no heavy framework dependencies—ensuring instant loading.

## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Responsive styling and message transition animations. - **JavaScript (ES6+):** Asynchronous logic (`fetch` API) and DOM manipulation.
- **JSON:** Simulated relational database for AI responses and intents.

## Project Structure

```text
/
├── index.html       # Main page structure
├── style.css        # Stylesheet (Light/Clean theme)
├── script.js        # Main engine (Regex, State Machine, Fetch)
├── respostas.json   # Bot knowledge base and rules
└── README.md        # Project documentation
