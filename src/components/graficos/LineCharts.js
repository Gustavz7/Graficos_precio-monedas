import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
    props: {
        chartData: {
          type: Object,
          default: null
        },
        options:{
            type: Object,
            default: null
        }
      },
    extends: Line,
    mixins: [reactiveProp],
    data: () => ({
    }),

    mounted() {
        this.renderChart(this.chartData, this.options);
    }
}