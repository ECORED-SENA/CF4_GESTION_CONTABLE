export default {
  global: {
    componenteFormativo: 'Obligaciones tributarias, territoriales y nacionales',
    descripcionCurso:
      'En este componente formativo tendrá la oportunidad de abordar las generalidades acerca de los impuestos, su estructura, clasificación, tipos de contribuyentes e importancia que tiene para el sostenimiento del Estado. Los impuestos se dividen de acuerdo con su estructura tributaria en nacionales, municipales y departamentales y según las necesidades del Estado, para ello tendrá la oportunidad de comprender su organización, clasificación y las normas establecidas y vigentes, como un ejercicio fundamental para el proceso de formación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Impuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos y elementos de los Impuestos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura y clasificación de los impuestos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Regímenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'De acuerdo a normativa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Contribuyente y declarante',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Responsabilidades',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aprendizaje, S. N. (s.f.). Biblioteca SENA. Obtenido de Biblioteca SENA',
      link: 'https://www.sena.edu.co/es-co/Paginas/default.aspx',
    },
    {
      referencia:
        'CCB. (s.f.). Cámara de Comercio de Bogotá. Recuperado de Cámara de Comercio de Bogotá',
      link: 'https://www.ccb.org.co/',
    },
    {
      referencia:
        'CTCP. (2018). Consejo Técnico de la Contaduría Pública. Obtenido de Consejo Técnico de la Contaduría Pública',
      link: 'https://www.ctcp.gov.co/',
    },
    {
      referencia:
        'Digital, G. (s.f.). Secretaria Distrital de Hacienda. Obtenido de Secretaria Distrital de Hacienda',
      link: 'https://www.shd.gov.co/shd/contribuyentes',
    },
    {
      referencia:
        'Especial, U. A. (2018). Junta Central de Contadores. Obtenido de Junta Central de Contadores',
      link: 'https://www.jcc.gov.co/',
    },
    {
      referencia:
        'Eficiente, C. C. (2012). Guía para la codificación de bienes y servicios de acuerdo con el código estándar de productos y servicios de Naciones Unidas. [En línea] 2012. [Citado el: 4 de Abril de 2016.].',
      link:
        'http://www.colombiacompra.gov.co/sites/default/files/manuales/manualclasificador.pdf',
    },
    {
      referencia:
        'Gonzalez, F., & Calderón, V. (2002). Las reformas tributarias en Colombia durante el siglo XX (II). Boletines de divulgación económica, 9.',
    },
    {
      referencia:
        'Hacienda, M. d. (2019). Dirección de Impuestos y Aduanas Nacionales. Obtenido de Dirección de Impuestos y Aduanas Nacionales',
      link: 'https://www.dian.gov.co/',
    },
    {
      referencia:
        "IFRS. (2018). IFRS Foundation's. Obtenido de IFRS Foundation's",
      link: 'https://www.ifrs.org/',
    },
    {
      referencia:
        'INCP. (2018). Instituto Nacional de Contadores Públicos Colombia. Obtenido de Instituto Nacional de Contadores Públicos Colombia',
      link: 'https://www.incp.org.co/',
    },
    {
      referencia:
        'Legis (2019, 16 de abril) Nuevas responsabilidades en el RUT. ',
      link:
        'http://www.comunidadcontable.com/BancoConocimiento/Otros/nuevas-responsabilidades-en-el-rut.asp?Miga=&CodSeccion=',
    },
    {
      referencia:
        'MinComercio. (s.f.). Superintendencia de Sociedades. Obtenido de Superintendencia de Sociedades',
      link: 'https://www.supersociedades.gov.co/SitePages/Inicio.aspx',
    },
    {
      referencia:
        'Ministerio de Comercio, I. y. (s.f.). MinComercio. Obtenido de MinComercio',
      link: 'https://www.mincit.gov.co/',
    },
    {
      referencia:
        'Morales, A. M. C., Pineda, C. M. R., & Monsalve, O. O. V. (2019). La primera reforma tributaria en la historia de la humanidad. Entramado, 15(1), 152-163.',
    },
    {
      referencia:
        'Murcia , D. (10 de Noviembre de 2011). Impuestos en Colombia. Obtenido de Impuestos en Colombia',
      link:
        'http://inpuestos-geografia.blogspot.com/2011/11/impuesto-el-impuesto-es-una-clase-de.html',
    },
    {
      referencia:
        'Secretaría Distrital de Hacienda (2020, 28 de octubre) Estatuto tributario. ',
      link: 'https://www.shd.gov.co/shd/pub-tri-estatuto',
    },
    {
      referencia:
        'Secretaría Distrital de Hacienda (2020, 28 de octubre) Otros impuestos y tributos.',
      link: 'https://www.shd.gov.co/shd/otros-impuestos-y-tributos',
    },
    {
      referencia:
        'Serrano Valenzuela, J. (2019) Guía legis para la declaración de renta. Legis.',
    },
  ],
  glosario: [
    {
      termino: 'Base gravable',
      significado:
        'Es el valor o unidad de medida sobre el cual se aplica la tarifa, con el fin de establecer la cuantía del tributo.',
    },
    {
      termino: 'Calendario tributario',
      significado:
        'Cronograma o listado de fechas establecidas por la autoridad tributaria para el cumplimiento de ciertas obligaciones a cargo de los administrados, así como la presentación de declaraciones, el pago oportuno de los impuestos o el suministro de información solicitada por vía general y que es publicado para conocimiento general de los ciudadanos y para facilitar el cumplimiento voluntario de sus obligaciones tributarias.',
    },
    {
      termino: 'Contribuyente',
      significado:
        'Es toda persona natural o jurídica llamada para cumplir ciertas obligaciones tributarias por la realización del hecho generador establecido en la ley para el nacimiento del tributo.',
    },
    {
      termino: 'Declarante',
      significado:
        'Persona natural o jurídica que presenta una declaración tributaria.',
    },
    {
      termino: 'Hecho generador',
      significado:
        'Es el evento o suceso, expresamente definido en la ley, por el cual se origina la obligación tributaria.',
    },
    {
      termino: 'Impuesto',
      significado:
        'Es el tributo que establece la ley a favor del Sujeto Activo, y a cargo de los sujetos a quienes se les atribuya la realización del hecho imponible de la obligación tributaria.',
    },
    {
      termino: 'Impuesto de industria, comercio, avisos y tableros',
      significado:
        'El impuesto de Industria y Comercio se genera por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios.',
    },
    {
      termino: 'Impuesto sobre las ventas',
      significado:
        'Es un impuesto sobre el gasto o consumo generalmente de tipo masivo del orden nacional, de naturaleza indirecta, real, de causación instantánea, y de régimen general, que recae bajo la modalidad de valor agregado, es decir se aplica en las diferentes etapas del ciclo económico de producción, comercialización importación.',
    },
    {
      termino: 'Impuesto de renta y complementarios',
      significado:
        'El impuesto de renta es un impuesto directo, que recae sobre los contribuyentes individualmente considerados y grava a quienes en la ley están previstos como sujetos pasivos que hayan percibido ingresos, hecho generador de la obligación sustancial del impuesto, susceptible de producir un incremento neto en el patrimonio.',
    },
    {
      termino: 'Persona natural ',
      significado: 'Es un individuo que actúa en nombre propio.',
    },
    {
      termino: 'Persona jurídica',
      significado:
        'Es una sociedad, organismo o entidad conformada por uno o varios individuos para cumplir un objetivo social con o sin fines de lucro.',
    },
    {
      termino: 'Retención en la fuente',
      significado:
        'Es el simple cobro anticipado de un determinado impuesto que bien puede ser el impuesto de renta, a las ventas o de industria y comercio.',
    },
    {
      termino: 'Sujeto activo',
      significado:
        'Es el Estado como acreedor de la prestación pecuniaria que se deriva de la realización del hecho generador del tributo.',
    },
    {
      termino: 'Sujeto pasivo',
      significado:
        'Es aquél a quien se le atribuye la realización del hecho impositivo de la obligación tributaria.',
    },
    {
      termino: 'Tarifa',
      significado:
        'Es la unidad de medida o porcentaje que se aplica a la base gravable para determinar la cuantía del tributo.',
    },
  ],
  complementario: [
    {
      texto: 'Estatuto Tributario (ET) - Decreto 0624 de 1989',
      tipo: 'Libro',
      link: 'https://estatuto.co/',
    },
    {
      texto: 'Secretaria de hacienda de Bogotá',
      tipo: 'Página web',
      link: 'https://www.shd.gov.co/shd/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Patricia Mantilla Galvis',
        cargo: 'Instructor',
        centro: 'Centro de servicios Financieros Regional Distrito Capital',
      },
      {
        nombre: 'Maryury Agudelo Franco',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología Distrito Capital',
      },
      {
        nombre: 'Bertha Paola Bejarano Avila',
        cargo: 'Evaluador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital ',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Maria Carolina Tamayo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
