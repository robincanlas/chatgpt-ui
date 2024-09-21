import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing

export enum STREAMING {
  START = 'start',
  END = 'end',
}

export interface Message {
  id: string;
  message: string;
  assistant: boolean;
  stream?: STREAMING
}

export interface MessagesStore {
  messages: Message[];
  requestToGPT: boolean;
  addMessage: (message: Message) => void;
  setRequestToGPT: (requestToGPT: boolean) => void;
  setStreaming: (uuid: string, stream: STREAMING) => void;
}

const useMessagesStore = create<MessagesStore>()(
  devtools(
    persist(
      (set) => ({
        messages: [],
        requestToGPT: false,
        streaming: false,
        addMessage: (message: Message) => set((state) => ({ messages: [...state.messages, message] })),
        setRequestToGPT: (requestToGPT: boolean) => set({ requestToGPT }),
        setStreaming: (uuid: string, stream: STREAMING) => set((state) => {
          const messages = [...state.messages];
          const index = messages.findIndex((message) => message.id === uuid);
          messages[index].stream = stream;
          return { messages };
        }),
      }),
      {
        name: 'messages-storage',
      },
    ),
  ),
)

export default useMessagesStore;