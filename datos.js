// ============================================================
// DATOS DE AVENTURA BÍBLICA
// 8 MÓDULOS - 10 DATOS CADA UNO
// ============================================================


// ============================================================
// MÓDULO 1: PERSONAJES BÍBLICOS
// ============================================================

const personajes = [
  {
    nombre: "Adán y Eva",
    descripcion: "Los primeros humanos. Dios los creó y los puso en el Huerto del Edén. Desobedecieron al comer del fruto prohibido."
  },
  {
    nombre: "Noé",
    descripcion: "El constructor del arca. Metió a su familia y una pareja de cada animal. Estuvo 40 días y 40 noches de lluvia."
  },
  {
    nombre: "Abraham",
    descripcion: "El padre de la fe. Obedeció a Dios sin saber a dónde iba. Dios lo llamó 'amigo de Dios'."
  },
  {
    nombre: "Moisés",
    descripcion: "El libertador de Israel. Dios lo llamó desde una zarza ardiente. Recibió los Diez Mandamientos en el Monte Sinaí."
  },
  {
    nombre: "David",
    descripcion: "El pastor que llegó a ser rey. Venció al gigante Goliat con una honda y cinco piedras."
  },
  {
    nombre: "Jonás",
    descripcion: "El profeta que huyó. Un gran pez lo tragó. Estuvo 3 días y 3 noches dentro del pez."
  },
  {
    nombre: "Daniel",
    descripcion: "El profeta valiente. Fue arrojado al foso de los leones, pero Dios lo protegió."
  },
  {
    nombre: "Jesús",
    descripcion: "El Hijo de Dios y Salvador. Nació en Belén, creció en Nazaret. Murió en la cruz y resucitó al tercer día."
  },
  {
    nombre: "Pedro",
    descripcion: "El pescador que se convirtió en apóstol. Negó a Jesús tres veces, pero luego fue restaurado."
  },
  {
    nombre: "Pablo",
    descripcion: "El perseguidor que se convirtió. Escribió 13 cartas del Nuevo Testamento."
  },
  {
  nombre: "Caín",
  descripcion: "El primer hijo de Adán y Eva. Era agricultor. Mató a su hermano Abel por celos. Fue el primer homicida de la historia."
},
{
  nombre: "Abel",
  descripcion: "El segundo hijo de Adán y Eva. Era pastor de ovejas. Trajo a Dios lo mejor de su rebaño. Jesús lo llamó 'justo'."
},
{
  nombre: "Enoc",
  descripcion: "Un hombre que caminó con Dios. Vivió 365 años. No murió, Dios se lo llevó directamente al cielo."
},
{
  nombre: "Sara",
  descripcion: "La esposa de Abraham y madre de Isaac. Era estéril y anciana. Su nombre significa 'princesa'."
},
{
  nombre: "Isaac",
  descripcion: "El hijo de la promesa. Nació cuando Abraham tenía 100 años. Su nombre significa 'risa'."
},
{
  nombre: "José (El soñador)",
  descripcion: "El hijo favorito de Jacob. Fue vendido como esclavo a Egipto y llegó a ser gobernador. Salvó a su familia del hambre."
},
{
  nombre: "Josué",
  descripcion: "El sucesor de Moisés. Guio al pueblo a la Tierra Prometida. Dios detuvo el sol hasta que Israel ganó la batalla."
},
{
  nombre: "Sansón",
  descripcion: "El hombre más fuerte. Su cabello era el secreto de su fuerza. En su último acto, derribó un templo filisteo."
},
{
  nombre: "Samuel",
  descripcion: "Profeta y juez de Israel. Su madre Ana lo dedicó a Dios. Ungió a David como rey."
},
{
  nombre: "Malaquías",
  descripcion: "El último profeta del Antiguo Testamento. Después de él, hubo 400 años de silencio profético."
},
{
  nombre: "Esther",
  descripcion: "La reina valiente. Arriesgó su vida para salvar a los judíos. Salvó a su pueblo de la destrucción."
},
{
  nombre: "Salomón",
  descripcion: "El rey más sabio. Construyó el Templo de Jerusalén. Reinas de tierras lejanas venían a escucharlo."
},
{
  nombre: "Goliat",
  descripcion: "El gigante filisteo. Medía casi 3 metros. Fue derrotado por David con una honda."
},
{
  nombre: "Jonatán",
  descripcion: "El mejor amigo de David. Hijo del rey Saúl. Su amistad es un ejemplo de lealtad."
},
{
  nombre: "Elías",
  descripcion: "El profeta del fuego. Desafió a los profetas de Baal. No murió, fue llevado al cielo en un torbellino."
},
{
  nombre: "Judas (Judá)",
  descripcion: "El hijo de Jacob. Antepasado de la tribu de Judá. Jacob profetizó que el cetro no se apartaría de Judá."
},
{
  nombre: "Santiago (el mayor)",
  descripcion: "Apóstol de Jesús. Hijo de Zebedeo y hermano de Juan. Fue el primer apóstol mártir."
},
{
  nombre: "Juan",
  descripcion: "El discípulo amado. Escribió el Evangelio de Juan y el Apocalipsis. Fue el único apóstol al pie de la cruz."
},
{
  nombre: "Mateo",
  descripcion: "El publicano que se convirtió en apóstol. Era cobrador de impuestos. Escribió el primer Evangelio."
},
{
  nombre: "Lucas",
  descripcion: "El médico evangelista. Compañero de Pablo. Su Evangelio es el más detallado sobre el nacimiento de Jesús."
},
{
  nombre: "Simón el Zelote",
  descripcion: "El apóstol celoso. Conocido como 'Simón el Zelote'. Fue uno de los doce apóstoles elegidos por Jesús."
},
{
  nombre: "Judas Iscariote",
  descripcion: "El apóstol que traicionó a Jesús. Era el tesorero del grupo. Entregó a Jesús por 30 piezas de plata."
},
{
  nombre: "Saúl",
  descripcion: "El primer rey de Israel. Alto y fuerte. David tocaba el arpa para calmarlo."
},
{
  nombre: "Reina de Saba",
  descripcion: "La reina curiosa. Viajó para conocer la sabiduría de Salomón. Jesús la mencionó como ejemplo."
},
{
  nombre: "Ezequías",
  descripcion: "El rey que oró por sanidad. Dios le dio 15 años más de vida. Dios hizo retroceder la sombra del reloj."
},
{
  nombre: "Josías",
  descripcion: "El rey niño. Comenzó a reinar a los 8 años. Encontraron el Libro de la Ley y lo leyó al pueblo."
},
{
  nombre: "Atalía",
  descripcion: "La reina malvada. Única mujer que reinó en Judá. Fue destronada y el joven Joás fue hecho rey."
},
{
  nombre: "Gedeón",
  descripcion: "El juez valiente. Con solo 300 hombres venció a los madianitas. Puso un vellón para confirmar la voluntad de Dios."
},
{
  nombre: "Débora",
  descripcion: "La jueza y profetisa. Única mujer jueza de Israel. Su cántico de victoria está en Jueces 5."
},
{
  nombre: "Rut",
  descripcion: "La extranjera fiel. Se quedó con su suegra Noemí. Fue bisabuela del rey David y ancestro de Jesús."
},
{
  nombre: "Noemí",
  descripcion: "La suegra de Rut. Perdió a su esposo y a sus hijos en Moab. Su nombre significa 'agradable'."
},
{
  nombre: "Ana",
  descripcion: "La madre de Samuel. Oró con tanto fervor que Elí pensó que estaba borracha. Su cántico es similar al de María."
},
{
  nombre: "Elí",
  descripcion: "El sacerdote que crió a Samuel. Sirvió en el templo de Silo. Murió al saber que el arca había sido capturada."
},
{
  nombre: "Natán",
  descripcion: "El profeta que confrontó a David. Le contó la parábola de la ovejita. Dios le reveló el pacto davídico."
},
{
  nombre: "Eliseo",
  descripcion: "El sucesor de Elías. Pidió doble porción del espíritu de Elías. Sus milagros son más numerosos que los de Elías."
},
{
  nombre: "Isaías",
  descripcion: "El profeta evangelista. Profetizó sobre el nacimiento virginal. Vio el trono de Dios y dijo 'Heme aquí, envíame a mí'."
},
{
  nombre: "Jeremías",
  descripcion: "El profeta llorón. Llamado desde joven. Dios le dijo: 'Antes que te formase en el vientre te conocí'."
},
{
  nombre: "Ezequiel",
  descripcion: "El profeta de las visiones. Tuvo visiones impresionantes. Fue llevado cautivo a Babilonia."
},
{
  nombre: "Oseas",
  descripcion: "El profeta del amor fiel. Dios le dijo que se casara con una mujer infiel. Su historia es ejemplo del amor incondicional."
},
{
  nombre: "Joel",
  descripcion: "El profeta de Pentecostés. Profetizó: 'Derramaré mi Espíritu sobre toda carne'. Pedro citó esta profecía."
},
{
  nombre: "Amós",
  descripcion: "El pastor profeta. Era un simple pastor de ovejas y cultivador de higos. 'Corra el juicio como las aguas'."
},
{
  nombre: "Miqueas",
  descripcion: "El profeta de Belén. Anunció que el Mesías nacería en Belén. Su profecía se cumplió en Mateo 2."
},
{
  nombre: "Habacuc",
  descripcion: "El profeta que preguntó. Le preguntó a Dios por qué permitía la injusticia. 'El justo por su fe vivirá'."
},
{
  nombre: "Sofonías",
  descripcion: "El profeta del día de Jehová. Anunció juicio y restauración. Habla del 'remanente' que Dios guardará."
},
{
  nombre: "Hageo",
  descripcion: "El profeta de la reconstrucción. Animó al pueblo a reconstruir el templo. '¿Es para vosotros tiempo de habitar en vuestras casas?'."
},
{
  nombre: "Zacarías",
  descripcion: "El profeta de las visiones. Profetizó sobre la entrada de Jesús en Jerusalén. Su nombre significa 'Dios se acuerda'."
},
{
  nombre: "Herodes el Grande",
  descripcion: "El rey celoso. Mandó matar a todos los niños menores de 2 años en Belén. José y María huyeron a Egipto."
},
{
  nombre: "Juan el Bautista",
  descripcion: "El precursor de Jesús. Predicó en el desierto, bautizó a Jesús. Jesús dijo que no había nacido mayor profeta que él."
},
{
  nombre: "Elisabet",
  descripcion: "La madre de Juan el Bautista. Era estéril y anciana. Cuando María la visitó, el bebé saltó en su vientre."
},
{
  nombre: "Zacarías (padre de Juan)",
  descripcion: "El padre de Juan el Bautista. Era sacerdote. Quedó mudo hasta que nació Juan."
},
{
  nombre: "María (madre de Jesús)",
  descripcion: "La madre del Salvador. Una joven humilde de Nazaret. Dijo: 'He aquí la sierva del Señor'."
},
{
  nombre: "José (esposo de María)",
  descripcion: "El padre terrenal de Jesús. Era carpintero. Un ángel le dijo en sueños que no temiera recibir a María."
},
{
  nombre: "Poncio Pilato",
  descripcion: "El gobernador romano. Lavó sus manos y entregó a Jesús. Preguntó: '¿Qué es la verdad?'."
},
{
  nombre: "Barrabás",
  descripcion: "El prisionero liberado. Era un ladrón y asesino. Su liberación muestra el intercambio: Jesús murió por nosotros."
},
{
  nombre: "Simón de Cirene",
  descripcion: "El hombre que cargó la cruz. Venía del campo. Sus hijos Alejandro y Rufo son mencionados en Marcos 15:21."
},
{
  nombre: "José de Arimatea",
  descripcion: "El que sepultó a Jesús. Era un hombre rico y discípulo secreto. Cumplió la profecía de Isaías 53:9."
},
{
  nombre: "Nicodemo",
  descripcion: "El fariseo curioso. Vino de noche a preguntar a Jesús. Llevó mirra y áloe para sepultar a Jesús."
},
{
  nombre: "María Magdalena",
  descripcion: "La primera testigo de la resurrección. Jesús echó de ella siete demonios. Jesús la llamó por su nombre en el huerto."
},
{
  nombre: "Marta y María (hermanas de Lázaro)",
  descripcion: "Las amigas de Jesús. Marta era activa y servicial; María se sentaba a los pies de Jesús. Jesús lloró cuando Lázaro murió."
},
{
  nombre: "Lázaro",
  descripcion: "El amigo resucitado. Hermano de Marta y María. Estuvo muerto 4 días y Jesús lo resucitó."
},
{
  nombre: "Zaqueo",
  descripcion: "El publicano bajito. Jefe de los cobradores de impuestos en Jericó. Jesús dijo: 'Hoy ha venido la salvación a esta casa'."
},
{
  nombre: "El ciego Bartimeo",
  descripcion: "El mendigo ciego. Clamó a Jesús y fue sanado. Jesús le dijo: 'Tu fe te ha salvado'."
},
{
  nombre: "La mujer samaritana",
  descripcion: "La que encontró el agua viva. Jesús habló con ella en el pozo de Jacob. Ella dejó su cántaro y testificó a todo el pueblo."
},
{
  nombre: "El buen samaritano",
  descripcion: "El personaje de la parábola. Ayudó a un hombre herido. Jesús dijo: 'Ve y haz tú lo mismo'."
},
{
  nombre: "El hijo pródigo",
  descripcion: "El personaje de la parábola. Se fue de casa, gastó todo, volvió arrepentido. El padre representa a Dios que perdona."
}
  
];


