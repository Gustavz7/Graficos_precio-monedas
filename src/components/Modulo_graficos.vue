<template>
  <div>
    <Graficos_config
      :chart_title="titulo_dolar"
      :label="etiqueta_dolar"
      :api="api_dolar"
      :backgroundColor="backgroundColor_dolar"
      :borderColor="borderColor_dolar"
    />

    <Graficos_config
      :chart_title="titulo_euro"
      :label="etiqueta_euro"
      :api="api_euro"
      :backgroundColor="backgroundColor_euro"
      :borderColor="borderColor_euro"
    />
    <Graficos_config
      :chart_title="titulo_bit"
      :label="etiqueta_bit"
      :api="api_bit"
      :backgroundColor="backgroundColor_bit"
      :borderColor="borderColor_bit"
    />
  </div>
</template>

<script>
import Graficos_config from "@/components/graficos/Grafico_config";
export default {
  name: "Modulo_graficos",
  components: { Graficos_config },
  props: {},
  data: () => {
    return {
      /** Estos datos son los props que el componente de graficos
       *  debe recibir para poder pintar la informacion **/

      // dolar
      titulo_dolar: "Valor del Dolar 2022",
      etiqueta_dolar: "Dolar",
      backgroundColor_dolar: "#C2DE9F",
      borderColor_dolar: "#8DC149",
      api_dolar: "https://mindicador.cl/api/dolar/2022",

      // euro
      titulo_euro: "Valor del Euro 2022",
      etiqueta_euro: "Euro",
      backgroundColor_euro: "#9fbbde",
      borderColor_euro: "#4963c1",
      api_euro: "https://mindicador.cl/api/euro/2022",

      //bitcoin
      titulo_bit: "Valor del Bitcoin 2022",
      etiqueta_bit: "Bitcoin",
      backgroundColor_bit: "#F3A444",
      borderColor_bit: "#DD4744",
      api_bit: "https://mindicador.cl/api/bitcoin/2022",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
