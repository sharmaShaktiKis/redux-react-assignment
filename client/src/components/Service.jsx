import React from 'react';
import { connect } from 'react-redux';

class Service extends React.Component {

    componentDidMount() {
        // this.props.fetchServicesAndProviders();
    }
    onServiceClick=(e,id)=>{
        e.preventDefault();
        this.props.onServiceClick(id);
    }
    renderList() {

        const { services } = this.props;
        if (!services) {
            return null;
        }
        console.log('service', services)
        return services.map(service => {
            return (
                <div className={this.props.serviceId==service.id ?"item activeDiv": "item clickableItem"} onClick={(e)=>this.onServiceClick(e,service.id) } key={service.id}>
                    <div className="content">
                        <div className="description">
                            <h2>{service.id}</h2>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (<div className="ui relaxed divided list">
            <h2>Service</h2>
            {this.renderList()}
        </div>)
    }
};

const mapStateToProps = (state) => {
    return { services: state.services }
}
export default connect(mapStateToProps)(Service);