// ============================================================
// MÓDULO 2: GEOGRAFÍA BÍBLICA
// ============================================================

const preguntasGeografia = [
  {
    pregunta: "¿En qué ciudad nació Jesús?",
    opciones: [
      "Nazaret",
      "Belén de Judea",
      "Jerusalén"
    ],
    correcta: "Belén de Judea"
  },

  {
    pregunta: "¿De qué ciudad era Jesús, donde se crio?",
    opciones: [
      "Belén",
      "Capernaúm",
      "Nazaret"
    ],
    correcta: "Nazaret"
  },

  {
    pregunta: "¿Cuál era la ciudad principal donde vivió Jesús en Galilea?",
    opciones: [
      "Capernaúm",
      "Jericó",
      "Betania"
    ],
    correcta: "Capernaúm"
  },

  {
    pregunta: "¿Qué mar se abrió para que Israel pasara al salir de Egipto?",
    opciones: [
      "Mar de Galilea",
      "Mar Rojo",
      "Mar Mediterráneo"
    ],
    correcta: "Mar Rojo"
  },

  {
    pregunta: "¿En qué río fue bautizado Jesús?",
    opciones: [
      "Río Nilo",
      "Río Éufrates",
      "Río Jordán"
    ],
    correcta: "Río Jordán"
  },

  {
    pregunta: "¿En qué monte Dios le dio a Moisés los Diez Mandamientos?",
    opciones: [
      "Monte Carmelo",
      "Monte Sinaí",
      "Monte Hermón"
    ],
    correcta: "Monte Sinaí"
  },

  {
    pregunta: "¿En qué monte desafió Elías a los profetas de Baal?",
    opciones: [
      "Monte Carmelo",
      "Monte Sinaí",
      "Monte Hermón"
    ],
    correcta: "Monte Carmelo"
  },

  {
    pregunta: "¿A qué país huyó José y María con Jesús?",
    opciones: [
      "Egipto",
      "Babilonia",
      "Asiria"
    ],
    correcta: "Egipto"
  },

  {
    pregunta: "¿A qué ciudad fue enviado Jonás a predicar?",
    opciones: [
      "Nínive",
      "Babilonia",
      "Jerusalén"
    ],
    correcta: "Nínive"
  },

  {
    pregunta: "¿Dónde convirtió Jesús el agua en vino?",
    opciones: [
      "Caná de Galilea",
      "Samaria",
      "Betania"
    ],
    correcta: "Caná de Galilea"
  },
  {
  pregunta: "¿Qué ciudad fue conquistada por Israel cuando sus muros cayeron tras marchar 7 días?",
  opciones: [
    "Jericó",
    "Jerusalén",
    "Belén"
  ],
  correcta: "Jericó"
},
{
  pregunta: "¿De qué región era la mujer que habló con Jesús junto al pozo?",
  opciones: [
    "Galilea",
    "Samaria",
    "Judea"
  ],
  correcta: "Samaria"
},
{
  pregunta: "¿Cuál era la ciudad donde vivían Marta, María y Lázaro, amigos de Jesús?",
  opciones: [
    "Betania",
    "Capernaúm",
    "Nazaret"
  ],
  correcta: "Betania"
},
{
  pregunta: "¿Qué río cruzó el pueblo de Israel para entrar a la Tierra Prometida?",
  opciones: [
    "Río Nilo",
    "Río Jordán",
    "Río Éufrates"
  ],
  correcta: "Río Jordán"
},
{
  pregunta: "¿Cuál es el río más largo de la región, que nace en el monte Hermón?",
  opciones: [
    "Río Nilo",
    "Río Jordán",
    "Río Éufrates"
  ],
  correcta: "Río Jordán"
},
{
  pregunta: "¿En qué lago (o mar) caminó Jesús sobre las aguas?",
  opciones: [
    "Mar Rojo",
    "Mar de Galilea",
    "Mar Mediterráneo"
  ],
  correcta: "Mar de Galilea"
},
{
  pregunta: "¿Qué desierto cruzó el pueblo de Israel durante 40 años antes de llegar a la Tierra Prometida?",
  opciones: [
    "Desierto de Sinaí",
    "Desierto de Judea",
    "Desierto de Negev"
  ],
  correcta: "Desierto de Sinaí"
},
{
  pregunta: "¿Cuál es el monte más alto de la región de Israel?",
  opciones: [
    "Monte Sinaí",
    "Monte Carmelo",
    "Monte Hermón"
  ],
  correcta: "Monte Hermón"
},
{
  pregunta: "¿De qué país salió Abraham por mandato de Dios?",
  opciones: [
    "Egipto",
    "Ur de los Caldeos",
    "Canaán"
  ],
  correcta: "Ur de los Caldeos"
},
{
  pregunta: "¿Cuál era el gran río que marcaba el límite noreste de la Tierra Prometida?",
  opciones: [
    "Río Nilo",
    "Río Jordán",
    "Río Éufrates"
  ],
  correcta: "Río Éufrates"
}
];


