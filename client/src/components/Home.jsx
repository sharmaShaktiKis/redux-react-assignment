import React from 'react';
import Provider from './Provider';
import Service from './Service';
import {connect} from 'react-redux';
import {fetchServicesAndProviders} from '../actions'

class Home extends React.Component{

    componentDidMount()
    {
        this.props.fetchServicesAndProviders();
    }
    
    render(){
        const {services}=this.props;
        if(!services){
            return null;
        }
        const {providers}=this.props;
        if(!providers){
            return null;
        }
        return (
        <div className="row">

        <div className="col-6"><Service ></Service></div>
        <div className="col-6"><Provider></Provider></div>
      </div>)
    }
};

const mapStateToProps=(state)=>{
    return {providers:state.providers,services:state.services}
}
export default connect(mapStateToProps,{fetchServicesAndProviders:fetchServicesAndProviders})(Home);