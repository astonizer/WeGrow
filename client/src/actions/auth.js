import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (fromData, history) => async (dispatch) => {
  try{
    // log in the user...
    const { data } = await api.signIn(fromData);

    dispatch({ type: AUTH, data });

    history.push('/');    
  } catch(error){
    console.log(error);
  }
};

export const signup = (fromData, history) => async (dispatch) =>{
  try{
    // sign up the user...
    const { data } = await api.signUp(fromData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch(error){
    console.log(error);
  }
};
