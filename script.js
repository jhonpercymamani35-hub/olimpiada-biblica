/* =========================================================
   AVENTURA BÍBLICA: EL TESORO DE LA FE
   SCRIPT.JS - VERSIÓN COMPLETA
   ========================================================= */


/* =========================================================
   1. CONFIGURACIÓN DE MÓDULOS
   ========================================================= */

const modulos = [
  {
    id: "personajes",
    nombre: "Isla de los Personajes",
    emoji: "🏝️",
    tipo: "memoria"
  },
  {
    id: "geografia",
    nombre: "Río de la Geografía",
    emoji: "🌊",
    tipo: "trivia"
  },
  {
    id: "canon",
    nombre: "Monte del Canon",
    emoji: "⛰️",
    tipo: "canon"
  },
  {
    id: "mateo",
    nombre: "Reino de Mateo",
    emoji: "🏰",
    tipo: "trivia"
  },
  {
    id: "parabolas",
    nombre: "Valle de las Parábolas",
    emoji: "🌳",
    tipo: "parabolas"
  },
  {
    id: "versiculos",
    nombre: "Valle de la Memoria",
    emoji: "📖",
    tipo: "versiculos"
  },
  {
    id: "palabras",
    nombre: "Bosque de las Palabras",
    emoji: "🔤",
    tipo: "palabras"
  },
  {
    id: "historia",
    nombre: "Ciudad de la Historia",
    emoji: "⛪",
    tipo: "historia"
  }
];


/* =========================================================
   2. AVATARES
   ========================================================= */

const avatares = [
  {
    nombre: "León",
    emoji: "🦁"
  },
  {
    nombre: "Paloma",
    emoji: "🕊️"
  },
  {
    nombre: "Pastor",
    emoji: "🧑‍🌾"
  }
];


/* =========================================================
   3. DATOS DEL JUGADOR
   ========================================================= */

let jugador = JSON.parse(
  localStorage.getItem("aventuraBiblicaJugador")
) || {
  nombre: "",
  avatar: null,
  puntos: 0,
  completados: [],
  insignias: []
};


/* =========================================================
   4. ESTADO DEL JUEGO
   ========================================================= */

let moduloActual = null;

let partida = [];

let indicePregunta = 0;

let puntosRonda = 0;

let memoria = {
  cartas: [],
  volteadas: [],
  encontradas: [],
  bloqueado: false
};

let canonJuego = {
  libros: [],
  colocados: 0
};

let versiculoJuego = {
  versiculo: null,
  palabrasOcultas: [],
  respuestas: [],
  indice: 0
};

let palabrasJuego = {
  seleccion: null,
  conexiones: [],
  mezcladas: []
};

let parabolaJuego = {
  preguntas: [],
  indice: 0,
  comodines: {
    cincuenta: true,
    amigo: true,
    biblia: true
  }
};


/* =========================================================
   5. BOLSAS ALEATORIAS
   Evitan repetir datos hasta terminar el ciclo.
   ========================================================= */

const bolsas = {};


function mezclar(lista) {

  const resultado = [...lista];

  for (let i = resultado.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [resultado[i], resultado[j]] =
      [resultado[j], resultado[i]];
  }

  return resultado;
}


function siguienteAleatorio(id, datos) {

  if (!datos || datos.length === 0) {
    return null;
  }

  if (!bolsas[id] || bolsas[id].length === 0) {

    bolsas[id] = mezclar(datos);
  }

  return bolsas[id].pop();
}


function obtenerVariosAleatorios(id, datos, cantidad) {

  const resultado = [];

  if (!datos || datos.length === 0) {
    return resultado;
  }

  for (let i = 0; i < cantidad; i++) {

    const elemento = siguienteAleatorio(id, datos);

    if (elemento) {
      resultado.push(elemento);
    }
  }

  return resultado;
}


/* =========================================================
   6. GUARDAR / CARGAR PROGRESO
   ========================================================= */

function guardarJugador() {

  localStorage.setItem(
    "aventuraBiblicaJugador",
    JSON.stringify(jugador)
  );
}


function reiniciarProgreso() {

  const confirmar = confirm(
    "¿Seguro que quieres borrar todo tu progreso?"
  );

  if (!confirmar) {
    return;
  }

  localStorage.removeItem("aventuraBiblicaJugador");

  jugador = {
    nombre: "",
    avatar: null,
    puntos: 0,
    completados: [],
    insignias: []
  };

  location.reload();
}


/* =========================================================
   7. SONIDOS
   ========================================================= */

let audioContext = null;


function obtenerAudio() {

  if (!audioContext) {

    audioContext =
      new (window.AudioContext ||
        window.webkitAudioContext)();
  }

  return audioContext;
}


function sonidoTono(
  frecuencia,
  duracion = 0.15,
  tipo = "sine"
) {

  try {

    const ctx = obtenerAudio();

    const oscilador =
      ctx.createOscillator();

    const ganancia =
      ctx.createGain();

    oscilador.type = tipo;

    oscilador.frequency.value =
      frecuencia;

    ganancia.gain.setValueAtTime(
      0.0001,
      ctx.currentTime
    );

    ganancia.gain.exponentialRampToValueAtTime(
      0.15,
      ctx.currentTime + 0.02
    );

    ganancia.gain.exponentialRampToValueAtTime(
      0.0001,
      ctx.currentTime + duracion
    );

    oscilador.connect(ganancia);

    ganancia.connect(ctx.destination);

    oscilador.start();

    oscilador.stop(
      ctx.currentTime + duracion
    );

  } catch (error) {

    console.log("Audio no disponible");
  }
}


function sonidoCorrecto() {

  sonidoTono(523, 0.12);
  setTimeout(() => sonidoTono(659, 0.12), 100);
  setTimeout(() => sonidoTono(784, 0.18), 200);
}


function sonidoIncorrecto() {

  sonidoTono(180, 0.2, "triangle");

}


