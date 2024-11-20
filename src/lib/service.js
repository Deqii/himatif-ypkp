import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const signUp = async (userData) => {
  // Cek apakah npm sudah ada di database
  const existingUser = await prisma.user.findFirst({
    where: {
      npm: userData.npm,
    },
  });

  // Jika npm sudah ada, kembalikan callback(false)
  if (existingUser) {
    return null;
  }

  // Jika npm belum ada, buat user baru
  const user = await prisma.user.create({
    data: {
      nama: userData.nama,
      npm: userData.npm,
      jenis_kelamin: userData.jenis_kelamin,
      kelas: userData.kelas,
    },
  });

  console.log(user);

  return user;
};

export const signIn = async (username, password) => {
  const user = await prisma.admin.findFirst({
    where: {
      username,
    },
  });

  if (user) {
    if (password === user.password) {
      return user;
    }
  } else {
    return null;
  }
};
