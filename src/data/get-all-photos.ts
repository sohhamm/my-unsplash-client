import {URL} from '../constants/index.const'

export const getAllPhotos = async (
  fetchAgain: React.Dispatch<React.SetStateAction<boolean>>,
) => {
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