// ============================================================
// MÓDULO 3: CANON BÍBLICO
// ============================================================

const canon = [
  {
    grupo: "La Ley",
    libros: "Génesis, Éxodo, Levítico, Números, Deuteronomio",
    cantidad: 5
  },

  {
    grupo: "Históricos",
    libros: "Josué, Jueces, Rut, 1 Samuel, 2 Samuel, 1 Reyes, 2 Reyes, 1 Crónicas, 2 Crónicas, Esdras, Nehemías, Esther",
    cantidad: 12
  },

  {
    grupo: "Poéticos",
    libros: "Job, Salmos, Proverbios, Eclesiastés, Cantares",
    cantidad: 5
  },

  {
    grupo: "Profetas Mayores",
    libros: "Isaías, Jeremías, Lamentaciones, Ezequiel, Daniel",
    cantidad: 5
  },

  {
    grupo: "Profetas Menores",
    libros: "Oseas, Joel, Amós, Obadías, Jonás, Miqueas, Nahúm, Habacuc, Sofonías, Hageo, Zacarías, Malaquías",
    cantidad: 12
  },

  {
    grupo: "Evangelios",
    libros: "Mateo, Marcos, Lucas, Juan",
    cantidad: 4
  },

  {
    grupo: "Historia",
    libros: "Hechos",
    cantidad: 1
  },

  {
    grupo: "Cartas de Pablo",
    libros: "Romanos, 1 Corintios, 2 Corintios, Gálatas, Efesios, Filipenses, Colosenses, 1 Tesalonicenses, 2 Tesalonicenses, 1 Timoteo, 2 Timoteo, Tito, Filemón",
    cantidad: 13
  },

  {
    grupo: "Cartas Generales",
    libros: "Hebreos, Santiago, 1 Pedro, 2 Pedro, 1 Juan, 2 Juan, 3 Juan, Judas",
    cantidad: 8
  },

  {
    grupo: "Profético",
    libros: "Apocalipsis",
    cantidad: 1
  }
];


// ============================================================
// MÓDULO 4: EVANGELIO DE MATEO
// ============================================================