function sonidoClick() {

  sonidoTono(500, 0.06);
}


function sonidoAplausos() {

  sonidoTono(523, 0.12);
  setTimeout(() => sonidoTono(659, 0.12), 120);
  setTimeout(() => sonidoTono(784, 0.12), 240);
  setTimeout(() => sonidoTono(1046, 0.25), 360);

}


function sonidoFanfarria() {

  sonidoTono(392, 0.15);
  setTimeout(() => sonidoTono(523, 0.15), 150);
  setTimeout(() => sonidoTono(659, 0.15), 300);
  setTimeout(() => sonidoTono(784, 0.35), 450);

}


function sonidoAngeles() {

  const notas = [
    523,
    659,
    784,
    988,
    1174
  ];

  notas.forEach((nota, i) => {

    setTimeout(() => {

      sonidoTono(
        nota,
        0.35,
        "sine"
      );

    }, i * 130);

  });
}


/* =========================================================
   8. INICIO
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  iniciarAplicacion
);


function iniciarAplicacion() {

  mostrarInicio();
}


/* =========================================================
   9. PANTALLA DE INICIO
   ========================================================= */

function mostrarInicio() {

  const app =
    document.getElementById("app");

  app.innerHTML = `

    <div class="pantalla-inicio">

      <div class="logo-juego">
        📖✨
      </div>

      <h1>
        Aventura Bíblica
      </h1>

      <h2>
        El Tesoro de la Fe
      </h2>

      <p>
        Aprende, juega y descubre
        los tesoros de la Biblia.
      </p>

      <button
        class="btn-principal"
        onclick="mostrarSeleccionJugador()">
        🚀 COMENZAR AVENTURA
      </button>

    </div>

  `;
}


/* =========================================================
   10. SELECCIÓN DEL JUGADOR
   ========================================================= */

function mostrarSeleccionJugador() {

  const app =
    document.getElementById("app");

  app.innerHTML = `

    <div class="pantalla-jugador">

      <h1>
        🧭 ¡Comienza tu aventura!
      </h1>

      <p>
        Primero elige tu personaje.
      </p>

      <div class="avatares">

        ${avatares.map((avatar, indice) => `

          <button
            class="avatar-opcion"
            onclick="seleccionarAvatar(${indice})">

            <span class="avatar-grande">
              ${avatar.emoji}
            </span>

            <span>
              ${avatar.nombre}
            </span>

          </button>

        `).join("")}

      </div>

      <div
        id="nombreJugador"
        style="display:none;">

        <h3>
          ¿Cómo te llamas?
        </h3>

        <input
          id="inputNombre"
          type="text"
          maxlength="20"
          placeholder="Escribe tu nombre">

        <button
          class="btn-principal"
          onclick="guardarNuevoJugador()">
          ⭐ CONTINUAR
        </button>

      </div>

    </div>

  `;
}


function seleccionarAvatar(indice) {

  jugador.avatar =
    avatares[indice];

  document.querySelectorAll(
    ".avatar-opcion"
  ).forEach((boton, i) => {

    boton.classList.toggle(
      "seleccionado",
      i === indice
    );

  });

  document.getElementById(
    "nombreJugador"
  ).style.display = "block";

  sonidoClick();
}


function guardarNuevoJugador() {

  const input =
    document.getElementById(
      "inputNombre"
    );

  const nombre =
    input.value.trim();

  if (!nombre) {

    alert(
      "Escribe tu nombre para continuar."
    );

    return;
  }

  jugador.nombre = nombre;

  guardarJugador();

  mostrarMapa();
}


/* =========================================================
   11. MAPA PRINCIPAL
   ========================================================= */

function mostrarMapa() {

  const app =
    document.getElementById("app");

  const porcentaje =
    Math.min(
      100,
      Math.round(
        (jugador.completados.length /
          modulos.length) * 100
      )
    );

  app.innerHTML = `

    <div class="juego">

      <header class="barra-superior">

        <div class="jugador-info">

          <span class="avatar-mini">
            ${jugador.avatar
              ? jugador.avatar.emoji
              : "🙂"}
          </span>

          <strong>
            ${jugador.nombre || "Aventurero"}
          </strong>

        </div>

        <div class="puntos">
          ⭐ ${jugador.puntos}
        </div>

      </header>


      <section class="progreso">

        <div class="progreso-texto">

          <span>
            Progreso de la aventura
          </span>

          <strong>
            ${porcentaje}%
          </strong>

        </div>

        <div class="barra-progreso">

          <div
            class="barra-progreso-relleno"
            style="width:${porcentaje}%">
          </div>

          <div
            class="cofre"
            title="Cofre del Tesoro">
            ${jugador.puntos >= 100
              ? "🎁"
              : "🔒"}
          </div>

        </div>

      </section>


      <main class="mapa">

        <h1>
          🗺️ Mapa de Aventura
        </h1>

        <p>
          Elige un lugar para comenzar.
        </p>

        <div class="mapa-ruta">

          ${modulos.map(
            (modulo, indice) =>
              crearTarjetaModulo(
                modulo,
                indice
              )
          ).join("")}

        </div>

      </main>


      <div class="controles">

        <button
          onclick="mostrarPerfil()">
          👤 Mi perfil
        </button>

        <button
          onclick="mostrarInsignias()">
          🏅 Insignias
        </button>

        <button
          onclick="reiniciarProgreso()">
          🔄 Reiniciar
        </button>

      </div>

    </div>

  `;
}
function crearTarjetaModulo(
  modulo,
  indice
) {

  const completado =
    jugador.completados.includes(
      modulo.id
    );

  return `

    <button
      class="
        modulo-mapa
        ${completado ? "completado" : ""}
      "
      onclick="
        abrirModulo('${modulo.id}')
      ">

      <div class="modulo-numero">
        ${indice + 1}
      </div>

      <div class="modulo-emoji">
        ${modulo.emoji}
      </div>

      <h3>
        ${modulo.nombre}
      </h3>

      <p>
        ${
          completado
            ? "✅ ¡Completado!"
            : "🔎 Explorar"
        }
      </p>

    </button>

  `;
}


