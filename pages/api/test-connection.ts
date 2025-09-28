// pages/api/test-connection.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('Testing connection to Supabase...')
  console.log(
    'Database URL format check:',
    process.env.DATABASE_URL?.includes('ygwrbedaqttsdlldkvxt')
  )

  try {
    console.log('Step 1: Attempting $connect...')
    await prisma.$connect()
    console.log('✅ Step 1: Connected successfully!')

    console.log('Step 2: Testing simple query...')
    const result = await prisma.$queryRaw`SELECT version()`
    console.log('✅ Step 2: Query successful:', result)

    res.status(200).json({
      success: true,
      message: 'Connection successful',
      version: result,
    })
  } catch (error) {
    console.error('❌ Connection failed at step:', error)
    res.status(500).json({
      success: false,
      message: 'Connection failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      code: (error as any)?.code,
    })
  } finally {
    await prisma.$disconnect()
  }
}