const preguntasMateo = [
  {
    pregunta: "¿De quién es hijo Jesucristo según Mateo 1?",
    opciones: [
      "Hijo de Moisés",
      "Hijo de David, hijo de Abraham",
      "Hijo de José"
    ],
    correcta: "Hijo de David, hijo de Abraham"
  },

  {
    pregunta: "¿Qué significa el nombre 'Emanuel'?",
    opciones: [
      "Dios con nosotros",
      "Salvador",
      "Rey de Reyes"
    ],
    correcta: "Dios con nosotros"
  },

  {
    pregunta: "¿Qué regalos le ofrecieron los magos a Jesús?",
    opciones: [
      "Pan, vino y aceite",
      "Oro, incienso y mirra",
      "Ovejas y cabras"
    ],
    correcta: "Oro, incienso y mirra"
  },

  {
    pregunta: "¿Qué hizo Jesús con cinco panes y dos peces?",
    opciones: [
      "Los guardó",
      "Alimentó a más de cinco mil personas",
      "Los vendió"
    ],
    correcta: "Alimentó a más de cinco mil personas"
  },

  {
    pregunta: "¿Cómo identificó Judas a Jesús?",
    opciones: [
      "Con una seña",
      "Con un beso",
      "Con una carta"
    ],
    correcta: "Con un beso"
  },

  {
    pregunta: "¿Qué le dijo Jesús a Pedro cuando usó la espada?",
    opciones: [
      "'Bien hecho'",
      "'Vuelve tu espada a su lugar'",
      "'Defiéndeme'"
    ],
    correcta: "'Vuelve tu espada a su lugar'"
  },

  {
    pregunta: "¿Quién condenó a Jesús a morir en la cruz?",
    opciones: [
      "Herodes",
      "Poncio Pilato",
      "El sumo sacerdote"
    ],
    correcta: "Poncio Pilato"
  },

  {
    pregunta: "¿Qué dijo Jesús que somos para el mundo?",
    opciones: [
      "La sal de la tierra y la luz del mundo",
      "El agua y el pan",
      "Los pastores y las ovejas"
    ],
    correcta: "La sal de la tierra y la luz del mundo"
  },

  {
    pregunta: "¿Sobre qué edificó su casa el sabio?",
    opciones: [
      "Sobre la arena",
      "Sobre la roca",
      "Sobre el agua"
    ],
    correcta: "Sobre la roca"
  },

  {
    pregunta: "¿Qué respondió Pedro cuando Jesús preguntó '¿Quién decís que soy yo?'",
    opciones: [
      "'Eres un profeta'",
      "'Tú eres el Cristo, el Hijo del Dios viviente'",
      "'Eres Juan el Bautista'"
    ],
    correcta: "'Tú eres el Cristo, el Hijo del Dios viviente'"
  },
  {
  pregunta: "¿Cuántas generaciones hay desde Abraham hasta Cristo?",
  opciones: [
    "40 generaciones",
    "42 generaciones",
    "50 generaciones"
  ],
  correcta: "42 generaciones"
},
{
  pregunta: "¿Qué le dijo el ángel a José en sueños sobre el hijo de María?",
  opciones: [
    "Que huyera a Egipto",
    "Que le pusiera por nombre Jesús",
    "Que lo llevara al templo"
  ],
  correcta: "Que le pusiera por nombre Jesús"
},
{
  pregunta: "¿Dónde nació Jesús?",
  opciones: [
    "Nazaret",
    "Belén de Judea",
    "Jerusalén"
  ],
  correcta: "Belén de Judea"
},
{
  pregunta: "¿Por qué José y María huyeron a Egipto?",
  opciones: [
    "Porque había hambre",
    "Porque Herodes buscaría al niño para matarlo",
    "Porque querían visitar familiares"
  ],
  correcta: "Porque Herodes buscaría al niño para matarlo"
},
{
  pregunta: "¿Qué hizo el rey Herodes cuando se dio cuenta de que los magos no volvieron?",
  opciones: [
    "Se enojó y se fue",
    "Mandó matar a todos los niños menores de dos años en Belén",
    "Buscó a Jesús por todo el mundo"
  ],
  correcta: "Mandó matar a todos los niños menores de dos años en Belén"
},
{
  pregunta: "¿A quiénes llamó Jesús 'bienaventurados'?",
  opciones: [
    "A los ricos y poderosos",
    "A los pobres de espíritu, los que lloran, los mansos, los misericordiosos",
    "A los sacerdotes y fariseos"
  ],
  correcta: "A los pobres de espíritu, los que lloran, los mansos, los misericordiosos"
},
{
  pregunta: "¿Qué hizo Pedro cuando Jesús caminó sobre el agua?",
  opciones: [
    "Se quedó en la barca",
    "Caminó también sobre el agua, pero se hundió por dudar",
    "Nadó hasta Jesús"
  ],
  correcta: "Caminó también sobre el agua, pero se hundió por dudar"
},
{
  pregunta: "En la parábola del sembrador, ¿dónde cayó la semilla que dio fruto?",
  opciones: [
    "En el camino",
    "Entre piedras",
    "En buena tierra"
  ],
  correcta: "En buena tierra"
},
{
  pregunta: "¿Qué le prometió Jesús a Pedro?",
  opciones: [
    "Que sería el mayor",
    "Que le daría las llaves del reino de los cielos",
    "Que estaría a su derecha"
  ],
  correcta: "Que le daría las llaves del reino de los cielos"
},
{
  pregunta: "¿Qué pasó en el Monte de la Transfiguración?",
  opciones: [
    "Jesús oró toda la noche",
    "El rostro de Jesús resplandeció como el sol y aparecieron Moisés y Elías",
    "Jesús fue bautizado"
  ],
  correcta: "El rostro de Jesús resplandeció como el sol y aparecieron Moisés y Elías"
},
{
  pregunta: "¿Qué hizo Pedro cuando arrestaron a Jesús?",
  opciones: [
    "Huyó",
    "Sacó su espada y le cortó la oreja a un siervo del sumo sacerdote",
    "Se escondió"
  ],
  correcta: "Sacó su espada y le cortó la oreja a un siervo del sumo sacerdote"
},
{
  pregunta: "¿Qué les dijo Jesús a sus discípulos antes de ascender al cielo?",
  opciones: [
    "'Vayan y descansen'",
    "'Id y haced discípulos a todas las naciones'",
    "'Esperen en Jerusalén'"
  ],
  correcta: "'Id y haced discípulos a todas las naciones'"
}
];


// ============================================================
// MÓDULO 5: PARÁBOLAS Y MILAGROS
// ============================================================

