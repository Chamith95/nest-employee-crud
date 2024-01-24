const { PrismaClient } = require('@prisma/client');
const data = require('./employees.json'); 

const prisma = new PrismaClient();

async function main() {
  for (let item of data) {
    await prisma.employee.create({
      data: {
        first_name: item.first_name,
        last_name: item.last_name,
        email: item.email,
        number: item.number,
        gender: item.gender,
        photo: item.photo,
      },
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });