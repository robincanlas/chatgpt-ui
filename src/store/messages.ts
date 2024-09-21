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

type InitialState = {
  messages: Message[];
  requestToGPT: boolean;
}

export interface MessagesStore extends InitialState {
  addMessage: (message: Message) => void;
  setRequestToGPT: (requestToGPT: boolean) => void;
  setStreaming: (uuid: string, stream: STREAMING) => void;
  reset: () => void;
}

const initialState: InitialState = {
  messages: [],
  requestToGPT: false,
}

const useMessagesStore = create<MessagesStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        addMessage: (message: Message) => set((state) => ({ messages: [...state.messages, message] })),
        setRequestToGPT: (requestToGPT: boolean) => set({ requestToGPT }),
        setStreaming: (uuid: string, stream: STREAMING) => set((state) => {
          const messages = [...state.messages];
          const index = messages.findIndex((message) => message.id === uuid);
          messages[index].stream = stream;
          return { messages };
        }),
        reset: () => set(initialState)
      }),
      {
        name: 'messages-storage',
      },
    ),
  ),
)

export default useMessagesStore;