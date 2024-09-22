import { useState, useEffect } from 'react';

interface UseTypeWriterProps {
  text: string;
  speed: number;
  callback: () => void;
}

const useTypeWriter = ({
text,
speed,
callback
}: UseTypeWriterProps) => {
  const [textPosition, setTextPosition] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeWriterInterval = setInterval(() => {
      if (textPosition < text.length) {
        setTextPosition(textPosition + 1);
      } else {
        setIsTyping(false);
      }
    }, speed);

    return () => clearInterval(typeWriterInterval);
  }, [textPosition, text, speed]);

  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        callback();
      }, 3000);
    }
  }, [callback, isTyping]);

  return text.substring(0, textPosition);
};

export default useTypeWriter;