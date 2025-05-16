import React from "react";
import 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';

function Skills() {
    const data={
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        datasets: [
            {
                data: [80, 70, 75, 85, 65],
                backgroundColor: [
                    '#61dafb',
                    '#f0db4f',
                    '#7952b3',
                    '#ffca28',
                    '#264DE4'
                ]
            }
        ]
    };
    return (
        <div className="container py-5" data-aos='fade-up'>
            <h2>Skills</h2>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Doughnut data={data}/>
                    
                </div>
            </div>
        </div>
    );
}

export default Skills;