import { useState } from "react";

// ── SVG ILLUSTRATIONS ────────────────────────────────────────────────────────

const LogoShield = () => (
  <svg width="48" height="48" viewBox="0 0 52 52" fill="none">
    <path d="M26 4L8 12v14c0 10.5 7.7 20.3 18 22.7C36.3 46.3 44 36.5 44 26V12L26 4z"
      fill="#fff" fillOpacity=".2" stroke="#fff" strokeWidth="2"/>
    <path d="M26 10L13 16.5v11c0 8 5.8 15.5 13 17.5 7.2-2 13-9.5 13-17.5v-11L26 10z"
      fill="#fff" fillOpacity=".1"/>
    <text x="26" y="31" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="900">V</text>
  </svg>
);

const CharacterBoy = () => (
  <svg width="115" height="190" viewBox="0 0 115 190" fill="none">
    <ellipse cx="57" cy="148" rx="36" ry="38" fill="#4CAF50"/>
    <ellipse cx="57" cy="138" rx="19" ry="22" fill="#388E3C"/>
    <rect x="50" y="105" width="14" height="16" rx="5" fill="#FDBCB4"/>
    <ellipse cx="57" cy="88" rx="28" ry="30" fill="#FDBCB4"/>
    <ellipse cx="57" cy="63" rx="28" ry="14" fill="#3E2723"/>
    <ellipse cx="34" cy="76" rx="9" ry="16" fill="#3E2723"/>
    <ellipse cx="80" cy="76" rx="9" ry="16" fill="#3E2723"/>
    <ellipse cx="47" cy="87" rx="6" ry="7" fill="#fff"/>
    <ellipse cx="67" cy="87" rx="6" ry="7" fill="#fff"/>
    <ellipse cx="48" cy="88" rx="4" ry="4.5" fill="#1a0533"/>
    <ellipse cx="68" cy="88" rx="4" ry="4.5" fill="#1a0533"/>
    <ellipse cx="49" cy="86" rx="1.5" ry="1.5" fill="#fff"/>
    <ellipse cx="69" cy="86" rx="1.5" ry="1.5" fill="#fff"/>
    <path d="M42 80 Q48 77 54 80" stroke="#3E2723" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M62 80 Q68 77 74 80" stroke="#3E2723" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <path d="M47 100 Q57 110 67 100" stroke="#E91E63" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <ellipse cx="38" cy="97" rx="7" ry="5" fill="#FFB3BA" fillOpacity=".55"/>
    <ellipse cx="76" cy="97" rx="7" ry="5" fill="#FFB3BA" fillOpacity=".55"/>
    {/* Waving arm */}
    <path d="M21 135 Q5 108 14 87" stroke="#4CAF50" strokeWidth="17" strokeLinecap="round" fill="none"/>
    <ellipse cx="15" cy="83" rx="11" ry="11" fill="#FDBCB4"/>
    {/* Fingers */}
    <line x1="8" y1="76" x2="10" y2="70" stroke="#FDBCB4" strokeWidth="4" strokeLinecap="round"/>
    <line x1="14" y1="73" x2="15" y2="67" stroke="#FDBCB4" strokeWidth="4" strokeLinecap="round"/>
    <line x1="20" y1="74" x2="22" y2="68" stroke="#FDBCB4" strokeWidth="4" strokeLinecap="round"/>
    {/* Right arm */}
    <path d="M93 135 Q106 150 102 165" stroke="#4CAF50" strokeWidth="17" strokeLinecap="round" fill="none"/>
    {/* Jeans */}
    <path d="M40 182 Q38 188 40 192" stroke="#1565C0" strokeWidth="15" strokeLinecap="round" fill="none"/>
    <path d="M74 182 Q76 188 74 192" stroke="#1565C0" strokeWidth="15" strokeLinecap="round" fill="none"/>
    <ellipse cx="39" cy="192" rx="9" ry="4" fill="#0D47A1"/>
    <ellipse cx="75" cy="192" rx="9" ry="4" fill="#0D47A1"/>
  </svg>
);

