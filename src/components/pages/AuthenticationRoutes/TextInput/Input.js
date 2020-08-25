import React, { Fragment } from 'react';
import LoginTextField from './Login/LoginTextField';
import RegisterTextField from './Register/RegisterTextField';




export default function InputWithIcon({index, loginUser, history, data_loading, disable_button, errors, signupUser}) {
 
  return (
    <Fragment>
    {
      index === 0 ?
    (<RegisterTextField  errors={errors} disable_button={disable_button} signupUser={signupUser} data_loading={data_loading} history={history}/>) :
                   (<LoginTextField  errors={errors} disable_button={disable_button} loginUser={loginUser} history={history} data_loading={data_loading} />)


    }
    </Fragment>
  );
}
