<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 
    
    p.mb-4 En este componente formativo el aprendiz tendrá la oportunidad de abordar las generalidades acerca de los impuestos, su estructura, clasificación, tipos de contribuyentes e importancia que tiene para el sostenimiento del Estado.
    .row.justify-content-center
      .col-lg-5.p-0
        figure.mb-5
          img(src='@/assets/curso/img1.svg', alt='explicación de los impuestos', style='width:505px;').mx-auto
      .col-lg-7
        p.mb-4 Los impuestos se dividen de acuerdo con su estructura tributaria en nacionales, municipales y departamentales; y, según las necesidades del Estado, se clasifican en impuestos directos e indirectos. Para comprender su organización es fundamental analizar las normas establecidas en el Estatuto Tributario (ET) – (Decreto 0624 de 1989) y normas vigentes, que establecen las reglas para su aplicación.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 De acuerdo con lo establecido en el Art. 363 de la Constitución Política de Colombia (CPC), el sistema tributario se fundamenta en principios de equidad, eficiencia y progresividad.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
