
import {connect} from 'react-redux';



import AuthenticationRoute from '../AuthenticationRoute';
import { loginUser, signupUser } from '../../../store/modules/dataReducer/dataReducer';


const mapStateToProps = state => ({
   data_loading: state.UI.data_loading,
   disable_button: state.UI.disable_button,
   errors: state.UI.errors || {}
    
});


const mapActionsCreators = {
 loginUser,
 signupUser
};

export default connect(mapStateToProps, mapActionsCreators)(AuthenticationRoute);