const parabolas = [
  // ========== PARÁBOLAS ==========
  {
    tipo: "Parábola",
    titulo: "La casa sobre la roca y la arena",
    cita: "Mateo 7:24-27",
    ensenanza: "Obedecer a Jesús nos hace firmes."
  },
  {
    tipo: "Parábola",
    titulo: "El remiendo de paño nuevo",
    cita: "Mateo 9:16",
    ensenanza: "No mezclar lo nuevo de Jesús con lo viejo."
  },
  {
    tipo: "Parábola",
    titulo: "El vino nuevo en odres viejos",
    cita: "Mateo 9:17",
    ensenanza: "La enseñanza nueva requiere corazón nuevo."
  },
  {
    tipo: "Parábola",
    titulo: "El sembrador",
    cita: "Mateo 13:3-23; Marcos 4:3-20; Lucas 8:4-15",
    ensenanza: "La palabra da fruto en buen corazón."
  },
  {
    tipo: "Parábola",
    titulo: "El trigo y la cizaña",
    cita: "Mateo 13:24-30",
    ensenanza: "Dios separará buenos de malos al final."
  },
  {
    tipo: "Parábola",
    titulo: "El grano de mostaza",
    cita: "Mateo 13:31-32; Marcos 4:30-32; Lucas 13:18-19",
    ensenanza: "El reino crece de lo pequeño a lo grande."
  },
  {
    tipo: "Parábola",
    titulo: "La levadura",
    cita: "Mateo 13:33",
    ensenanza: "El reino transforma desde adentro."
  },
  {
    tipo: "Parábola",
    titulo: "El tesoro escondido",
    cita: "Mateo 13:44",
    ensenanza: "El reino vale más que todo."
  },
  {
    tipo: "Parábola",
    titulo: "La perla de gran precio",
    cita: "Mateo 13:45-46",
    ensenanza: "Vale la pena dejarlo todo por el reino."
  },
  {
    tipo: "Parábola",
    titulo: "La red barredera",
    cita: "Mateo 13:47-50",
    ensenanza: "Habrá separación final entre buenos y malos."
  },
  {
    tipo: "Parábola",
    titulo: "La oveja perdida",
    cita: "Mateo 18:12-14; Lucas 15:3-7",
    ensenanza: "Dios busca al que se pierde."
  },
  {
    tipo: "Parábola",
    titulo: "El siervo que no perdonó",
    cita: "Mateo 18:23-35",
    ensenanza: "Perdonar como Dios nos perdona."
  },
  {
    tipo: "Parábola",
    titulo: "Los obreros de la viña",
    cita: "Mateo 20:1-16",
    ensenanza: "Dios es justo y generoso."
  },
  {
    tipo: "Parábola",
    titulo: "Los dos hijos",
    cita: "Mateo 21:28-32",
    ensenanza: "La obediencia importa más que las palabras."
  },
  {
    tipo: "Parábola",
    titulo: "Los labradores malvados",
    cita: "Mateo 21:33-46; Marcos 12:1-12; Lucas 20:9-18",
    ensenanza: "Rechazar a Jesús tiene consecuencias."
  },
  {
    tipo: "Parábola",
    titulo: "La fiesta de bodas",
    cita: "Mateo 22:1-14",
    ensenanza: "Dios invita a todos; hay que estar preparados."
  },
  {
    tipo: "Parábola",
    titulo: "Las diez vírgenes",
    cita: "Mateo 25:1-13",
    ensenanza: "Estar preparados para la venida de Jesús."
  },
  {
    tipo: "Parábola",
    titulo: "Los talentos",
    cita: "Mateo 25:14-30",
    ensenanza: "Usar bien lo que Dios nos da."
  },
  {
    tipo: "Parábola",
    titulo: "El juicio de las naciones",
    cita: "Mateo 25:31-46",
    ensenanza: "Servir a otros es servir a Jesús."
  },
  {
    tipo: "Parábola",
    titulo: "La semilla que crece por sí sola",
    cita: "Marcos 4:26-29",
    ensenanza: "El reino crece con o sin nuestro esfuerzo."
  },
  {
    tipo: "Parábola",
    titulo: "El portero vigilante",
    cita: "Marcos 13:34-37",
    ensenanza: "Estar atentos a la venida de Jesús."
  },
  {
    tipo: "Parábola",
    titulo: "Los dos deudores",
    cita: "Lucas 7:41-47",
    ensenanza: "El que mucho se le perdona, mucho ama."
  },
  {
    tipo: "Parábola",
    titulo: "El buen samaritano",
    cita: "Lucas 10:30-37",
    ensenanza: "Amar al prójimo sin importar quién sea."
  },
  {
    tipo: "Parábola",
    titulo: "El amigo a medianoche",
    cita: "Lucas 11:5-8",
    ensenanza: "La oración persistente recibe respuesta."
  },
  {
    tipo: "Parábola",
    titulo: "El rico insensato",
    cita: "Lucas 12:16-21",
    ensenanza: "No acumular tesoros en la tierra."
  },
  {
    tipo: "Parábola",
    titulo: "El siervo vigilante",
    cita: "Lucas 12:35-38",
    ensenanza: "Estar preparados para la venida de Jesús."
  },
  {
    tipo: "Parábola",
    titulo: "La higuera estéril",
    cita: "Lucas 13:6-9",
    ensenanza: "Dios da oportunidades para dar fruto."
  },
  {
    tipo: "Parábola",
    titulo: "La puerta cerrada",
    cita: "Lucas 13:24-30",
    ensenanza: "Esforzarse por entrar al reino."
  },
  {
    tipo: "Parábola",
    titulo: "La gran cena",
    cita: "Lucas 14:16-24",
    ensenanza: "Dios invita a todos a su banquete."
  },
  {
    tipo: "Parábola",
    titulo: "La torre y la guerra",
    cita: "Lucas 14:28-33",
    ensenanza: "Calcular el costo de seguir a Jesús."
  },
  {
    tipo: "Parábola",
    titulo: "La moneda perdida",
    cita: "Lucas 15:8-10",
    ensenanza: "Dios busca al perdido hasta encontrarlo."
  },
  {
    tipo: "Parábola",
    titulo: "El hijo pródigo",
    cita: "Lucas 15:11-32",
    ensenanza: "El amor del Padre que perdona al que vuelve."
  },
  {
    tipo: "Parábola",
    titulo: "El mayordomo infiel",
    cita: "Lucas 16:1-8",
    ensenanza: "Usar bien los recursos."
  },
  {
    tipo: "Parábola",
    titulo: "El rico y Lázaro",
    cita: "Lucas 16:19-31",
    ensenanza: "La riqueza terrenal no salva."
  },
  {
    tipo: "Parábola",
    titulo: "El siervo inútil",
    cita: "Lucas 17:7-10",
    ensenanza: "Servir con humildad."
  },
  {
    tipo: "Parábola",
    titulo: "La viuda y el juez injusto",
    cita: "Lucas 18:1-8",
    ensenanza: "Orar sin desmayar."
  },
  {
    tipo: "Parábola",
    titulo: "El fariseo y el publicano",
    cita: "Lucas 18:9-14",
    ensenanza: "La humildad en la oración."
  },
  {
    tipo: "Parábola",
    titulo: "Las diez minas",
    cita: "Lucas 19:11-27",
    ensenanza: "Ser fieles con lo que Dios nos da."
  },
  {
    tipo: "Parábola",
    titulo: "El buen pastor",
    cita: "Juan 10:1-18",
    ensenanza: "Jesús da su vida por las ovejas."
  },
  {
    tipo: "Parábola",
    titulo: "La vid y los sarmientos",
    cita: "Juan 15:1-8",
    ensenanza: "Permanecer en Jesús para dar fruto."
  },
  {
    tipo: "Parábola",
    titulo: "La higuera",
    cita: "Mateo 24:32-33; Marcos 13:28-29; Lucas 21:29-31",
    ensenanza: "Aprender a discernir los tiempos."
  },

  // ========== MILAGROS ==========
  {
    tipo: "Milagro",
    titulo: "Agua convertida en vino",
    cita: "Juan 2:1-11",
    ensenanza: "Jesús transforma lo simple en algo extraordinario."
  },
  {
    tipo: "Milagro",
    titulo: "Calma la tempestad",
    cita: "Mateo 8:23-27; Marcos 4:35-41; Lucas 8:22-25",
    ensenanza: "Jesús tiene poder sobre la naturaleza y nos da paz en la tormenta."
  },
  {
    tipo: "Milagro",
    titulo: "Camina sobre el agua",
    cita: "Mateo 14:24-33; Marcos 6:47-52; Juan 6:16-21",
    ensenanza: "Si confiamos en Jesús, superamos lo imposible; si dudamos, nos hundimos."
  },
  {
    tipo: "Milagro",
    titulo: "La pesca milagrosa",
    cita: "Lucas 5:1-11; Juan 21:1-11",
    ensenanza: "Si obedecemos a Jesús aunque no entendamos, Él nos da más de lo esperado."
  },
  {
    tipo: "Milagro",
    titulo: "La higuera seca",
    cita: "Mateo 21:18-22; Marcos 11:12-14",
    ensenanza: "La fe sin fruto se seca; debemos dar frutos de arrepentimiento."
  },
  {
    tipo: "Milagro",
    titulo: "Multiplicación de los panes (5,000)",
    cita: "Mateo 14:13-21; Marcos 6:30-44; Lucas 9:10-17; Juan 6:1-14",
    ensenanza: "Jesús es el pan de vida; si compartimos lo poco, Él lo multiplica."
  },
  {
    tipo: "Milagro",
    titulo: "Multiplicación de los panes (4,000)",
    cita: "Mateo 15:32-39; Marcos 8:1-10",
    ensenanza: "Jesús se preocupa por nuestras necesidades y provee para todos."
  },
  {
    tipo: "Milagro",
    titulo: "El dinero en la boca del pez",
    cita: "Mateo 17:24-27",
    ensenanza: "Jesús provee de maneras inesperadas."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a un leproso",
    cita: "Mateo 8:1-4; Marcos 1:40-45; Lucas 5:12-16",
    ensenanza: "Jesús puede limpiar cualquier pecado."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a la suegra de Pedro",
    cita: "Mateo 8:14-15; Marcos 1:29-31; Lucas 4:38-39",
    ensenanza: "Jesús sana con solo tocar."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a un paralítico",
    cita: "Mateo 9:1-8; Marcos 2:1-12; Lucas 5:17-26",
    ensenanza: "Jesús tiene autoridad para perdonar pecados y sanar."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a la mujer con flujo de sangre",
    cita: "Mateo 9:20-22; Marcos 5:25-34; Lucas 8:43-48",
    ensenanza: "La fe en Jesús trae sanidad."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a dos ciegos",
    cita: "Mateo 9:27-31",
    ensenanza: "La fe en Jesús abre nuestros ojos."
  },
  {
    tipo: "Milagro",
    titulo: "Sana al hombre de la mano seca",
    cita: "Mateo 12:9-13; Marcos 3:1-5; Lucas 6:6-10",
    ensenanza: "La misericordia está por encima de la ley."
  },
  {
    tipo: "Milagro",
    titulo: "Sana al siervo del centurión",
    cita: "Mateo 8:5-13; Lucas 7:1-10",
    ensenanza: "La fe humilde y persistente recibe respuesta."
  },
  {
    tipo: "Milagro",
    titulo: "Sana al hijo del oficial",
    cita: "Juan 4:46-54",
    ensenanza: "La fe en la palabra de Jesús es suficiente."
  },
  {
    tipo: "Milagro",
    titulo: "Sana al paralítico de Betesda",
    cita: "Juan 5:1-9",
    ensenanza: "Jesús sana al que no puede ayudarse a sí mismo."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a la hija de la mujer cananea",
    cita: "Mateo 15:21-28; Marcos 7:24-30",
    ensenanza: "La fe persistente recibe respuesta."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a un sordomudo",
    cita: "Marcos 7:31-37",
    ensenanza: "Jesús abre nuestros oídos y nuestra boca para hablar de Él."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a un ciego en Betsaida",
    cita: "Marcos 8:22-26",
    ensenanza: "La fe crece paso a paso."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a un ciego de nacimiento",
    cita: "Juan 9:1-41",
    ensenanza: "Jesús es la luz del mundo."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a la mujer encorvada",
    cita: "Lucas 13:10-17",
    ensenanza: "Jesús libera de toda atadura."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a un hidrópico",
    cita: "Lucas 14:1-6",
    ensenanza: "La misericordia es prioridad."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a los diez leprosos",
    cita: "Lucas 17:11-19",
    ensenanza: "Debemos ser agradecidos."
  },
  {
    tipo: "Milagro",
    titulo: "Sana a Bartimeo",
    cita: "Mateo 20:29-34; Marcos 10:46-52; Lucas 18:35-43",
    ensenanza: "Jesús escucha el clamor del necesitado."
  },
  {
    tipo: "Milagro",
    titulo: "Sana la oreja de Malco",
    cita: "Mateo 26:51-56; Lucas 22:49-51; Juan 18:10-11",
    ensenanza: "Jesús perdona a sus enemigos."
  },
  {
    tipo: "Milagro",
    titulo: "Libera a un endemoniado en Capernaúm",
    cita: "Marcos 1:23-28; Lucas 4:31-37",
    ensenanza: "Jesús tiene autoridad sobre los demonios."
  },
  {
    tipo: "Milagro",
    titulo: "Libera a dos endemoniados gadarenos",
    cita: "Mateo 8:28-34; Marcos 5:1-20; Lucas 8:26-39",
    ensenanza: "Jesús libera al que está atado."
  },
  {
    tipo: "Milagro",
    titulo: "Libera a un mudo endemoniado",
    cita: "Mateo 9:32-34",
    ensenanza: "Jesús da voz al que no puede hablar."
  },
  {
    tipo: "Milagro",
    titulo: "Libera a un ciego y mudo endemoniado",
    cita: "Mateo 12:22-23; Lucas 11:14-26",
    ensenanza: "Jesús es más fuerte que el mal."
  },
  {
    tipo: "Milagro",
    titulo: "Libera a un niño endemoniado",
    cita: "Mateo 17:14-21; Marcos 9:14-29; Lucas 9:37-43",
    ensenanza: "La fe y la oración expulsan el mal."
  },
  {
    tipo: "Milagro",
    titulo: "Resucita a la hija de Jairo",
    cita: "Mateo 9:18-26; Marcos 5:21-43; Lucas 8:40-56",
    ensenanza: "Jesús tiene poder sobre la muerte."
  },
  {
    tipo: "Milagro",
    titulo: "Resucita al hijo de la viuda de Naín",
    cita: "Lucas 7:11-17",
    ensenanza: "Jesús se compadece del dolor."
  },
  {
    tipo: "Milagro",
    titulo: "Resucita a Lázaro",
    cita: "Juan 11:1-44",
    ensenanza: "Jesús es la resurrección y la vida."
  }
];


