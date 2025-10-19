'use client'

import React, { useEffect, useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  Rectangle,
} from 'recharts'

const data = [
  { name: 'Січ', value: 400 },
  { name: 'Лют', value: 300 },
  { name: 'Бер', value: 500 },
  { name: 'Кві', value: 200 },
  { name: 'Тра', value: 700 },
]

// const dataSecond = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ]

export interface Review {
  review_id: number
  text: string
  rating: number
  sentiment: 'Positive' | 'Negative' | 'Neutral'
  model_prediction: 'Positive' | 'Negative' | 'Neutral'
  confidence: number
  aspects: {
    food: number
    service: number
    atmosphere: number
    value: number
  }
  has_negative_aspect: boolean
  created_at: string
}

export interface AspectSentimentStats {
  positive: number
  negative: number
  positive_percentage: number
  negative_percentage: number
}

export interface RestaurantStatistics {
  positive_reviews: number
  negative_reviews: number
  positive_percentage: number
  negative_percentage: number
  average_confidence: number
}

export interface IRestaurantAnalysis {
  restaurant_id: number
  total_reviews: number
  statistics: RestaurantStatistics
  aspect_analysis: {
    food: AspectSentimentStats
    service: AspectSentimentStats
    atmosphere: AspectSentimentStats
    value: AspectSentimentStats
  }
  reviews: Review[]
}

function Page() {
  const [restaurantStatistic, setRestaurantStatistic] =
    useState<IRestaurantAnalysis | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const REVIEW_ANALYZE_API = `https://v-2-random-forest-api.onrender.com/reviews/${1}/analyze`

  async function fetchStatistics() {
    try {
      const response = await fetch(REVIEW_ANALYZE_API)
      const data = (await response.json()) as IRestaurantAnalysis
      console.log(data)
      setRestaurantStatistic(data)
      setIsLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStatistics()
  }, [])

  const data = [
    {
      name: 'Їжа',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.food.positive,
    },
    {
      name: 'Сервіс',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.service.positive,
    },
    {
      name: 'Атмосфера',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.atmosphere.positive,
    },
    {
      name: 'Ціна',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.value.positive,
    },
  ]
  const dataLineSecond = [
    {
      name: 'Їжа',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.food.positive,
      'Кількість негативних відгуків':
        restaurantStatistic?.aspect_analysis.food.negative,
    },
    {
      name: 'Сервіс',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.service.positive,
      'Кількість негативних відгуків':
        restaurantStatistic?.aspect_analysis.service.negative,
    },
    {
      name: 'Атмосфера',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.atmosphere.positive,
      'Кількість негативних відгуків':
        restaurantStatistic?.aspect_analysis.atmosphere.negative,
    },
    {
      name: 'Ціна',
      'Кількість позитивних відгуків':
        restaurantStatistic?.aspect_analysis.value.positive,
      'Кількість негативних відгуків':
        restaurantStatistic?.aspect_analysis.value.negative,
    },
  ]

  const dataSecond = [
    {
      name: 'Їжа',
      'Відсоток позитивних відгуків':
        restaurantStatistic?.aspect_analysis.food.positive_percentage,
      'Відсоток негативних відгуків':
        restaurantStatistic?.aspect_analysis.food.negative_percentage,
      amt: 2400,
    },
    {
      name: 'Сервіс',
      'Відсоток позитивних відгуків':
        restaurantStatistic?.aspect_analysis.service.positive_percentage,
      'Відсоток негативних відгуків':
        restaurantStatistic?.aspect_analysis.service.negative_percentage,
      amt: 2400,
    },
    {
      name: 'Атмосфера',
      'Відсоток позитивних відгуків':
        restaurantStatistic?.aspect_analysis.atmosphere.positive_percentage,
      'Відсоток негативних відгуків':
        restaurantStatistic?.aspect_analysis.atmosphere.negative_percentage,
      amt: 2400,
    },
    {
      name: 'Ціна',
      'Відсоток позитивних відгуків':
        restaurantStatistic?.aspect_analysis.value.positive_percentage,
      'Відсоток негативних відгуків':
        restaurantStatistic?.aspect_analysis.value.negative_percentage,
      amt: 2210,
    },
  ]

  return (
    <>
      <h1 className="text-2xl font-bold text-center mr-2 mb-4">
        Restaurant Dashboard
      </h1>
      <h5 className="text-xl font-bold text-center mr-2 mb-4">
        Ресторан Vivaan - fine Indian
      </h5>
      {isLoading ? (
        <p className="text-center">Loading statistics...</p>
      ) : (
        <div className="text-left text-lg py-3 m-auto flex flex-wrap justify-center mb-8">
          {/* The first chart */}
          <div className="m-4">
            <h5 className="text-l text-center  mb-4">
              Кількість позитивних відгуків по аспектам
            </h5>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Кількість позитивних відгуків"
                stroke="#82ca9d"
              />
            </LineChart>
          </div>
          {/*  */}
          <div className="m-4">
            <h5 className="text-l text-center  mb-4">
              Кількість позитивних та негативних відгуків по аспектам
            </h5>
            <LineChart
              width={600}
              height={300}
              data={dataLineSecond}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Кількість позитивних відгуків"
                stroke="#82ca9d"
              />
              {/* <Line
                type="monotone"
                dataKey="Кількість позитивних відгуків"
                stroke="#8884d8"
              /> */}
              <Line
                type="monotone"
                dataKey="Кількість негативних відгуків"
                stroke="#ff6b6b"
              />
            </LineChart>
          </div>

          {/* The second chart */}
          <div className="m-4">
            <h5 className="text-l text-center mb-4">
              Співвідношення позитивнихта негативних відгуків по аспектам
            </h5>
            <BarChart
              width={600}
              height={300}
              data={dataSecond}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Відсоток негативних відгуків"
                fill="#ff6b6b"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="Відсоток позитивних відгуків"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
