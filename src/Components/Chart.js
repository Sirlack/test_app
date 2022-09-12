import React,{Component} from 'react';
import {
    LineSeries, Tooltip,
    ChartProvider, XAxis, YAxis,
  } from 'rough-charts'
  
  const data = [
    { name: 'A', value1: 30, value2: 35 },
    { name: 'B', value1: 90, value2: 17 },
    { name: 'C', value1: 50, value2: 23 },
    { name: 'D', value1: 40, value2: 15 },
    { name: 'E', value1: 70, value2: 39 },
    { name: 'G', value1: 30, value2: 25 },
    { name: 'H', value1: 100, value2: 31 },
    { name: 'I', value1: 110, value2: 32 },
  ]  
class Chart extends React.Component{
    render(){
        //const dispatch = useDispatch();
        return (
            <ChartProvider
                height={400}
                data={data}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <LineSeries
                dataKey="value1"
                options={{
                    //stroke: colors[0],
                    strokeWidth: 2,
                }}
                />
                <LineSeries
                dataKey="value2"
                options={{
                    //stroke: colors[3],
                    strokeWidth: 2,
                }}
                />
                <Tooltip />
            </ChartProvider>
        );
}
}

export default Chart;