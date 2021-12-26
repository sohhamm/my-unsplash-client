import {URL} from '../constants/index.const'
import {StateSetterBool} from '../types'

export const getAllPhotos = async (fetchAgain: StateSetterBool) => {
  try {
    const data = await (
      await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
    fetchAgain(false)
    return data
  } catch (err) {
    fetchAgain(false)
    console.error(err)
  }
}