const CharacterGirl = () => (
  <svg width="110" height="190" viewBox="0 0 110 190" fill="none">
    <ellipse cx="55" cy="148" rx="33" ry="37" fill="#7B1FA2"/>
    <ellipse cx="55" cy="138" rx="17" ry="20" fill="#6A1B9A"/>
    <rect x="48" y="105" width="14" height="16" rx="5" fill="#FDBCB4"/>
    <ellipse cx="55" cy="87" rx="27" ry="29" fill="#FDBCB4"/>
    <ellipse cx="55" cy="62" rx="27" ry="13" fill="#3E2723"/>
    <rect x="28" y="63" width="11" height="56" rx="5.5" fill="#3E2723"/>
    <rect x="71" y="63" width="11" height="56" rx="5.5" fill="#3E2723"/>
    <ellipse cx="33" cy="119" rx="5.5" ry="3.5" fill="#3E2723"/>
    <ellipse cx="77" cy="119" rx="5.5" ry="3.5" fill="#3E2723"/>
    <ellipse cx="44" cy="85" rx="6" ry="7" fill="#fff"/>
    <ellipse cx="66" cy="85" rx="6" ry="7" fill="#fff"/>
    <ellipse cx="45" cy="86" rx="4" ry="4.5" fill="#1a0533"/>
    <ellipse cx="67" cy="86" rx="4" ry="4.5" fill="#1a0533"/>
    <ellipse cx="46" cy="84" rx="1.5" ry="1.5" fill="#fff"/>
    <ellipse cx="68" cy="84" rx="1.5" ry="1.5" fill="#fff"/>
    {/* Lashes */}
    <line x1="39" y1="80" x2="40" y2="77" stroke="#3E2723" strokeWidth="1.2"/>
    <line x1="44" y1="79" x2="44" y2="76" stroke="#3E2723" strokeWidth="1.2"/>
    <line x1="50" y1="80" x2="51" y2="77" stroke="#3E2723" strokeWidth="1.2"/>
    <line x1="61" y1="80" x2="62" y2="77" stroke="#3E2723" strokeWidth="1.2"/>
    <line x1="66" y1="79" x2="66" y2="76" stroke="#3E2723" strokeWidth="1.2"/>
    <line x1="72" y1="80" x2="73" y2="77" stroke="#3E2723" strokeWidth="1.2"/>
    <path d="M45 99 Q55 109 65 99" stroke="#E91E63" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <ellipse cx="35" cy="96" rx="7" ry="5" fill="#FFB3BA" fillOpacity=".55"/>
    <ellipse cx="75" cy="96" rx="7" ry="5" fill="#FFB3BA" fillOpacity=".55"/>
    {/* Thumbs up */}
    <path d="M88 135 Q104 120 100 100" stroke="#7B1FA2" strokeWidth="17" strokeLinecap="round" fill="none"/>
    <ellipse cx="99" cy="96" rx="12" ry="12" fill="#FDBCB4"/>
    <path d="M100 91 Q108 84 110 92 Q112 100 103 103" stroke="#FDBCB4" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <path d="M22 135 Q10 148 14 162" stroke="#7B1FA2" strokeWidth="17" strokeLinecap="round" fill="none"/>
    {/* Skirt/legs */}
    <path d="M40 183 Q38 190 40 194" stroke="#CE93D8" strokeWidth="14" strokeLinecap="round" fill="none"/>
    <path d="M70 183 Q72 190 70 194" stroke="#CE93D8" strokeWidth="14" strokeLinecap="round" fill="none"/>
    <ellipse cx="39" cy="194" rx="9" ry="4" fill="#4A148C"/>
    <ellipse cx="71" cy="194" rx="9" ry="4" fill="#4A148C"/>
  </svg>
);

const CharacterKid = ({ shirtColor = "#7B1FA2", worried = false }) => (
  <svg width="85" height="135" viewBox="0 0 85 135" fill="none">
    <ellipse cx="42" cy="100" rx="27" ry="30" fill={shirtColor}/>
    <rect x="35" y="73" width="14" height="14" rx="5" fill="#FDBCB4"/>
    <ellipse cx="42" cy="58" rx="23" ry="24" fill="#FDBCB4"/>
    <ellipse cx="42" cy="38" rx="23" ry="12" fill="#3E2723"/>
    <ellipse cx="21" cy="52" rx="8" ry="14" fill="#3E2723"/>
    <ellipse cx="63" cy="52" rx="8" ry="14" fill="#3E2723"/>
    <ellipse cx="33" cy="56" rx="5" ry="6" fill="#fff"/>
    <ellipse cx="51" cy="56" rx="5" ry="6" fill="#fff"/>
    <ellipse cx="34" cy="57" rx="3.5" ry="4" fill="#1a0533"/>
    <ellipse cx="52" cy="57" rx="3.5" ry="4" fill="#1a0533"/>
    <ellipse cx="35" cy="55" rx="1.2" ry="1.2" fill="#fff"/>
    <ellipse cx="53" cy="55" rx="1.2" ry="1.2" fill="#fff"/>
    {worried
      ? <path d="M35 69 Q42 65 49 69" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" fill="none"/>
      : <path d="M35 68 Q42 75 49 68" stroke="#E91E63" strokeWidth="2" strokeLinecap="round" fill="none"/>
    }
    {worried && <>
      <path d="M28 51 Q33 47 38 51" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <path d="M46 51 Q51 47 56 51" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </>}
    <ellipse cx="24" cy="65" rx="5" ry="3.5" fill="#FFB3BA" fillOpacity=".5"/>
    <ellipse cx="60" cy="65" rx="5" ry="3.5" fill="#FFB3BA" fillOpacity=".5"/>
    <path d="M15 100 Q7 112 10 126" stroke={shirtColor} strokeWidth="13" strokeLinecap="round" fill="none"/>
    <path d="M69 100 Q77 112 74 126" stroke={shirtColor} strokeWidth="13" strokeLinecap="round" fill="none"/>
  </svg>
);

const ShadowFigure = () => (
  <svg width="75" height="135" viewBox="0 0 75 135" fill="none">
    <ellipse cx="37" cy="58" rx="22" ry="23" fill="#263238"/>
    <rect x="26" y="77" width="22" height="14" rx="4" fill="#263238"/>
    <ellipse cx="37" cy="100" rx="28" ry="30" fill="#37474F"/>
    <ellipse cx="37" cy="58" rx="22" ry="23" fill="#000" fillOpacity=".35"/>
    <circle cx="37" cy="58" r="13" fill="#000" fillOpacity=".5"/>
    <text x="37" y="64" textAnchor="middle" fontSize="20" fill="rgba(255,255,255,0.7)" fontWeight="900">?</text>
    <path d="M9 100 Q2 114 5 128" stroke="#37474F" strokeWidth="13" strokeLinecap="round" fill="none"/>
    <path d="M65 100 Q72 114 69 128" stroke="#37474F" strokeWidth="13" strokeLinecap="round" fill="none"/>
  </svg>
);

