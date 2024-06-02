import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Upsert users
  const user1 = await prisma.user.upsert({
    where: { username: "batman" },
    update: {},
    create: {
      username: "batman",
      name: "Bat man",
      age: 30,
      img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-40242,resizemode-75,msid-106905805/news/international/us/the-batman-2-heres-what-we-know-so-far-about-release-date-cast-plot-and-more.jpg",
      bgImg:
        "https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg",
      desc: `John has over 10 years of experience in the tech industry, with a strong background in product management
            and user experience design. He has worked on a variety of projects, from enterprise software to
            consumer-facing applications.`,
      bio: "Alumni of XYZ University | Major in ABC",
      city: "City",
      country: "Country",
      experience: {
        createMany: {
          data: [
            {
              companyName: "Acme Inc.",
              role: "Software Engineer",
              startYear: "2019",
              endYear: "Present",
              desc: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software.",
              companyLogo:
                "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png",
            },
            {
              role: "Front-end Developer",
              companyName: "Widgets Inc. • 2016 - 2019",
              companyLogo:
                "https://logowik.com/content/uploads/images/amazon6707.jpg",
              desc: `Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript. Collaborated with designers and back-end developers to deliver high-quality web applications.`,
              startYear: "2016",
              endYear: "2019",
            },
          ],
        },
      },
      currDesignation: "Senior Product Manager",
      type: "ENTREPRENEUR",
      isMentor: false,
      industry: {
        createMany: {
          data: [
            {
              type: "Advertising",
            },
            {
              type: "Aerospace",
            },
            {
              type: "Agriculture",
            },
            {
              type: "Ecommerce",
            },
          ],
        },
      },
      skill: {
        createMany: {
          data: [
            {
              type: "Product Management",
            },
            {
              type: "User Experience",
            },
            {
              type: "Agile Methodologies",
            },
            {
              type: "Market Analysis",
            },
            {
              type: "Customer Insights",
            },
          ],
        },
      },
      entrepreneur: {
        createMany: {
          data: [
            {
              company: "Acme Inc.",
            },
            {
              company: "Jugad Inc.",
            },
          ],
        },
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { username: "brucewayne" },
    update: {},
    create: {
      username: "brucewayne",
      name: "Bruce Wayne",
      age: 28,
      img: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/02/robert-pattinson-the-batman.jpg",
      bgImg:
        "https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg",
      desc: `John has over 10 years of experience in the tech industry, with a strong background in product management
            and user experience design. He has worked on a variety of projects, from enterprise software to
            consumer-facing applications.`,
      bio: "Alumni of XYZ University | Major in ABC",
      city: "City",
      country: "Country",
      experience: {
        createMany: {
          data: [
            {
              companyName: "Acme Inc.",
              role: "Software Engineer",
              startYear: "2019",
              endYear: "Present",
              desc: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software.",
              companyLogo:
                "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png",
            },
            {
              role: "Front-end Developer",
              companyName: "Widgets Inc. • 2016 - 2019",
              companyLogo:
                "https://logowik.com/content/uploads/images/amazon6707.jpg",
              desc: `Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript. Collaborated with designers and back-end developers to deliver high-quality web applications.`,
              startYear: "2016",
              endYear: "2019",
            },
          ],
        },
      },
      currDesignation: "Senior Product Manager",
      type: "INVESTOR",
      isMentor: true,
      industry: {
        createMany: {
          data: [
            {
              type: "Advertising",
            },
            {
              type: "Aerospace",
            },
            {
              type: "Agriculture",
            },
            {
              type: "Ecommerce",
            },
          ],
        },
      },
      skill: {
        createMany: {
          data: [
            {
              type: "Product Management",
            },
            {
              type: "User Experience",
            },
            {
              type: "Agile Methodologies",
            },
            {
              type: "Market Analysis",
            },
            {
              type: "Customer Insights",
            },
          ],
        },
      },
      mentor: {
        createMany: {
          data: [
            {
              entrepreneurId: user1.id,
              company: "Acme Inc.",
            },
            {
              entrepreneurId: user1.id,
              company: "Jugad Inc.",
            },
          ],
        },
      },
    },
  });

  const user3 = await prisma.user.upsert({
    where: { username: "testUser3" },
    update: {},
    create: {
      username: "testUser3",
      name: "John Show",
      type: "ENTREPRENEUR",
      age: 46,
      img: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
      bgImg:
        "https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg",
      desc: `John has over 10 years of experience in the tech industry, with a strong background in product management
            and user experience design. He has worked on a variety of projects, from enterprise software to
            consumer-facing applications.`,
      bio: "Alumni of XYZ University | Major in ABC",
      city: "City",
      country: "Country",
      experience: {
        createMany: {
          data: [
            {
              companyName: "Acme Inc.",
              role: "Software Engineer",
              startYear: "2019",
              endYear: "Present",
              desc: "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software.",
              companyLogo:
                "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png",
            },
            {
              role: "Front-end Developer",
              companyName: "Widgets Inc. • 2016 - 2019",
              companyLogo:
                "https://logowik.com/content/uploads/images/amazon6707.jpg",
              desc: `Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript. Collaborated with designers and back-end developers to deliver high-quality web applications.`,
              startYear: "2016",
              endYear: "2019",
            },
          ],
        },
      },
      currDesignation: "Senior Product Manager",
      isMentor: true,
      industry: {
        createMany: {
          data: [
            {
              type: "Advertising",
            },
            {
              type: "Aerospace",
            },
            {
              type: "Agriculture",
            },
            {
              type: "Ecommerce",
            },
          ],
        },
      },
      skill: {
        createMany: {
          data: [
            {
              type: "Product Management",
            },
            {
              type: "User Experience",
            },
            {
              type: "Agile Methodologies",
            },
            {
              type: "Market Analysis",
            },
            {
              type: "Customer Insights",
            },
          ],
        },
      },
      mentor: {
        createMany: {
          data: [
            {
              entrepreneurId: user1.id,
              company: "Acme Inc.",
            },
            {
              entrepreneurId: user2.id,
              company: "Jugad Inc.",
            },
          ],
        },
      },
    },
  });

  // Upsert posts
  const post1 = await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: user1.id,
      title: "My First Post",
      desc: "This is a description of my first post.",
      type: "TEXT",
    },
  });

  const post2 = await prisma.post.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: user2.id,
      title: "Healthcare Innovations",
      desc: "Discussion about innovations in healthcare.",
      type: "IMAGE",
      img: "https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg",
    },
  });

  const post3 = await prisma.post.upsert({
    where: { id: 3 },
    update: {},
    create: {
      userId: user3.id,
      title: "Healthcare Innovations",
      desc: "Discussion about innovations in healthcare.",
      type: "IMAGE",
      img: "https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg",
    },
  });

  const post4 = await prisma.post.upsert({
    where: { id: 4 },
    update: {},
    create: {
      userId: user3.id,
      title: "Healthcare Innovations",
      desc: "Discussion about innovations in healthcare.",
      type: "IMAGE",
      img: "https://hotpot.ai/images/site/ai/image_generator/background_maker/teaser_400.jpg",
    },
  });

  // Upsert labels
  const label1 = await prisma.label.upsert({
    where: { id: 1 },
    update: {},
    create: {
      labelTitle: "Tech",
    },
  });

  const label2 = await prisma.label.upsert({
    where: { id: 2 },
    update: {},
    create: {
      labelTitle: "Health",
    },
  });

  // Upsert comments
  const comment1 = await prisma.comment.upsert({
    where: { id: 1 },
    update: {},
    create: {
      userId: user2.id,
      postId: post1.id,
    },
  });

  const comment2 = await prisma.comment.upsert({
    where: { id: 2 },
    update: {},
    create: {
      userId: user1.id,
      postId: post2.id,
    },
  });

  // Upsert resources
  const resource1 = await prisma.resource.upsert({
    where: { id: 1 },
    update: {},
    create: {
      type: "ARTICLE",
      content: "This is a sample article content.",
      title: "Sample Article",
    },
  });

  const resource2 = await prisma.resource.upsert({
    where: { id: 2 },
    update: {},
    create: {
      type: "VIDEO",
      content: "https://example.com/video",
      title: "Sample Video",
    },
  });

  // Upsert chats
  const chat1 = await prisma.chat.upsert({
    where: { id: 1 },
    update: {},
    create: {
      content: "Hello, how are you?",
      receiverId: user2.id,
      senderId: user1.id,
      chatType: "TEXT",
    },
  });

  const chat2 = await prisma.chat.upsert({
    where: { id: 2 },
    update: {},
    create: {
      content: "I am fine, thank you!",
      receiverId: user1.id,
      senderId: user2.id,
      chatType: "TEXT",
    },
  });
}

main()
  .then(() => {
    console.log("Data is seeded");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
