import React from 'react'
import {Doughnut} from 'react-chartjs-2';

export default function ChartReport() {
    const data = {
        labels: [
            'Ahmet',
            'Emine',
            'Engin'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#8dace7',
                '#71deb9',
                '#ef869e'
            ],
            hoverBackgroundColor: [
                '#7097e1',
                '#4dd6a7',
                '#eb6886'
            ]
        }]
    };

    return (
        <div  style={{width:'500px',height:'500px', float:'left'}}>
       <Doughnut data={data}/>
        </div>
    )
}