const TrophySVG = () => (
  <svg width="110" height="118" viewBox="0 0 110 118" fill="none">
    <defs>
      <linearGradient id="tg1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFE57F"/>
        <stop offset="100%" stopColor="#FF8F00"/>
      </linearGradient>
    </defs>
    {[[8,12],[97,16],[5,68],[100,72],[50,5]].map(([x,y],i)=>(
      <text key={i} x={x} y={y} fontSize="14" fill="#FFD700" opacity=".7">★</text>
    ))}
    <rect x="34" y="99" width="42" height="11" rx="5" fill="url(#tg1)"/>
    <rect x="26" y="108" width="58" height="9" rx="4" fill="#E65100"/>
    <rect x="47" y="87" width="16" height="14" rx="3" fill="url(#tg1)"/>
    <path d="M16 22 Q12 58 26 78 Q40 94 55 94 Q70 94 84 78 Q98 58 94 22Z" fill="url(#tg1)"/>
    <path d="M30 32 Q33 25 41 27" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" opacity=".55"/>
    <path d="M16 32 Q3 42 5 56 Q7 67 18 65" stroke="#F57F17" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <path d="M94 32 Q107 42 105 56 Q103 67 92 65" stroke="#F57F17" strokeWidth="7" strokeLinecap="round" fill="none"/>
    <text x="55" y="68" textAnchor="middle" fontSize="26" fill="#fff" fontWeight="900" opacity=".85">★</text>
  </svg>
);

// ── DATA ─────────────────────────────────────────────────────────────────────

