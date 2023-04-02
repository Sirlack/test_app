import React,{Component} from 'react';
import { scaleLinear } from 'd3-scale';

import {
    LineSeries, Tooltip,
    ChartProvider, XAxis, YAxis,
  } from 'rough-charts'

  import { connect } from 'react-redux'
  const yScale = scaleLinear().domain([40, 220])  

  const mapStateToProps = state => {
    return { Name: state.parent.children2, storeNewField: state.parent.children3, l_externalPayload: state.parent.externalPayload };
  };
class Chart extends React.Component{
    render(){       
                       
        return (
            this.props.l_externalPayload && <ChartProvider
                height={400}
                data={ this.props.l_externalPayload.chart}
                yScale = {yScale} 
            >
                <XAxis dataKey="time" />
                <YAxis
                tickSize={10} />
                <LineSeries
                dataKey="value" 
                options={{
                    //stroke: colors[0],
                    strokeWidth: 2,
                }}
                />
                {/*<LineSeries
                dataKey="2. high"
                options={{
                    //stroke: colors[3],
                    strokeWidth: 2,
                }}
            />*/}
                <Tooltip />
            </ChartProvider>
        
        );
}
}

export default connect(mapStateToProps, null)(Chart)