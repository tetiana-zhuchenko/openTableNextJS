import Link from 'next/link'

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hiden border cursor-pointer">
      <Link href="/restaurant/subido-restaurant">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/3/31209304.webp"
          alt="restaurant"
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Subito restaurant</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3">mexican</p>
            <p className="mr-3">$$$$</p>
            <p className="mr-3">Toronto</p>
          </div>
          <p className="text-sm font-bold mt-1">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  )
}
