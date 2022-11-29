import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
import { Bar,Line } from 'react-chartjs-2';
import faker from 'faker'
export default function Charts() {
   
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );
  
   const options = {
    responsive: true,
    height:"auto",
    plugins: {
      legend: {
        position: 'top'  ,
      },
      title: {
        position:"top",
        fontSize:20,
        display: true,
        text: 'Test chart ',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

    return (
        <div className="bg-white rounded-lg shadow-lg p-8 h-full">
            <div className="rounded-lg bg-gray-200 flex w-auto h-full" >
               <Line data={data}  options={options} />
               
            </div>
        </div>
    )
}