// ============================================================
// MÓDULO 6: SIGNIFICADO DE PALABRAS
// ============================================================

const palabras = [
  {
    palabra: "Canon",
    significado: "Lista de los libros que forman la Biblia. La Biblia tiene 66 libros en total."
  },

  {
    palabra: "Pentateuco",
    significado: "Los primeros 5 libros de la Biblia: Génesis, Éxodo, Levítico, Números y Deuteronomio."
  },

  {
    palabra: "Evangelio",
    significado: "Significa 'Buena Noticia'. La buena noticia es que Jesús vino a salvarnos."
  },

  {
    palabra: "Parábola",
    significado: "Historia corta que enseña una lección espiritual. Ejemplo: El buen samaritano."
  },

  {
    palabra: "Milagro",
    significado: "Algo sobrenatural que solo Dios puede hacer. Jesús sanó a un ciego."
  },

  {
    palabra: "Discípulo",
    significado: "Seguidor o alumno de Jesús. Pedro, Juan y Mateo eran discípulos."
  },

  {
    palabra: "Apóstol",
    significado: "Enviado por Jesús a predicar. Los 12 apóstoles fueron enviados por Jesús."
  },

  {
    palabra: "Mesías",
    significado: "Salvador prometido por Dios. Jesús es el Mesías."
  },

  {
    palabra: "Fe",
    significado: "Creer en Dios aunque no lo veamos. Hebreos 11:1."
  },

  {
    palabra: "Gracia",
    significado: "Regalo de Dios que no merecemos. La salvación es por gracia (Efesios 2:8)."
  },
  {
  palabra: "Pecado",
  significado: "Desobedecer a Dios. Todos hemos pecado (Romanos 3:23)."
},
{
  palabra: "Arrepentimiento",
  significado: "Pedir perdón y cambiar de camino. El hijo pródigo se arrepintió (Lucas 15:11-32)."
},
{
  palabra: "Redención",
  significado: "Ser salvado o rescatado por Jesús. Jesús nos redimió con su sangre."
},
{
  palabra: "Mártir",
  significado: "Alguien que muere por su fe en Jesús. Esteban fue el primer mártir (Hechos 7)."
},
{
  palabra: "Catacumba",
  significado: "Túneles subterráneos donde se escondían los cristianos. Los primeros cristianos vivían en las catacumbas."
},
{
  palabra: "Idolatría",
  significado: "Adorar a dioses falsos o imágenes. El pueblo de Israel cayó en idolatría."
},
{
  palabra: "Sacrificio",
  significado: "Ofrenda que se daba a Dios. Jesús fue el sacrificio perfecto."
},
{
  palabra: "Pacto",
  significado: "Promesa o acuerdo entre Dios y el hombre. Dios hizo pacto con Abraham."
},
{
  palabra: "Bendición",
  significado: "Algo bueno que Dios nos da. Dios bendijo a Abraham."
},
{
  palabra: "Maldición",
  significado: "Consecuencia del pecado. La desobediencia trae maldición."
},
{
  palabra: "Santo",
  significado: "Apartado para Dios, puro. Dios es santo."
},
{
  palabra: "Santificación",
  significado: "Proceso de ser más como Jesús. Dios nos santifica cada día."
},
{
  palabra: "Justificación",
  significado: "Dios nos declara justos por la fe en Jesús. Somos justificados por la fe (Romanos 5:1)."
},
{
  palabra: "Salvación",
  significado: "Ser librado del pecado y tener vida eterna. Jesús da salvación a todo el que cree."
},
{
  palabra: "Resurrección",
  significado: "Volver a la vida después de la muerte. Jesús resucitó al tercer día."
},
{
  palabra: "Ascensión",
  significado: "Jesús subió al cielo. Hechos 1:9-11."
},
{
  palabra: "Pentecostés",
  significado: "Día en que vino el Espíritu Santo. Hechos 2:1-4."
},
{
  palabra: "Espíritu Santo",
  significado: "Tercera persona de la Trinidad. Nos guía y consuela."
},
{
  palabra: "Trinidad",
  significado: "Dios es Padre, Hijo y Espíritu Santo. Tres personas, un solo Dios."
},
{
  palabra: "Génesis",
  significado: "Significa 'principio' o 'origen'. Es el primer libro de la Biblia."
},
{
  palabra: "Éxodo",
  significado: "Significa 'salida'. El pueblo de Israel salió de Egipto."
},
{
  palabra: "Levítico",
  significado: "Libro de las leyes de los sacerdotes. Los levitas servían en el templo."
},
{
  palabra: "Números",
  significado: "Libro que cuenta el censo del pueblo. Dios mandó contar al pueblo."
},
{
  palabra: "Deuteronomio",
  significado: "Significa 'segunda ley'. Moisés repitió la ley al pueblo."
},
{
  palabra: "Salmos",
  significado: "Libro de canciones y oraciones. David escribió muchos salmos."
},
{
  palabra: "Proverbios",
  significado: "Libro de sabiduría. Salomón escribió muchos proverbios."
},
{
  palabra: "Apocalipsis",
  significado: "Significa 'revelación'. Es el último libro de la Biblia."
},
{
  palabra: "Epístola",
  significado: "Carta escrita por los apóstoles. Pablo escribió 13 epístolas."
},
{
  palabra: "Genealogía",
  significado: "Lista de antepasados. Mateo 1 tiene la genealogía de Jesús."
},
{
  palabra: "Parusía",
  significado: "Segunda venida de Jesús. Jesús volverá pronto."
},
{
  palabra: "Amén",
  significado: "Significa 'así sea' o 'es verdad'. Se usa al final de las oraciones."
},
{
  palabra: "Aleluya",
  significado: "Significa 'alabad a Jehová'. Se usa para alabar a Dios."
},
{
  palabra: "Hosanna",
  significado: "Significa 'sálvanos' o 'te alabamos'. La gente gritó 'Hosanna' cuando Jesús entró a Jerusalén."
},
{
  palabra: "Emanuel",
  significado: "Significa 'Dios con nosotros'. Jesús es Emanuel (Mateo 1:23)."
},
{
  palabra: "Israel",
  significado: "Significa 'el que lucha con Dios'. Jacob fue llamado Israel."
},
{
  palabra: "Jerusalén",
  significado: "Significa 'ciudad de paz'. Es la ciudad santa."
},
{
  palabra: "Belén",
  significado: "Significa 'casa de pan'. Allí nació Jesús."
},
{
  palabra: "La Ley",
  significado: "Otro nombre para el Pentateuco. Son los libros que contienen la ley de Dios."
},
{
  palabra: "Discípulo",
  significado: "Seguidor o alumno de Jesús. Pedro, Juan y Mateo eran discípulos."
},
{
  palabra: "Apóstol",
  significado: "Enviado por Jesús a predicar. Los 12 apóstoles fueron enviados por Jesús."
}
];


