-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255),
    "email" VARCHAR(255),
    "number" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255),
    "photo" VARCHAR(255),

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);
