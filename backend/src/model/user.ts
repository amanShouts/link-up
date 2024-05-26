import { prisma } from ".";

module.exports = {
  getAllUsers: async () => {
    try {
      return await prisma.user.findMany();
    } catch (error) {
      throw new Error('Error fetching users');
    }
  }
};
