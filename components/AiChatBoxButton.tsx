import React, { useState } from "react";
import AiChatBox from "./AiChatBox";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";

const AiChatBoxButton = () => {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)}>
        <Bot size={20} className="mr-1"></Bot>
        Ai Chat
      </Button>
      <AiChatBox
        open={chatBoxOpen}
        onClose={() => setChatBoxOpen(false)}
      ></AiChatBox>
    </>
  );
};

export default AiChatBoxButton;
