
import {connect} from 'react-redux';


import Welcome from '../components/Welcome.jsx';


const mapStateToProps = state => ({
   
    userDetails:  state.UI.userDetails || {}
});

const mapActionsCreators = {

};

export default connect(mapStateToProps, mapActionsCreators)(Welcome);