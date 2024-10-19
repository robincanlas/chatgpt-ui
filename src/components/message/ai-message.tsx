import Typewriter, { TypewriterClass } from 'typewriter-effect';
import useMessagesStore, { Message, STREAMING } from '../../store/messages';
import "./message.css";
import useScrollIntoView from '../../hooks/useScrollIntoView';
import useScrollIntoLastMessage from '../../hooks/useScrollIntoLastMessage';

interface AiMessageProps {
  message: Message;
}
const AiMessage = ({
  message
}: AiMessageProps) => {
  const setStreaming = useMessagesStore((state) => state.setStreaming);
  const { elementRef, smoothScrollIntoView, instantScrollIntoView } = useScrollIntoView();
  useScrollIntoLastMessage(message, () => instantScrollIntoView());

  return (
    <span ref={elementRef}>
      {message.stream == STREAMING.END ? message.message : <Typewriter
        onInit={(typewriter: TypewriterClass) => {
          typewriter
            .typeString(message.message)
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