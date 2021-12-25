import {URL} from '../constants/index.const'

export const deletePhoto = async (id: string) => {
  try {
    const data = await (
      await fetch(URL + `/${id}`, {
        method: 'DELETE',
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
