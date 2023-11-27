import { cn } from "@/lib/utils";
import { useChat } from "ai/react";
import { Bot, Trash, XCircle } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Message } from "ai";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

interface AiChatBoxProps {
  open: boolean;
  onClose: () => void;
}

const AiChatBox = ({ open, onClose }: AiChatBoxProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";
  return (
    <div
      className={cn(
        "bottom-0 right-0 z-10 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb-1 ms-auto block">
        <XCircle size={30}></XCircle>
      </button>

      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl p-3">
        <div className="h-full mt-3 px-3 overflow-y-auto" ref={scrollRef}>
          {messages.map((message) => {
            return (
              <ChatMessage message={message} key={message.id}></ChatMessage>
            );
          })}
          {isLoading && lastMessageIsUser && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Thinking",
              }}
            ></ChatMessage>
          )}
          {error && (
            <ChatMessage
              message={{
                role: "assistant",
                content: "Something went wrong, Please try again",
              }}
            ></ChatMessage>
          )}
          {!error && messages.length === 0 && (
            <div className="flex h-full items-center justify-center gap-3">
              <Bot></Bot>
              Ask the AI for specific information in your notes
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="m-3 flex gap-1">
          <Button
            title="clear-chat"
            variant="outline"
            size="icon"
            className="shrink-0"
            onClick={() => setMessages([])}
          >
            <Trash></Trash>
          </Button>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="say something..."
            ref={inputRef}
          ></Input>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

function ChatMessage({
  message: { role, content },
}: {
  message: Pick<Message, "role" | "content">;
}) {
  const { user } = useUser();

  const isAiMessage = role === "assistant";
  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "justify-start me-5" : "justify-end mt-5",
      )}
    >
      {isAiMessage && <Bot className="mr-2 shrink-0"></Bot>}
      <p
        className={cn(
          "whitespace-pre-line rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-primary text-primary-foreground",
        )}
      >
        {content}
      </p>

      {!isAiMessage && user?.imageUrl && (
        <Image
          src={user.imageUrl}
          width={40}
          height={40}
          alt="user image"
          className="ml-2 rounded-full"
        ></Image>
      )}
    </div>
  );
}
export default AiChatBox;