/* =========================================================
   12. ABRIR MÓDULO
   ========================================================= */

function abrirModulo(id) {

  moduloActual = modulos.find(
    modulo => modulo.id === id
  );

  if (!moduloActual) {
    return;
  }

  puntosRonda = 0;

  sonidoClick();

  switch (moduloActual.tipo) {

    case "memoria":
      iniciarMemoria();
      break;

    case "trivia":
      iniciarTrivia(id);
      break;

    case "canon":
      iniciarCanon();
      break;

    case "parabolas":
      iniciarParabolas();
      break;

    case "versiculos":
      iniciarVersiculos();
      break;

    case "palabras":
      iniciarPalabras();
      break;

    case "historia":
      iniciarHistoria();
      break;

    default:
      mostrarMapa();
  }
}


/* =========================================================
   13. ENCABEZADO DE LOS JUEGOS
   ========================================================= */

function encabezadoJuego(
  titulo,
  subtitulo = ""
) {

  return `

    <div class="encabezado-juego">

      <button
        class="btn-volver"
        onclick="mostrarMapa()">
        ⬅️ Mapa
      </button>

      <div>

        <h1>
          ${titulo}
        </h1>

        <p>
          ${subtitulo}
        </p>

      </div>

      <div class="puntos-ronda">
        ⭐ ${puntosRonda}
      </div>

    </div>

  `;
}


/* =========================================================
   14. JUEGO DE MEMORIA
   ========================================================= */

function iniciarMemoria() {

  const personajesSeleccionados =
  obtenerVariosAleatorios(
    "personajesMemoria",
    personajes,
    6
  );
  memoria.cartas = [];

  memoria.volteadas = [];

  memoria.encontradas = [];

  memoria.bloqueado = false;


  personajesSeleccionados.forEach(personaje => {

    memoria.cartas.push({
      id: personaje.nombre,
      tipo: "nombre",
      contenido: personaje.nombre
    });

    memoria.cartas.push({
      id: personaje.nombre,
      tipo: "descripcion",
      contenido: personaje.descripcion
    });

  });


  memoria.cartas =
    mezclar(memoria.cartas);


  const app =
    document.getElementById("app");


  app.innerHTML = `

    <div class="juego-contenedor">

      ${encabezadoJuego(
        "🏝️ Isla de los Personajes",
        "Encuentra cada personaje con su descripción."
      )}

      <div class="instruccion">
        🧠 Encuentra las parejas.
      </div>

      <div class="memoria-tablero">

        ${memoria.cartas.map(
          (carta, indice) => `

            <button
              class="carta-memoria"
              id="carta-${indice}"
              onclick="
                voltearCarta(${indice})
              ">

              <span>
                ❓
              </span>

            </button>

          `
        ).join("")}

      </div>

    </div>

  `;
}


function voltearCarta(indice) {

  if (
    memoria.bloqueado ||
    memoria.encontradas.includes(indice) ||
    memoria.volteadas.includes(indice)
  ) {
    return;
  }


  const carta =
    memoria.cartas[indice];

  const elemento =
    document.getElementById(
      `carta-${indice}`
    );


  elemento.classList.add("volteada");

  elemento.innerHTML = `
    <span>
      ${
        carta.tipo === "nombre"
          ? "👤"
          : "📜"
      }
    </span>

    <small>
      ${carta.contenido}
    </small>
  `;


  memoria.volteadas.push(indice);

  sonidoClick();


  if (memoria.volteadas.length === 2) {

    memoria.bloqueado = true;

    comprobarParejaMemoria();
  }
}


function comprobarParejaMemoria() {

  const [a, b] =
    memoria.volteadas;

  const cartaA =
    memoria.cartas[a];

  const cartaB =
    memoria.cartas[b];


  if (
    cartaA.id === cartaB.id &&
    cartaA.tipo !== cartaB.tipo
  ) {

    memoria.encontradas.push(a);
    memoria.encontradas.push(b);

    puntosRonda += 10;

    jugador.puntos += 10;

    guardarJugador();

    sonidoCorrecto();

    document
      .getElementById(`carta-${a}`)
      .classList.add("encontrada");

    document
      .getElementById(`carta-${b}`)
      .classList.add("encontrada");

    memoria.volteadas = [];

    memoria.bloqueado = false;

    actualizarPuntosRonda();


    if (
      memoria.encontradas.length ===
      memoria.cartas.length
    ) {

      setTimeout(() => {

        sonidoAplausos();

        completarModulo(
          "personajes",
          "🏝️ Maestro de los Personajes"
        );

      }, 700);
    }

  } else {

    sonidoIncorrecto();

    setTimeout(() => {

      [a, b].forEach(indice => {

        const elemento =
          document.getElementById(
            `carta-${indice}`
          );

        elemento.classList.remove(
          "volteada"
        );

        elemento.innerHTML = `
          <span>
            ❓
          </span>
        `;

      });

      memoria.volteadas = [];

      memoria.bloqueado = false;

    }, 900);
  }
}


function actualizarPuntosRonda() {

  const elemento =
    document.querySelector(
      ".puntos-ronda"
    );

  if (elemento) {

    elemento.textContent =
      `⭐ ${puntosRonda}`;
  }
}


/* =========================================================
   15. TRIVIA GENERAL
   GEOGRAFÍA / MATEO
   ========================================================= */

function iniciarTrivia(id) {

  let datos = [];

  if (id === "geografia") {
    datos = preguntasGeografia;
  }

  if (id === "mateo") {
    datos = preguntasMateo;
  }

  if (id === "historia") {
    datos = historiaIglesia;
  }


  if (!datos.length) {
    mostrarMapa();
    return;
  }


  partida =
    obtenerVariosAleatorios(
      `trivia-${id}`,
      datos,
      Math.min(5, datos.length)
    );

  indicePregunta = 0;

  puntosRonda = 0;

  mostrarPreguntaTrivia();

}


