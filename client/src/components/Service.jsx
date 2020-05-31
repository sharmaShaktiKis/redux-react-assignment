import React from 'react';
import {connect} from 'react-redux';

class Service extends React.Component{

    componentDidMount()
    {
       // this.props.fetchServicesAndProviders();
    }
    renderList(){
        
        const {services}=this.props;
        if(!services){
            return null;
        }
        debugger;
        console.log('service',services)
        return services.map(service=>{
            return(
                <div className="item" key={service.id}>
                    <div className="content">
                        <div className="description">
                            <h2>{service.id}</h2>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (<div className="ui relaxed divided list">
            <h2>Service</h2>
        {this.renderList()}
        </div>)
    }
};

const mapStateToProps=(state)=>{
    return {services:state.services}
}
export default connect(mapStateToProps)(Service);