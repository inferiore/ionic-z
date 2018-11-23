import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actions, Effect } from "@ngrx/effects";
import { UserActionTypes, LoginAction, ListAction, SelectAction, LocalLoginAction } from "../rdxuser/user.reducer";
import { UserService } from '../rdxuser/user.service';

@Injectable()
export class UserEffects {

  constructor(private actions: Actions,
              private userService: UserService) {}

  @Effect()
  login = this.actions.ofType(UserActionTypes.USER_LOGIN)
    .map( (action: LoginAction) => action)
    .switchMap(action => this.userService.token(action.email, action.password)
      .map(response => (      
        { 
          type: UserActionTypes.USER_USER_INFO, 
          user:response,
          mensaje:"Ok"
          ,
        }
      )      
    ).catch((err) =>
                       Observable.of(
                                  { type: UserActionTypes.USER_LOGIN_ERROR ,
                                    mensaje:'Error:'+err.error,
                                  }
                                ))
    );
    @Effect()
    info = this.actions.ofType(UserActionTypes.USER_USER_INFO)
    .map( (action: LoginAction) => action)
    .switchMap(action => this.userService.info()
      .map(response => (
      
        { 
          type: UserActionTypes.USER_LOGIN_SUCCESS, 
          user:response,
          mensaje:"Ok"
          ,
        }
      ) 
    ).catch((err) =>
                       Observable.of(
                                  { type: UserActionTypes.USER_LOGIN_ERROR ,
                                    mensaje:'Error:'+err.error,
                                  }
                                ))
    );
    @Effect()
    list = this.actions.ofType(UserActionTypes.USER_LIST)
    .map( (action: ListAction) => action)
    .switchMap(action => this.userService.list()
      .map(response => (
      
        { 
          type: UserActionTypes.USER_LIST_SUCCESS, 
          users:response,
          mensaje:"Ok"
          ,
        }
      ) 
    ).catch((err) =>
                       Observable.of(
                                  { type: UserActionTypes.USER_LIST_ERROR ,
                                    mensaje:'Error:'+err.error,
                                  }
                                ))
    );
    @Effect()
    getByLogin = this.actions.ofType(UserActionTypes.USER_SELECT)
    .map( (action: SelectAction) => action)
    .switchMap(action => this.userService.getByLogin(action.username)
      .map(response => (
      
        { 
          type: UserActionTypes.USER_SELECT_SUCCESS, 
          user:response,
          mensaje:"Ok",

        }
      ) 
    ).catch((err) =>
                Observable.of(
                          { type: UserActionTypes.USER_SELECT_ERROR ,
                            mensaje:'Error:'+err.error,
                          }
                        ))
    );
    @Effect()
    localLogin = this.actions.ofType(UserActionTypes.USER_LOCAL_LOGIN)
    .map( (action: LocalLoginAction) => action)
    .switchMap(action => this.userService.localLogin(action.email,action.password)
      .map(response => (
        { 
          type: UserActionTypes.USER_LOCAL_LOGIN_SUCCESS, 
          user:response,
          mensaje:"",

        }
      ) 
    ).catch((err) =>
                Observable.of(
                          { type: UserActionTypes.USER_LOCAL_LOGIN_ERROR ,
                            mensaje:'Error:'+err,
                          }
                        ))
    );
}
