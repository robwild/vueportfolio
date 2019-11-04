<template>
    <div class="skills">

        <div class="container">

            <b-card no-body class="overflow-hidden" style="max-width: 100vw;">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                            <b-card-text>
                                <chart :chart-data="datacollection"></chart>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                            <b-card-text>
                                <chart :chart-data="datacollection"></chart>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

        </div>

    </div>
</template>

<script>

    import Chart from '../assets/js/chart-data.js';

    export default {
        name: 'skills',
        components: {
            Chart
        },
        data() {
            return {
                datacollection: null
            };
        },
        mounted() {
            this.fillData();
        },
        methods: {
            fillData() {
                this.datacollection = {
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Design',
                        'Developer',
                        'DevOps and Infrastructure',
                        'Management'
                    ],
                    datasets: [{
                        data: [10, 20, 30, 5],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ]
                    }]

                };
            },
        }
    };
</script>
