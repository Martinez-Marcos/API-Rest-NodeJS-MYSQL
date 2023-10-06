/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable max-lines */
/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */
const { Catalogo, Genero, Categoria, ActorActriz } = require('../src/models');
// eslint-disable-next-line lines-around-comment
/*
const sequelize = require('../conection'); // Asegúrate de que la ruta sea correcta
const fs = require('fs');

// Lee el contenido del archivo SQL
const archivoSQL = 'ruta/al/archivo.sql'; // Cambia la ruta de archivo SQL
const sqlScript = fs.readFileSync(archivoSQL, 'utf8');

// Ejecuta el script SQL utilizando Sequelize
sequelize
  .query(sqlScript)
  .then(() => {
    console.log('Archivo SQL ejecutado con éxito.');
  })
  .catch((error) => {
    console.error('Error al ejecutar el archivo SQL:', error);
  });*/

// Función middleware para cargar películas
async function cargarPeliculas() {
  const peliculas = [
    {
      "id": 3,
      "poster": "/posters/3.jpg",
      "titulo": "The Mandalorian",
      "categoria": "Serie",
      "genero": "Ciencia Ficción, Fantasía",
      "resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
      "temporadas": "2",
      "reparto": "Pedro Pascal, Carl Weathers, Misty Rosas, Chris Bartlett, Rio Hackford, Giancarlo Esposito",
      "trailer": "https://www.youtube.com/embed/aOC8E8z_ifw"
    },
    {
      "id": 4,
      "poster": "/posters/4.jpg",
      "titulo": "The Umbrella Academy",
      "categoria": "Serie",
      "genero": "Ciencia Ficción, Fantasía",
      "resumen": "La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos y una amenaza que se cierne sobre la humanidad.",
      "temporadas": "1",
      "reparto": "Tom Hopper, David Castañeda, Emmy Raver-Lampman, Robert Sheehan, Aidan Gallagher, Elliot Page"
    },
    {
      "id": 5,
      "poster": "/posters/5.jpg",
      "titulo": "Gambito de Dama",
      "categoria": "Serie",
      "genero": "Drama, Ficción, Sucesos",
      "resumen": "En los cincuenta, una joven de un orfanato descubre que tiene un increíble don para el ajedrez y recorre el arduo camino a la fama mientras lucha contra las adicciones.",
      "temporadas": "1",
      "reparto": "Anya Taylor-Joy, Thomas Brodie-Sangster, Harry Melling, Moses Ingram, Chloe Pirrie, Janina Elkin"
    },
    {
      "id": 2,
      "poster": "/posters/2.jpg",
      "titulo": "Riverdale",
      "categoria": "Serie",
      "genero": "Drama, Misterio, Ficción",
      "resumen": "El paso a la edad adulta incluye sexo, romance, escuela y familia. Para Archie y sus amigos, también hay misterios oscuros.",
      "temporadas": "5",
      "reparto": "Lili Reinhart, Casey Cott, Camila Mendes, Marisol Nichols, Madelaine Petsch, Mädchen Amick"
    },
    {
      "id": 1,
      "poster": "/posters/1.jpg",
      "titulo": "The Crown",
      "categoria": "Serie",
      "genero": "Drama, Hechos verídicos",
      "resumen": "Este drama narra las rivalidades políticas y el romance de la reina Isabel II, así como los sucesos que moldearon la segunda mitad del siglo XX.",
      "temporadas": "4",
      "reparto": "Claire Fox, Olivia Colman, Matt Smith, Tobias Menzies, Vanesa Kirby, Helena Bonham Carter"
    },
    {
      "id": 6,
      "poster": "/posters/6.jpg",
      "titulo": "Enola Holmes",
      "categoria": "Película",
      "genero": "Ficción, Drama, Misterio",
      "resumen": "La hermana menor de Sherlock, descubre que su madre ha desaparecido y se dispone a encontrarla. En su búsqueda, saca a relucir el sabueso que corre por sus venas y se encuentra con una conspiración que gira en torno a un misterioso lord, demostrando que su ilustre hermano no es el único talento en la familia.",
      "temporadas": "N/A",
      "reparto": "Millie Bobby Brown, Henry Cavill, Sam Claflin, Helena Bonham Carter, Louis Partridge, Adeel Akhtar"
    },
    {
      "id": 7,
      "poster": "/posters/7.jpg",
      "titulo": "Guasón",
      "categoria": "Película",
      "genero": "Crimen, Suspenso, Drama",
      "resumen": "Arthur Fleck (Phoenix) es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en el popular personaje de DC Comics Joker, conocido como archivillano de Batman, pero que en este film tomará un cariz más realista y oscuro.",
      "temporadas": "N/A",
      "reparto": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Shea Whigham",
      "trailer": "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
      "id": 8,
      "poster": "/posters/8.jpg",
      "titulo": "Avengers: End Game",
      "categoria": "Película",
      "genero": "Aventura, Sci-Fi, Acción",
      "resumen": "Después de los devastadores eventos de los Vengadores: Infinity War (2018), el universo está en ruinas. Con la ayuda de los aliados restantes, los Vengadores se reúnen una vez más para revertir las acciones de Thanos y restaurar el equilibrio del universo.",
      "temporadas": "N/A",
      "reparto": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner"
    },
    {
      "id": 9,
      "poster": "/posters/9.jpg",
      "titulo": "Juego de tronos",
      "categoria": "Serie",
      "genero": "Aventura, Fantasía, Drama",
      "resumen": "En un mundo fantástico y en un contexto medieval varias familias, relativas a la nobleza, se disputan el poder para dominar el territorio ficticio de Poniente (Westeros) y tomar el control de los Siete Reinos desde el Trono de Hierro, lugar donde el rey ejerce el poder.",
      "temporadas": "8",
      "reparto": "Emilia Clarke, Lena Headey, Sophie Turner, Kit Harington, Peter Dinklage, Nikolaj Coster-Waldau"
    },
    {
      "id": 10,
      "poster": "/posters/10.jpg",
      "titulo": "The Flash",
      "categoria": "Serie",
      "genero": "Ciencia Ficción, Fantasía",
      "resumen": "Sigue las veloces aventuras de Barry Allen, un joven común y corriente con el deseo latente de ayudar a los demás. Cuando una inesperada partícula aceleradora golpea por accidente a Barry, de pronto se encuentra cargado de un increíble poder para moverse a increíbles velocidades. Mientras Barry siempre ha tenido el alma de un héroe, sus nuevos poderes le han dado la capacidad de actuar como tal.",
      "temporadas": "6",
      "reparto": "Grant Gustin, Carlos Valdes, Danielle Panabaker, Candice Patton, Jesse L. Martin, Tom Cavanagh"
    },
    {
      "id": 11,
      "poster": "/posters/11.jpg",
      "titulo": "The Big Bang Theory",
      "categoria": "Serie",
      "genero": "Comedia, Fantasía, Ficción",
      "resumen": "Leonard y Sheldon son dos físicos que comparten trabajo y apartamento. La serie comienza con la mudanza de Penny, su nueva y atractiva vecina, y hace hincapié en la dificultad de los físicos para relacionarse con personas fuera de su entorno para dar lugar a situaciones cómicas.",
      "temporadas": "12",
      "reparto": "Jim Parsons, Johnny Galecki, Kaley Cuoco, Simon Helberg, Kunal Nayyar, Melissa Rauch, Mayim Bialik",
      "trailer": "https://www.youtube.com/embed/WBb3fojgW0Q"
    },
    {
      "id": 12,
      "poster": "/posters/12.jpg",
      "titulo": "Friends",
      "categoria": "Serie",
      "genero": "Comedia, Familia, Drama",
      "resumen": "'Friends' narra las aventuras y desventuras de seis jóvenes de Nueva York: Rachel, Monica, Phoebe, Ross, Chandler y Joey. Ellos forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual cafetería, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.",
      "temporadas": "10",
      "reparto": "Jennifer Aniston, Courteney Cox, Lisa Kudrow, David Schwimmer, Matthew Perry, Matt LeBlanc"
    },
    {
      "id": 13,
      "poster": "/posters/13.jpg",
      "titulo": "Anne with an 'E'",
      "categoria": "Serie",
      "genero": "Drama, Familia, Western",
      "resumen": "Anne Shirley es una niña huérfana que vive en un pequeño pueblo llamado Avonlea que pertenece a la Isla del Príncipe Eduardo, en el año 1890. Después de una infancia difícil, donde fue pasando de orfanato a hogares de acogida, es enviada por error a vivir con una solterona y su hermano. Cuando cumple 13 años, Anne va a conseguir transformar su vida y el pequeño pueblo donde vive gracias a su fuerte personalidad, intelecto e imaginación. Basada en la inolvidable novela.",
      "temporadas": "2",
      "reparto": "Amybeth McNulty, Geraldine James, R. H. Thomson, Corrine Koslo, Dalila Bela, Lucas Jade Zumann"
    },
    {
      "id": 14,
      "poster": "/posters/14.jpg",
      "titulo": "Expedientes Secretos 'X'",
      "categoria": "Serie",
      "genero": "Drama, Ciencia Ficción",
      "resumen": "Fox Mulder y Dana Scully son dos investigadores del FBI que investigan casos sin resolución ni explicación, ya sea por razones paranormales (espíritus, criaturas extrañas, aliens...) ya porque el gobierno se ha encargado de ocultar todo tipo de pruebas. Cuando Mulder tenía doce años, su hermana pequeña fue secuestrada por unos desconocidos, aunque él cree que, en realidad, fue abducida por extraterrestres. Tras acabar sus estudios en la universidad de Oxford, ingresó en la Academia de Quantico, donde se ganó el apodo de 'siniestro'",
      "temporadas": "11",
      "reparto": "Gillian Anderson, David Duchovny, Mitch Pileggi, Robert Patrick, Tom Braidwood, Bruce Harwood",
      "trailer": "https://www.youtube.com/embed/KKziOmsJxzE"
    },
    {
      "id": 15,
      "poster": "/posters/15.jpg",
      "titulo": "Chernobyl",
      "categoria": "Serie",
      "genero": "Drama, Hechos verídicos",
      "resumen": "Sigue «la verdadera historia de una de las peores catástrofes provocadas por el hombre y habla de los valientes hombres y mujeres que se sacrificaron para salvar a Europa de un desastre inimaginable. La miniserie se centra en el desgarrador alcance del desastre de la planta nuclear que ocurrió en Ucrania en abril de 1986, revelando cómo y por qué ocurrió, además contando las sorprendentes y notables historias de los héroes que lucharon y cayeron.",
      "temporadas": "1",
      "reparto": "Jared Harris, Stellan Skarsgård, Emily Watson, Paul Ritter, Jessie Buckley, Adam Nagaitis",
      "trailer": "https://www.youtube.com/embed/s9APLXM9Ei8"
    },
    {
      "id": 16,
      "poster": "/posters/16.jpg",
      "titulo": "Westworld",
      "categoria": "Serie",
      "genero": "Western, Ciencia Ficción",
      "resumen": "'Westworld' es una oscura odisea acerca del amanecer de la conciencia artificial y la evolución del pecado. Situada en la intersección del futuro cercano y el pasado reimaginado, explora un mundo donde cada apetito humano, sin importar cuán noble o depravado, puede ser saciado. Está ambientada en un parque temático futurista dirigido por el Dr. Robert Ford (Anthony Hopkins). Las instalaciones cuentan con androides caracterizados del western americano, y gracias a ellos los visitantes pueden introducirse en cualquier tipo de fantasía por muy oscura que sea.",
      "temporadas": "3",
      "reparto": "Evan Rachel Wood, Thandie Newton, Jeffrey Wright, Tessa Thompson, Ed Harris, Luke Hemsworth",
      "trailer": "https://www.youtube.com/embed/qLFBcdd6Qw0"
    },
    {
      "id": 17,
      "poster": "/posters/17.jpg",
      "titulo": "Halt and Catch Fire",
      "categoria": "Serie",
      "genero": "Ficción, Drama, Tecnología",
      "resumen": "Situada en los inicios de la década de 1980, un visionario ficticio, un ingeniero electrónico y una prodigiosa ingeniera, se alían a una programadora de software para confrontar con las corporaciones informáticas dominantes de la época. El Personal de la firma y sus socios de negocio, comenzarán una carrera que cambiará la cultura en el Estado de Texas, cuna de las empresas de tecnología, casi de la misma forma que lo es hoy Silicon Valey. \n Esta historia ficticia emula el trabajo realizado, en su momento, por la firma Compaq, cuando clonó el BIOS de las Computadoras Personales IBM, dando vida así al económico mercado de los clones. Mostrando también, a lo largo de sus 4 temporadas, el nacimiento de la arquitectura abierta de hardware, los videojuegos online, las salas de chat y de trueque de productos físicos, los BBS, y las primeras nubes computacionales, hasta la llegada de Internet (sin dejar afuera la guerra de los web browsers).",
      "temporadas": "4",
      "reparto": "Lee Pace, Scoot McNairy, Mackenzie Davis, Kerry Bishé, Toby Huss, Alana Cavanaugh",
      "trailer": "https://www.youtube.com/embed/pWrioRji60A"
    },
    {
      "id": 18,
      "poster": "/posters/18.jpg",
      "titulo": "Ava",
      "categoria": "Película",
      "genero": "Acción, Drama, Suspenso",
      "resumen": "Ava es una mortífera asesina a sueldo que trabaja para una organización de operaciones encubiertas, que viaja por todo el mundo acabando con aquellos objetivos que nadie más puede derribar. Cuando uno de sus encargos sale mal, Ava tendrá que luchar por una vida.",
      "temporadas": "N/A",
      "reparto": "Jessica Chastain, John Malkovich, Colin Farrell, Common, Geena Davis, Ioan Gruffudd",
      "trailer": ""
    },
    {
      "id": 19,
      "poster": "/posters/19.jpg",
      "titulo": "Aves de presa y la fantabulosa emancipación de una Harley Quinn",
      "categoria": "Película",
      "genero": "Acción, Ficción, Comedia",
      "resumen": "Después de separarse de Joker, Harley Quinn y otras tres heroínas (Canario Negro, Cazadora y Renée Montoya) unen sus fuerzas para salvar a una niña (Cassandra Cain) del malvado rey del crimen Máscara Negra.",
      "temporadas": "N/A",
      "reparto": "Margot Robbie, Ewan McGregor, Mary Elizabeth Winstead, Jurnee Smollett, Rosie Perez, Chris Messina",
      "trailer": ""
    },
    {
      "id": 20,
      "poster": "/posters/20.jpg",
      "titulo": "Archivo",
      "categoria": "Película",
      "genero": "Acción, Sci-Fi, Suspenso",
      "resumen": "2038: George Almore está trabajando en una verdadera IA equivalente a la humana. Su último prototipo está casi listo. Esta fase sensible también es la más arriesgada. Especialmente porque tiene un objetivo que debe ocultarse a toda costa: reunirse con su esposa muerta.",
      "temporadas": "N/A",
      "reparto": "Stacy Martin, Rhona Mitra, Theo James, Peter Ferdinando, Lia Williams, Toby Jones",
      "trailer": "https://www.youtube.com/embed/VHSoCnDioAo"
    },
    {
      "id": 21,
      "poster": "/posters/21.jpg",
      "titulo": "Jumanji - The next level",
      "categoria": "Película",
      "genero": "Comedia, Ficción, Aventura",
      "resumen": "Las aventuras continúan en el fantástico mundo del video juego Jumanji, donde nada es lo que parece. En esta ocasión, los jugadores vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia y habilidades. Pero, ¿dónde está el resto de la gente?",
      "temporadas": "N/A",
      "reparto": "Dwayne Johnson, Kevin Hart, Jack Black, Karen Gillan, Awkwafina, Nick Jonas",
      "trailer": "https://www.youtube.com/embed/rBxcF-r9Ibs"
    },
    {
      "id": 22,
      "poster": "/posters/22.jpg",
      "titulo": "3022",
      "categoria": "Película",
      "genero": "Ciencia Ficción, Suspenso",
      "resumen": "La película está ambientada en una estación espacial en el futuro. La tripulación sufre un estrés traumático y considera abandonar su misión después de observar lo que creen que es la destrucción de la Tierra. La película se muestra como una serie de flashbacks y flash-forward.",
      "temporadas": "N/A",
      "reparto": "Miranda Cosgrove, Kate Walsh, Omar Epps, Angus Macfadyen, Jorja Fox, Enver Gjokaj",
      "trailer": "https://www.youtube.com/embed/AGQ7OkmIx4Q"
    },
    {
      "id": 23,
      "poster": "/posters/23.jpg",
      "titulo": "IT - Capítulo 2",
      "categoria": "Película",
      "genero": "Terror, Suspenso, Fantasía",
      "resumen": "En este segundo capitulo Han pasado 27 años desde que el 'Club de los Perdedores', formado por Bill, Berverly, Richie, Ben, Eddie, Mike y Stanley, se enfrentaran al macabro y despiadado Pennywise (Bill Skarsgård). En cuanto tuvieron oportunidad, abandonaron el pueblo de Derry, en el estado de Maine, que tantos problemas les había ocasionado. Sin embargo, ahora, siendo adultos, parece que no pueden escapar de su pasado. Todos deberán enfrentarse de nuevo al temible payaso para descubrir si de verdad están preparados para superar sus traumas de la infancia.",
      "temporadas": "N/A",
      "reparto": "Bill Skarsgård, Jessica Chastain, Bill Hader, James McAvoy, Isaiah Mustafa, Jay Ryan",
      "trailer": "https://www.youtube.com/embed/hZeFeYSmBcg"
    },
    {
      "id": 24,
      "poster": "/posters/24.jpg",
      "titulo": "Pantera Negra",
      "categoria": "Película",
      "genero": "Acción, Aventura, Fantasía",
      "resumen": "T’Challa (Chadwick Boseman) regresa a su hogar en la apartada nación africana de Wakanda para servir como líder de su país. Tras suceder a su padre en el trono, pasa a convertirse en Pantera Negra, una sigilosa criatura de la noche, con agudos sentidos felinos y otras habilidades como súper fuerza e inteligencia, agilidad, estrategia o maestro del combate sin armas. Es bajo el liderazgo de T’Challa como Wakanda consigue convertirse en una de las naciones más ricas y tecnológicamente avanzadas del planeta.",
      "temporadas": "N/A",
      "reparto": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira, Martin Freeman, Daniel Kaluuya",
      "trailer": "https://www.youtube.com/embed/BE6inv8Xh4A"
    },
    {
      "id": 25,
      "poster": "/posters/25.jpg",
      "titulo": "Contra lo imposible (Ford versus Ferrari)",
      "categoria": "Película",
      "genero": "Drama, Historia, Aventura",
      "resumen": "Los ganadores del Premio de la Academia® Matt Damon y Christian Bale protagonizan CONTRA LO IMPOSIBLE, basada en la historia real del visionario diseñador americano de automóviles Carroll Shelby (Damon) y el intrépido piloto británico Ken Miles (Bale). Juntos construyen un nuevo coche de carreras para Ford Motor Company y así enfrentar a Enzo Ferrari en las 24 Horas de Le Mans en Francia en 1966.",
      "temporadas": "N/A",
      "reparto": "Christian Bale, Matt Damon, Caitriona Balfe, Josh Lucas, Noah Jupe, Jon Bernthal",
      "trailer": "https://www.youtube.com/embed/SOVb0-2g1Q0"
    },
    {
      "id": 26,
      "poster": "/posters/26.jpg",
      "titulo": "Centígrados",
      "categoria": "Película",
      "genero": "Drama, Suspenso, Intriga",
      "resumen": "Una joven pareja estadounidense viaja a las montañas árticas de Noruega. Después de detenerse durante una tormenta de nieve, se despiertan atrapados en su SUV, enterrados bajo capas de nieve y hielo.",
      "temporadas": "N/A",
      "reparto": "Génesis Rodríguez, Vincent Piazza, Benjamin Sokolow, Emily Bayiokos",
      "trailer": ""
    },
    {
      "id": 27,
      "poster": "/posters/27.jpg",
      "titulo": "DOOM: Aniquilación",
      "categoria": "Película",
      "genero": "Acción, Sci-Fi, Terror",
      "resumen": "Doom: Aniquilación sigue a un grupo de marines espaciales que han respondido a una llamada de alerta de una base en la luna marciana, solo para descubrir que ha sido tomada por criaturas demoníacas que amenazan con desatar el infierno en la tierra.",
      "temporadas": "N/A",
      "reparto": "Amy Manson, Luke Allen-Gale, Nina Bergman, Dominic Mafham, James Weber Brown, Lorina Kamburova",
      "trailer": "https://www.youtube.com/embed/nat3u3gAVLE"
    },
    {
      "id": 28,
      "poster": "/posters/28.jpg",
      "titulo": "Contagio",
      "categoria": "Película",
      "genero": "Drama, Suspenso, ¿Ficción?",
      "resumen": "De repente, sin saber cuál es su origen, aunque todo hace sospechar que comienza con el viaje de una norteamericana a un casino de Hong Kong, un virus mortal comienza a propagarse por todo el mundo. En pocos días, la enfermedad empieza a diezmar a la población. El contagio se produce por mero contacto entre los seres humanos. Un thriller realista y sin efectos especiales sobre los efectos de una epidemia.",
      "temporadas": "N/A",
      "reparto": "Marion Cotillard, Matt Damon, Laurence Fishburne, Jude Law, Kate Winslet, Jennifer Ehle, Gwyneth Paltrow",
      "trailer": "https://www.youtube.com/embed/4sYSyuuLk5g"
    },
    {
      "id": 29,
      "poster": "/posters/29.jpg",
      "titulo": "Viuda Negra",
      "categoria": "Película",
      "genero": "Drama, Acción, Aventura",
      "resumen": "Primera pelicula individual de la Viuda Negra en el universo cinematografico de Marvel, contando su historia desde que se inició como doble agente rusa, su niñez, sus misiones, y su actualidad, después de Avengers.",
      "temporadas": "N/A",
      "reparto": "Scarlett Johansson, Florence Pugh, David Harbour, O.T. Fagbenle, Rachel Weisz, William Hurt, Ray Winstone",
      "trailer": "https://www.youtube.com/embed/BIn8iANwEog"
    },
    {
      "id": 30,
      "poster": "/posters/30.jpg",
      "titulo": "The Martian",
      "categoria": "Película",
      "genero": "Drama, Sci-Fi, Aventura",
      "resumen": "Durante una misión a Marte de la nave tripulada Ares III, una fuerte tormenta se desata dando por desaparecido y muerto al astronauta Mark Watney (Matt Damon), sus compañeros toman la decisión de irse pero él ha sobrevivido. Está solo y sin apenas recursos en el planeta. Con muy pocos medios deberá recurrir a sus conocimientos, su sentido del humor y un gran instinto de supervivencia para lograr sobrevivir y comunicar a la Tierra que todavía está vivo esperando que acudan en su rescate.",
      "temporadas": "N/A",
      "reparto": "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels, Michael Peña, Sean Bean, Kate Mara",
      "trailer": "https://www.youtube.com/embed/XvB58bCVfng"
    },
    {
      "id": 31,
      "poster": "/posters/31.jpg",
      "titulo": "Ex-Machina",
      "categoria": "Película",
      "genero": "Drama, Sci-Fi, Suspenso",
      "resumen": "Un programador multimillonario selecciona a Caleb, un joven empleado de su empresa, para que pase una semana en un lugar remoto con el objetivo de que participe en un test en el que estará involucrada su última creación: un robot-mujer en el que inteligencia artificial lo es todo.",
      "temporadas": "N/A",
      "reparto": "Alicia Vikander, Domhnall Gleeson, Oscar Isaac, Sonoya Mizuno, Corey Johnson, Claire Selby, Gana Bayarsaikhan",
      "trailer": "https://www.youtube.com/embed/XRYL5spvEcI"
    },
    {
      "id": 32,
      "poster": "/posters/32.jpg",
      "titulo": "Jurassic World",
      "categoria": "Película",
      "genero": "Suspenso, Aventura, Ficción",
      "resumen": "Veintidós años después de lo ocurrido en Jurassic Park, la isla Nublar ha sido transformada en un enorme parque temático, Jurassic Wold, con versiones «domesticadas» de algunos de los dinosaurios más conocidos. Cuando todo parece ir sobre ruedas y ser el negocio del siglo, un nuevo dinosaurio de especie desconocida, pues ha sido creado manipulando genéticamente su ADN, y que resulta ser mucho más inteligente de lo que se pensaba, se escapa de su recinto y comienza a causar estragos entre los visitantes del Parque.",
      "temporadas": "N/A",
      "reparto": "Bryce Dallas Howard, Chris Pratt, Irrfan Khan, Vincent D'Onofrio, Omar Sy, Nick Robinson, Judy Greer",
      "trailer": ""
    },
    {
      "id": 33,
      "poster": "/posters/33.jpg",
      "titulo": "Soy leyenda",
      "categoria": "Película",
      "genero": "Drama, Terror, Ficción",
      "resumen": "Años después de que una plaga mate a la mayoría de la humanidad y transforme al resto en monstruos, el único superviviente en la ciudad de Nueva York lucha valientemente para encontrar una cura.",
      "temporadas": "N/A",
      "reparto": "Will Smith, Alice Braga, Charlie Tahan, Dash Mihok, Salli Richardson-Whitfield, Willow Smith, Emma Thompson",
      "trailer": "https://www.youtube.com/embed/dtKMEAXyPkg"
    },
    {
      "id": 34,
      "poster": "/posters/34.jpg",
      "titulo": "El primer hombre en la luna",
      "categoria": "Película",
      "genero": "Drama, Hechos veríficos",
      "resumen": "Cuenta la historia de la misión de la NASA que llevó al primer hombre a la luna, centrada en Neil Armstrong (interpretado por Ryan Gosling) y el periodo comprendido entre los años 1961 y 1969. Un relato en primera persona, basado en la novela de James R. Hansen, que explora el sacrificio y el precio que representó, tanto para Armstrong como para Estados Unidos, una de las misiones más peligrosas de la historia.",
      "temporadas": "N/A",
      "reparto": "Ryan Gosling, Claire Foy, Jason Clarke, Kyle Chandler, Corey Stoll, Patrick Fugit",
      "trailer": ""
    },
    {
      "id": 35,
      "poster": "/posters/35.jpg",
      "titulo": "Titanes del pacífico - La insurrección",
      "categoria": "Película",
      "genero": "Acción, Fantasía, Sci-Fi",
      "resumen": "Han pasado 10 años tras la primera invasión que sufrió la humanidad, pero la lucha aún no ha terminado. El planeta vuelve a ser asediado por los Kaiju, una raza de alienígenas colosales, que emergen desde un portal interdimensional con el objetivo de destruir a la raza humana. Ante esta nueva amenaza, los Jaegers, robots gigantes de guerra pilotados por dos personas para sobrellevar la inmensa carga neuronal que conlleva manipularlos, ya no están a la altura de lo que se les viene encima. Será entonces cuando los supervivientes de la primera invasión, además de nuevos personajes como el hijo de Pentecost, tendrán que idear la manera de sorprender al enorme enemigo, apostando por nuevas estrategias defensivas y de ataque. Con la Tierra en ruinas e intentando reconstruirse, esta nueva batalla puede ser decisiva para el futuro.",
      "temporadas": "N/A",
      "reparto": "John Boyega, Scott Eastwood, Cailee Spaeny, Jing Tian, Rinko Kikuchi, Burn Gorman",
      "trailer": ""
    }
  ];
  try {
    // Inserta las películas en la base de datos
    for (const pelicula of peliculas) {
      // eslint-disable-next-line no-unused-vars
      const { categoria, genero, reparto, ...datosPelicula } = pelicula;

      // Busca o crea la categoría
      const [CategoriasInstance] = await Categoria.findOrCreate({
        where: { nombre: categoria }
      });
      // Busca o crea los géneros y asócialos a la película
      const GenerosInstances = await Promise.all(genero.split(',').map((nombreGenero) => Genero.findOrCreate({
        where: { nombre: nombreGenero }
      })));

      // Crea la película y asocia la categoría y los géneros
      console.log(CategoriasInstance.dataValues.id);
      const peliculaInstance = await Catalogo.create({
        ...datosPelicula,
        categoria_id: CategoriasInstance.dataValues.id
      });

      await peliculaInstance.addGeneros(GenerosInstances.map((g) => g[0]));

      // Reparto (actores y actrices)
      const actoresReparto = reparto.split(', ').map((nombreActor) => ({
        nombre_completo: nombreActor,
        es_principal: true
      }));

      // Crea o encuentra a los actores y actrices
      const ActoresInstances = await Promise.all(actoresReparto.map(async (actor) => {
        const [ActorInstance] = await ActorActriz.findOrCreate({
          where: { nombre_completo: actor.nombre_completo },
          defaults: actor
        });
        return ActorInstance;
      }));

      // Asocia a los actores y actrices con la película
      await peliculaInstance.addActores(ActoresInstances);
    }

    console.log('Películas cargadas con éxito.');
  } catch (error) {
    console.error('Error al cargar las películas:', error);
  }
}
cargarPeliculas();