function mostrarPreguntaTrivia() {

  if (
    indicePregunta >= partida.length
  ) {

    finalizarTrivia();

    return;
  }


  const pregunta =
    partida[indicePregunta];


  const opciones =
    mezclar(
      pregunta.opciones
    );


  const app =
    document.getElementById("app");


  app.innerHTML = `

    <div class="juego-contenedor">

      ${encabezadoJuego(
        moduloActual.emoji +
          " " +
          moduloActual.nombre,
        `Pregunta ${
          indicePregunta + 1
        } de ${partida.length}`
      )}

      <div class="pregunta-card">

        <div class="pregunta-numero">
          ❓
        </div>

        <h2>
          ${pregunta.pregunta}
        </h2>

        <div class="opciones">

          ${opciones.map(
            opcion => `

              <button
                class="opcion-trivia"
                data-respuesta="
                  ${escapeHTML(opcion)}
                "
                onclick="
                  responderTrivia(
                    this,
                    '${escapeJS(opcion)}',
                    '${escapeJS(pregunta.correcta)}'
                  )
                ">

                ${opcion}

              </button>

            `
          ).join("")}

        </div>

      </div>

    </div>

  `;
}


function responderTrivia(
  boton,
  respuesta,
  correcta
) {

  const botones =
    document.querySelectorAll(
      ".opcion-trivia"
    );


  botones.forEach(b => {

    b.disabled = true;

  });


  if (respuesta === correcta) {

    boton.classList.add(
      "correcta"
    );

    puntosRonda += 10;

    jugador.puntos += 10;

    sonidoCorrecto();

  } else {

    boton.classList.add(
      "incorrecta"
    );

    botones.forEach(b => {

      const texto =
        b.getAttribute(
          "data-respuesta"
        );

      if (texto === correcta) {

        b.classList.add(
          "correcta"
        );
      }

    });

    sonidoIncorrecto();
  }


  guardarJugador();

  actualizarPuntosRonda();


  setTimeout(() => {

    indicePregunta++;

    mostrarPreguntaTrivia();

  }, 1200);
}


function finalizarTrivia() {

  sonidoFanfarria();

  completarModulo(
    moduloActual.id,
    moduloActual.id === "geografia"
      ? "🌊 Explorador de la Geografía"
      : "🏰 Sabio del Reino"
  );

}


/* =========================================================
   16. CANON DE LA BIBLIA
   ========================================================= */

function iniciarCanon() {

  const grupos = canon;

  canonJuego.libros = [];

  canonJuego.colocados = 0;


  grupos.forEach(grupo => {

    const libros =
      grupo.libros
        .split(",")
        .map(libro => libro.trim());

    libros.forEach(libro => {

      canonJuego.libros.push({

        libro: libro,

        grupo: grupo.grupo

      });

    });

  });


  canonJuego.libros =
    mezclar(
      canonJuego.libros
    );


  mostrarCanon();

}


function mostrarCanon() {

  const app =
    document.getElementById("app");


  const librosMostrar =
    canonJuego.libros.slice(
      0,
      Math.min(
        12,
        canonJuego.libros.length
      )
    );


  app.innerHTML = `

    <div class="juego-contenedor">

      ${encabezadoJuego(
        "⛰️ Monte del Canon",
        "Coloca cada libro en su grupo."
      )}

      <div class="instruccion">

        📚 Selecciona un libro y luego
        selecciona su categoría.

      </div>


      <div class="canon-libros">

        ${librosMostrar.map(
          (libro, indice) => `

            <button
              class="libro-canon"
              onclick="
                seleccionarLibroCanon(
                  ${indice}
                )
              "
              id="libro-canon-${indice}">

              📖 ${libro.libro}

            </button>

          `
        ).join("")}

      </div>


      <div class="canon-grupos">

        ${canon.map(
          (grupo, indice) => `

            <button
              class="grupo-canon"
              onclick="
                colocarLibroCanon(
                  '${escapeJS(
                    grupo.grupo
                  )}'
                )
              ">

              <strong>
                ${grupo.grupo}
              </strong>

              <span>
                ${grupo.cantidad}
                libros
              </span>

            </button>

          `
        ).join("")}

      </div>


      <div
        id="mensajeCanon"
        class="mensaje-juego">
      </div>

    </div>

  `;


  canonJuego.seleccionado = null;
}


function seleccionarLibroCanon(indice) {

  const botones =
    document.querySelectorAll(
      ".libro-canon"
    );

  botones.forEach(b =>
    b.classList.remove(
      "seleccionado"
    )
  );


  const boton =
    document.getElementById(
      `libro-canon-${indice}`
    );

  boton.classList.add(
    "seleccionado"
  );


  canonJuego.seleccionado =
    indice;

  sonidoClick();
}


function colocarLibroCanon(grupo) {

  if (
    canonJuego.seleccionado === null
  ) {

    mostrarMensajeCanon(
      "Primero selecciona un libro 📖"
    );

    return;
  }


  const indice =
    canonJuego.seleccionado;


  const libro =
    canonJuego.libros[indice];


  if (!libro) {
    return;
  }


  if (libro.grupo === grupo) {

    const boton =
      document.getElementById(
        `libro-canon-${indice}`
      );

    boton.classList.add(
      "correcto"
    );

    boton.disabled = true;

    canonJuego.colocados++;

    puntosRonda += 5;

    jugador.puntos += 5;

    guardarJugador();

    sonidoCorrecto();

    mostrarMensajeCanon(
      `¡Correcto! ${libro.libro} pertenece a ${grupo}.`
    );


    if (
      canonJuego.colocados >=
      Math.min(
        12,
        canonJuego.libros.length
      )
    ) {

      setTimeout(() => {

        sonidoFanfarria();

        completarModulo(
          "canon",
          "📚 Guardián del Canon"
        );

      }, 800);
    }

  } else {

    sonidoIncorrecto();

    mostrarMensajeCanon(
      `❌ ${libro.libro} no pertenece a ${grupo}. Intenta otra vez.`
    );
  }


  actualizarPuntosRonda();
}


