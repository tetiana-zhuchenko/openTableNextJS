'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState('')
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        type="text"
        className="rounded mr-3 p-2 w-[350px]"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-red-600 rounded px-9 py-2 text-white"
        onClick={() => {
          if (location === '') return
          router.push(`/search?city=${location}`)
          setLocation('')
        }}
      >
        Let's go
      </button>
    </div>
  )
}
