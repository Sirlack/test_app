import React,{Component} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';  
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
   let labels;
   let data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        //data: ['10.6', '0.4', '2.4', '5.4', '1.2', '1.6', '8.9'],        
        //data: null,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        //: ['1', '2', '3', '4', '5', '6', '7'],
        //data: null,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };  
class Chart2 extends React.Component{
    render(){

      data.datasets[0].data = this.props.data ? this.props.data.value1: data.datasets[0].data;
      data.datasets[1].data = this.props.data ? this.props.data.value2 : data.datasets[1].data;
      data.labels = this.props.data ? this.props.data.time : data.labels;
        return (
          data.datasets[0].data && <Line options={options} data={data} />
        );
    }
}

export default Chart2