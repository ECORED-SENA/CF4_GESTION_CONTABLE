<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .h3 Producción Audiovisual
    
    #t_2_1.titulo-segundo
      .h4 2.1 Infografía Animada
    
    p.mb-4 Propuesta infográfica en animación que refuerce un tema y matice conceptos dados de manera creativa y con intención pedagógica.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2cnKTwQ85fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_2_2.titulo-segundo
      .h4 2.2 Video Motion

    p.mb-4 Animación digital que crea la ilusión de movimiento mediante imágenes, fotografías, títulos, colores y diseños.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/E7-BaX6ox9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    

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
