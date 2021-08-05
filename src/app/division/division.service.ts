import { Division } from '@entity/division'

export const getAllDivisions = async () => {
  try {
    return await Division.find()
  } catch (e) {
    console.error(e)
  }
}

export const createDivision = async () => {
  try {
    const newDivision = new Division();
    return await newDivision.save();
  } catch (e) {
    console.error(e)
  }
}

export const getDivisionById = async ({ id }: { id: number }) => {
  try {
    const foundDivision = await Division.findOne({ id: id })
    if (!foundDivision) return { message: 'Division not found!' }
    else return foundDivision
  } catch (e) {
    console.error(e)
  }
}
