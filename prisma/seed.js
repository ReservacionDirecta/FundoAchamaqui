const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Check if database is already seeded
  const blogCount = await prisma.blogPost.count();
  if (blogCount >= 11) {
    console.log('Database already has the 11 blog posts. Skipping seed.');
    return;
  }

  // Clear existing data to ensure a fresh, clean seed of the new 11 blogs
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
      mainImage: '/images/IMG_20230823_144940.jpg',
      images: [
        '/images/IMG_20230823_144940.jpg',
        '/images/IMG_20230823_145150.jpg',
        '/images/IMG_20230823_144010.jpg',
        '/images/IMG_20230823_144013.jpg',
        '/images/IMG_20230823_144028.jpg',
        '/images/IMG_20230823_144024.jpg',
        '/images/IMG_20230823_150051.jpg',
        '/images/IMG_20230823_150921-1.jpg',
      ],
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
      mainImage: '/images/IMG_20230823_151045-1.jpg',
      images: [
        '/images/IMG_20230823_151045-1.jpg',
      ],
      categoryId: catHabitaciones.id,
    },
    {
      name: 'Doble | Twin',
      slug: 'doble-twin',
      description: 'Nuestra habitación doble es ideal para amigos o familiares, ofreciendo dos camas cómodas y un ambiente relajante.',
      price: 220,
      capacity: 2,
      mainImage: '/images/IMG_20230823_144310.jpg',
      images: [
        '/images/IMG_20230823_144310.jpg',
        '/images/IMG_20230823_144422.jpg',
      ],
      categoryId: catHabitaciones.id,
    },
    {
      name: 'Triple',
      slug: 'triple',
      description: 'Habitación amplia con tres camas, perfecta para grupos pequeños que buscan comodidad y cercanía.',
      price: 300,
      capacity: 3,
      mainImage: '/images/IMG_20230823_145548_DxO-1082x1440.jpg',
      images: [
        '/images/IMG_20230823_145548_DxO-1082x1440.jpg',
      ],
      categoryId: catHabitaciones.id,
    },
    {
      name: 'Cuádruple | King',
      slug: 'cuadruple-king',
      description: 'Nuestra habitación cuádruple en el primer piso, con vistas al jardín y acceso a la piscina, es perfecta para familias y grupos.',
      price: 400,
      capacity: 4,
      mainImage: '/images/IMG_20230823_143927.jpg',
      images: [
        '/images/IMG_20230823_143927.jpg',
        '/images/IMG_20230823_143925.jpg',
        '/images/IMG_20230823_143938.jpg',
        '/images/IMG_20230823_143940.jpg',
        '/images/IMG_20230823_143955.jpg',
      ],
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
      image: "/images/received_1753229811842785.jpeg",
    },
    {
      name: "Restaurant: Sabores de la Selva",
      slug: "restaurant-sabores",
      description: "Nuestro restaurante y bar te esperan con una deliciosa variedad de comidas locales y amazónicas.",
      image: "/images/IMG_20231010_082516_478.webp",
    },
    {
      name: "Descubre la Magia del Río Utcubamba",
      slug: "magia-rio-utcubamba",
      description: "Te brindamos una experiencia única junto al Río Utcubamba. Deja que las aguas te lleven a un estado de relajación.",
      image: "/images/Vista-aerea-achamaqui-1.jpg",
    },
  ];

  for (const activity of activities) {
    await prisma.activity.upsert({
      where: { slug: activity.slug },
      update: activity,
      create: activity,
    });
  }

  // 11 Blog Posts
  const blogPosts = [
    {
      title: "Kuélap: La Fortaleza en las Nubes",
      slug: "kuelap-fortaleza-en-las-nubes",
      excerpt: "La joya arqueológica de la cultura Chachapoyas que desafía al tiempo desde lo alto de los Andes orientales.",
      content: "<p>Ubicada a más de 3,000 metros sobre el nivel del mar, la fortaleza arqueológica de Kuélap representa el máximo esplendor de la cultura Chachapoyas. Sus murallas de piedra caliza de hasta 20 metros de altura albergan más de 500 viviendas circulares decoradas con frisos geométricos.</p><p>Para los huéspedes de Fundo Achamaqui, Kuélap es una visita indispensable. Planifica tu expedición de un día entero para explorar este santuario histórico que data del siglo VI d.C.</p>",
      mainImage: "/images/Kuelap.jpg",
      categoryId: catBlog.id,
    },
    {
      title: "Catarata Gocta: El Misterioso Velo del Gigante",
      slug: "catarata-gocta-velo-del-gigante",
      excerpt: "Descubre una de las caídas de agua más altas del mundo, rodeada de exuberante selva y fascinantes leyendas locales.",
      content: "<p>Conocida localmente como 'La Chorrera', la majestuosa Catarata Gocta posee una espectacular caída doble que suma un total de 771 metros de altura. Rodeada de un denso bosque de neblina habitado por el gallito de las rocas y monos de cola amarilla, la caminata a Gocta es una inmersión completa en la biodiversidad del Amazonas.</p><p>A solo 40 minutos en coche desde Fundo Achamaqui se encuentra el pueblo de Cocachimba, el punto de inicio idóneo para recorrer el sendero que lleva al pie de la catarata.</p>",
      mainImage: "/images/Catarata-Gocta.png",
      categoryId: catBlog.id,
    },
    {
      title: "El Museo de Leymebamba y las Momias de la Laguna de los Cóndores",
      slug: "museo-leymebamba-momias-laguna-condores",
      excerpt: "Un recorrido fascinante por el santuario que resguarda más de 200 momias perfectamente preservadas del legado Chachapoyas.",
      content: "<p>El Museo de Leymebamba es mundialmente reconocido por albergar la extraordinaria colección arqueológica rescatada de la Laguna de los Cóndores en 1997. Sus salas resguardan más de 200 momias prehispánicas en excelente estado de conservación, así como quipus, finos textiles y cerámicas pre-incas e incas.</p><p>El museo ofrece una ventana única a las antiguas técnicas funerarias y la cosmovisión andino-amazónica de esta misteriosa civilización.</p>",
      mainImage: "/images/casa-hacienda-achamaqui.jpg",
      categoryId: catBlog.id,
    },
    {
      title: "Sarcófagos de Karajía: Centinelas de la Eternidad",
      slug: "sarcofagos-de-karajia-centinelas",
      excerpt: "Imponentes tumbas antropomorfas incrustadas en los acantilados verticales de la provincia de Luya.",
      content: "<p>Los Sarcófagos de Karajía representan un rito funerario singular e imponente: cápsulas de arcilla y paja de hasta 2.5 metros de altura colocadas en la cara vertical de gigantescos acantilados. Estos monumentos funerarios miran hacia el abismo, albergando en su interior los restos de los gobernantes más distinguidos del reino de los Chachapoyas.</p><p>Una excursión que te conectará con el misticismo del pasado prehispánico de la región.</p>",
      mainImage: "/images/received_1753229811842785.jpeg",
      categoryId: catBlog.id,
    },
    {
      title: "Telecabinas de Kuélap: Volando hacia la Historia",
      slug: "telecabinas-kuelap-volando-historia",
      excerpt: "La primera línea de teleférico del Perú que reduce el tiempo de viaje a la majestuosa fortaleza a solo 20 minutos de vuelo escénico.",
      content: "<p>El moderno sistema de telecabinas de Kuélap ofrece un espectacular vuelo de 4 kilómetros sobre el valle del río Tingo. Durante el trayecto de 20 minutos, los pasajeros disfrutan de espectaculares vistas aéreas de los andenes y las montañas verdes del valle.</p><p>Este moderno medio de transporte combina la comodidad contemporánea con el misticismo del viaje clásico al pasado arqueológico.</p>",
      mainImage: "/images/Vista-aerea-achamaqui-1.jpg",
      categoryId: catBlog.id,
    },
    {
      title: "Huancas y el Cañón del Sonche: Tradición de Arcilla y Abismos",
      slug: "huancas-canon-del-sonche-arcilla",
      excerpt: "Un pintoresco pueblo de artesanas alfareras asentado al borde de uno de los cañones más espectaculares del norte peruano.",
      content: "<p>Huancas, ubicado a pocos minutos de la ciudad de Chachapoyas, es un pueblo reconocido por su arraigada tradición de alfarería artesanal, elaborada a mano por las mujeres huanquinas. Muy cerca del pueblo se encuentra el imponente mirador del Cañón del Sonche, con profundidades que superan los 900 metros.</p><p>Es el lugar perfecto para comprar cerámica local única y disfrutar de vistas panorámicas impresionantes que te dejarán sin aliento.</p>",
      mainImage: "/images/replicate-prediction-cztboozcisgnpfwa6rudiiuzqq.png",
      categoryId: catBlog.id,
    },
    {
      title: "Cavernas de Quiocta: Viaje al Corazón de la Tierra",
      slug: "cavernas-de-quiocta-viaje-corazon-tierra",
      excerpt: "Explora un fascinante mundo subterráneo colmado de milenarias estalactitas y estalagmitas arqueológicas.",
      content: "<p>La caverna de Quiocta ofrece una expedición espeleológica inolvidable a lo largo de 500 metros de galería subterránea. Alumbrados por linternas, descubrirás asombrosas esculturas naturales talladas por el agua durante millones de años, además de antiguos vestigios óseos funerarios dejados por las civilizaciones pre-incas.</p>",
      mainImage: "/images/received_341214391902150.jpeg",
      categoryId: catBlog.id,
    },
    {
      title: "El Bosque de Neblina y la Biodiversidad del Valle de Urcos",
      slug: "bosque-neblina-biodiversidad-urcos",
      excerpt: "El singular ecosistema que protege especies emblemáticas como el colibrí cola de espátula y el oso de anteojos.",
      content: "<p>La provincia de Chachapoyas goza de los mágicos bosques de neblina de Urcos, un ecosistema permanentemente envuelto en bruma que alberga orquídeas salvajes, bromelias y helechos gigantes. Este hábitat es el hogar del famoso colibrí cola de espátula, una de las aves más raras del planeta.</p>",
      mainImage: "/images/dji_fly_20230823_092730_87_1692800992341_pano_optimized-EDIT-1.jpg",
      categoryId: catBlog.id,
    },
    {
      title: "El Río Utcubamba: El Pulso Fluvial que Baña Achamaqui",
      slug: "rio-utcubamba-pulso-fluvial-achamaqui",
      excerpt: "El majestuoso cauce que recorre el valle sagrado y otorga paz a los jardines de Fundo Achamaqui.",
      content: "<p>El Río Utcubamba, cuyo nombre en quechua evoca los campos de algodón en la quebrada, es el corazón hidrográfico del valle. Fluye justo a los pies del Hotel Fundo Achamaqui, arrullando a los huéspedes con el sonido del agua y proveyendo un hábitat para diversas especies de aves nativas.</p>",
      mainImage: "/images/dji_fly_20230823_092730_87_1692800992341_pano_optimized-EDIT-1.jpg",
      categoryId: catBlog.id,
    },
    {
      title: "Alianza con el World Monuments Fund en Chachapoyas",
      slug: "alianza-world-monuments-fund-chachapoyas",
      excerpt: "El compromiso de Fundo Achamaqui por la preservación y el turismo sostenible del patrimonio arquitectónico e histórico.",
      content: "<p>El patrimonio arqueológico de Chachapoyas es invaluable. Es por ello que iniciativas asociadas a instituciones como el World Monuments Fund promueven la conservación activa de sitios emblemáticos como Kuélap y las iglesias tradicionales. En Fundo Achamaqui apoyamos activamente la sostenibilidad del destino turístico y la identidad cultural de nuestras comunidades.</p>",
      mainImage: "/images/casa-hacienda-achamaqui.jpg",
      categoryId: catBlog.id,
    },
    {
      title: "Jalca Grande: El Distrito del Templo de Piedra",
      slug: "jalca-grande-templo-de-piedra",
      excerpt: "La capital folklórica de la región que resguarda la iglesia colonial de piedra más antigua y tradiciones prehispánicas vivas.",
      content: "<p>Jalca Grande destaca como el distrito histórico por excelencia de la provincia de Chachapoyas. Su joya es la iglesia de piedra de San Juan Bautista, que muestra elementos arquitectónicos prehispánicos mezclados con la influencia del catolicismo español. Sus tejedoras aún practican la elaboración de mantas tradicionales usando telares de cintura prehispánicos.</p>",
      mainImage: "/images/received_341214391902150.jpeg",
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
