import React from 'react';
import { connect } from 'react-redux';

class Provider extends React.Component {

    componentDidMount() {
        // this.props.fetchServicesAndProviders();
    }
    renderList() {
        const { providers } = this.props;
        if (!providers) {
            return null;
        }
        console.log(providers)
        return this.props.providers.map(provider => {
            var image = provider.attributes["profile-image"];
            return (

                <div className="ui large feed">
                    <div className="event">
                        <div className="label">
                            <img src={image} alt="No image" />
                        </div>
                        <div className="content">
                            <div className="summary">

                                <div className="user">
                                    {provider.id}
                                </div>

                            </div>
                           {provider.attributes["subspecialties"].map(subs => {
                               return (
                                <div className="meta">
                                 {subs}
                                <br/>
                           </div> )})
                           }
                            
                           
                        </div>
                    </div>
                </div>



            )
        })
    }
    render() {
        return (<div className="ui relaxed divided list">
            <h2>Provider</h2>
            {this.renderList()}</div>)
    }
};

const mapStateToProps = (state, ownProps) => {
    return { providers: state.providers.find((prov) => (prov.service === ownProps.service || ownProps.service === "")) };
}
//export default connect(mapStateToProps,{fetchUser})(UserHeader);
export default connect(mapStateToProps)(Provider);