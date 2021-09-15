<template>
    <div class="tarjeta_header">
          <div class="tarjeta_body">

            <line-chart v-if="Ready"
                        :chartData="data"
                        :options="options"/>

            <div v-else>
              <b-spinner variant="primary" type="border"></b-spinner>
              <p>Consultando datos...</p>
            </div>
          </div>
    </div>
</template>

<script>
import LineChart from "./LineCharts.js";

export default {
  name: "Graficos_config",
  components: { LineChart },
  props: ["chart_title", "label", "api", "backgroundColor", "borderColor"],
  data: () => {
    return {
      /** variable piloto arreglo completo */
      valores_all: [],

      /** separacion de los datos a utilizar */
      valores: [],
      fechas: [],

      /** manejo de detalles */
      Ready: false,

      /** Data & config Chart (no tocar!)*/
      data: null,
      options: null,

    };
  },
  methods: {
  },

  computed: {

  },
  async mounted() {
    this.Ready = false;

    //consulta de la info
    const response = await this.axios.get(this.api);
      this.valores_all = response.data.serie;

      /*Destructuracion del arreglo */
      for (let item of this.valores_all) {
        const fecha = new Date(item.fecha).toLocaleDateString();
        this.fechas.push(fecha);
        this.valores.push(item.valor);
      }
      this.fechas.reverse();
      this.valores.reverse();

      //datos del grafico
      this.data = {
            labels: this.fechas,
            datasets: [{
                label: this.label,
                backgroundColor: this.backgroundColor,
                borderColor: this.borderColor,
                data: this.valores
                }]
                }
      this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }]
            },
            title: {
                display: true,
                text: this.chart_title,
                fontSize: 30,
                padding: 30,
                fontColor: "12619c",
            },
            elements: {
                line: {
                    borderWidth: 2,
                    fill: true,
                },
                point: {
                  radius: 1,
                  borderColor: "",
                  borderWidth: 2,
            },
            },
            tooltips: {
            backgroundColor: "#0584f6",
            titleFontSize: 20,
            xPadding: 20,
            yPadding: 20,
            bodyFontSize: 15,
            bodySpacing: 10,
            mode: 'x',
          },
        }
        //finalmente
      this.Ready = true;
  },
};
</script>
<style>
</style>
