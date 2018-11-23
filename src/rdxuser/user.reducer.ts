import {User} from "./user";
import {Action} from "@ngrx/store";


export const UserActionTypes = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
  USER_LOGIN_CHANGE:'USER_LOGIN_CHANGE',
  USER_USER_INFO: 'USER_USER_INFO',  
  USER_LIST: 'USER_LIST',  
  USER_LIST_SUCCESS: 'USER_LIST_SUCCESS',  
  USER_LIST_ERROR: 'USER_LIST_ERROR',
  USER_SELECT: 'USER_SELECT',
  USER_SELECT_ERROR: 'USER_SELECT_ERROR',
  USER_SELECT_SUCCESS: 'USER_SELECT_SUCCESS',
  USER_LOCAL_LOGIN: 'USER_LOCAL_LOGIN',
  USER_LOCAL_LOGIN_SUCCESS: 'USER_LOCAL_LOGIN_SUCCESS',
  USER_LOCAL_LOGIN_ERROR: 'USER_LOCAL_LOGIN_ERROR',
};

export interface UserState {
  loading: boolean,
  error: boolean,
  user: User,
  users: User[],
  mensaje:string,
}

const initialState: UserState = {
  loading: false,
  error:false,
  user:null,
  users:null,
  mensaje:'',
};

export class LoginAction implements Action {
  type = UserActionTypes.USER_LOGIN;
  user:any;
  users:any;
  mensaje:string;
  constructor(public email:string, public password:string) {

  }  
  
}

export class LocalLoginAction implements Action {
  type = UserActionTypes.USER_LOCAL_LOGIN;
  user:any;
  users:any;
  mensaje:string;
  constructor(public email:string, public password:string) {

  }  
  
}


export class LoginChangeAction implements Action {
  type = UserActionTypes.USER_LOGIN_CHANGE;
  user:any;
  users:any;
  mensaje:string;
  constructor() {}
}
export class ListAction implements Action {
  type = UserActionTypes.USER_LIST;
  users:any;
  mensaje:string;
  constructor() {}
}

export class SelectAction implements Action {
  type = UserActionTypes.USER_SELECT;
  user:any;
  mensaje:string;
  constructor(public username:string) {}
}


export function userReducer(state: any = initialState, action: LoginAction) {
  let errorlogin:boolean;
  let ouser:any;
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return { ...state, mensaje:'',loading: true };   
    case UserActionTypes.USER_LIST:
      return { ...state, mensaje:'',loading: true };  
    case UserActionTypes.USER_LOCAL_LOGIN:
      return { ...state, mensaje:'',loading: true };  
    case UserActionTypes.USER_USER_INFO:    
      return { ...state, mensaje:'',loading: true };
    case UserActionTypes.USER_SELECT:    
      return { ...state, mensaje:'',loading: true };    
    case UserActionTypes.USER_LOGIN_SUCCESS:
       ouser=(action.user);
      if (ouser.sub!='')
      {
        errorlogin=false;
      }else{
        errorlogin=true;
      }  
      return { ...state, user:ouser,mensaje:action.mensaje,error:errorlogin,loading: false };
    case UserActionTypes.USER_LIST_SUCCESS:
      return { ...state, users:action.users,mensaje:action.mensaje,error:false,loading: true };
    case UserActionTypes.USER_LOCAL_LOGIN_SUCCESS:
      return { ...state, user:action.user,mensaje:action.mensaje,error:false,loading: false };
    case UserActionTypes.USER_SELECT_SUCCESS:
      ouser=(action.user);
      return { ...state, user:ouser,mensaje:action.mensaje,error:false,loading: false };
    case UserActionTypes.USER_LOGIN_CHANGE:
      return { ...state, mensaje:'', loading: true };
    case UserActionTypes.USER_LOGIN_ERROR:
      return { ...state,mensaje:action.mensaje, loading: false, error: true };
    case UserActionTypes.USER_LIST_ERROR:
      return { ...state,mensaje:action.mensaje, loading: false, error: true };
    case UserActionTypes.USER_SELECT_ERROR:
      return { ...state,mensaje:action.mensaje, loading: false, error: true };
    case UserActionTypes.USER_LOCAL_LOGIN_ERROR:
      return { ...state,mensaje:action.mensaje, loading: false, error: true };
      
    default:
      return state;
  }
}
