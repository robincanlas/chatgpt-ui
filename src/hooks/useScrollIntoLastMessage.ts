import { useEffect } from "react";
import useMessagesStore, { Message } from "../store/messages";

const useScrollIntoLastMessage = (message: Message, callback: () => void) => {
  const messages = useMessagesStore((state) => state.messages);
  const isLastMessage = messages[messages.length - 1]?.id === message.id;

  useEffect(() => {
    if (isLastMessage) {
      callback();
    }
  }, []);

  return isLastMessage
}

export default useScrollIntoLastMessage;