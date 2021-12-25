import {URL} from '../constants/index.const'

export const getAllPhotos = async () => {
  try {
    const data = await (
      await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()
    return data
  } catch (err) {
    console.error(err)
  }
}
