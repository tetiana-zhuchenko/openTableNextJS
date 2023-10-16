import axios from 'axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { Time } from '../utils/convertToDisplayTime'

export default function useReservation() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
    setDidBook,
  }: {
    slug: string
    partySize: string
    day: string
    time: string
    bookerEmail: string
    bookerPhone: string
    bookerFirstName: string
    bookerLastName: string
    bookerOccasion: string
    bookerRequest: string
    setDidBook: Dispatch<SetStateAction<boolean>>
  }) => {
    setLoading(true)
    try {
      const response = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reserve`,
        {
          bookerEmail,
          bookerPhone,
          bookerFirstName,
          bookerLastName,
          bookerOccasion,
          bookerRequest,
        },
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      )
      setLoading(false)
      setDidBook(true)
      return response.data
    } catch (error: any) {
      setLoading(false)
      setError(error.response.data.errorMessage)
    }
  }

  return { loading, error, createReservation }
}
