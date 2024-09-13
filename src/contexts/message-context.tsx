import React from "react";
import { createContext, useContext, useState, type ReactNode } from "react";

interface MessageContextType {
  messageContent: string;
  setMessageContent: (content: string) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messageContent, setMessageContent] = useState<string>("");

  return (
    <MessageContext.Provider value={{ messageContent, setMessageContent }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
};
