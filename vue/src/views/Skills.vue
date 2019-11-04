<template>
    <div class="skills">

        <div class="container">

            <b-card no-body class="overflow-hidden" style="max-width: 100vw;">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                            <b-card-text>

                                some text here
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Horizontal Card">
                            <b-card-text>
                                <highcharts :options="chartOptions"></highcharts>
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

        </div>

    </div>
</template>

<script>

    import {Chart} from 'highcharts-vue'

    export default {
        name: 'skills',
        components: {
            highcharts: Chart
        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: 'Skills Breakdown'
                    },
                    subtitle: {
                        text: 'see what I can do in what skill set'
                    },
                    plotOptions: {
                        series: {
                            colors: '#ff0000',
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}: {point.y:.1f}%'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}%</b> of total<br/>'
                    },

                    series: [
                        {
                            name: "Skills",
                            colorByPoint: true,
                            data: [
                                {
                                    name: "User Experience Design",
                                    y: 20,
                                    drilldown: "User Experience Design",
                                    color: "#ff0000"
                                },
                                {
                                    name: "Creative Design",
                                    y: 20,
                                    drilldown: "Creative Design"
                                    
                                },
                                {
                                    name: "Front End Development",
                                    y: 20,
                                    drilldown: "Front End Development"
                                },
                                {
                                    name: "Application Development",
                                    y: 5,
                                    drilldown: "Application Development"
                                },
                                {
                                    name: "Web Development",
                                    y: 20,
                                    drilldown: "Web Development"
                                },
                                {
                                    name: "DevOps and Infrastructure",
                                    y: 5,
                                    drilldown: "DevOps and Infrastructure"
                                },
                                {
                                    name: "Consultancy Skills",
                                    y: 10,
                                    drilldown: "Consultancy Skills"
                                }
                            ]
                        }
                    ],
                    drilldown: {
                        series: [
                            {
                                name: "User Experience Design",
                                id: "User Experience Design",
                                data: [
                                    [
                                        "v65.0",
                                        0.1
                                    ],
                                    [
                                        "v64.0",
                                        1.3
                                    ],
                                    [
                                        "v63.0",
                                        53.02
                                    ],
                                    [
                                        "v62.0",
                                        1.4
                                    ],
                                    [
                                        "v61.0",
                                        0.88
                                    ],
                                    [
                                        "v60.0",
                                        0.56
                                    ],
                                    [
                                        "v59.0",
                                        0.45
                                    ],
                                    [
                                        "v58.0",
                                        0.49
                                    ],
                                    [
                                        "v57.0",
                                        0.32
                                    ],
                                    [
                                        "v56.0",
                                        0.29
                                    ],
                                    [
                                        "v55.0",
                                        0.79
                                    ],
                                    [
                                        "v54.0",
                                        0.18
                                    ],
                                    [
                                        "v51.0",
                                        0.13
                                    ],
                                    [
                                        "v49.0",
                                        2.16
                                    ],
                                    [
                                        "v48.0",
                                        0.13
                                    ],
                                    [
                                        "v47.0",
                                        0.11
                                    ],
                                    [
                                        "v43.0",
                                        0.17
                                    ],
                                    [
                                        "v29.0",
                                        0.26
                                    ]
                                ]
                            },
                            {
                                name: "Creative Design",
                                id: "Creative Design",
                                data: [
                                    [
                                        "v58.0",
                                        1.02
                                    ],
                                    [
                                        "v57.0",
                                        7.36
                                    ],
                                    [
                                        "v56.0",
                                        0.35
                                    ],
                                    [
                                        "v55.0",
                                        0.11
                                    ],
                                    [
                                        "v54.0",
                                        0.1
                                    ],
                                    [
                                        "v52.0",
                                        0.95
                                    ],
                                    [
                                        "v51.0",
                                        0.15
                                    ],
                                    [
                                        "v50.0",
                                        0.1
                                    ],
                                    [
                                        "v48.0",
                                        0.31
                                    ],
                                    [
                                        "v47.0",
                                        0.12
                                    ]
                                ]
                            },
                            {
                                name: "Front End Development",
                                id: "Front End Development",
                                data: [
                                    [
                                        "v11.0",
                                        6.2
                                    ],
                                    [
                                        "v10.0",
                                        0.29
                                    ],
                                    [
                                        "v9.0",
                                        0.27
                                    ],
                                    [
                                        "v8.0",
                                        0.47
                                    ]
                                ]
                            },
                            {
                                name: "Application Development",
                                id: "Application Development",
                                data: [
                                    [
                                        "v11.0",
                                        3.39
                                    ],
                                    [
                                        "v10.1",
                                        0.96
                                    ],
                                    [
                                        "v10.0",
                                        0.36
                                    ],
                                    [
                                        "v9.1",
                                        0.54
                                    ],
                                    [
                                        "v9.0",
                                        0.13
                                    ],
                                    [
                                        "v5.1",
                                        0.2
                                    ]
                                ]
                            },
                            {
                                name: "Web Development",
                                id: "Web Development",
                                data: [
                                    [
                                        "v16",
                                        2.6
                                    ],
                                    [
                                        "v15",
                                        0.92
                                    ],
                                    [
                                        "v14",
                                        0.4
                                    ],
                                    [
                                        "v13",
                                        0.1
                                    ]
                                ]
                            },
                            {
                                name: "DevOps and Infrastructure",
                                id: "DevOps and Infrastructure",
                                data: [
                                    [
                                        "v50.0",
                                        0.96
                                    ],
                                    [
                                        "v49.0",
                                        0.82
                                    ],
                                    [
                                        "v12.1",
                                        0.14
                                    ]
                                ]
                            },
                            {
                                name: "Consultancy Skills",
                                id: "Consultancy Skills",
                                data: [
                                    [
                                        "v50.0",
                                        0.96
                                    ],
                                    [
                                        "v49.0",
                                        0.82
                                    ],
                                    [
                                        "v12.1",
                                        0.14
                                    ]
                                ]
                            }
                        ]
                    }
                    }
                }

        }
    };
</script>
