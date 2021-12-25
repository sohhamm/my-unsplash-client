import {URL} from '../constants/index.const'

interface Payload {
  label: string
  url: string
}

type Loading = React.Dispatch<React.SetStateAction<boolean>>

export const addPhoto = async (payload: Payload, loading: Loading) => {
  try {
    loading(true)
    const data = await (
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
    ).json()
    loading(false)
    return data
  } catch (err) {
    console.error(err)
    loading(false)
  }
}
