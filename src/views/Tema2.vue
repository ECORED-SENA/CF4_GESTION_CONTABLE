<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Regímenes

    
    #t_2_1.titulo-segundo
      .h2 2.1 De acuerdo con normativa
    
    p.mb-4 De acuerdo con el Estatuto Tributario-0624 de 1989, es fundamental atender la clasificación de los contribuyentes y no contribuyentes; por ende, es importante identificar el tipo de impuesto y las responsabilidades que se tiene en cada uno de estos.
    p.mb-5 Para continuar con el componente formativo propuesto, es importante abordar los términos de persona natural y jurídica, teniendo en cuenta que se manejan en el desarrollo del proceso de formación; por lo tanto, los relacionamos a continuación:

    .row.justify-content-center.mb-5
      .col-md-4.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop', style='width:134px;').mb-4
          .tarjeta.color-primario
            .p-4.mt-4
              h4.mb-4.text-center Persona natural
              p Hace referencia a todos los individuos de la especie humana, cualquiera que sea su edad, sexo, estirpe o condición. Art. 74 Código Civil. Hace referencia a empresas de propietario único.

      .col-md-4.col-lg-5.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img2.svg' alt='AvatarTop', style='width:134px;').mb-4
          .tarjeta.color-primario
            .p-4.mt-4
              h4.mb-4.text-center Persona jurídica
              p Se llama persona jurídica, una persona ficticia, capaz de ejercer derechos y contraer obligaciones civiles, y de ser representada judicial y extrajudicialmente. Art. 633 Código Civil. En términos generales hablamos de las sociedades que realizan un contrato de sociedad, donde realizan un aporte de dinero, trabajo con el fin de distribuirse las utilidades al final del periodo.

    separador

    #t_2_2.titulo-segundo
      .h2 2.2 Contribuyente y declarante

    .h3.mb-4.span--acento1 Art. 2. Contribuyentes- Estatuto Tributario (ET)
    p.mb-4 Son contribuyentes o responsables directos del pago del tributo los sujetos respecto de quienes se realiza el hecho generador de la obligación sustancial.<br>En esta clasificación se encuentran tres regímenes:

    .row.justify-content-center(style="background-color: #5e617818;")
      .col-lg-4.align-self-center
        figure
          img(src='@/assets/curso/tema2/img3.svg' alt='Régimen ordinario', style='width:388px;').mx-auto
      .col-lg-7.mt-5.mb-5
        .h3.mb-4 Régimen ordinario
        p.mb-5 A este régimen pertenecen las personas naturales y jurídicas, sucesiones ilíquidas que al cumplir los requisitos establecidos en la norma legal vigente deben ser declarantes del impuesto de renta y sus complementarios. En el caso de las personas naturales, que no cumplan con los requerimientos establecidos se consideran no declarantes del impuesto de renta y sus complementarios.
        p.mb-4 Algunos de los contribuyentes de este régimen son:
        ul.lista-ul
            li 
              i.far.fa-folder-open(style='color:#A66D58;')
              p.mb-0 Personas naturales residentes y no residentes y sucesiones ilíquidas.
            li 
              i.far.fa-folder-open(style='color:#A66D58;')
              p.mb-0 Sociedades, entidades nacionales y otros contribuyentes.
            li 
              i.far.fa-folder-open(style='color:#A66D58;')
              p.mb-0 Las sociedades anónimas y asimiladas.
            li 
              i.far.fa-folder-open(style='color:#A66D58;')
              p.mb-0 Sociedades limitadas y asimiladas.
            li 
              i.far.fa-folder-open(style='color:#A66D58;')
              p.mb-0 Cajas de compensación.
            li 
              i.far.fa-folder-open(style='color:#A66D58;')
              p.mb-0 Sociedades y entidades extranjeras.
            li 
              i.far.fa-folder-open(style='color:#A66D58;')
              p.mb-0 Fondos de inversión, etc.…
                

    .row.justify-content-end(style="background-color: #f6f6f6;").mb-4
      .col-lg-11.mt-5.mb-5
        .row.justify-content-center
          .col-lg-8
            .h3.mb-4 Régimen especial
            p.mb-4 Este régimen considera como un contribuyente al impuesto de renta y sus complementarios; sin embargo, tiene un tratamiento especial referente al sistema ordinario.
            p.mb-4 Dentro de esta clasificación encontramos:
            ul.lista-ul.mb-4
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 Todas las asociaciones, fundaciones y corporaciones constituidas como entidades sin ánimo de lucro.
            p.mb-4 Excepcionalmente, podrán solicitar ante la administración tributaria, de acuerdo con el artículo<br> 356-2, su calificación como contribuyentes del Régimen Tributario Especial, siempre y cuando cumplan con los requisitos que se enumeran a continuación:
          .col-lg-4.align-self-center.mt-5
            figure
              img(src='@/assets/curso/tema2/img4.svg' alt='Régimen especial', style='width:375px;').mx-auto
      .col-lg-11.mb-4
        .row.justify-content-center
          .col-lg-7.align-self-center
            ul.lista-ul--color.lista-ul
              li.mb-4(style="background-color: #5e61781c; padding: 15px; border-radius: 15px;")
                img(src='@/assets/curso/tema2/icon1.svg', alt='avatarTop', style="width:85px")
                p.mb-0.ms-4.mt-4 1. Que estén legalmente constituidas.
              li.mb-4(style="background-color: #5e61781c; padding: 15px; border-radius: 15px;")
                img(src='@/assets/curso/tema2/icon1.svg', alt='avatarTop', style="width:85px")
                p.mb-0.ms-4.mt-2 2. Que su objeto social sea de interés general en una o varias de las actividades meritorias establecidas en el artículo 359 del presente estatuto, a las cuales debe tener acceso la comunidad.
              li.mb-4(style="background-color: #5e61781c; padding: 15px; border-radius: 15px;")
                img(src='@/assets/curso/tema2/icon1.svg', alt='avatarTop', style="width:85px")
                p.mb-0.ms-4.mt-2 3. Que ni sus aportes sean reembolsados ni sus excedentes distribuidos, bajo ninguna modalidad, cualquiera que sea la denominación que se utilice, ni directa, ni indirectamente, ni durante su existencia, ni en el momento de su disolución y liquidación, de acuerdo con el articulo 356-1. (Estatuto Tributario, 2020, Art. 19)
          .col-lg-5.align-self-center
            figure
              img(src='@/assets/curso/tema2/img5.svg' alt='Régimen especial', style='width:480px;').mx-auto

    .h3.mb-4 Régimen de tributación simple
    .bloque-texto-a.color-secundario.py-5.mb-5.ps-5.pe-4
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          h4.mb-0.text-center Art. 905. Sujetos pasivos – Estatuto Tributario (ET).
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p Nota 1. Podrán ser sujetos pasivos del impuesto unificado bajo el régimen simple de tributación - SIMPLE las personas naturales o jurídicas que reúnan la totalidad de las siguientes condiciones:
    
    .row.mb-5.justify-content-center
      .col-lg-9
        .row.justify-content-center.p-3.mb-2(style="")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema2/img7.svg', alt='AvatarTop', style="width:190px").mx-auto
          .col-lg-9.align-self-center
            p.mb-0 1. Que se trate de una persona natural que desarrolle una empresa o de una persona jurídica en la que sus socios, partícipes o accionistas sean personas naturales, nacionales o extranjeras, residentes en Colombia.
        
        .row.justify-content-center.p-3.mb-2(style="")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema2/img8.svg', alt='AvatarTop', style="width:190px").mx-auto
          .col-lg-9.align-self-center
            p.mb-0 2. Que en el año gravable anterior hubieren obtenido ingresos brutos, ordinarios o extraordinarios, inferiores a 80.000 UVT. En el caso de las empresas o personas<br> jurídicas nuevas, la inscripción en el impuesto unificado bajo el régimen simple de tributación – SIMPLE, estará́ condicionada a que los ingresos del año no superen estos límites.
        
        .row.justify-content-center.p-3.mb-2(style="")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema2/img9.svg', alt='AvatarTop', style="width:190px").mx-auto
          .col-lg-9.align-self-center
            p.mb-0 3. Si uno de los socios persona natural tiene una o varias empresas o participa en una o varias sociedades, inscritas en el impuesto unificado bajo el régimen simple de tributación - SIMPLE, los límites máximos de ingresos brutos se revisarán de forma consolidada y en la proporción a su participación en dichas empresas o sociedades.
        
        .row.justify-content-center.p-3.mb-2(style="")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema2/img10.svg', alt='AvatarTop', style="width:190px").mx-auto
          .col-lg-9.align-self-center
            p.mb-0 4. Si uno de los socios persona natural tiene una participación superior al 10% en una o varias sociedades no inscritas en el impuesto unificado bajo el régimen simple de tributación - SIMPLE, los límites máximos de ingresos brutos se revisarán de forma consolidada y en la proporción a su participación en dichas sociedades.
        
        .row.justify-content-center.p-3.mb-2(style="")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema2/img11.svg', alt='AvatarTop', style="width:190px").mx-auto
          .col-lg-9.align-self-center
            p.mb-0 5. Si uno de los socios persona natural es gerente o administrador de otras empresas o sociedades, los límites máximos de ingresos brutos se revisarán de forma consolidada con los de las empresas o sociedades que administra.
        
        .row.justify-content-center.p-3.mb-2(style="")
          .col-auto
            figure.mb-1
              img(src='@/assets/curso/tema2/img12.svg', alt='AvatarTop', style="width:190px").mx-auto
          .col-lg-9.align-self-center
            p.mb-0 6. La persona natural o jurídica debe estar al día con sus obligaciones tributarias de carácter nacional, departamental y municipal, y con sus obligaciones de pago de contribuciones al Sistema de Seguridad Social Integral. También debe contar con la inscripción respectiva en el Registro Único Tributario - RUT y con todos los mecanismos electrónicos de cumplimiento, firma y factura electrónica.

    .row.justify-content-center.mb-5(style='background-color: #F2E9E4;')
      .col-lg-11.mt-5.mb-5
        .row.justify-content-center
          .col-lg-4
            figure.mb-1
              img(src='@/assets/curso/tema2/img13.svg', alt='No contribuyentes', style="width:400px").mx-auto
          .col-lg-8
            .h3.mb-4 No contribuyentes
            .h4.mb-4.span--acento1 De acuerdo con el artículo 22 del Estatuto Tributario (ET) se encuentran
            ul.lista-ul
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 La nación, las entidades territoriales, las Corporaciones Autónomas Regionales y de Desarrollo Sostenible, las áreas Metropolitanas, la Sociedad Nacional de la Cruz Roja Colombiana y su sistema federado, las superintendencias y las unidades administrativas especiales, siempre y cuando no se señalen en la Ley como contribuyentes.
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 Las sociedades de mejoras públicas, las asociaciones de padres de familia, los organismos de acción comunal, las juntas de defensa civil, las juntas de copropietarios administradoras de edificios organizados en propiedad horizontal o de copropietarios de conjuntos residenciales, las asociaciones de exalumnos, las asociaciones de hogares comunitarios y hogares infantiles del Instituto Colombiano de Bienestar Familiar o autorizados por este y las asociaciones de adultos mayores autorizados por el Instituto Colombiano de Bienestar Familiar.
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 Los resguardos y cabildos indígenas, ni la propiedad colectiva de las comunidades negras conforme a la Ley 70 de 1993.
              li 
                i.far.fa-folder-open(style='color:#A66D58;')
                p.mb-0 Los sindicatos, las asociaciones gremiales, los fondos de empleados, los fondos mutuos de inversión, las iglesias y confesiones religiosas reconocidas por el Ministerio del Interior o por la ley, los partidos o movimientos políticos aprobados por el Consejo Nacional Electoral; las asociaciones y federaciones de departamentos y de municipios, las sociedades o entidades de alcohólicos anónimos, los establecimientos públicos y en general cualquier establecimiento oficial descentralizado, siempre y cuando no se señale en la ley de otra manera. Art. 23 Estatuto Tributario (ET).

    separador

    #t_2_3.titulo-segundo
      .h2 2.3 Responsabilidades 

    p.mb-4 El Registro Único Tributario, RUT, administrado por la Dirección de Impuestos y Aduanas Nacionales –DIAN-, constituye el mecanismo único para identificar, ubicar y clasificar las personas y entidades sujetos de obligaciones administradas por la Dirección de Impuestos y Aduanas Nacionales, respecto de los cuales esta requiera su inscripción.
    p.mb-4 Al contribuyente, sea persona natural o jurídica se le asigna las responsabilidades de acuerdo con su actividad, teniendo en cuenta la norma vigente.

    .row.justify-content-center
      .row.justify-content-center
        .col-lg-6
          
        
      
    .col-lg-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido.mb-2
        span Tabla 1 Responsabilidades tributarias
      .tabla-b.color-acento-contenido.mb-5
        table
              caption.my-0 Tomado de: Legis (2019, 16 de abril).
              thead.text-center.text-white(style="background-color:#d9a171;")
                tr
                  td(style="border-right:0; width:20%") 
                    strong Código
                  td(style="border-left:0;")
                    strong Nombre
              tbody.text-center
                tr
                  th 1 
                  td Aporte especial para la administración de justicia.
                tr
                  th 2
                  td Gravamen a los movimientos financieros.
                tr
                  th 3 
                  td Impuesto al patrimonio.
                tr
                  th 4
                  td Impuesto renta y complementario régimen especial.
                tr
                  th 5
                  td Impuesto renta y complementario régimen ordinario.
                tr
                  th 6
                  td Ingresos y patrimonio.
                tr
                  th 7
                  td Retención en la fuente a título de renta.
                tr
                  th 8 
                  td Retención timbre nacional.
                tr
                  th 9
                  td Retención en la fuente en el impuesto sobre las ventas.
                tr
                  th 10
                  td Obligado aduanero.
                tr
                  th 13 
                  td Gran contribuyente.
                tr
                  th 14
                  td Informante de exógena.
                tr
                  th 15 
                  td Autorretenedor.
                tr
                  th 16
                  td Obligación facturar por ingresos bienes y/o servicios excluidos.
                tr
                  th 17
                  td Profesionales de compra y venta de divisas.
                tr
                  th 18
                  td Precios de transferencia.
                tr
                  th 19
                  td Productor de bienes y/o servicios exentos.
                tr
                  th 20
                  td Obtención NIT.
                tr
                  th 21 
                  td Declarar ingreso o salida del país de divisas o moneda. 
                tr
                  th 22
                  td Obligado a cumplir deberes formales a nombre de terceros.
                tr
                  th 23 
                  td Agente de retención en ventas.
                tr
                  th 24
                  td Declaración consolidada precios de transferencia.
                tr
                  th 26 
                  td Declaración individual precios de transferencia.
                tr
                  th 33 
                  td Impuesto nacional al consumo.
                tr
                  th 36 
                  td Establecimiento Permanente.
                tr
                  th 37
                  td Obligado a Facturar Electrónicamente.
                tr
                  th 38 
                  td Facturación Electrónica Voluntaria.
                tr
                  th 39
                  td Proveedor de Servicios Tecnológicos PST.
                tr
                  th 41 
                  td Declaración anual de activos en el exterior.
                tr
                  th 45
                  td Autorretenedor de rendimientos financieros.
                tr
                  th 46 
                  td IVA Prestadores de Servicios desde el exterior.
                tr
                  th 47
                  td Régimen Simple de Tributación – SIMPLE.
                tr
                  th 48
                  td Impuesto sobre las ventas – IVA.
                tr
                  th 49
                  td No responsable de IVA.
                tr
                  th 50
                  td No responsable de consumo restaurantes y bares.
                tr
                  th 51
                  td Agente retención impoconsumo de bienes inmuebles.
                tr
                  th 52
                  td Facturador electrónico.
                tr
                  th 53
                  td Persona jurídica no responsable de IVA.
</template>

<script>
export default {
  name: 'Tema2',
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
