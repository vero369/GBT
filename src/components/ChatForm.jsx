import { useRef } from "react";

const ChatForm = ({ setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value = "";

    // Update chat history with user message
    setChatHistory((history) => {
      const newHistory = [...history, { role: "user", text: userMessage }];
   // Simulate bot response
    setTimeout(() => { 
      setChatHistory((h) => [...h, { role: "model", text: "Thinking..." }]);
    },500); 

    /* Call the function to generate bot response
      generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
     setChatHistory((history) => {
  const chatHistory = [...history, { role: "user", text: userMessage }];
  generateBotResponse(chatHistory);
  return chatHistory;*/
    generateBotResponse(newHistory);
    return newHistory;
   });

  };
  
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef} type="text"  placeholder="Message..." className="message-input" required/>
      <button className="material-symbols-rounded">arrow_upward 
      </button>
   </form>
  );
};

export default ChatForm;