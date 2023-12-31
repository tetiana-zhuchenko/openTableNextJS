import { Cuisine, PRICE, Location, Review } from '@prisma/client'
import Link from 'next/link'
import { type } from 'os'
import Price from '../../components/Price'
import { calculateReviewRatingAverage } from '../../../utils/calculateReviewRatingAverage'
import Stars from '../../components/Stars'

interface RestaurantCardPropsType {
  id: number
  name: string
  main_image: string
  cuisine: Cuisine
  slug: string
  location: Location
  price: PRICE
  reviews: Review[]
}

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: RestaurantCardPropsType
}) {
  const renderRaitingText = () => {
    const raiting = calculateReviewRatingAverage(restaurant.reviews)

    if (raiting > 4) return 'Awesome'
    else if (raiting <= 4 && raiting > 3) return 'Good'
    else if (raiting <= 3 && raiting > 0) return 'Average'
    else return ''
  }

  return (
    <div className="border-b flex pb-5 ml-5">
      <img
        src={restaurant.main_image}
        alt="srimps"
        className="w-44 h-36 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRaitingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  )
}
