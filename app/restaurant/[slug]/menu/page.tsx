import { PrismaClient } from '@prisma/client'
import Menu from '../components/Menu'
import RestaurantNavBar from '../components/RestaurantNavBar'

const prisma = new PrismaClient()

const fetcRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      Item: true,
    },
  })
  if (!restaurant) throw new Error('Cannot find a restaurant')

  return restaurant.Item
}

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string }
}) {
  const menu = await fetcRestaurantMenu(params.slug)

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  )
}
