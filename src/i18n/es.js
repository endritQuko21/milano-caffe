const es = {
  // Header
  nav: {
    inicio:    'Inicio',
    conocenos: 'Conócenos',
    carta:     'La Carta',
    panettone: 'Panettone',
    contacto:  'Contacto',
    reservar:  'Reservar',
  },
  header: {
    horario: 'Mar–Dom · 19:00–23:00',
  },

  // Hero
  hero: {
    tag:     'Mont-ras · Girona · Desde 2015',
    title1:  'Pizza',
    title2:  'artesanal',
    title3:  'italiana',
    desc:    'Masa de fermentación lenta, ingredientes seleccionados directamente de Italia y un horno de leña que hace el resto. Una pizzería familiar en el corazón del Baix Empordà.',
    cta1:    'Reservar mesa',
    cta2:    'Conócenos',
    badge:   'Años de historia',
  },

  // Stats
  stats: [
    { num: '+10',  label: 'Años abiertos' },
    { num: '100%', label: 'Ingredientes italianos' },
    { num: '48h',  label: 'Fermentación mínima' },
    { num: '4',    label: 'Variedades de panettone' },
  ],

  // Conócenos
  about: {
    eyebrow: 'Conócenos',
    title:   'Una pequeña\ngran familia italiana',
    body1:   'En Milano Caffè nuestra especialidad son las pizzas y panettones artesanos. La minuciosa selección de ingredientes italianos es el eje de nuestra cocina.',
    body2:   'Desde 2015 somos un espacio acogedor donde cuidamos cada detalle para que te sientas como en casa. Un equipo unido con una sola obsesión: el sabor.',
    list: [
      'Ingredientes importados directamente de Italia',
      'Masas de fermentación lenta en frío',
      'Panettones elaborados bajo encargo',
      'Ambiente familiar, cocina honesta',
    ],
    tag: 'Mont-ras, Girona',
  },

  // Panettone
  panettone: {
    eyebrow:  'Especialidad',
    title:    'Panettone\nartesanal italiano',
    intro:    'Elaborado con masa madre y fermentaciones largas. Ingredientes de máxima calidad, sin aditivos, con la textura y el aroma del panettone de toda la vida. Disponible bajo pedido en temporada.',
    process:  'La masa se prepara con levadura madre que reposa toda la noche a temperatura constante. Una vez horneado, necesita dos horas más de reposo para conseguir esa textura tan característica. No hay atajos: solo tiempo y cariño.',
    varieties: [
      { name: 'Chocolate',          desc: 'Relleno de chocolate negro 70%, intenso y equilibrado.' },
      { name: 'Chocolate & Naranja', desc: 'La combinación italiana por excelencia. Cítrico con fondo achocolatado.' },
      { name: 'Milka',              desc: 'Chocolate con leche suave y cremoso para los más golosos.' },
      { name: 'Fruta',              desc: 'Frutas confitadas tradicionales. La receta original de Milán.' },
    ],
  },

  // Formulario
  form: {
    eyebrow:     'Pedido',
    title:       'Reserva tu panettone',
    sub:         'Mínimo 7 días de antelación. Te confirmaremos el pedido por WhatsApp o email.',
    nombre:      'Nombre',
    apellidos:   'Apellidos',
    correo:      'Correo electrónico',
    movil:       'Móvil',
    variedad:    'Tipo de panettone',
    variedadPh:  'Selecciona una variedad…',
    fecha:       'Fecha de recogida',
    comentario:  'Comentario',
    opcional:    '(opcional)',
    comentarioPh:'Cantidad, alergias, indicaciones especiales…',
    btnWa:       'Enviar por WhatsApp',
    btnMail:     'Enviar por Email',
    sent:        '✓ Pedido enviado — te confirmamos en breve.',
    err: {
      required: 'Obligatorio',
      email:    'Email no válido',
      variedad: 'Selecciona una variedad',
      fecha:    'Selecciona una fecha',
    },
  },

  // CTA
  cta: {
    eyebrow: 'Reserva',
    title1:  '¿Vienes a',
    title2:  'cenar con nosotros?',
    sub:     'Llámanos para reservar mesa o para hacer tu pedido de panettone artesanal. Estaremos encantados.',
    btn:     'Llamar ahora',
  },

  // Footer
  footer: {
    desc:       'Pizzas y panettones artesanos elaborados con ingredientes italianos seleccionados. Un rincón familiar en Mont-ras, Girona.',
    siguenos:   'Síguenos',
    horario:    'Horario',
    contacto:   'Contacto',
    navegacion: 'Navegación',
    direccion:  'Dirección',
    telefono:   'Teléfono',
    email:      'Email',
    derechos:   'Todos los derechos reservados',
    schedule: [
      { day: 'Lunes',     hours: 'Cerrado',       closed: true },
      { day: 'Martes',    hours: '19:00 – 23:00' },
      { day: 'Miércoles', hours: '19:00 – 23:00' },
      { day: 'Jueves',    hours: '19:00 – 23:00' },
      { day: 'Viernes',   hours: '19:00 – 23:00' },
      { day: 'Sábado',    hours: '19:00 – 23:00' },
      { day: 'Domingo',   hours: '19:00 – 23:00' },
    ],
  },

  // Menu
  menu: {
    eyebrow: 'Nuestra carta',
    title:   'Sabores italianos\nelaborados artesanalmente',
    text:    'Una selección de pizzas artesanas, bebidas italianas y productos cuidadosamente elegidos para una experiencia auténtica.',
    pizzasLabel:   'Pizzas',
    pizzasHeading: 'Especialidades',
    bebidasLabel:   'Bebidas',
    bebidasHeading: 'Selección',
    pizzas: [
      { name: 'Margherita',          description: 'Tomate San Marzano, mozzarella fior di latte y albahaca fresca.',      price: '11.50€' },
      { name: 'Diavola',             description: 'Salami picante italiano, mozzarella y aceite picante.',                price: '13.90€' },
      { name: 'Prosciutto e Funghi', description: 'Jamón cocido italiano, champiñones frescos y mozzarella.',             price: '14.50€' },
      { name: 'Quattro Formaggi',    description: 'Mozzarella, gorgonzola, parmesano y scamorza.',                       price: '15.00€' },
      { name: 'Tartufo',             description: 'Crema de trufa, mozzarella y parmesano curado.',                      price: '16.90€' },
      { name: 'Milano Speciale',     description: 'Mortadella italiana, pistacho y burrata cremosa.',                    price: '17.50€' },
    ],
    bebidas: [
      { name: 'Coca-Cola',           price: '2.80€' },
      { name: 'Cerveza Moretti',     price: '3.50€' },
      { name: 'Agua Mineral',        price: '2.20€' },
      { name: 'Spritz Italiano',     price: '6.50€' },
      { name: 'Lambrusco Rosso',     price: '4.90€' },
      { name: 'Copa de Vino Chianti',price: '5.50€' },
    ],
  },
};

export default es;