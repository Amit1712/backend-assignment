import { Dispatch } from '@entity/dispatch'
import { Message } from '@entity/message'
import { Agent } from '@entity/agent'

export const getAllDispatches = async () => {
  try {
    return await Dispatch.find({ relations: ['agent', 'message'] })
  } catch (e) {
    console.error(e)
  }
}

export const createDispatch = async ({ message, agent }: { message: any, agent: any }) => {
  try {
    const foundMessage = await Message.find({ id: message })
    const foundAgent = await Agent.find({ id: agent })
    if (!foundMessage) return { message: 'invalid message id!' }
    else if (!foundAgent) return { message: 'invalid agent id!' }
    else {
      const newDispatch = new Dispatch();
      newDispatch['message'] = message;
      newDispatch['agent'] = agent;
      return await newDispatch.save();
    }
  } catch (e) {
    console.error(e)
  }
}

export const getDispatchById = async ({ id }: { id: number }) => {
  try {
    const foundDispatch = await Dispatch.findOne({ where: { id }, relations: ['agent', 'message'] })
    if (!foundDispatch) return { message: 'Dispatch not found!' }
    else return foundDispatch
  } catch (e) {
    console.error(e)
  }
}
