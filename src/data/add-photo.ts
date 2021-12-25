import {URL} from '../constants/index.const'

interface Payload {
  label: string
  url: string
}

export const addPhoto = async (payload: Payload) => {
  try {
    const data = await (
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
    ).json()
    return data
  } catch (err) {
    console.error(err)
  }
}