const LEVELS = [
  {
    id:1, title:"Nivel 1", topic:"Tus Derechos", emoji:"⚖️",
    bg:"#3B0764", mid:"#5B21B6", accent:"#7C3AED",
    shirtColor:"#4CAF50",
    case:"Sofía tiene 12 años y siente que los adultos no la escuchan cuando dice que algo le incomoda.",
    caseName:"El caso de Sofía",
    questions:[
      {q:"Sofía le dice a un adulto que algo le molesta, pero él responde: 'Los niños no pueden opinar'. ¿Qué derecho de Sofía está siendo ignorado?",
       opts:["El derecho a jugar","El derecho a ser escuchada y expresarse","El derecho a estudiar","El derecho a comer"],correct:1,
       fb:"¡Correcto! Todos los niños y niñas tienen derecho a expresar lo que sienten y a ser escuchados. ¡Tu voz importa!"},
      {q:"Un adulto le toca el cuerpo a Sofía y ella se siente muy incómoda. ¿Qué debe hacer?",
       opts:["Quedarse callada para no meterse en problemas","Decírselo a un adulto de confianza lo antes posible","Pensar que fue un accidente y olvidarlo","Escaparse de casa"],correct:1,
       fb:"¡Muy bien! Siempre debes contarle a un adulto de confianza. No es tu culpa y tienes derecho a estar segura."},
      {q:"¿Cuáles son las partes privadas del cuerpo que nadie puede tocar sin tu permiso?",
       opts:["Solo la cara","Las partes cubiertas por el vestido de baño","Solo los pies","Solo las manos"],correct:1,
       fb:"¡Excelente! Las partes cubiertas por tu vestido de baño son privadas. Solo un médico puede verlas con permiso de tus padres."},
      {q:"¿Quién es responsable de proteger los derechos de Sofía?",
       opts:["Solo Sofía misma","Solo la policía","La familia, el Estado y la sociedad en general","Solo sus amigos"],correct:2,
       fb:"¡Correcto! Tu familia, el Estado y toda la comunidad tienen la responsabilidad de proteger tus derechos."},
      {q:"Sofía siente que un adulto la trata de manera que no le gusta. ¿Puede decir 'NO'?",
       opts:["No, porque los adultos siempre tienen la razón","Sí, siempre puede decir NO cuando algo la incomoda","Solo si sus papás están cerca","Solo si es un extraño"],correct:1,
       fb:"¡Sí! Tienes el poder de decir NO. Tu cuerpo te pertenece y nadie tiene derecho a hacerte sentir incómoda."}
    ]
  },
  {
    id:2, title:"Nivel 2", topic:"¿Qué es la ESCNNA?", emoji:"🛡️",
    bg:"#0C2461", mid:"#1D4ED8", accent:"#3B82F6",
    shirtColor:"#1976D2",
    case:"Mateo tiene 13 años y su vecino mayor le da dinero y regalos, pero le pide que guarden un secreto.",
    caseName:"El caso de Mateo",
    questions:[
      {q:"Cual de estas opciones explica mejor que es la ESCNNA?",
       opts:["Un juego de internet para niños","Cuando alguien usa a un niño para obtener beneficios sexuales a cambio de dinero o regalos","Una enfermedad contagiosa","Un programa del colegio"],correct:1,
       fb:"¡Correcto! La ESCNNA es una forma grave de abuso. Nunca es culpa del niño o la niña."},
      {q:"El vecino de Mateo le da regalos y le dice que es un secreto. ¿Esto es normal?",
       opts:["Sí, es muy amable de su parte","No, los adultos no deben pedir secretos a los niños sobre regalos o dinero","Solo si los regalos son pequeños","Sí, siempre que Mateo lo quiera"],correct:1,
       fb:"¡Muy bien! Cuando un adulto te pide guardar secretos sobre regalos o dinero, es una señal de alerta. ¡Cuéntaselo a alguien!"},
      {q:"¿La ESCNNA puede ocurrir también por internet o redes sociales?",
       opts:["No, solo ocurre en persona","Sí, también puede ocurrir en línea a través de chats, fotos o videos","Solo en países lejanos","Solo con personas desconocidas"],correct:1,
       fb:"¡Correcto! La explotación también ocurre en línea. Nunca envíes fotos tuyas a extraños ni compartas información personal."},
      {q:"¿Un niño que sufre ESCNNA tiene la culpa de lo que le pasa?",
       opts:["Sí, porque pudo haberse ido","Sí, si aceptó los regalos","No, nunca. La culpa siempre es del adulto agresor","Depende de la situación"],correct:2,
       fb:"¡Nunca es culpa del niño o la niña! El adulto siempre es el responsable. Los niños necesitan apoyo y protección."},
      {q:"Mateo siente que algo está mal con la situación del vecino. ¿Qué debería hacer?",
       opts:["Seguir aceptando los regalos en silencio","Contarle a un adulto de confianza como sus papás o un maestro","Hablar con el vecino para que pare","Ignorarlo y esperar que pase solo"],correct:1,
       fb:"¡Excelente! Contar lo que pasa a un adulto de confianza es siempre la mejor opción. ¡No estás solo!"}
    ]
  },
  {
    id:3, title:"Nivel 3", topic:"Riesgos y Señales", emoji:"🚨",
    bg:"#7F0000", mid:"#B91C1C", accent:"#EF4444",
    shirtColor:"#E53935",
    case:"Valentina tiene 11 años y en redes sociales un chico que dice tener 14 años quiere conocerla en persona.",
    caseName:"El caso de Valentina",
    questions:[
      {q:"Un desconocido en redes sociales le dice a Valentina que quiere ser su novio y verla en persona. ¿Esto es una señal de alerta?",
       opts:["No, puede ser un chico muy bueno","Sí, es una señal de peligro. No debemos encontrarnos con desconocidos de internet","Solo si le pide fotos","No, si ya llevan semanas hablando"],correct:1,
       fb:"¡Correcto! Nunca debes encontrarte con alguien que conociste solo por internet. ¡Es una señal de peligro!"},
      {q:"¿Cuál de estas situaciones puede ser un riesgo para Valentina?",
       opts:["Hablar con sus amigos del colegio en el recreo","Compartir su dirección y fotos con un desconocido en internet","Contarle a su mamá sobre sus amigos","Hacer tareas con compañeros de clase"],correct:1,
       fb:"¡Muy bien! Compartir tu dirección, fotos o información personal con desconocidos es muy peligroso."},
      {q:"El chico de internet le dice: 'Si me mandas una foto, te mando un regalo'. ¿Qué debe hacer Valentina?",
       opts:["Mandar solo una foto de su cara","No enviar nada, bloquear al usuario y contarle a un adulto","Preguntar primero qué regalo es","Mandarlo si confía en él"],correct:1,
       fb:"¡Excelente! Bloquear y contar a un adulto es lo correcto. Pedir fotos a cambio de regalos es manipulación."},
      {q:"¿Cuál es una señal de que un adulto cercano puede tener malas intenciones?",
       opts:["Te saluda con cariño en familia","Siempre quiere estar a solas contigo y te pide guardar secretos","Te ayuda con las tareas frente a todos","Te invita a comer con tu familia"],correct:1,
       fb:"¡Correcto! Buscar estar siempre a solas y pedir secretos son señales de alerta. ¡Confía en tus instintos!"},
      {q:"Valentina siente un 'presentimiento incomodo' cuando habla con ese chico. ¿Qué significa esa sensación?",
       opts:["Que está enamorada","Que su cuerpo le está avisando que algo está mal","Que necesita comer más","Que es tímida"],correct:1,
       fb:"¡Muy bien! Tu cuerpo te avisa cuando algo está mal. ¡Esa sensación de miedo es una señal importante, escúchala!"}
    ]
  },
  {
    id:4, title:"Nivel 4", topic:"Rutas de Atención", emoji:"📞",
    bg:"#064E3B", mid:"#065F46", accent:"#10B981",
    shirtColor:"#2E7D32",
    case:"Camilo tiene 12 años y sabe que un amigo suyo está siendo maltratado. Quiere ayudarlo pero no sabe a dónde ir.",
    caseName:"El caso de Camilo",
    questions:[
      {q:"Camilo quiere ayudar a su amigo. ¿A quién puede acudir primero?",
       opts:["A un influencer en redes sociales","A un adulto de confianza como un maestro, familiar o vecino responsable","A los compañeros del salón","A nadie, es mejor no meterse"],correct:1,
       fb:"¡Correcto! El primer paso es contarle a un adulto de confianza. ¡No tienes que resolver esto solo!"},
      {q:"¿Qué entidad en Colombia recibe denuncias de maltrato o abuso a niños y niñas?",
       opts:["El supermercado","El ICBF (Instituto Colombiano de Bienestar Familiar)","La biblioteca","El banco"],correct:1,
       fb:"¡Muy bien! El ICBF protege a los niños y niñas en Colombia. Puedes llamar al 141 gratis desde cualquier teléfono."},
      {q:"¿Qué número puedes marcar en Colombia para reportar un caso de abuso a niños?",
       opts:["Solo el 123 (para emergencias)","141 (línea gratuita del ICBF)","311","01800"],correct:1,
       fb:"¡Excelente! El 141 es la línea gratuita del ICBF. También puedes llamar al 123 para emergencias policiales."},
      {q:"Camilo tiene miedo de que no le crean. ¿Qué debe recordar?",
       opts:["Que es mejor callarse","Que tiene derecho a ser escuchado y que las autoridades están para protegerlo","Que los adultos siempre ignoran a los niños","Que debe resolver el problema solo"],correct:1,
       fb:"¡Correcto! Tienes derecho a ser escuchado. Las autoridades y entidades están para protegerte a ti y a tus amigos."},
      {q:"Además del ICBF, ¿a quién más puede acudir Camilo para denunciar?",
       opts:["Solo al ICBF, no hay más opciones","A la Policía de Infancia y Adolescencia, la Fiscalía o la Comisaría de Familia","Solo a sus papás","A nadie más"],correct:1,
       fb:"¡Muy bien! Hay varias entidades: Policía, Fiscalía, Comisaría de Familia y el ICBF. ¡No estás solo!"}
    ]
  },
  {
    id:5, title:"Nivel 5", topic:"¿Cómo Actuar y Ayudar?", emoji:"🤝",
    bg:"#3B0764", mid:"#6B21A8", accent:"#A855F7",
    shirtColor:"#7B1FA2",
    case:"Daniela tiene 13 años y su mejor amiga le contó llorando que un familiar la toca de manera inapropiada.",
    caseName:"El caso de Daniela",
    questions:[
      {q:"La amiga de Daniela le contó algo muy difícil. ¿Qué debe hacer Daniela primero?",
       opts:["Regañarla por no haberlo dicho antes","Escucharla con calma, creerle y decirle que no es su culpa","Contárselo a todos los del salón","Decirle que exagera"],correct:1,
       fb:"¡Excelente! Lo más importante es escuchar, creer y acompañar. Decirle que no es su culpa es fundamental."},
      {q:"La amiga le pide a Daniela que no le cuente a nadie. ¿Qué debe hacer Daniela?",
       opts:["Guardar el secreto para siempre","Explicarle que necesita contarle a un adulto de confianza para protegerla, aunque sea difícil","Publicarlo en redes sociales","Olvidarse del tema"],correct:1,
       fb:"¡Correcto! Guardar este secreto puede hacerle daño a tu amiga. Contarle a un adulto no es traicionar, ¡es proteger!"},
      {q:"¿Cómo puede Daniela apoyar a su amiga después de contarle a un adulto?",
       opts:["Alejarse para no tener problemas","Acompañarla, recordarle que no está sola y que hizo lo correcto","Decirle que ya no es su amiga","Contarle a todos para que la apoyen"],correct:1,
       fb:"¡Muy bien! Ser un apoyo constante es muy valioso. Tu amistad y compañía ayudan mucho en momentos difíciles."},
      {q:"¿Qué NO debes hacer si un amigo te cuenta que está siendo abusado?",
       opts:["Creerle y tomarlo en serio","Reírte, no creerle o decirle que está exagerando","Ayudarle a buscar un adulto de confianza","Escucharlo con atención"],correct:1,
       fb:"¡Correcto! Nunca debes reírte ni dudar de tu amigo. El apoyo y la confianza son fundamentales para que pueda pedir ayuda."},
      {q:"Daniela se siente triste y asustada después de lo que le contó su amiga. ¿Está bien sentirse así?",
       opts:["No, debe ser valiente y no sentir nada","Sí, es normal sentir emociones fuertes. Ella también puede buscar apoyo en un adulto de confianza","Solo si lloró mucho","No, eso significa que es débil"],correct:1,
       fb:"¡Muy bien! Es completamente normal sentirse afectado. Tú también puedes pedir apoyo. ¡Eres muy valiente al ayudar a tu amiga!"}
    ]
  }
];

