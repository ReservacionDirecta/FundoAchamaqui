const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.amenity.deleteMany({});
  await prisma.room.deleteMany({});
  await prisma.blogPost.deleteMany({});
  await prisma.activity.deleteMany({});
  await prisma.category.deleteMany({});

  // Categories
  const catHabitaciones = await prisma.category.upsert({
    where: { slug: 'habitaciones' },
    update: {},
    create: {
      name: 'Habitaciones',
      slug: 'habitaciones',
    },
  });

  const catBlog = await prisma.category.upsert({
    where: { slug: 'blog' },
    update: {},
    create: {
      name: 'Blog',
      slug: 'blog',
    },
  });

  // Amenities
  const amenitiesData = [
    { name: 'Ducha', icon: 'shower' },
    { name: 'Desayunos', icon: 'coffee' },
    { name: 'WiFi', icon: 'wifi' },
    { name: 'Limpieza diaria', icon: 'check' },
    { name: 'Tv satelital', icon: 'tv' },
    { name: 'Vista al jardín', icon: 'tree' },
    { name: 'Caja fuerte', icon: 'lock' },
  ];

  const amenityDocs = await Promise.all(
    amenitiesData.map((a) =>
      prisma.amenity.create({
        data: a,
      })
    )
  );

  // Rooms
  const rooms = [
    {
      name: 'Matrimonial King',
      slug: 'matrimonial-king',
      description: 'Disfruta de la máxima comodidad en nuestra habitación Matrimonial King, con vista al jardín y todas las amenidades necesarias para un descanso perfecto.',
      price: 250,
      capacity: 2,
      mainImage: '/images/IMG_20230823_151840.jpg',
      categoryId: catHabitaciones.id,
      houseRules: 'Check-in: 15:00, Check-out: 12:00. No fumar en la habitación.',
      cancellation: 'Cancelación gratuita hasta 48 horas antes de la llegada.',
    },
    {
      name: 'Matrimonial Queen',
      slug: 'matrimonial-queen',
      description: 'Elegancia y confort en nuestra habitación Matrimonial Queen. Ideal para parejas que buscan un ambiente acogedor y relajante.',
      price: 230,
      capacity: 2,
      mainImage: '/images/IMG_20230823_144310.jpg',
      categoryId: catHabitaciones.id,
    },
    {
      name: 'Doble | Twin',
      slug: 'doble-twin',
      description: 'Nuestra habitación doble es ideal para amigos o familiares, ofreciendo dos camas cómodas y un ambiente relajante.',
      price: 220,
      capacity: 2,
      mainImage: '/images/IMG_20230823_144422.jpg',
      categoryId: catHabitaciones.id,
    },
    {
      name: 'Triple',
      slug: 'triple',
      description: 'Habitación amplia con tres camas, perfecta para grupos pequeños que buscan comodidad y cercanía.',
      price: 300,
      capacity: 3,
      mainImage: '/images/9_DxO.jpg',
      categoryId: catHabitaciones.id,
    },
    {
      name: 'Cuádruple | King',
      slug: 'cuadruple-king',
      description: 'Nuestra habitación cuádruple en el primer piso, con vistas al jardín y acceso a la piscina, es perfecta para familias y grupos.',
      price: 400,
      capacity: 4,
      mainImage: '/images/IMG_20230823_143927.jpg',
      categoryId: catHabitaciones.id,
    },
  ];

  for (const room of rooms) {
    await prisma.room.upsert({
      where: { slug: room.slug },
      update: room,
      create: {
        ...room,
        amenities: {
          connect: amenityDocs.slice(0, 5).map((a) => ({ id: a.id })),
        },
      },
    });
  }

  // Activities
  const activities = [
    {
      name: "Trekkings y la caminata al sarcófago de Fundo Achamaqui",
      slug: "trekkings-sarcofago",
      description: "Descubre la misteriosa caminata al sarcófago de Fundo Achamaqui, con más de 1000 años de antigüedad.",
      image: "/images/DJI_0092.jpg",
    },
    {
      name: "Restaurant: Sabores de la Selva",
      slug: "restaurant-sabores",
      description: "Nuestro restaurante y bar te esperan con una deliciosa variedad de comidas locales y amazónicas.",
      image: "/images/360900551_DxO.jpg",
    },
    {
      name: "Descubre la Magia del Río Utcubamba",
      slug: "magia-rio-utcubamba",
      description: "Te brindamos una experiencia única junto al Río Utcubamba. Deja que las aguas te lleven a un estado de relajación.",
      image: "/images/DJI_0111_DxO-1920x1440.jpg",
    },
  ];

  for (const activity of activities) {
    await prisma.activity.upsert({
      where: { slug: activity.slug },
      update: activity,
      create: activity,
    });
  }

  // Blog Posts
  const blogPosts = [
    {
      title: "Bienvenidos a Fundo Achamaqui",
      slug: "bienvenidos",
      excerpt: "Descubre el refugio perfecto en el corazón de Chachapoyas.",
      content: "Contenido detallado sobre la bienvenida al hotel...",
      mainImage: "/images/Background-1_1Background (1).webp",
      categoryId: catBlog.id,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log('Seed completed successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
