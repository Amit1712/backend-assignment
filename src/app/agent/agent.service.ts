import { Agent } from '@entity/agent'
import { Division } from '@entity/division'


export const getAllAgents = async () => {
  try {
    return await Agent.find({ relations: ['division'] })
  } catch (e) {
    console.error(e)
  }
}

export const getAgentById = async ({ id }: { id: number }) => {
  try {
    const foundAgent = await Agent.findOne({ where: { id }, relations: ['division'] })
    if (!foundAgent) return { message: 'Agent not found!' }
    else return foundAgent
  } catch (e) {
    console.error(e)
  }
}


export const createAgent = async ({ division }: { division: any }) => {
  try {
    const foundDivision = await Division.findOne({ id: division })
    if (!foundDivision) return { message: 'invalid division id!' }
    else {
      const newAgent = new Agent();
      newAgent['division'] = foundDivision;
      return await newAgent.save();
    }
  } catch (e) {
    console.error(e)
  }
}