const OPT_STYLES = [
  { bg:"#22C55E", shadow:"rgba(34,197,94,0.45)" },
  { bg:"#F97316", shadow:"rgba(249,115,22,0.45)" },
  { bg:"#EF4444", shadow:"rgba(239,68,68,0.45)" },
  { bg:"#8B5CF6", shadow:"rgba(139,92,246,0.45)" },
];
const OPT_LABELS = ["A","B","C","D"];

export default function App() {
  const [screen, setScreen]     = useState("home");
  const [lvIdx, setLvIdx]       = useState(0);
  const [qIdx,  setQIdx]        = useState(0);
  const [chosen, setChosen]     = useState(null);
  const [stars,  setStars]      = useState(0);
  const [score,  setScore]      = useState(0);
  const [lvOk,   setLvOk]       = useState(0);

  const lv = LEVELS[lvIdx];
  const q  = lv?.questions[qIdx];
  const answered = chosen !== null;
  const isRight  = chosen === q?.correct;
  const totalQ   = LEVELS.reduce((a,l)=>a+l.questions.length,0);

  const pick = (idx) => {
    if (answered) return;
    setChosen(idx);
    if (idx === q.correct) { setStars(s=>s+1); setScore(s=>s+20); setLvOk(c=>c+1); }
  };

  const nextQ = () => {
    if (qIdx < lv.questions.length-1) { setQIdx(i=>i+1); setChosen(null); }
    else setScreen("lvDone");
  };

  const nextLv = () => {
    if (lvIdx < LEVELS.length-1) { setLvIdx(i=>i+1); setQIdx(0); setChosen(null); setLvOk(0); setScreen("game"); }
    else setScreen("final");
  };

  const reset = () => { setScreen("home"); setLvIdx(0); setQIdx(0); setChosen(null); setStars(0); setScore(0); setLvOk(0); };

  const GS = `
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');
    *{box-sizing:border-box}
    .pulse{animation:pulse 2s infinite}
    @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
    .float{animation:float 3s ease-in-out infinite}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    .pop{animation:pop .45s cubic-bezier(.36,1.56,.64,1) both}
    @keyframes pop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
    .slide{animation:slide .35s ease both}
    @keyframes slide{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
    .opt:hover{filter:brightness(1.08);transform:scale(1.015)!important}
    .opt{transition:all .15s!important}
    .spin{animation:spin 10s linear infinite}
    @keyframes spin{to{transform:rotate(360deg)}}
  `;

  // ── HOME ──────────────────────────────────────────────────────────────────
  if (screen === "home") return (
    <div style={{minHeight:"100vh",background:"linear-gradient(165deg,#2D0B6B 0%,#5B21B6 50%,#7C3AED 80%,#A78BFA 100%)",fontFamily:"'Nunito',sans-serif",display:"flex",flexDirection:"column",alignItems:"center",overflow:"hidden",position:"relative"}}>
      <style>{GS}</style>
      {/* bg circles */}
      <div style={{position:"absolute",top:-100,right:-80,width:350,height:350,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:-80,left:-60,width:280,height:280,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"35%",left:-50,width:180,height:180,borderRadius:"50%",background:"rgba(167,139,250,0.1)",pointerEvents:"none"}}/>

      {/* top bar */}
      <div style={{width:"100%",background:"rgba(0,0,0,0.28)",padding:"13px 20px",display:"flex",alignItems:"center",gap:12}}>
        <LogoShield/>
        <div>
          <div style={{color:"#fff",fontWeight:900,fontSize:15,lineHeight:1}}>VOCES QUE PROTEGEN</div>
          <div style={{color:"rgba(255,255,255,0.6)",fontSize:10,fontWeight:700,letterSpacing:1.5}}>PREVENCIÓN DE LA ESCNNA</div>
        </div>
        <div style={{marginLeft:"auto",background:"rgba(255,215,0,0.2)",border:"1px solid rgba(255,215,0,0.4)",borderRadius:50,padding:"5px 14px"}}>
          <span style={{color:"#FFD700",fontWeight:900,fontSize:14}}>⭐ {stars}</span>
        </div>
      </div>

      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 20px 0",zIndex:1,width:"100%",maxWidth:460}}>
        <div style={{background:"rgba(255,255,255,0.12)",borderRadius:50,padding:"6px 20px",marginBottom:14,border:"1px solid rgba(255,255,255,0.2)"}}>
          <span style={{color:"#FFD700",fontWeight:800,fontSize:12,letterSpacing:2}}>🎮 JUEGO EN LÍNEA</span>
        </div>

        <h1 style={{color:"#fff",fontSize:"clamp(28px,8vw,46px)",fontWeight:900,margin:"0 0 10px",lineHeight:1.05,textAlign:"center",textShadow:"0 4px 20px rgba(0,0,0,0.35)"}}>
          ¡BIENVENIDO/A<br/>AL JUEGO!
        </h1>
        <p style={{color:"rgba(255,255,255,0.8)",fontSize:15,textAlign:"center",marginBottom:20,lineHeight:1.6,maxWidth:320}}>
          Pon a prueba lo que sabes y aprende a protegerte de la ESCNNA.
        </p>

        {/* Characters */}
        <div className="float" style={{display:"flex",alignItems:"flex-end",gap:4,marginBottom:16}}>
          <CharacterBoy/>
          <CharacterGirl/>
        </div>

        {/* Level grid */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%",marginBottom:22}}>
          {LEVELS.map(l=>(
            <div key={l.id} style={{background:"rgba(255,255,255,0.1)",borderRadius:14,padding:"10px 14px",border:"1px solid rgba(255,255,255,0.18)",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:22}}>{l.emoji}</span>
              <div>
                <div style={{color:"#FFD700",fontWeight:800,fontSize:11}}>{l.title}</div>
                <div style={{color:"rgba(255,255,255,0.7)",fontSize:10,lineHeight:1.3}}>{l.topic}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="pulse" onClick={()=>setScreen("game")} style={{background:"linear-gradient(135deg,#FFD700,#FF8C00)",border:"none",borderRadius:50,padding:"18px 54px",fontSize:20,fontWeight:900,color:"#2D0B6B",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 8px 32px rgba(255,165,0,0.45), 0 0 0 5px rgba(255,215,0,0.18)",letterSpacing:1,marginBottom:10}}>
          ▶ COMENZAR
        </button>
        <p style={{color:"rgba(255,255,255,0.4)",fontSize:11,textAlign:"center",marginBottom:24}}>Para niñas, niños y adolescentes de 10 a 14 años</p>
      </div>
    </div>
  );

  // ── LEVEL DONE ────────────────────────────────────────────────────────────
  if (screen === "lvDone") return (
    <div style={{minHeight:"100vh",background:`linear-gradient(160deg,${lv.bg} 0%,${lv.mid} 55%,${lv.accent} 100%)`,fontFamily:"'Nunito',sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}}>
      <style>{GS}</style>
      <div className="pop" style={{textAlign:"center",maxWidth:380,width:"100%"}}>
        <TrophySVG/>
        <h2 style={{color:"#fff",fontSize:30,fontWeight:900,margin:"14px 0 4px",textShadow:"0 4px 16px rgba(0,0,0,0.3)"}}>¡Nivel Completado!</h2>
        <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,marginBottom:18}}>{lv.title} · {lv.topic}</p>

        <div style={{background:"rgba(0,0,0,0.25)",borderRadius:20,padding:"18px 24px",marginBottom:16,border:"1px solid rgba(255,255,255,0.2)"}}>
          <div style={{fontSize:32,marginBottom:6,letterSpacing:4}}>
            {[...Array(5)].map((_,i)=><span key={i} style={{opacity:i<lvOk?1:0.2}}>⭐</span>)}
          </div>
          <div style={{color:"#FFD700",fontSize:20,fontWeight:900}}>{lvOk}/5 respuestas correctas</div>
          <div style={{color:"rgba(255,255,255,0.6)",fontSize:12,marginTop:4}}>Ganaste +{lvOk*20} ⭐ puntos en este nivel</div>
        </div>

        <div style={{background:"rgba(255,255,255,0.1)",borderRadius:16,padding:"13px 16px",marginBottom:20,border:"1px solid rgba(255,255,255,0.18)",textAlign:"left"}}>
          <div style={{color:"#FFD700",fontWeight:800,fontSize:12,marginBottom:5}}>🛡️ Recuerda siempre:</div>
          <p style={{color:"rgba(255,255,255,0.82)",fontSize:12,margin:0,lineHeight:1.55}}>
            {lv.id===1 && "Tu cuerpo te pertenece y siempre puedes decir NO."}
            {lv.id===2 && "La ESCNNA nunca es culpa del niño o la niña. Los agresores son los responsables."}
            {lv.id===3 && "Confía en tu instinto. Si algo te da miedo, cuéntaselo a un adulto de confianza."}
            {lv.id===4 && "Llama al 141 (ICBF) si necesitas ayuda. ¡Es gratis y confidencial!"}
            {lv.id===5 && "Apoyar a un amigo también es ser valiente. ¡No estás solo/a!"}
          </p>
        </div>

        <button onClick={nextLv} style={{background:"#fff",border:"none",borderRadius:50,padding:"15px",fontSize:16,fontWeight:900,color:lv.mid,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 8px 24px rgba(0,0,0,0.25)",width:"100%"}}>
          {lvIdx<LEVELS.length-1 ? `Ir al ${LEVELS[lvIdx+1].title} ${LEVELS[lvIdx+1].emoji}` : "🏆 Ver resultados finales"}
        </button>
      </div>
    </div>
  );

  // ── FINAL ─────────────────────────────────────────────────────────────────
  if (screen === "final") {
    const pct = Math.round((stars/totalQ)*100);
    const badge = pct>=80 ? "🥇 ¡Protector/a Experto/a!" : pct>=60 ? "🥈 ¡Muy bien hecho!" : "🥉 ¡Sigue aprendiendo!";
    return (
      <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0C1A4D 0%,#1D4ED8 60%,#60A5FA 100%)",fontFamily:"'Nunito',sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}}>
        <style>{GS}</style>
        <div className="pop" style={{textAlign:"center",maxWidth:420,width:"100%"}}>
          <div style={{fontSize:72,marginBottom:4}}>🏆</div>
          <div style={{display:"flex",justifyContent:"center",gap:3,marginBottom:12}}>
            {[...Array(5)].map((_,i)=><span key={i} style={{fontSize:22,opacity:i<Math.round(pct/20)?1:0.2}}>⭐</span>)}
          </div>
          <h1 style={{color:"#FFD700",fontSize:28,fontWeight:900,margin:"0 0 6px"}}>{badge}</h1>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:14,marginBottom:20}}>Completaste los 5 niveles</p>

          <div style={{background:"rgba(0,0,0,0.25)",borderRadius:20,padding:22,marginBottom:16,border:"1px solid rgba(255,255,255,0.2)"}}>
            <div style={{fontSize:42,fontWeight:900,color:"#FFD700"}}>{stars} ⭐ / {totalQ}</div>
            <div style={{background:"rgba(255,255,255,0.15)",borderRadius:50,height:12,margin:"12px 0 8px",overflow:"hidden"}}>
              <div style={{width:`${pct}%`,height:"100%",background:"linear-gradient(90deg,#FFD700,#FF8C00)",borderRadius:50}}/>
            </div>
            <div style={{color:"#FFD700",fontSize:24,fontWeight:900}}>{score} puntos</div>
          </div>

          <div style={{background:"rgba(255,255,255,0.1)",borderRadius:16,padding:"14px 16px",marginBottom:20,textAlign:"left",border:"1px solid rgba(255,255,255,0.18)"}}>
            <p style={{color:"#FFD700",fontWeight:800,fontSize:13,marginBottom:8}}>🌟 Siempre recuerda:</p>
            {["Tu cuerpo te pertenece. Puedes decir NO.","Nunca es tu culpa si alguien te lastima.","Cuéntaselo siempre a un adulto de confianza.","Llama al 141 (ICBF) gratis si necesitas ayuda.","Apoyar a un amigo también es ser valiente."].map((t,i)=>(
              <div key={i} style={{display:"flex",gap:8,marginBottom:5}}>
                <span style={{color:"#A78BFA",fontSize:14,flexShrink:0}}>✦</span>
                <span style={{color:"rgba(255,255,255,0.85)",fontSize:12,lineHeight:1.5}}>{t}</span>
              </div>
            ))}
          </div>
          <button onClick={reset} style={{background:"linear-gradient(135deg,#FFD700,#FF8C00)",border:"none",borderRadius:50,padding:"16px",fontSize:17,fontWeight:900,color:"#0C1A4D",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 6px 24px rgba(255,165,0,0.35)",width:"100%"}}>
            🔄 Jugar de nuevo
          </button>
        </div>
      </div>
    );
  }

  // ── GAME ──────────────────────────────────────────────────────────────────
  return (
    <div style={{minHeight:"100vh",background:`linear-gradient(170deg,${lv.bg} 0%,${lv.mid} 55%,${lv.accent} 100%)`,fontFamily:"'Nunito',sans-serif",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:32}}>
      <style>{GS}</style>

      {/* Header */}
      <div style={{width:"100%",background:"rgba(0,0,0,0.28)",padding:"12px 18px",display:"flex",alignItems:"center",gap:10}}>
        <LogoShield/>
        <div style={{flex:1}}>
          <div style={{color:"rgba(255,255,255,0.55)",fontSize:9,fontWeight:700,letterSpacing:1.5}}>VOCES QUE PROTEGEN</div>
          <div style={{color:"#fff",fontSize:13,fontWeight:900}}>{lv.title} · {lv.topic}</div>
        </div>
        <div style={{background:"rgba(255,215,0,0.2)",border:"1px solid rgba(255,215,0,0.4)",borderRadius:50,padding:"5px 14px",display:"flex",alignItems:"center",gap:5}}>
          <span style={{color:"#FFD700",fontSize:16}}>⭐</span>
          <span style={{color:"#FFD700",fontWeight:900,fontSize:14}}>{stars}</span>
        </div>
      </div>

      <div style={{width:"100%",maxWidth:480,padding:"12px 16px 0"}}>
        {/* Progress */}
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
          <span style={{color:"rgba(255,255,255,0.65)",fontSize:11,fontWeight:700}}>Pregunta {qIdx+1} de {lv.questions.length}</span>
          <span style={{color:"rgba(255,255,255,0.65)",fontSize:11,fontWeight:700}}>Nivel {lv.id} / {LEVELS.length}</span>
        </div>
        <div style={{background:"rgba(255,255,255,0.18)",borderRadius:50,height:10,marginBottom:12}}>
          <div style={{width:`${(qIdx/lv.questions.length)*100}%`,height:"100%",background:"linear-gradient(90deg,#FFD700,#FF8C00)",borderRadius:50,transition:"width .4s ease"}}/>
        </div>

        {/* Case chip */}
        <div style={{background:"rgba(0,0,0,0.22)",borderRadius:14,padding:"10px 14px",marginBottom:10,border:"1px solid rgba(255,255,255,0.15)"}}>
          <div style={{color:"#FFD700",fontWeight:800,fontSize:11,marginBottom:3}}>📖 {lv.caseName}</div>
          <div style={{color:"rgba(255,255,255,0.78)",fontSize:12,lineHeight:1.45}}>{lv.case}</div>
        </div>
      </div>

      {/* Characters */}
      <div className="slide" style={{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:20,padding:"0 20px",marginBottom:4}}>
        <CharacterKid shirtColor={lv.shirtColor} worried={true}/>
        <ShadowFigure/>
      </div>

      {/* Question card */}
      <div className="slide" style={{width:"100%",maxWidth:480,padding:"0 16px"}}>
        <div style={{background:"#fff",borderRadius:24,padding:"22px 20px",boxShadow:"0 20px 60px rgba(0,0,0,0.35)"}}>
          <p style={{color:"#1a0533",fontSize:"clamp(14px,3.8vw,16px)",fontWeight:800,margin:"0 0 18px",lineHeight:1.5}}>{q.q}</p>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {q.opts.map((opt,idx)=>{
              const s = OPT_STYLES[idx%OPT_STYLES.length];
              let bg = s.bg, shadow = `0 4px 14px ${s.shadow}`;
              let label = OPT_LABELS[idx];
              if (answered) {
                if (idx===q.correct)       { bg="#22C55E"; shadow="0 4px 14px rgba(34,197,94,0.5)"; label="✓"; }
                else if (idx===chosen)     { bg="#EF4444"; shadow="0 4px 14px rgba(239,68,68,0.5)"; label="✗"; }
                else                        { bg="#CBD5E1"; shadow="none"; }
              }
              return (
                <button key={idx} className="opt" onClick={()=>pick(idx)} style={{background:bg,border:"none",borderRadius:14,padding:"13px 16px",cursor:answered?"default":"pointer",display:"flex",alignItems:"center",gap:14,boxShadow:shadow,fontFamily:"inherit",opacity:answered&&idx!==q.correct&&idx!==chosen?0.5:1}}>
                  <span style={{minWidth:30,height:30,borderRadius:"50%",background:"rgba(0,0,0,0.2)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:14,flexShrink:0}}>{label}</span>
                  <span style={{color:"#fff",fontWeight:700,fontSize:13,textAlign:"left",lineHeight:1.35}}>{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feedback */}
      {answered && (
        <div className="slide" style={{width:"100%",maxWidth:480,padding:"10px 16px 0"}}>
          <div style={{background:isRight?"linear-gradient(135deg,#22C55E,#16A34A)":"linear-gradient(135deg,#EF4444,#DC2626)",borderRadius:20,padding:"16px 18px",boxShadow:isRight?"0 8px 24px rgba(34,197,94,0.35)":"0 8px 24px rgba(239,68,68,0.35)"}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
              <span style={{fontSize:26}}>{isRight?"🎉":"💡"}</span>
              <span style={{color:"#fff",fontWeight:900,fontSize:15}}>{isRight?"¡Muy bien! +20 ⭐":"No olvides que..."}</span>
            </div>
            <p style={{color:"rgba(255,255,255,0.9)",fontSize:13,margin:0,lineHeight:1.5}}>{q.fb}</p>
          </div>
          <button onClick={nextQ} style={{width:"100%",marginTop:10,background:"linear-gradient(135deg,#FFD700,#FF8C00)",border:"none",borderRadius:50,padding:"15px",fontSize:16,fontWeight:900,color:"#1a0533",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 6px 24px rgba(255,165,0,0.4)"}}>
            {qIdx<lv.questions.length-1 ? "Siguiente pregunta →" : "Ver resultados del nivel 🏁"}
          </button>
        </div>
      )}
    </div>
  );
}
