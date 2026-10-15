-- CreateEnum
CREATE TYPE "Department" AS ENUM ('ENGINEERING', 'HUMAN_RESOURCES', 'MARKETING', 'SALES', 'FINANCE', 'DESIGN');

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "department" "Department" NOT NULL DEFAULT 'ENGINEERING',
    "jobTitle" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "isFullTime" BOOLEAN NOT NULL DEFAULT true,
    "hiredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");
