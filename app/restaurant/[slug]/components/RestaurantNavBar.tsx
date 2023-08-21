import Link from 'next/link'

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/subido/" className="mr-7 capitalize">
        Overview
      </Link>
      <Link href="/restaurant/subido/menu" className="mr-7 capitalize">
        Menu
      </Link>
    </nav>
  )
}