// ============================================================
// MÓDULO 7: MEMORIZACIÓN / VERSÍCULOS
// ============================================================

const versiculos = [
  {
    cita: "Génesis 1:1",
    texto: "En el principio creó Dios los cielos y la tierra."
  },

  {
    cita: "Salmo 23:1",
    texto: "Jehová es mi pastor; nada me faltará."
  },

  {
    cita: "Juan 3:16",
    texto: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna."
  },

  {
    cita: "Filipenses 4:13",
    texto: "Todo lo puedo en Cristo que me fortalece."
  },

  {
    cita: "Josué 1:9",
    texto: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas."
  },

  {
    cita: "Salmo 119:105",
    texto: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino."
  },

  {
    cita: "Proverbios 3:5",
    texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia."
  },

  {
    cita: "Mateo 4:4",
    texto: "No solo de pan vivirá el hombre, sino de toda palabra que sale de la boca de Dios."
  },

  {
    cita: "Juan 14:6",
    texto: "Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí."
  },

  {
    cita: "Salmo 46:1",
    texto: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones."
  },
  {
  cita: "Génesis 1:27",
  texto: "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó."
},
{
  cita: "Salmo 139:14",
  texto: "Te alabaré; porque formidables, maravillosas son tus obras; estoy maravillado, y mi alma lo sabe muy bien."
},
{
  cita: "Salmo 23:6",
  texto: "Ciertamente el bien y la misericordia me seguirán todos los días de mi vida, y en la casa de Jehová moraré por largos días."
},
{
  cita: "Juan 10:11",
  texto: "Yo soy el buen pastor; el buen pastor su vida da por las ovejas."
},
{
  cita: "1 Juan 4:8",
  texto: "El que no ama, no ha conocido a Dios; porque Dios es amor."
},
{
  cita: "1 Juan 4:19",
  texto: "Nosotros le amamos a él, porque él nos amó primero."
},
{
  cita: "Juan 13:34",
  texto: "Un mandamiento nuevo os doy: Que os améis unos a otros; como yo os he amado, que también os améis unos a otros."
},
{
  cita: "Mateo 22:39",
  texto: "Y el segundo es semejante: Amarás a tu prójimo como a ti mismo."
},
{
  cita: "1 Corintios 13:4",
  texto: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece."
},
{
  cita: "1 Corintios 13:13",
  texto: "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor."
},
{
  cita: "Hebreos 11:1",
  texto: "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve."
},
{
  cita: "Marcos 11:24",
  texto: "Por tanto, os digo que todo lo que pidiereis orando, creed que lo recibiréis, y os vendrá."
},
{
  cita: "Mateo 17:20",
  texto: "Si tuviereis fe como un grano de mostaza, diréis a este monte: Pásate de aquí allá, y se pasará; y nada os será imposible."
},
{
  cita: "Proverbios 3:6",
  texto: "Reconócelo en todos tus caminos, y él enderezará tus veredas."
},
{
  cita: "Salmo 56:3",
  texto: "En el día que temo, yo en ti confío."
},
{
  cita: "Salmo 37:5",
  texto: "Encomienda a Jehová tu camino, y confía en él; y él hará."
},
{
  cita: "Isaías 41:10",
  texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia."
},
{
  cita: "2 Timoteo 1:7",
  texto: "Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio."
},
{
  cita: "Deuteronomio 31:8",
  texto: "Y Jehová va delante de ti; él estará contigo, no te dejará, ni te desamparará; no temas ni te intimides."
},
{
  cita: "Salmo 118:24",
  texto: "Este es el día que hizo Jehová; nos gozaremos y alegraremos en él."
},
{
  cita: "Santiago 1:22",
  texto: "Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos."
},
{
  cita: "Proverbios 1:7",
  texto: "El principio de la sabiduría es el temor de Jehová; los insensatos desprecian la sabiduría y la enseñanza."
},
{
  cita: "Proverbios 15:1",
  texto: "La blanda respuesta quita la ira; mas la palabra áspera hace subir el furor."
},
{
  cita: "Proverbios 22:6",
  texto: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él."
},
{
  cita: "Proverbios 18:10",
  texto: "El nombre de Jehová es torre fuerte; a él correrá el justo, y será levantado."
},
{
  cita: "Proverbios 17:17",
  texto: "En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia."
},
{
  cita: "Eclesiastés 4:9",
  texto: "Mejores son dos que uno; porque tienen mejor paga de su trabajo."
},
{
  cita: "Eclesiastés 4:10",
  texto: "Porque si cayeren, el uno levantará a su compañero; pero ¡ay del solo! que cuando cayere, no habrá segundo que lo levante."
},
{
  cita: "Eclesiastés 3:1",
  texto: "Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora."
},
{
  cita: "Eclesiastés 12:1",
  texto: "Acuérdate de tu Creador en los días de tu juventud, antes que vengan los días malos, y lleguen los años de los cuales digas: No tengo en ellos contentamiento."
},
{
  cita: "Juan 11:25",
  texto: "Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá."
},
{
  cita: "Hechos 4:12",
  texto: "Y en ningún otro hay salvación; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos."
},
{
  cita: "Romanos 6:23",
  texto: "Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro."
},
{
  cita: "Juan 8:12",
  texto: "Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida."
},
{
  cita: "Mateo 5:14",
  texto: "Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder."
},
{
  cita: "Santiago 4:7",
  texto: "Someteos, pues, a Dios; resistid al diablo, y huirá de vosotros."
},
{
  cita: "Hebreos 13:17",
  texto: "Obedeced a vuestros pastores, y sujetaos a ellos; porque ellos velan por vuestras almas, como quienes han de dar cuenta."
},
{
  cita: "Salmo 107:1",
  texto: "Alabad a Jehová, porque él es bueno; porque para siempre es su misericordia."
},
{
  cita: "Salmo 150:6",
  texto: "Todo lo que respira alabe a JAH. Aleluya."
},
{
  cita: "Salmo 136:1",
  texto: "Alabad a Jehová, porque él es bueno, porque para siempre es su misericordia."
},
{
  cita: "Salmo 34:8",
  texto: "Gustad, y ved que es bueno Jehová; dichoso el hombre que confía en él."
},
{
  cita: "Salmo 121:1-2",
  texto: "Alzaré mis ojos a los montes; ¿de dónde vendrá mi socorro? Mi socorro viene de Jehová, que hizo los cielos y la tierra."
},
{
  cita: "Proverbios 20:11",
  texto: "Aun el muchacho es conocido por sus hechos, si su obra fuere limpia y recta."
},
{
  cita: "Proverbios 12:22",
  texto: "Los labios mentirosos son abominación a Jehová; pero los que hacen verdad son su contentamiento."
},
{
  cita: "1 Pedro 2:9",
  texto: "Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable."
},
{
  cita: "Santiago 4:11",
  texto: "Hermanos, no murmuréis los unos de los otros. El que murmura del hermano y juzga a su hermano, murmura de la ley y juzga a la ley."
},
{
  cita: "Santiago 1:19",
  texto: "Por esto, mis amados hermanos, todo hombre sea pronto para oír, tardo para hablar, tardo para airarse."
},
{
  cita: "Lucas 6:38",
  texto: "Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir."
},
{
  cita: "Lucas 10:27",
  texto: "Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con todas tus fuerzas, y con toda tu mente; y a tu prójimo como a ti mismo."
},
{
  cita: "2 Corintios 8:9",
  texto: "Porque ya conocéis la gracia de nuestro Señor Jesucristo, que por amor a vosotros se hizo pobre, siendo rico, para que vosotros con su pobreza fueseis enriquecidos."
},
{
  cita: "Efesios 4:32",
  texto: "Antes sed benignos unos con otros, misericordiosos, perdonándoos unos a otros, como Dios también os perdonó a vosotros en Cristo."
},
{
  cita: "Mateo 4:19",
  texto: "Y les dijo: Venid en pos de mí, y os haré pescadores de hombres."
},
{
  cita: "Mateo 14:19",
  texto: "Entonces mandó a la multitud que se recostase sobre la hierba; y tomando los cinco panes y los dos peces, y levantando los ojos al cielo, bendijo, y partió y dio los panes a los discípulos, y los discípulos a la multitud."
},
{
  cita: "Mateo 16:15-16",
  texto: "Él les dijo: Y vosotros, ¿quién decís que soy yo? Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del Dios viviente."
},
{
  cita: "Mateo 18:22",
  texto: "Jesús le dijo: No te digo hasta siete, sino aun hasta setenta veces siete."
},
{
  cita: "Mateo 21:9",
  texto: "Y la gente que iba delante y la que iba detrás aclamaba, diciendo: ¡Hosanna al Hijo de David! ¡Bendito el que viene en el nombre del Señor! ¡Hosanna en las alturas!"
},
{
  cita: "Mateo 28:19-20",
  texto: "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén."
},
{
  cita: "Mateo 3:17",
  texto: "Y hubo una voz de los cielos, que decía: Este es mi Hijo amado, en quien tengo complacencia."
},
{
  cita: "Mateo 1:21",
  texto: "Y dará a luz un hijo, y llamarás su nombre JESÚS, porque él salvará a su pueblo de sus pecados."
}
];