function mostrarMensajeCanon(texto) {

  const mensaje =
    document.getElementById(
      "mensajeCanon"
    );

  if (mensaje) {

    mensaje.textContent =
      texto;
  }
}


/* =========================================================
   17. PARÁBOLAS
   ========================================================= */

function iniciarParabolas() {

  parabolaJuego.preguntas =
    crearPreguntasParabolas();

  parabolaJuego.indice = 0;

  parabolaJuego.comodines = {
    cincuenta: true,
    amigo: true,
    biblia: true
  };

  puntosRonda = 0;

  mostrarPreguntaParabola();
}


function crearPreguntasParabolas() {

  const datos =
    mezclar(parabolas);


  return datos.map(parabola => {

    const otras =
      mezclar(
        parabolas.filter(
          p =>
            p.titulo !==
            parabola.titulo
        )
      ).slice(0, 2);


    const opciones =
      mezclar([
        parabola.ensenanza,
        otras[0].ensenanza,
        otras[1].ensenanza
      ]);


    return {

      pregunta:
        `¿Qué enseñanza nos deja "${parabola.titulo}"?`,

      opciones: opciones,

      correcta:
        parabola.ensenanza,

      cita:
        parabola.cita,

      titulo:
        parabola.titulo,
      tipo:
        parabola.tipo  

    };

  });
}


function mostrarPreguntaParabola() {

  if (
    parabolaJuego.indice >=
    parabolaJuego.preguntas.length
  ) {

    completarModulo(
      "parabolas",
      "🌳 Maestro de las Parábolas"
    );

    return;
  }


  const pregunta =
    parabolaJuego.preguntas[
      parabolaJuego.indice
    ];


  const app =
    document.getElementById("app");


  app.innerHTML = `

    <div class="juego-contenedor">

      ${encabezadoJuego(
        "🌳 Valle de las Parábolas",
        `Pregunta ${
          parabolaJuego.indice + 1
        } de ${
          parabolaJuego.preguntas.length
        }`
      )}


      <div class="comodines">

        <button
          id="comodin50"
          onclick="usarCincuenta()"
          ${
            !parabolaJuego.comodines.cincuenta
              ? "disabled"
              : ""
          }>

          🎯 50/50

        </button>


        <button
          id="comodinAmigo"
          onclick="usarAmigo()"
          ${
            !parabolaJuego.comodines.amigo
              ? "disabled"
              : ""
          }>

          👨‍👩‍👧 Amigo

        </button>


        <button
          id="comodinBiblia"
          onclick="usarBiblia()"
          ${
            !parabolaJuego.comodines.biblia
              ? "disabled"
              : ""
          }>

          📖 Biblia

        </button>

      </div>


      <div class="pregunta-card">

        <div class="parabola-titulo">

  ${
    pregunta.tipo === "milagro"
      ? "✨ MILAGRO"
      : "📖 PARÁBOLA"
  }

  <br>

  🌿 ${pregunta.titulo}

</div>

        <h2>
          ${pregunta.pregunta}
        </h2>


        <div class="opciones">

          ${pregunta.opciones.map(
            opcion => `

              <button
                class="opcion-trivia"
                data-respuesta="
                  ${escapeHTML(opcion)}
                "
                onclick="
                  responderParabola(
                    this,
                    '${escapeJS(opcion)}'
                  )
                ">

                ${opcion}

              </button>

            `
          ).join("")}

        </div>


        <div
          id="ayudaParabola"
          class="ayuda-juego">
        </div>

      </div>

    </div>

  `;
}


function responderParabola(
  boton,
  respuesta
) {

  const pregunta =
    parabolaJuego.preguntas[
      parabolaJuego.indice
    ];


  const botones =
    document.querySelectorAll(
      ".opcion-trivia"
    );


  botones.forEach(
    b => b.disabled = true
  );


  if (
    respuesta ===
    pregunta.correcta
  ) {

    boton.classList.add(
      "correcta"
    );

    puntosRonda += 10;

    jugador.puntos += 10;

    sonidoCorrecto();

  } else {

    boton.classList.add(
      "incorrecta"
    );

    botones.forEach(b => {

      if (
        b.getAttribute(
          "data-respuesta"
        ) ===
        pregunta.correcta
      ) {

        b.classList.add(
          "correcta"
        );

      }

    });

    sonidoIncorrecto();
  }


  guardarJugador();

  actualizarPuntosRonda();


  setTimeout(() => {

    parabolaJuego.indice++;

    mostrarPreguntaParabola();

  }, 1300);
}


function usarCincuenta() {

  if (
    !parabolaJuego.comodines.cincuenta
  ) {
    return;
  }


  parabolaJuego.comodines.cincuenta =
    false;


  const pregunta =
    parabolaJuego.preguntas[
      parabolaJuego.indice
    ];


  const incorrectas =
    [...document.querySelectorAll(
      ".opcion-trivia"
    )].filter(
      boton =>
        boton.getAttribute(
          "data-respuesta"
        ) !== pregunta.correcta
    );


  mezclar(
    incorrectas
  )
  .slice(0, 1)
  .forEach(
    boton =>
      boton.style.visibility =
        "hidden"
  );


  document.getElementById(
    "comodin50"
  ).disabled = true;


  sonidoClick();
}


function usarAmigo() {

  if (
    !parabolaJuego.comodines.amigo
  ) {
    return;
  }


  parabolaJuego.comodines.amigo =
    false;


  const pregunta =
    parabolaJuego.preguntas[
      parabolaJuego.indice
    ];


  const ayuda =
    document.getElementById(
      "ayudaParabola"
    );


  ayuda.textContent =
    `👨‍👩‍👧 Tu amigo dice:
    "${pregunta.correcta}"`;


  document.getElementById(
    "comodinAmigo"
  ).disabled = true;


  sonidoClick();
}


