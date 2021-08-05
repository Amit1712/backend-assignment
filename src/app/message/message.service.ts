import { Message } from '@entity/message'
import { Division } from '@entity/division'

export const getAllMessages = async () => {
  try {
    return await Message.find({ relations: ['division'] })
  } catch (e) {
    console.error(e)
  }
}

export const createMessage = async ({ content, division }: { content: string, division: any }) => {
  try {
    const foundDivision = Division.findOne({ id: division })
    if (!foundDivision) return { message: 'invalid division id!' }
    else {
      const newMessage = new Message();
      newMessage['content'] = content;
      newMessage['division'] = division;
      return await newMessage.save();
    }
  } catch (e) {
    console.error(e)
  }
}

export const getMessageById = async ({ id }: { id: number }) => {
  try {
    const foundMessage = await Message.findOne({ where: { id }, relations: ['division'] })
    if (!foundMessage) return { message: 'Message not found!' }
    else return foundMessage
  } catch (e) {
    console.error(e)
  }
}
