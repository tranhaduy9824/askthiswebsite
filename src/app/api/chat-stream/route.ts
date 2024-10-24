import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
import { NextApiRequest } from "next";

export const POST = async (req: NextApiRequest) => {
  const { messages, sessionId } = await req.json();

  const lastMessage = messages[messages.length - 1].content;

  const response = await ragChat.chat(lastMessage, {streaming: true, sessionId});
  
  return aiUseChatAdapter(response);
};
