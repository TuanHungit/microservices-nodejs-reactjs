import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import useRequest from '../../hooks/use-request';
import * as actionCreator from '../../store/action';
const signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div className='form-group'>
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className='form-control'
        />
      </div>
      {errors}
      <button className='btn btn-primary'>Sign Up</button>
    </form>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     isAuthencated: state.auth.userId,
//     authRedirectPath: state.auth.authRedirectPath,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuth: (email, password) =>
//       dispatch(actionCreator.auth(email, password, false)),
//   };
// };
export default signup;
