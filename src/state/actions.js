import { NEW_MESSAGE } from './types'
import uuid from 'uuid'

export const newMessage = (text) => ({
  id: uuid(),
  type: NEW_MESSAGE,
  item: {
    text, timestamp: Date.now(),
  }
})
