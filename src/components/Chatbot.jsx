import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import chatbotImg from "../assets/robot.png";

const getExperienceString = () => {
  const startDate = new Date(2022, 9, 1); // October is month 9 (0-indexed)
  const now = new Date();
  const diffInMs = now - startDate;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return `${diffInYears.toFixed(1)} years of experience`;
};
const responses = {
  hello: "Hi there! 👋 How can I help you today?",
  // hi: "Hello! Hope you're having a great day. 😊",
  "what do you do":
    "I'm a portfolio assistant bot. I can tell you about Vaibhav's skills, projects, and experience.",
  skills:
    "Vaibhav is skilled in HTML, CSS, JavaScript, React, Redux, NextJs, TailwindCSS, and more.",
  projects:
    "He has worked on eCommerce websites, games like Simon, and various interactive web apps.",
  contact: "You can reach Vaibhav via the email Id provided on this site.",
  experience: `Vaibhav is currently working as a Senior Systems Engineer and has ${getExperienceString()}.`,
  vaibhav:
    "Vaibhav is a passionate frontend developer with a love for building interactive and user-friendly web applications. He enjoys learning new technologies and solving real-world problems.",
  location: "Vaibhav is based in Mumbai.",
  education:
    "Vaibhav holds a Bachelor's degree in Computer Science Engineering.",
  hire: "You can contact Vaibhav via the email provided on the site for hiring inquiries.",
  Hire: "You can contact Vaibhav via the email provided on the site for hiring inquiries.",
  resume:
    "Sure! You can download Vaibhav's resume from the Resume section of this site.",
  "social media":
    "Vaibhav is active on LinkedIn and GitHub. Check the top-right cornor of the site for links.",
  "how long have you been coding": "Vaibhav has been coding for over 3 years.",
  hobbies:
    "Vaibhav enjoys reading tech blogs, playing chess, and exploring new web technologies.",
  "what technologies do you use":
    "Vaibhav works with React, Redux, TailwindCSS, JavaScript, and more.",
  "thank you": "Your welcome, Let me know if you want any more information.",
  default:
    "Sorry, I’m not sure about that 🤔. Try asking about skills, projects, or contact info.",
};
// ...existing code...

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your AI assistant. Ask me about Vaibhav!" },
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null); // Add this line

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]); // Scroll on messages update

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    const userMsg = input.toLowerCase();
    let reply = responses.default;
    for (let key in responses) {
      if (userMsg.includes(key)) {
        reply = responses[key];
        break;
      }
    }

    setMessages([...newMessages, { sender: "bot", text: "Thinking..." }]);

    setInput("");

    setTimeout(() => {
      // Replace "Thinking..." with actual reply
      setMessages([...newMessages, { sender: "bot", text: reply }]);
    }, 1000); // 1 second delay
  };

  return (
    <div className="chatbot-container">
      <div className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={chatbotImg}
          alt="Chatbot"
          style={{ width: "60px", height: "60px", cursor: "pointer" }}
        />
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Vaibhav's AI Chatbot</div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