function usarBiblia() {

  if (
    !parabolaJuego.comodines.biblia
  ) {
    return;
  }


  parabolaJuego.comodines.biblia =
    false;


  const pregunta =
    parabolaJuego.preguntas[
      parabolaJuego.indice
    ];


  const ayuda =
    document.getElementById(
      "ayudaParabola"
    );


  ayuda.textContent =
    `📖 La Biblia dice:
    ${pregunta.cita}`;


  document.getElementById(
    "comodinBiblia"
  ).disabled = true;


  sonidoAngeles();
}


/* =========================================================
   18. VERSÍCULOS
   ========================================================= */

function iniciarVersiculos() {

  const versiculo =
    siguienteAleatorio(
      "versiculos",
      versiculos
    );


  versiculoJuego.versiculo =
    versiculo;


  const palabras =
    limpiarTexto(
      versiculo.texto
    );


  const cantidad =
    Math.min(
      3,
      Math.max(
        1,
        Math.floor(
          palabras.length / 3
        )
      )
    );


  const indices =
    mezclar(
      palabras.map(
        (_, i) => i
      )
    ).slice(
      0,
      cantidad
    );


  versiculoJuego.palabrasOcultas =
    indices.sort(
      (a, b) => a - b
    );


  versiculoJuego.respuestas = [];

  versiculoJuego.indice = 0;


  mostrarVersiculo();
}


function limpiarTexto(texto) {

  return texto
    .replace(/[.,;:!?¡¿"']/g, "")
    .split(/\s+/)
    .filter(Boolean);
}


function mostrarVersiculo() {

  const versiculo =
    versiculoJuego.versiculo;


  const palabras =
    limpiarTexto(
      versiculo.texto
    );


  const ocultas =
    versiculoJuego
      .palabrasOcultas;


  let textoHTML = "";


  palabras.forEach(
    (palabra, indice) => {

      if (
        ocultas.includes(indice)
      ) {

        const posicion =
          ocultas.indexOf(indice);


        const respondida =
          versiculoJuego
            .respuestas[posicion];


        textoHTML += `

          <span
            class="palabra-oculta
              ${
                respondida
                  ? "respondida"
                  : ""
              }">

            ${
              respondida ||
              "_____"
            }

          </span>

        `;

      } else {

        textoHTML +=
          ` ${palabra} `;
      }

    }
  );


  const palabrasCorrectas =
    ocultas.map(
      indice =>
        palabras[indice]
    );


  const distractores =
    obtenerDistractoresVersiculo(
      palabrasCorrectas
    );


  const opciones =
    mezclar([
      ...palabrasCorrectas,
      ...distractores
    ]);


  const app =
    document.getElementById("app");


  app.innerHTML = `

    <div class="juego-contenedor">

      ${encabezadoJuego(
        "📖 Valle de la Memoria",
        "Completa las palabras que faltan."
      )}


      <div class="versiculo-card">

        <div class="referencia">
          ${versiculo.referencia}
        </div>

        <p class="texto-versiculo">
          ${textoHTML}
        </p>

      </div>


      <h3>
        Elige una palabra:
      </h3>


      <div class="palabras-versiculo">

        ${opciones.map(
          palabra => `

            <button
              class="boton-palabra"
              onclick="
                responderVersiculo(
                  '${escapeJS(
                    palabra
                  )}'
                )
              ">

              ${palabra}

            </button>

          `
        ).join("")}

      </div>


      <div
        id="mensajeVersiculo"
        class="mensaje-juego">
      </div>

    </div>

  `;
}


function obtenerDistractoresVersiculo(
  correctas
) {

  const todas = [];


  versiculos.forEach(
    versiculo => {

      limpiarTexto(
        versiculo.texto
      ).forEach(
        palabra => {

          if (
            !correctas.includes(
              palabra
            ) &&
            palabra.length > 3
          ) {

            todas.push(palabra);
          }

        }
      );

    }
  );


  return mezclar(
    [...new Set(todas)]
  ).slice(
    0,
    correctas.length
  );
}


function responderVersiculo(
  palabra
) {

  const indice =
    versiculoJuego.indice;


  const correctas =
    versiculoJuego
      .palabrasOcultas
      .map(
        i =>
          limpiarTexto(
            versiculoJuego
              .versiculo
              .texto
          )[i]
      );


  if (
    palabra.toLowerCase() ===
    correctas[indice].toLowerCase()
  ) {

    versiculoJuego.respuestas[
      indice
    ] = palabra;


    versiculoJuego.indice++;

    puntosRonda += 10;

    jugador.puntos += 10;

    guardarJugador();

    sonidoCorrecto();


    if (
      versiculoJuego.indice >=
      correctas.length
    ) {

      setTimeout(() => {

        sonidoAngeles();

        completarModulo(
          "versiculos",
          "📖 Guardián de la Palabra"
        );

      }, 500);

      return;
    }


    mostrarVersiculo();

  } else {

    sonidoIncorrecto();

    const mensaje =
      document.getElementById(
        "mensajeVersiculo"
      );

    if (mensaje) {

      mensaje.textContent =
        "❌ Esa palabra no es. ¡Inténtalo otra vez!";
    }
  }
}


/* =========================================================
   19. BOSQUE DE LAS PALABRAS
   ========================================================= */

function iniciarPalabras() {

  const datos =
    mezclar(
      palabras
    ).slice(
      0,
      Math.min(
        6,
        palabras.length
      )
    );


  palabrasJuego = {

    seleccion: null,

    conexiones: [],

    mezcladas: mezclar(datos)

  };


  mostrarPalabras();
}


