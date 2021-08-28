<template>
  <div class="justify-content-center">
    <b-card centered class="card">
          <!-- Card Body-->
          <div class="card-body">
            <line-chart v-if="Ready" :chartData="data" :options="options"/>
            <div v-else>
              <b-spinner variant="primary" type="border"></b-spinner>
              <p>Consultando datos...</p>
            </div>
          </div>
    </b-card>
  </div>
</template>

<script>
import LineChart from "./LineCharts.js";

export default {
  name: "dolar",
  components: { LineChart },
  data: () => {
    return {
      //variable piloto arreglo completo
      dolar: [],

      //separacion de los datos utilizados
      dolar_valores: [],
      dolar_fechas: [],

      //manejo de detalles
      Ready: false,

      //Data & config Chart
      data: null,
      options: null,
      Chart_title: "Valores del dolar 2021",
    };
  },
  methods: {
  },

  computed: {

  },
  async mounted() {
    this.Ready = false;

    //consulta de la info
    const response = await this.axios.get("https://mindicador.cl/api/dolar/2021");
      this.dolar = response.data.serie;

      /*Destructuracion del arreglo */
      for (let item of this.dolar) {
        const fecha = new Date(item.fecha).toLocaleDateString();
        this.dolar_fechas.push(fecha);
        this.dolar_valores.push(item.valor);
      }
      this.dolar_fechas.reverse();
      this.dolar_valores.reverse();

      //datos del grafico
      this.data = {
            labels: this.dolar_fechas,
            datasets: [{
                label: "Dolar",
                backgroundColor: "#C2DE9F",
                borderColor:"#8DC149",
                data: this.dolar_valores
                }]
                },
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
                text: this.Chart_title,
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
        },
        //finalmente
        this.Ready = true;
  },
};
</script>
<style>
</style>
