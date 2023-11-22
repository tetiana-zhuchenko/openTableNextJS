const { PrismaClient } = require('@prisma/client')
const { items, reviews } = require('./seedData.ts')
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.item.deleteMany()
    console.log('Deleted items')
    await prisma.review.deleteMany()
    console.log('Deleted reviews')

    await prisma.review.createMany({
      data: items,
    })

    await prisma.review.createMany({
      data: reviews,
    })
    console.log('Items are created')
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}

load()