function mostrarPalabras() {

  const izquierda =
    palabrasJuego.mezcladas;


  const derecha =
    mezclar(
      palabrasJuego.mezcladas
    );


  const app =
    document.getElementById("app");


  app.innerHTML = `

    <div class="juego-contenedor">

      ${encabezadoJuego(
        "🔤 Bosque de las Palabras",
        "Une cada palabra con su significado."
      )}


      <div class="instruccion">

        👆 Toca primero una palabra
        y después su significado.

      </div>


      <div class="palabras-contenedor">

        <div class="columna-palabras">

          <h3>
            🔤 Palabras
          </h3>

          ${izquierda.map(
            (item, indice) => `

              <button
                class="palabra-item"
                id="palabra-${indice}"
                onclick="
                  seleccionarPalabra(
                    ${indice}
                  )
                ">

                ${item.palabra}

              </button>

            `
          ).join("")}

        </div>


        <div class="columna-definiciones">

          <h3>
            📚 Significados
          </h3>

          ${derecha.map(
            (item, indice) => `

              <button
                class="definicion-item"
                onclick="
                  conectarPalabra(
                    '${escapeJS(
                      item.palabra
                    )}'
                  )
                ">

                ${item.significado}

              </button>

            `
          ).join("")}

        </div>

      </div>


      <div
        id="mensajePalabras"
        class="mensaje-juego">
      </div>

    </div>

  `;
}


function seleccionarPalabra(
  indice
) {

  document.querySelectorAll(
    ".palabra-item"
  ).forEach(
    boton =>
      boton.classList.remove(
        "seleccionado"
      )
  );


  const boton =
    document.getElementById(
      `palabra-${indice}`
    );


  boton.classList.add(
    "seleccionado"
  );


  palabrasJuego.seleccion =
    palabrasJuego.mezcladas[
      indice
    ].palabra;


  sonidoClick();
}


function conectarPalabra(
  palabraDestino
) {

  if (!palabrasJuego.seleccion) {

    mostrarMensajePalabras(
      "Primero selecciona una palabra 🔤"
    );

    return;
  }


  const palabra =
    palabrasJuego.seleccion;


  if (
    palabra === palabraDestino
  ) {

    puntosRonda += 10;

    jugador.puntos += 10;

    guardarJugador();

    sonidoCorrecto();


    const item =
      palabrasJuego.mezcladas.find(
        p =>
          p.palabra === palabra
      );


    mostrarMensajePalabras(
      `✅ ¡Correcto! ${item.palabra}`
    );


    const indice =
      palabrasJuego.mezcladas.findIndex(
        p =>
          p.palabra === palabra
      );


    const boton =
      document.getElementById(
        `palabra-${indice}`
      );


    if (boton) {

      boton.disabled = true;

      boton.classList.add(
        "correcto"
      );
    }


    palabrasJuego.conexiones.push(
      palabra
    );


    document.querySelectorAll(
      ".definicion-item"
    ).forEach(boton => {

      if (
        boton.textContent.includes(
          item.significado
        )
      ) {

        boton.disabled = true;

        boton.classList.add(
          "correcto"
        );
      }

    });


    palabrasJuego.seleccion =
      null;


    document.querySelectorAll(
      ".palabra-item"
    ).forEach(
      b =>
        b.classList.remove(
          "seleccionado"
        )
    );


    if (
      palabrasJuego.conexiones.length ===
      palabrasJuego.mezcladas.length
    ) {

      setTimeout(() => {

        sonidoAplausos();

        completarModulo(
          "palabras",
          "🔤 Maestro de las Palabras"
        );

      }, 700);
    }

  } else {

    sonidoIncorrecto();

    mostrarMensajePalabras(
      "❌ No coinciden. ¡Prueba otra vez!"
    );
  }


  actualizarPuntosRonda();
}


function mostrarMensajePalabras(
  texto
) {

  const mensaje =
    document.getElementById(
      "mensajePalabras"
    );

  if (mensaje) {

    mensaje.textContent =
      texto;
  }
}


/* =========================================================
   20. HISTORIA DE LA IGLESIA
   ========================================================= */

function iniciarHistoria() {

  partida =
    obtenerVariosAleatorios(
      "historiaIglesia",
      historiaIglesia,
      5
    );


  indicePregunta = 0;

  puntosRonda = 0;


  mostrarHistoria();
}


function mostrarHistoria() {

  if (
    indicePregunta >=
    partida.length
  ) {

    sonidoAplausos();

    completarModulo(
      "historia",
      "⛪ Guardián de la Historia"
    );

    return;
  }


  const pregunta =
    partida[indicePregunta];


  const app =
    document.getElementById("app");

  const opciones = mezclar(pregunta.opciones);
  app.innerHTML = `

    <div class="juego-contenedor">

      ${encabezadoJuego(
        "⛪ Ciudad de la Historia",
        `Capítulo ${
          indicePregunta + 1
        } de ${partida.length}`
      )}


      <div class="historia-intro">

        <div class="historia-personaje">
          🧑‍🦱
        </div>

        <p>
          Los primeros cristianos
          enfrentaron momentos difíciles,
          pero permanecieron firmes en su fe.
        </p>

      </div>


      <div class="pregunta-card">

        <h2>
          ${pregunta.pregunta}
        </h2>


        <div class="opciones">

          ${opciones.map(
            opcion => `

              <button
                class="opcion-trivia"
                onclick="
                  responderHistoria(
                    this,
                    '${escapeJS(
                      opcion
                    )}'
                  )
                ">

                ${opcion}

              </button>

            `
          ).join("")}

        </div>

      </div>

    </div>

  `;
}


function responderHistoria(
  boton,
  respuesta
) {

  const pregunta =
    partida[indicePregunta];


  const botones =
    document.querySelectorAll(
      ".opcion-trivia"
    );


  botones.forEach(
    b =>
      b.disabled = true
  );


  if (
    respuesta ===
    pregunta.correcta
  ) {

    boton.classList.add(
      "correcta"
    );

    puntosRonda += 10;

    jugador.puntos += 10;

    sonidoCorrecto();

  } else {

    boton.classList.add(
      "incorrecta"
    );

    botones.forEach(b => {

      if (
        b.textContent.trim() ===
        pregunta.correcta
      ) {

        b.classList.add(
          "correcta"
        );

      }

    });

    sonidoIncorrecto();
  }


  guardarJugador();

  actualizarPuntosRonda();


  setTimeout(() => {

    indicePregunta++;

    mostrarHistoria();

  }, 1200);
}


