// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Menambahkan produk
  await prisma.product.createMany({
    data: [
      {
        name: "Opak Sampeu Original",
        description: "Snack lezat khas Tasikmalaya",
        price: 10000,
        stock: 50,
      },
      {
        name: "Opak Sampeu Balado",
        description: "Opak Sampeu dengan rasa pedas Balado",
        price: 12000,
        stock: 30,
      },
    ],
  });

  // Menambahkan user admin
  await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@myshop.com",
      password: "hashed_password_here", // Gantilah dengan password yang di-hash
      role: "ADMIN",
    },
  });

  console.log("Data berhasil dimasukkan!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