// ============================================================
// MÓDULO 8: HISTORIA DE LA IGLESIA
// ============================================================

const historiaIglesia = [
  {
    pregunta: "¿Dónde se escondían los primeros cristianos?",
    opciones: [
      "En las catacumbas",
      "En el desierto",
      "En las montañas"
    ],
    correcta: "En las catacumbas"
  },

  {
    pregunta: "¿Quién fue el primer mártir de la iglesia?",
    opciones: [
      "Esteban",
      "Pedro",
      "Pablo"
    ],
    correcta: "Esteban"
  },

  {
    pregunta: "¿Qué significa la palabra 'mártir'?",
    opciones: [
      "Alguien que muere por su fe",
      "Un predicador",
      "Un rey"
    ],
    correcta: "Alguien que muere por su fe"
  },

  {
    pregunta: "¿En qué libro de la Biblia se habla de los mártires?",
    opciones: [
      "Hechos",
      "Génesis",
      "Salmos"
    ],
    correcta: "Hechos"
  },

  {
    pregunta: "¿Quién perseguía a los cristianos antes de convertirse?",
    opciones: [
      "Pablo",
      "Pedro",
      "Juan"
    ],
    correcta: "Pablo"
  },

  {
    pregunta: "¿En qué ciudad fueron perseguidos los primeros cristianos?",
    opciones: [
      "Roma",
      "Jerusalén",
      "Antioquía"
    ],
    correcta: "Roma"
  },

  {
    pregunta: "¿Qué hacían los cristianos en las catacumbas?",
    opciones: [
      "Orar y esconderse",
      "Comer",
      "Dormir"
    ],
    correcta: "Orar y esconderse"
  },

  {
    pregunta: "¿Quién fue el emperador que persiguió a los cristianos?",
    opciones: [
      "Nerón",
      "César Augusto",
      "Herodes"
    ],
    correcta: "Nerón"
  },

  {
    pregunta: "¿Qué significa 'catacumba'?",
    opciones: [
      "Túneles subterráneos",
      "Templo",
      "Casa"
    ],
    correcta: "Túneles subterráneos"
  },

  {
    pregunta: "¿Los cristianos dejaron de creer por la persecución?",
    opciones: [
      "No, siguieron firmes",
      "Sí, se rindieron",
      "Algunos sí"
    ],
    correcta: "No, siguieron firmes"
  }
];