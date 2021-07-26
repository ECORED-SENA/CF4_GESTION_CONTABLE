<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Impuestos

    figure.mb-5
      .video
        <iframe width="990" height="557" src="https://www.youtube.com/embed/HL9RtAhdPAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
    #t_1_1.titulo-segundo
      .h2 1.1 Conceptos y elementos de los impuestos

    p.mb-5 Con el fin de generar un aprendizaje significativo y avanzar en tan importante tema, a continuación, se relacionan los conceptos de los tributos en Colombia, que constituyen los ingresos corrientes de la nación. Así mismo, se analizan los elementos de los impuestos:
    .row(style='justify-content: space-between;').mb-5
      .col-lg-3.me-5
        figure.mb-4
          img(src='@/assets/curso/tema1/img1.svg', alt='Tasas', style='width:295px;').mx-auto
        .h4.mb-2 Tasas
        p.mb-4 Contraprestación directa por un servicio prestado, por ejemplo: se pagan los servicios públicos y a cambio se goza del servicio de energía, acueducto, etc
      .col-lg-3.me-5
        figure.mb-5
          img(src='@/assets/curso/tema1/img2.svg', alt='Contribuciones', style='width:295px;').mx-auto
        .h4.mb-2 Contribuciones
        p.mb-4 Son tributos que paga el contribuyen al Estado por algún beneficio recibido. Por ejemplo, es el caso del impuesto de valorización cuando el Estado realiza inversiones en obras y la zona adquiere un mayor valor.
      .col-lg-3.me-5
        figure(style='margin-bottom:35px;')
          img(src='@/assets/curso/tema1/img3.svg', alt='Ipuestos', style='width:295px;').mx-auto
        .h4.mb-2 Impuestos
        p.mb-4 Son aquellos tributos que no generan contraprestación alguna. Entre ellos, encontramos: impuesto al valor agregado (IVA), impuesto de renta y complementarios. Es una obligación sustancial, que debe darse cumplimiento si contempla todos los requisitos para su liquidación.

    .h3.mb-4 Concepto
    .cajon.color-primario.p-4.mb-5
          p.mb-0 Los impuestos tienen su origen en los fundamentos vistos en la Constitución Política de Colombia, según el cual todas las naciones están en el deber de contribuir al financiamiento de los gastos e inversiones del Estado dentro de los conceptos de justicia y equidad (artículo 95, numeral 9º de la Constitución Política de Colombia).

    .h3.mb-4 Elementos de los impuestos
    p.mb-4 Luego de estudiar las diferencias entre los tributos: tasas, contribuciones e impuestos; ahora se profundizará en las generalidades de los impuestos. Conforme a esto, se relacionan los siguientes elementos:


    .row.mb-5.justify-content-center

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-4
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/icon1.svg', alt='Texto que describa la imagen', style="width:86px;").mx-auto

          h4.mb-4.text-center Sujeto activo 
          p.text-medium.text-center Es la entidad encargada de administrar los impuestos, quien está facultado para exigir el cumplimiento de la obligación. En Colombia los impuestos Nacionales son recaudados por la Dirección de Impuestos y Aduanas Nacionales (DIAN).

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-4
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/icon2.svg', alt='Texto que describa la imagen', style="width:86px;").mx-auto

          h4.mb-4.text-center Sujeto pasivo 
          p.text-medium.text-center(style="margin-bottom:60px;") Es el deudor de la obligación tributaria, pueden ser personas naturales o jurídicas que cumplen con los requisitos exigidos por la norma para declarar determinado impuesto.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-4
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/icon3.svg', alt='Texto que describa la imagen', style="width:86px;").mx-auto

          h4.mb-4.text-center Hecho generador del impuesto 
          p.text-medium.text-center(style="margin-bottom:82px;") Son los actos que originan la obligación tributaria. Por ejemplo, la compra o venta de un producto o servicio. 
    
    .row.mb-5.justify-content-center
    
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-5
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/icon4.svg', alt='Texto que describa la imagen', style="width:86px;").mx-auto

          h4.mb-4.text-center  Base gravable 
          p.text-medium.text-center(style="margin-bottom:80px;") Es el valor total al cual se le aplica la tarifa del impuesto.
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-4.mt-5
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/icon5.svg', alt='Texto que describa la imagen', style="width:86px;").mx-auto
          h4.mb-4.text-center Tarifa 
          p.text-medium.text-center(style="margin-bottom:55px;") Es el porcentaje que se aplica a la base gravable para determinar el impuesto a cargo. Pinillos, J. (2014, 9-19.).

    separador

    #t_1_2.titulo-segundo
      .h2 1.2 Estructura y clasificación de los impuestos
    
    p.mb-5 Continuamos con la clasificación y estructura de los impuestos, donde se analizará cada uno de estos, teniendo en cuenta sus características y requisitos.

    .h3.mb-4 Directos e indirectos
    p.mb-4 Recordemos que existe la clasificación de impuesto directos e indirectos, que se encuentra relacionado con la capacidad de tributación y de progresividad en la tributación.

    .row.mb-5
      .col-lg-6(style='background-color:#5E6178;')
        .row.justify-content-center
          .col-lg-10.p-5
            .h4.mb-4.text-white Impuestos directos
            p.mb-4.text-white Son pagados por la persona a quien se grava, cuya relación fiscal es directamente con el sujeto activo del impuesto, afectando principalmente los ingresos o pertenencias.
            p.mb-4.text-white Algunos ejemplos son:
            ul.lista-ul
              li 
                i.far.fa-folder-open(style='color:#FFD947;')
                p.mb-0.text-white Impuesto al patrimonio.
              li 
                i.far.fa-folder-open(style='color:#FFD947;')
                p.mb-0.text-white Impuesto sobre la renta y complementarios.
              li 
                i.far.fa-folder-open(style='color:#FFD947;')
                p.mb-0.text-white Impuesto de industria y comercio (ICA).
              li 
                i.far.fa-folder-open(style='color:#FFD947;')
                p.mb-0.text-white Impuesto predial.
              li 
                i.far.fa-folder-open(style='color:#FFD947;')
                p.mb-0.text-white Impuesto vehículos.
      .col-lg-6(style='background-color:#F2E9E4;')
        .row.justify-content-center
          .col-lg-10.p-5
            .h4.mb-4 Impuestos indirectos
            p.mb-4 Recae   sobre   las operaciones gravadas a lo largo del ciclo económico, en forma no acumulada y con la metodología del valor agregado. Son aquellos, cuya responsabilidad jurídica es diferente a la persona que económicamente asume el impuesto.
            p.mb-4 Ejemplos de Martínez et al. (2016):
            ul.lista-ul
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 Impuesto a las ventas (IVA).
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 Gravamen a los movimientos financieros (GMF).
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 Impuesto de registro.

    .h3.mb-4 Nacionales, departamentales y distritales
    p.mb-5 En el contexto tributario colombiano, los impuestos se encuentran clasificados en nacionales, departamentales y municipales; por ende, es importante tener en cuenta el sujeto activo que se encuentra delegado para administrar, controlar y recaudar cada uno de los impuestos, además de analizar la normativa que aplica para cada uno de estos.

    .h3.mb-4 Impuestos nacionales
    .row.mb-4
      .col-lg-6
        p.mb-4 Son impuestos administrados por la nación, siendo esta su ámbito de aplicación. Son emitidos por el poder ejecutivo y sancionados por el presidente de la república una vez hayan sido aprobados por el congreso.
        p.mb-4 Entre los impuestos nacionales encontramos, principalmente:
        ol.lista-ol--cuadro.mb-5.ms-5
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Impuesto sobre las ventas.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Impuesto de renta.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Gravamen a los movimientos financieros.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Impuesto al patrimonio.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Impuesto al consumo.
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Impuesto unificado bajo el régimen simple de tributación.
        .cajon.color-primario.p-4.mb-5
          p.mb-0 A continuación, se realizará una breve descripción de cada uno de estos. Recuerde que para profundizar debe tener en cuenta el Estatuto Tributario (ET)- Decreto 0624 de 1989, así como, la normatividad legal vigente.

      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img4.svg', alt='Impuestos nacionales', style="width:620px;").mx-auto


    .h3.mb-4 Impuesto sobre las ventas
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          h4.mb-0.text-center Concepto
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p Es un impuesto nacional de naturaleza indirecta, aplicable a la venta de bienes y prestación de servicios que se encuentran expresamente gravados por las tarifas establecidas en la normatividad legal vigente. Para efectos de dar aplicabilidad a dicho impuesto, se tiene en cuenta la clasificación de operaciones:


    .h3.mb-4 Clasificación de bienes y servicios

    .row.mb-5.justify-content-center

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style='cursor:default; background-color: #F2E9E4')
          .row.justify-content-center.mb-4.mt-4
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/img5.svg', alt='gravados', style="width:216px;").mx-auto
          .row.justify-content-center.mb-4
            .col-auto(style='border-bottom: 3px solid #A66D58;')
              h4.mb-2.text-center Gravados 
          p.text-medium.text-center(style="margin-bottom:205px;") Son aquellos que originan impuesto, teniendo en cuenta que se les asigna una tarifa establecida por disposición legal. Por lo anterior, es necesario verificar la tarifa general y las tarifas diferenciales para su correcta aplicación. Se localizan en el artículo 468 del Estatuto Tributario (ET).

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style='cursor:default; background-color: #F2E9E4')
          .row.justify-content-center.mb-4.mt-4
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/img6.svg', alt='exentos', style="width:233px;").mx-auto
          .row.justify-content-center.mb-4
            .col-auto(style='border-bottom: 3px solid #A66D58;')
                h4.mb-2.text-center Exentos 
          p.text-medium.text-center(style="margin-bottom:105px;") Son bienes que por normativa se encuentran gravados a la tarifa del 0 %. Quienes produzcan bienes exentos, son responsables del impuesto a las ventas, y por tanto deben declarar IVA, pero quienes comercialicen bienes exentos no son responsables del impuesto a las ventas. De este modo, sólo los productores de bienes exentos pueden solicitar como descuento el IVA pagado en sus compras. Se encuentran señalados en los artículos 477 a 481 del Estatuto Tributario (ET).

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4(style='cursor:default; background-color: #F2E9E4')
          .row.justify-content-center.mb-4.mt-4
            .col-7
              figure.mb-4
                img(src='@/assets/curso/tema1/img7.svg', alt='excluidos', style="width:233px;").mx-auto
          .row.justify-content-center.mb-4
            .col-auto(style='border-bottom: 3px solid #A66D58;')
                h4.mb-2.text-center Excluidos
          p.text-medium.text-center(style="margin-bottom:82px;") Son aquellos bienes y servicios que por normatividad legal no se encuentran gravados a alguna tarifa, por ende, no se genera impuesto. Para conocer el listado es necesario remitirse al Estatuto tributario (ET) en los artículos 424-428 y 476 (ET), donde aparece un grupo de bienes identificados con la metodología del arancel de aduanas. El listado incluye la numeración o posición arancelaria (NANDINA) y la descripción de la mercancía, siguiendo los reinos de la naturaleza y sus fases de transformación. Colombia Compra Eficiente (2012).

    .h3.mb-4 Requisitos
    p.mb-4 Según el artículo 437 del ET:
    p.mb-5 Deberán registrarse como responsables del IVA quienes realicen actividades gravadas con el impuesto, con excepción de las personas naturales comerciantes y los artesanos, que sean minoristas o detallistas, los pequeños agricultores y los ganaderos, así como quienes presten servicios, siempre y cuando cumplan la totalidad de las siguientes condiciones:

    .row.justify-content-center.mb-5
      .col-lg-6
        ol.lista-ol--cuadro.mb-5
            li 
              .lista-ol--cuadro__vineta
                span 1
              p.mb-0 Que en el año anterior o en el año en curso hubieren obtenido ingresos brutos totales provenientes de la actividad, inferiores a 3.500 UVT.
            li 
              .lista-ol--cuadro__vineta
                span 2
              p.mb-0 Que no tengan más de un establecimiento de comercio, oficina, sede, local o negocio donde ejerzan su actividad.
            li 
              .lista-ol--cuadro__vineta
                span 3
              p.mb-0 Que, en el establecimiento de comercio, oficina, sede, local o negocio no se desarrollen actividades bajo franquicia, concesión, regalía, autorización o cualquier otro sistema que implique la explotación de intangibles.
            li 
              .lista-ol--cuadro__vineta
                span 4
              p.mb-0 Que no sean usuarios aduaneros.
            li 
              .lista-ol--cuadro__vineta
                span 5
              p.mb-0 Que no hayan celebrado en el año inmediatamente anterior ni en el año en curso contratos de venta de bienes y/o prestación de servicios gravados por valor individual, igual o superior a 3.500 UVT.

            li 
              .lista-ol--cuadro__vineta
                span 6
              p.mb-0 Que el monto de sus consignaciones bancarias, depósitos o inversiones financieras durante el año anterior o durante el respectivo año no supere la suma de 3.500 UVT.
            li 
              .lista-ol--cuadro__vineta
                span 7
              p.mb-0 Las entidades emisoras de tarjetas crédito y débito, los vendedores de tarjetas prepago, los recaudadores de efectivo a cargo de terceros, y los demás que designe la Dirección de Impuestos y Aduanas Nacionales (DIAN) en el momento del correspondiente pago o abono en cuenta a los prestadores desde el exterior, de los siguientes servicios electrónicos o digitales, cuando el proveedor del servicio se acoja voluntariamente a este sistema alternativo de pago del impuesto.
            li 
              .lista-ol--cuadro__vineta
                span 8
              p.mb-0 Los responsables del impuesto sobre las ventas (IVA) cuando adquieran bienes corporales muebles o servicios gravados, de personas que se encuentren registradas como contribuyentes del impuesto unificado bajo el Régimen Simple de Tributación -SIMPLE.
      .col-lg-5
        figure.mb-2
          img(src='@/assets/curso/tema1/img8.png', alt='imagen que acompaña listado de requisitos', style="width:400px;").mx-auto
        figure
          img(src='@/assets/curso/tema1/img9.svg', alt='imagen que acompaña listado de requisitos', style="width:400px;").mx-auto

    p.mb-5 En el caso de pasar los límites establecidos en las condiciones registradas anteriormente, el contribuyente debe registrarse como responsable de IVA, de lo contrario será no responsable.

    .h3.mb-4 Periodos de presentación
    p.mb-5 De acuerdo con el Estatuto Tributario (ET) artículo 600, se establece el periodo gravable de forma bimestral y cuatrimestral teniendo en cuenta los siguientes requisitos:

    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center(style='margin-bottom:40px;')
              .col-6
                figure.mt-2
                  img(src='@/assets/curso/tema1/img10.svg', alt='Bimestral', style="width:162px").mx-auto
              
            .h2.text-center(style='margin-bottom:35px;') Bimestral
            p.text-center.text-white La declaración y pago bimestral para aquellos responsables de este impuesto, grandes contribuyentes y aquellas personas jurídicas y naturales cuyos ingresos brutos a 31 de diciembre del año gravable anterior sean iguales o superiores a noventa y dos mil (92.000) UVT y para los responsables de que tratan los artículos 477 y 481 de este Estatuto. Los períodos bimestrales son: enero-febrero; marzo-abril; mayo-junio; julio-agosto; septiembre-octubre; y noviembre-diciembre.
          
          .col-md.tarjeta.color-acento-contenido.p-5
            .row.justify-content-center.mb-5
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img11.svg', alt='Estructura', style="width:152px").mx-auto
            .h2.text-center(style='margin-bottom:35px;') Cuatrimestral
            p.text-center Declaración y pago cuatrimestral para aquellos responsables de este impuesto, personas jurídicas y naturales cuyos ingresos brutos a 31 de diciembre del año gravable anterior sean inferiores a noventa y dos mil (92.000) UVT. Los periodos cuatrimestrales serán enero-abril; mayo-agosto; y septiembre-diciembre.
        
        .row.mb-5
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img12.svg', alt='categoria de impuesto a las ventas', style="width:400px").mx-auto
          .col-lg-7
            .h3.mb-4 Categoría del impuesto a las ventas
            p.mb-4 #[strong IVA generado:] es el impuesto cobrado por el vendedor en el momento de realizar una venta de un bien o servicio gravado.
            p.mb-4 #[strong IVA descontable:] es el impuesto pagado o causado por el comprador en el momento de realizar una compra de un bien o servicio gravado.

    .h3.mb-5 Impuesto de renta

    .row.justify-content-center.mb-5
      .col-lg-7
        .bloque-texto-d.color-secundario.p-2(style='border-top:0')
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            span.text-regular El impuesto de renta es un impuesto directo, que recae sobre los contribuyentes individualmente considerados y grava a quienes en la ley están previstos como sujetos pasivos que hayan percibido ingresos, hecho generador de la obligación sustancial del impuesto, susceptible de producir un incremento neto en el patrimonio.
            i.fas.fa-quote-right
            p.text-end.mb-0
              b  (Serrano, 2019)
      .col-lg-5.align-self-center
        figure
          img(src='@/assets/curso/tema1/img13.svg', alt='impuesto de renta', style="width:400px").mx-auto

    p.mb-5 Es de recordar que este impuesto, relaciona los elementos del impuesto y que es fundamental identificarlos:

    .row.justify-content-center.mb-4
      .col-lg-4
        figure.mb-2
          img(src='@/assets/curso/tema1/img14.svg', alt='imagen que acompaña a los elementos del impuesto de renta', style="width:400px").mx-auto
      .col-lg-8
        .row.justify-content-center.p-3.mb-2(style="background-color:#5e617826; border-radius:10px;")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema1/icon6.svg', alt='Avatar', style="width:85px").mx-auto
          .col-lg-10.align-self-center
            p.mb-0 #[strong Sujeto activo:] es el Estado y es administrado por la Dirección de impuestos y Aduanas Nacionales (DIAN).
        
        .row.justify-content-center.p-3.mb-2(style="background-color:#5e617826; border-radius:10px;")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema1/icon6.svg', alt='Avatar', style="width:85px").mx-auto
          .col-lg-10.align-self-center
            p.mb-0 #[strong Sujeto pasivo:] son los contribuyentes obligados a declarar de acuerdo con los requisitos establecidos en la norma.

        .row.justify-content-center.p-3.mb-2(style="background-color:#5e617826; border-radius:10px;")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema1/icon6.svg', alt='Avatar', style="width:85px").mx-auto
          .col-lg-10.align-self-center
            p.mb-0 #[strong Hecho generador:] es la obtención de ingresos que pueden generar incremento neto del patrimonio.
        
        .row.justify-content-center.p-3.mb-2(style="background-color:#5e617826; border-radius:10px;")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema1/icon6.svg', alt='Avatar', style="width:85px").mx-auto
          .col-lg-10.align-self-center
            p.mb-0 #[strong Base gravable:] renta líquida gravable.
        
        .row.justify-content-center.p-3.mb-2(style="background-color:#5e617826; border-radius:10px;")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema1/icon6.svg', alt='Avatar', style="width:85px").mx-auto
          .col-lg-10.align-self-center
            p.mb-0 #[strong Tarifa:] para aplicar la tarifa se tiene en cuenta si es una persona jurídica o personal natural; en este último se tiene en cuenta la normativa legal vigente teniendo en cuenta el sistema cedular.


    .row.tarjeta--palida.mb-5
      .col-lg-12.mt-5
        .row.justify-content-center.mb-5
          .col-lg-11
            .h3.mb-4 Gravamen a los movimientos financieros
          .col-lg-5
            figure.mb-2
              img(src='@/assets/curso/tema1/img15.svg', alt='Gravamen a los movimientos financieros', style="width:505px").mx-auto
          .col-lg-6
            p.mb-4 De acuerdo con el Art 871 Estatuto Tributario (ET), es un impuesto que recae sobre la realización de las transacciones financieras, mediante la cual se disponga recursos depositados en las cuentas corrientes o de ahorro, así como en cuentas de depósito en el Banco de la República, y los giros de cheques de gerencia. 
            .cajon.color-secundario.p-4.mb-5
              p.mb-0 Este impuesto presenta algunas exenciones, que es importante analizar con el fin de dar aplicabilidad correcta; por ende, se encuentran señaladas en el ART. 879 del Estatuto Tributario (ET).
        
        .row.justify-content-center.mb-5
          .col-lg-6.align-self-center
            ul.lista-ul--color.lista-ul
              li.mb-4 
                img(src='@/assets/curso/tema1/icon7.svg', alt='avatarTop', style="width:57px")
                p.mb-0.ms-4.mt-2  #[strong Sujeto activo:] es un impuesto administrado por la Dirección de impuestos y Aduanas Nacionales (DIAN).
              li.mb-4 
                img(src='@/assets/curso/tema1/icon7.svg', alt='avatarTop', style="width:57px")
                p.mb-0.ms-4.mt-2  #[strong Sujeto pasivo:] son los clientes y usuarios del sistema financiero.
              li.mb-4 
                img(src='@/assets/curso/tema1/icon7.svg', alt='avatarTop', style="width:57px")
                p.mb-0.ms-4.mt-2  #[strong Hecho generador:] recae sobre la realización de las transacciones financieras, mediante la cual se disponga recursos depositados en las cuentas corrientes o de ahorro, así como en cuentas de depósito en el Banco de la República, y los giros de cheques de gerencia.  Art 871 Estatuto Tributario (ET).
              li.mb-4 
                img(src='@/assets/curso/tema1/icon7.svg', alt='avatarTop', style="width:57px")
                p.mb-0.ms-4.mt-2  #[strong Base gravable:] valor total de la transacción financiera.
              li.mb-4 
                img(src='@/assets/curso/tema1/icon7.svg', alt='avatarTop', style="width:57px")
                p.mb-0.ms-4.mt-2  #[strong Tarifa:] 4*1000.
              
          .col-lg-5.align-self-center
            figure.mb-2
              img(src='@/assets/curso/tema1/img16.svg', alt='Imagen que acompaña excepciones del impuesto', style="width:505px").mx-auto

    .h3.mb-4 Impuestos al patrimonio    

    .row.justify-content-center.mb-5
      .col-lg-8
        p.mb-5
          b.span--acento1 ARTÍCULO 292-2, Estatuto Tributario (ET). Impuesto al patrimonio - sujetos pasivos.
          b-none  Por los años 2020 y 2021, créase un impuesto extraordinario denominado el impuesto al patrimonio a cargo de:
        .row.justify-content-center
          .col-lg-11
            ol.lista-ol--cuadro.mb-5
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  p.mb-0 Las personas naturales, las sucesiones ilíquidas, contribuyentes del impuesto sobre la renta y complementarios.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  p.mb-0 Las personas naturales, nacionales o extranjeras, que no tengan residencia en el país, respecto de su patrimonio poseído directamente en el país, salvo las excepciones previstas en los tratados internacionales y en el derecho interno.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  p.mb-0 Las personas naturales, nacionales o extranjeras, que no tengan residencia en el país, respecto de su patrimonio poseído indirectamente a través de establecimientos permanentes, en el país, salvo las excepciones previstas en los tratados internacionales y en el derecho interno.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  p.mb-0 Las sucesiones ilíquidas de causantes sin residencia en el país al momento de su muerte respecto de su patrimonio poseído en el país.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  p.mb-0 Las sociedades o entidades extranjeras que no sean declarantes del impuesto sobre la renta en el país, y que posean bienes ubicados en Colombia diferentes a acciones, cuentas por cobrar y/o inversiones de portafolio de conformidad con el artículo 2.17.2.2.1.2 del Decreto 1068 de 2015 y el 18-1 de este estatuto.
      .col-lg-4
        figure.mb-2
          img(src='@/assets/curso/tema1/img17.svg', alt='Imagen que acompaña impuesto al patrimonio', style="width:400px;")

    .h3.span--acento1.mb-4 ARTÍCULO 294-2, Estatuto Tributario (ET). Hecho generador. 
    .cajon.color-secundario.p-4.mb-5
      p.mb-0 El impuesto al patrimonio se genera por la posesión del mismo, cuyo valor sea igual o superior a cinco mil ($5.000) millones de pesos. Para efectos de este gravamen, el concepto de patrimonio es equivalente al patrimonio líquido, calculado tomando el total del patrimonio bruto del contribuyente persona natural poseído en la misma fecha menos las deudas a cargo del contribuyente vigentes en esa fecha.

    .h3.mb-4 Impuesto al consumo
    p.mb-5 El Artículo 512-1 del Estatuto Tributario (ET), señala que el impuesto nacional al consumo tiene como hecho generador la prestación o la venta al consumidor final o la importación por parte del consumidor final, de los siguientes servicios y bienes:

    .row.justify-content-center.mb-4
      .col-lg-3
        figure.mb-2
          img(src='@/assets/curso/tema1/img18.svg', alt='Imagen que acompaña impuesto al consumo', style="width:295px;")
      .col-lg-7.align-self-center
        .row
          .col-auto
            span.bigNumber 1
          .col
            p.mb-0 La prestación de los servicios de telefonía móvil, internet y navegación móvil, y servicio de datos según lo dispuesto en el artículo 512-2 de este Estatuto.
    .row.justify-content-center.mb-4
      .col-lg-3
        figure.mb-2
          img(src='@/assets/curso/tema1/img19.svg', alt='Imagen que acompaña impuesto al consumo', style="width:295px;")
      .col-lg-7.align-self-center
        .row
          .col-auto
            span.bigNumber 2
          .col
            p.mb-0 Las ventas de algunos bienes corporales muebles, de producción doméstica o importados, según lo dispuesto en los artículos 512-3, 512-4 y 512-5 de este Estatuto. El impuesto al consumo no se aplicará a las ventas de los bienes mencionados en los artículos 512-3 y 512-4 si son activos fijos para el vendedor, salvo de que se trate de los automotores y demás activos fijos que se vendan a nombre y por cuenta de terceros y para los aerodinos.
    .row.justify-content-center.mb-5
      .col-lg-3
        figure.mb-2
          img(src='@/assets/curso/tema1/img20.svg', alt='Imagen que acompaña impuesto al consumo', style="width:295px;")
      .col-lg-7.align-self-center
        .row
          .col-auto
            span.bigNumber 3
          .col
            p.mb-0 El servicio de expendio de comidas y bebidas preparadas en restaurantes, cafeterías, autoservicios, heladerías, fruterías, pastelerías y panaderías para consumo en el lugar, para ser llevadas por el comprador o entregadas a domicilio, los servicios de alimentación bajo contrato, incluyendo el servicio de catering, y el servicio de expendio de comidas y bebidas alcohólicas para consumo dentro de bares, tabernas y discotecas; (sic) según lo dispuesto en los artículos 426, 512-8, 512-9, 512-10, 512-11, 512- 12 y 512-13 de este estatuto. Este impuesto no es aplicable a las actividades de expendio de bebidas y comidas bajo franquicias.

    p.mb-5.etiqueta Para profundizar en esta temática indague en el Estatuto Tributario (ET) artículos del 512-1 al 512-22.

    .row.tarjeta--grey.mb-5
      .col-lg-12
        .row.justify-content-center.mb-0
          .col-lg-12.p-5
            .h3.mb-4 Impuesto unificado bajo el régimen simple de tributación
            p.mb-4 Este impuesto fue creado mediante la Ley 1943 de 2018 y ratificado en la Ley 2010 de 2019.
            p.mb-4 El artículo 903 del Estatuto Tributario (ET) expresa “es un modelo de tributación opcional de determinación integral, de declaración anual y anticipo bimestral, que integra el impuesto sobre la renta, el impuesto nacional al consumo y el impuesto de industria y comercio consolidado, a cargo de los contribuyentes que opten voluntariamente por acogerse al mismo”.
        
        .row.justify-content-center.mb-5
          .col-lg-7.px-5
            .h3.mb-4
              b.span--acento2 ARTÍCULO 904- Estatuto Tributario (ET). Hecho generador y base gravable del impuesto unificado bajo el régimen simple de tributación (simple).
            p.mb-4 El hecho generador del impuesto unificado bajo el régimen simple de tributación (SIMPLE) es la obtención de ingresos susceptibles de producir un incremento en el patrimonio, y su base gravable está integrada por la totalidad de los ingresos brutos, ordinarios y extraordinarios, percibidos en el respectivo periodo gravable.
            p.mb-4 Para el caso del impuesto de industria y comercio consolidado, el cual se integra al impuesto unificado bajo el régimen simple de tributación (SIMPLE), se mantienen la autonomía de los entes territoriales para la definición de los elementos del hecho generador, base gravable, tarifa y sujetos pasivos, de conformidad con las leyes vigentes.
            .cajon.color-secundario.p-4.mb-4 
              p.mb-0 #[strong PARÁGRAFO.] Los ingresos constitutivos de ganancia ocasional no integran la base gravable del impuesto unificado bajo el régimen simple de tributación (SIMPLE). Tampoco integran la base gravable los ingresos no constitutivos de renta ni ganancia ocasional. Recuerde explorar el Estatuto Tributario (ET) en el Libro octavo, Art. 903 al 916, para ampliar sus conocimientos.
          .col-lg-5.align-self-center
            figure.mb-2
              img(src='@/assets/curso/tema1/img21.svg', alt='Imagen que acompaña impuesto al consumo', style="width:505px;").mx-auto


    .h3.mb-4 Impuestos departamentales
    p.mb-5 Son impuestos creados en la jurisdicción departamental, mediante ordenanzas para financiar el presupuesto del departamento; por lo tanto, tiene su propia normativa.
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--f6f6f6")
      .row.justify-content-center(titulo="1. Impuesto a la venta y consumo de licores")
        .col-md-7.mb-4.mb-md-0
          p.mb-4 Este impuesto lo constituye el consumo en el territorio nacional de cervezas, sifones, refajos y mezclas de bebidas fermentadas con bebidas no alcohólicas.
          p.mb-4 No generan este impuesto las exportaciones y el tránsito por el territorio del Distrito Capital, de cervezas, sifones, refajos, y mezclas de bebidas fermentadas con bebidas no alcohólicas.
          .cajon.color-primario.p-4.mb-4
            p.mb-0 Son responsables del impuesto los productores, los importadores, y solidariamente con ellos, los distribuidores. Además, son responsables directos del impuesto los transportadores y los expendedores al detal, cuando no puedan justificar debidamente la procedencia de los productos que transportan o expenden.
        .col-md-4
          figure
            img(src='@/assets/curso/tema1/img22.svg', alt='', style="width:340px;").mx-auto
      
      .row.justify-content-center(titulo="2. Impuesto a las cervezas, cigarrillos y tabacos")
        .col-md-7.mb-4.mb-md-0
          p.mb-4 El impuesto es aplicable al consumo de cigarrillos y tabaco elaborado, de procedencia extranjera, en la jurisdicción del Distrito Capital. Se encuentra excluido del impuesto al consumo de tabaco el chicote de tabaco de producción artesanal.
          p.mb-4 Son responsables del impuesto los importadores y, solidariamente con ellos, los distribuidores. Además, son responsables directos los transportadores y expendedores al detal, cuando no pueden justificar debidamente la procedencia de los productos que transportan o expenden.
        .col-md-4
          figure
            img(src='@/assets/curso/tema1/img23.svg', alt='Impuesto a las cervezas, cigarrillos y tabacos', style="width:340px;").mx-auto
      
      .row.justify-content-center(titulo="3. Loterías foráneas")
        .col-md-7.mb-4.mb-md-0.px-4
          p.mb-4 Este impuesto se aplica a los premios de las loterías y se conoce como el impuesto a ganadores, aunado a ello, recae sobre las empresas de lotería y operadores autorizadas. 
          p.mb-4 La venta de lotería foráneas en jurisdicción del Distrito Capital genera a su favor y, a cargo de las empresas de lotería u operadores autorizados, un impuesto del diez por ciento (10 %) sobre el valor nominal de cada billete o fracción. 
          .cajon.color-secundario.p-4.mb-4
            p.mb-0 Los ganadores de premios de lotería pagarán al Distrito Capital, según el caso, un impuesto del diecisiete por ciento (17 %) sobre el valor nominal del premio, valor que será retenido por la lotería responsable u operador autorizado al momento de pagar el premio (Secretaría Distrital de Hacienda, 2020, 28 de octubre).
        .col-md-4
          figure
            img(src='@/assets/curso/tema1/img24.svg', alt='Loterías foráneas', style="width:340px;").mx-auto


    .h3.mb-4 Impuestos Municipales
    p.mb-5 Estos impuestos son recaudados por el municipio. Son instituidos por el concejo distrital o municipal, mediante acuerdos.


    .row.justify-content-center
      .col-lg-10
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Impuesto de industria y comercio")
            .col-md-12.mb-4.mb-md-0
              p.mb-4.text-medium El impuesto de Industria y Comercio se genera por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios en jurisdicción del Distrito Capital de Bogotá, ya sea que se cumplan de forma permanente u ocasional, en inmueble determinado, con establecimiento de comercio o sin ellos.
              p.mb-4.text-medium #[strong Sujeto activo:] es un impuesto administrado por el municipio o distrito.
              p.mb-4.text-medium #[strong Sujeto pasivo:] personas naturales y jurídicas, que cumplan los requisitos establecidos para generar el impuesto.
              p.mb-4.text-medium #[strong Hecho generador:] el hecho generador del impuesto de industria y comercio está constituido por el ejercicio o realización directa o indirecta de cualquier actividad industrial, comercial o de servicios en la jurisdicción del Distrito Capital de Bogotá, ya sea que se cumplan de forma permanente u ocasional, en inmueble determinado, con establecimientos de comercio o sin ellos.   Artículo 32 Decreto 352 de 2002.
              p.mb-4.text-medium #[strong Base gravable: ]  ingresos netos del contribuyente.
              p.mb-4.text-medium #[strong Tarifa:] depende de la actividad económica que ejerza la persona natural o jurídica.
              

          .row(numero="2" titulo="Impuesto predial unificado")
            .col-md-12.mb-4.mb-md-0
              p.text-medium Es un impuesto de naturaleza directa que grava los bienes inmuebles y debe ser cancelado de forma anual teniendo en cuenta la actualización del avalúo catastral realizado por la Unidad Administrativa Especial de Catastro Distrital (UAECD), a dicho valor se aplica la tarifa vigente correspondiente al predio, estos pueden ser casas, lotes, apartamentos, etc.



          .row(numero="3" titulo="Impuesto de vehículos")
            .col-md-12.mb-4.mb-md-0
              p.text-medium El impuesto de vehículos recae sobre la posesión de automotores, su naturaleza es directa, teniendo en cuenta que grava directamente al que tiene la propiedad. Se cancela de forma anual, teniendo en cuenta el avalúo que se establece de acuerdo con el modelo, capacidad, marca, línea por resolución del Ministerio de Transporte para cada año (Secretaría Distrital de Hacienda, 2020, 20 de octubre).
          .row(numero="4" titulo="Impuesto unificado de fondo de pobres, azar y espectáculos públicos")
            .col-md-12.mb-4.mb-md-0
              p.mb-4.text-medium Es un tributo de carácter distrital, mediante el cual se unificaron en un solo impuesto los tributos de azar y espectáculos y el de fondo de pobres.
              p.mb-4.text-medium El hecho generador de este impuesto está constituido por la realización de uno de los siguientes eventos:
              .h5.mb-4 Espectáculos públicos
              ul.lista-ul.ms-5
                li 
                  i.far.fa-folder-open(style='color:#A66D58;')
                  p.mb-0 Apuestas sobre toda clase de juegos permitidos.
                li 
                  i.far.fa-folder-open(style='color:#A66D58;')
                  p.mb-0 Rifas promocionales.
                li 
                  i.far.fa-folder-open(style='color:#A66D58;')
                  p.mb-0 Concursos y similares.
                li 
                  i.far.fa-folder-open(style='color:#A66D58;')
                  p.mb-0 Ventas por el sistema de clubes.
                li 
                  i.far.fa-folder-open(style='color:#A66D58;')
                  p.mb-0 La venta de entradas a: teatros, conciertos, cines, plaza de toros, hipódromos, circos y demás espectáculos públicos.
          
          .row(numero="5" titulo="Impuesto de delineación urbana")
            .col-md-12.mb-4.mb-md-0
              p.text-medium Es un impuesto distrital que recae sobre la ejecución de obras o construcciones con licencia de construcción o reconocimiento. Es aplicable a construcciones nuevas y/o remodelaciones.
          .row(numero="6" titulo="Sobretasa a la gasolina motor y al ACPM ")
            .col-md-12.mb-4.mb-md-0
              p.mb-4.text-medium Es un tributo que se declara y paga por el consumo de gasolina motor extra o corriente nacional o importada y/o ACPM nacional o importado, en el Distrito Capital de Bogotá. No genera sobretasa las exportaciones de gasolina motor extra y corriente o de ACPM.
              p.mb-4.text-medium La sobretasa se causa en el momento en que el distribuidor mayorista, productor o importador enajena la gasolina motor extra o corriente o ACPM, al distribuidor minorista o al consumidor final. (Secretaría Distrital de Hacienda, 2020, 20 de octubre).
          
            

        


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
