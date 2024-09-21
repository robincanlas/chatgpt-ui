import Typewriter from 'typewriter-effect';
import useMessagesStore, { Message, STREAMING } from '../../store/messages';

interface AiMessageProps {
  message: Message;
}

const AiMessage = ({
  message
}: AiMessageProps) => {
  const setStreaming = useMessagesStore((state) => state.setStreaming);

  return (
    <>
      {message.stream == STREAMING.END ? message.message : <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString(message.message)
            .callFunction(() => {
              setStreaming(message.id, STREAMING.END);
            })
            .start();
        }}
        options={{
          cursorClassName: 'typewriter-cursor',
          delay: 10,
        }}
      />}
    </>
  );
};

export default AiMessage;