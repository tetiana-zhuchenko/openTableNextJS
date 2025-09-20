'use client'

import React, { useState } from 'react'

function convertAnalysis(val: number | undefined) {
  if (val === 0) {
    return 'Не згадується'
  }
  if (!val) {
    return
  }
  if (val > 0) {
    return 'Позитивно'
  } else if (val < 0) {
    return 'Негативно'
  } else {
    return '  Не згадується'
  }
}

function convertConfidence(num: number | undefined) {
  if (num === 0) {
    return
  }
  if (!num) {
    return
  }
  return num * 100
}

type TAspects = {
  atmosphere: number
  food: number
  service: number
  value: number
}

type TApiResponse = {
  aspects: TAspects
  confidence: number
  final_label: string
  label: string
  sentiment: number
  sentiment_general: number
}

function Page() {
  const [reviewText, setReviewText] = useState('')
  const [apiResponse, setApiResponse] = useState<TApiResponse>()

  const REVIEW_ANALYZE_API =
    'https://v-2-random-forest-api.onrender.com/predict'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewText(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!reviewText) {
      return
    }
    try {
      const response = await fetch(REVIEW_ANALYZE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: reviewText }),
      })

      const data = (await response.json()) as TApiResponse
      console.log('API response:', data)
      setApiResponse(data)
      setReviewText('')
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center mr-2">Analyze review</h1>
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="reviewInput" className="text-center mr-2">
            Текст відгуку:
          </label>
          <input
            type="text"
            suppressHydrationWarning
            className="rounded mr-3 p-2 w-[350px] border border-gray-500"
            placeholder="Введіть відгук..."
            id="reviewInput"
            name="reviewInput"
            value={reviewText}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
          >
            Аналізувати
          </button>
        </form>
      </div>
      {apiResponse && (
        <div className="text-left text-lg py-3 m-auto flex-column justify-center w-[350px]">
          <p>Їжа: {convertAnalysis(apiResponse?.aspects.food)}</p>
          <p>Сервіс: {convertAnalysis(apiResponse?.aspects.service)}</p>
          <p>Атмосфера: {convertAnalysis(apiResponse?.aspects.atmosphere)}</p>
          <p>Ціна: {convertAnalysis(apiResponse?.aspects.value)}</p>
          <p>
            Ступінь впевненості моделі:{' '}
            {convertConfidence(apiResponse?.confidence)}%
          </p>
        </div>
      )}
    </>
  )
}

export default Page
