'use client'

import { useEffect, useState } from 'react'

export default function Form() {
  const [inputs, setInputs] = useState({
    bookerEmail: '',
    bookerPhone: '',
    bookerFirstName: '',
    bookerLastName: '',
    bookerOccasion: '',
    bookerRequest: '',
  })

  const [disabled, setDisabled] = useState(true)

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

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
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
        disabled={disabled}
        className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
      >
        Complete reservation
      </button>
      <p className="mt-4 text-sm ">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Message & data rates may apply. You can opt out
        of receiving text messages at any time in your account settings or by
        replying STOP.
      </p>
    </div>
  )
}
