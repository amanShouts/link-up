const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  getAllUsers: async () => {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw new Error('Error fetching users');
    }
  }
};
