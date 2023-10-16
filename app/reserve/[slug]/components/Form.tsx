'use client'

import { use, useEffect, useState } from 'react'
import useReservation from '../../../../hooks/useReservation'
import { CircularProgress } from '@mui/material'

export default function Form({
  slug,
  partySize,
  date,
}: {
  slug: string
  partySize: string
  date: string
}) {
  const [inputs, setInputs] = useState({
    bookerEmail: '',
    bookerPhone: '',
    bookerFirstName: '',
    bookerLastName: '',
    bookerOccasion: '',
    bookerRequest: '',
  })
  const [day, time] = date.split('T')
  const [disabled, setDisabled] = useState(true)
  const [didBook, setDidBook] = useState(false)
  const { error, loading, createReservation } = useReservation()

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerEmail &&
      inputs.bookerLastName &&
      inputs.bookerPhone
    ) {
      return setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [inputs])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      partySize,
      time,
      day,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerPhone: inputs.bookerPhone,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
      setDidBook,
    })
  }

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      {didBook ? (
        <div>
          <h1>You are all booked up</h1>
          <p>Enjoy your reservstion</p>
        </div>
      ) : (
        <>
          {' '}
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            value={inputs.bookerFirstName}
            placeholder="First name"
            name="bookerFirstName"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            value={inputs.bookerLastName}
            placeholder="Last name"
            name="bookerLastName"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            value={inputs.bookerPhone}
            placeholder="Phone number"
            name="bookerPhone"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            value={inputs.bookerEmail}
            placeholder="Email"
            name="bookerEmail"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            value={inputs.bookerOccasion}
            placeholder="Occasion (optional)"
            name="bookerOccasion"
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            value={inputs.bookerRequest}
            placeholder="Requests (optional)"
            name="bookerRequest"
            onChange={handleChangeInput}
          />
          <button
            disabled={disabled || loading}
            className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
            onClick={handleClick}
          >
            {loading ? <CircularProgress /> : 'Complete reservation'}
          </button>
          <p className="mt-4 text-sm ">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Message & data rates may apply. You can
            opt out of receiving text messages at any time in your account
            settings or by replying STOP.
          </p>
        </>
      )}
    </div>
  )
}
