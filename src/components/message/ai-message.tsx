import Typewriter, { TypewriterClass } from 'typewriter-effect';
import useMessagesStore, { Message, STREAMING } from '../../store/messages';
import "./message.css";
import useScrollIntoView from '../../hooks/useScrollIntoView';
// import useTypeWriter from '../../hooks/typing-animation';

interface AiMessageProps {
  message: Message;
}

const AiMessage = ({
  message
}: AiMessageProps) => {
  const setStreaming = useMessagesStore((state) => state.setStreaming);
  const { elementRef, smoothScrollIntoView } = useScrollIntoView();
  // const speed = 10;
  // const typedText = useTypeWriter({text: message.message, speed, callback: () => setStreaming(message.id, STREAMING.END)});

  return (
    <span ref={elementRef}>
    {/* {message.stream == STREAMING.END ? message.message : typedText} */}
      {message.stream == STREAMING.END ? message.message : <Typewriter
        onInit={(typewriter: TypewriterClass) => {
          typewriter.typeString(message.message)
            .callFunction(() => {
              setStreaming(message.id, STREAMING.END);
              smoothScrollIntoView();
            })
            .start();
        }}
        options={{
          cursorClassName: 'typewriter-cursor',
          delay: 10,
          cursor: '',
        }}
      />}
    </span>
  );
};

export default AiMessage;