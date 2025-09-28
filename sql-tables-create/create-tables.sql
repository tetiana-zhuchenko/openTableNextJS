-- STEP 1--
-- Create public schema
CREATE SCHEMA IF NOT EXISTS public;

-- Grant permissions
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

-- STEP 2--
-- Create PRICE enum without schema specification
CREATE TYPE "PRICE" AS ENUM ('CHEAP', 'REGULAR', 'EXPENSIVE');

-- STEP 3--
-- Create all tables
CREATE TABLE "Location" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Cuisine" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Restaurant" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "main_image" TEXT NOT NULL,
    "images" TEXT[],
    "description" TEXT NOT NULL,
    "open_time" TEXT NOT NULL,
    "close_time" TEXT NOT NULL,
    "slug" TEXT NOT NULL UNIQUE,
    "price" "PRICE" NOT NULL,
    "location_id" INTEGER NOT NULL REFERENCES "Location"("id"),
    "cuisine_id" INTEGER NOT NULL REFERENCES "Cuisine"("id"),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Item" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "restaurant_id" INTEGER NOT NULL REFERENCES "Restaurant"("id"),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Review" (
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL REFERENCES "Restaurant"("id"),
    "user_id" INTEGER NOT NULL REFERENCES "User"("id"),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Table" (
    "id" SERIAL PRIMARY KEY,
    "seats" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL REFERENCES "Restaurant"("id"),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- After running all three steps:
-- bash: 
-- npx prisma db pull
-- npx prisma generate