/* =========================================================
   21. COMPLETAR MÓDULO
   ========================================================= */

function completarModulo(
  id,
  insignia
) {

  const nuevo =
    !jugador.completados.includes(
      id
    );


  if (nuevo) {

    jugador.completados.push(id);

    if (
      insignia &&
      !jugador.insignias.includes(
        insignia
      )
    ) {

      jugador.insignias.push(
        insignia
      );
    }

  }


  guardarJugador();

  mostrarVictoria(
    id,
    insignia,
    nuevo
  );
}


/* =========================================================
   22. PANTALLA DE VICTORIA
   ========================================================= */

function mostrarVictoria(
  id,
  insignia,
  nuevo
) {

  lanzarConfeti();

  const app =
    document.getElementById("app");


  app.innerHTML = `

    <div class="pantalla-victoria">

      <div class="trofeo">
        🏆
      </div>

      <h1>
        ¡Excelente!
      </h1>

      <h2>
        ${moduloActual.nombre}
      </h2>

      <p>
        ${
          nuevo
            ? "¡Has completado este lugar de la aventura!"
            : "¡Has vuelto a jugar este lugar!"
        }
      </p>


      <div class="premio-puntos">

        ⭐ +${puntosRonda}
        puntos

      </div>


      ${
        nuevo && insignia
          ? `
            <div class="insignia-nueva">

              🏅

              <strong>
                Nueva insignia
              </strong>

              <span>
                ${insignia}
              </span>

            </div>
          `
          : ""
      }


      <button
        class="btn-principal"
        onclick="mostrarMapa()">

        🗺️ VOLVER AL MAPA

      </button>

    </div>

  `;

}


/* =========================================================
   23. COFRE DEL TESORO
   ========================================================= */

function mostrarCofre() {

  setTimeout(() => {

    lanzarConfeti();

    sonidoFanfarria();

    const mensaje =
      document.createElement(
        "div"
      );

    mensaje.className =
      "cofre-premio";

    mensaje.innerHTML = `

      <div>
        🎁
      </div>

      <h2>
        ¡COFRE DEL TESORO ABIERTO!
      </h2>

      <p>
        ¡Has conseguido 100 puntos de fe!
      </p>

      <button
        onclick="
          this.parentElement.remove()
        ">

        ✨ CONTINUAR

      </button>

    `;


    document.body.appendChild(
      mensaje
    );

  }, 500);
}


/* =========================================================
   24. CONFETI
   ========================================================= */

function lanzarConfeti() {

  const cantidad = 45;


  for (
    let i = 0;
    i < cantidad;
    i++
  ) {

    const confeti =
      document.createElement(
        "div"
      );


    confeti.className =
      "confeti";


    confeti.style.left =
      Math.random() * 100 + "%";


    confeti.style.animationDelay =
      Math.random() * 0.8 + "s";


    confeti.style.transform =
      `rotate(${
        Math.random() * 360
      }deg)`;


    document.body.appendChild(
      confeti
    );


    setTimeout(() => {

      confeti.remove();

    }, 3000);
  }
}


/* =========================================================
   25. PERFIL
   ========================================================= */

function mostrarPerfil() {

  const app =
    document.getElementById("app");


  const porcentaje =
    Math.round(
      (jugador.completados.length /
        modulos.length) * 100
    );


  app.innerHTML = `

    <div class="perfil">

      <button
        class="btn-volver"
        onclick="mostrarMapa()">
        ⬅️ Volver
      </button>


      <div class="perfil-avatar">

        ${
          jugador.avatar
            ? jugador.avatar.emoji
            : "🙂"
        }

      </div>


      <h1>
        ${jugador.nombre}
      </h1>


      <div class="estadisticas">

        <div>
          ⭐
          <strong>
            ${jugador.puntos}
          </strong>
          <span>
            Puntos
          </span>
        </div>


        <div>
          🗺️
          <strong>
            ${jugador.completados.length}
          </strong>
          <span>
            Lugares
          </span>
        </div>


        <div>
          📊
          <strong>
            ${porcentaje}%
          </strong>
          <span>
            Progreso
          </span>
        </div>

      </div>


      <button
        class="btn-principal"
        onclick="mostrarMapa()">

        🗺️ CONTINUAR AVENTURA

      </button>

    </div>

  `;
}


/* =========================================================
   26. INSIGNIAS
   ========================================================= */

function mostrarInsignias() {

  const app =
    document.getElementById("app");


  app.innerHTML = `

    <div class="perfil">

      <button
        class="btn-volver"
        onclick="mostrarMapa()">
        ⬅️ Volver
      </button>


      <h1>
        🏅 Mis Insignias
      </h1>


      <div class="insignias-grid">

        ${
          jugador.insignias.length
            ? jugador.insignias.map(
                insignia => `

                  <div class="insignia">

                    🏅

                    <strong>
                      ${insignia}
                    </strong>

                  </div>

                `
              ).join("")
            : `
              <p>
                Todavía no tienes
                insignias.
                ¡Completa un módulo!
              </p>
            `
        }

      </div>

    </div>

  `;
}


/* =========================================================
   27. UTILIDADES DE SEGURIDAD
   ========================================================= */

function escapeHTML(texto) {

  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function escapeJS(texto) {

  return String(texto)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "\\'")
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r");
}


/* =========================================================
   28. MENSAJE DE BIENVENIDA
   ========================================================= */

console.log(
  "📖 Aventura Bíblica cargada correctamente."
);

console.log(
  "✨ El Tesoro de la Fe está listo para comenzar."
);