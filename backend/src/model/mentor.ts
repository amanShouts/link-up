import { prisma } from '.';

export async function getAllMentors() {
  try {
    const result = await prisma.user.findMany({
      where: {
        isMentor: true,
      },
      select: {
        id: true,
        name: true,
        desc: true,
        currDesignation: true,
        img: true,
        industry: {
          select: {
            type: true,
          },
        },
        skill: {
          select: {
            type: true,
          },
        },
        mentor: {
          select: {
            company: true,
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw new Error('Error fetching mentors');
  }
}

export async function getMentor(id: number) {
  const result = await prisma.user.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      username: true,
      currDesignation: true,
      img: true,
      bgImg: true,
      city: true,
      country: true,
      bio: true,
      desc: true,
      experience: {
        select: {
          role: true,
          companyName: true,
          companyLogo: true,
          desc: true,
          startYear: true,
          endYear: true,
        },
      },
    },
  });
  return result;
}
