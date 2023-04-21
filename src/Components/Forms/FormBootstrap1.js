import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import '../../CSS/styles.module.css';
import Chart2 from '../Charts/Chart2';
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return { 
      externalPayload: state.parent.externalPayload };
};

class FormBootstrap1 extends React.Component{
  constructor(props){
    super(props);
}  


    render(){
        return (
          
<Container fluid className="d-flex flex-column full-height">
  <Row className="flex-grow-1">
    <Col className="bg-primary" >
      {this.props.nav}</Col>
    <Col className="bg-secondary" xs={6}>
      <Chart2 data={this.props.externalPayload}></Chart2>
    </Col>
    <Col className="bg-info" ></Col>
  </Row>
</Container>
            
          )
    }
}
export default connect(mapStateToProps, )(FormBootstrap1)
