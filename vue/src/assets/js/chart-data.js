//../src/Chart.js
import {
    PolarArea,
    mixins
} from 'vue-chartjs'

export default {
    extends: PolarArea,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {
            chartoptions: {
                scale: {
                    angleLines: {
                        display: false
                    },
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.chartoptions)
    }

}