import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Upsert users
    const user1 = await prisma.user.upsert({
        where: { username: 'johndoe1' },
        update: {},
        create: {
            username: 'johndoe1',
            name: 'John Doe1',
            age: 30,
            industryField: 'Technology',
            type: 'ENTREPRENEUR'
        }
    });

    const user2 = await prisma.user.upsert({
        where: { username: 'janedoe2' },
        update: {},
        create: {
            username: 'janedoe2',
            name: 'Jane Doe2',
            age: 28,
            industryField: 'Healthcare',
            type: 'INVESTOR'
        }
    });

    // Upsert posts
    const post1 = await prisma.post.upsert({
        where: { id: 1 },
        update: {},
        create: {
            userId: user1.id,
            title: 'My First Post',
            desc: 'This is a description of my first post.',
            type: 'TEXT'
        }
    });

    const post2 = await prisma.post.upsert({
        where: { id: 2 },
        update: {},
        create: {
            userId: user2.id,
            title: 'Healthcare Innovations',
            desc: 'Discussion about innovations in healthcare.',
            type: 'TEXT'
        }
    });

    // Upsert labels
    const label1 = await prisma.label.upsert({
        where: { id: 1 },
        update: {},
        create: {
            labelTitle: 'Tech'
        }
    });

    const label2 = await prisma.label.upsert({
        where: { id: 2 },
        update: {},
        create: {
            labelTitle: 'Health'
        }
    });

    // Upsert comments
    const comment1 = await prisma.comment.upsert({
        where: { id: 1 },
        update: {},
        create: {
            userId: user2.id,
            postId: post1.id
        }
    });

    const comment2 = await prisma.comment.upsert({
        where: { id: 2 },
        update: {},
        create: {
            userId: user1.id,
            postId: post2.id
        }
    });

    // Upsert resources
    const resource1 = await prisma.resource.upsert({
        where: { id: 1 },
        update: {},
        create: {
            type: 'ARTICLE',
            content: 'This is a sample article content.',
            title: 'Sample Article'
        }
    });

    const resource2 = await prisma.resource.upsert({
        where: { id: 2 },
        update: {},
        create: {
            type: 'VIDEO',
            content: 'https://example.com/video',
            title: 'Sample Video'
        }
    });

    // Upsert chats
    const chat1 = await prisma.chat.upsert({
        where: { id: 1 },
        update: {},
        create: {
            content: 'Hello, how are you?',
            receiverId: user2.id,
            senderId: user1.id,
            chatType: 'TEXT'
        }
    });

    const chat2 = await prisma.chat.upsert({
        where: { id: 2 },
        update: {},
        create: {
            content: 'I am fine, thank you!',
            receiverId: user1.id,
            senderId: user2.id,
            chatType: 'TEXT'
        }
    });

    // Upsert mentors and entrepreneurs
    const mentor1 = await prisma.mentor.upsert({
        where: { id: 1 },
        update: {},
        create: {
            userId: user2.id
        }
    });

    const entrepreneur1 = await prisma.entrepreneur.upsert({
        where: { id: 1 },
        update: {},
        create: {
            userId: user1.id,
            mentorId: mentor1.id
        }
    });
}

main()
    .then(() => {
        console.log("Data is seeded")
    })
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
