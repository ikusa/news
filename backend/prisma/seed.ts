import Photon from '@generated/photon';

const photon = new Photon();

async function main() {
  const user1 = await photon.users.create({
    data: {
      email: 'alice@prisma.io',
      name: 'Alice',
      articles: {
        create: {
          title: 'Join us for Prisma Day 2019 in Berlin',
          content: 'https://www.prisma.io/day/'
        }
      }
    }
  });
  const user2 = await photon.users.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      articles: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/'
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma'
          }
        ]
      }
    }
  });

  console.log({ user1, user2 });
}

main().catch(e => console.error(e));
