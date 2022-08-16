import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ForgotPasswordDto } from '../models/dtos/forgot-password-dto';
import { RegisterDto } from '../models/dtos/register-dto';
import { LoginModel } from '../models/login-model';
import { ResponseModel } from '../models/response-model';
import { SingleResponseModel } from '../models/single-response-model';
import { TermsAndCondition } from '../models/terms-and-condition';
import { TokenModel } from '../models/token-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public redirectUrl: string;

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  register(registerDto: RegisterDto) {
    let api = this.apiUrl + "auth/register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(api, registerDto)
  }

  login(loginModel: LoginModel) {
    let api = this.apiUrl + "auth/login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(api, loginModel)
  }

  getTermsAndConditions() {
    let api = this.apiUrl + "TermsAndConditions/get";
    return this.httpClient.get<SingleResponseModel<TermsAndCondition>>(api);
  }
  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }

  sendConfirmEmail(email:string){
    let api = this.apiUrl + "auth/sendConfirmEmail?email=" + email;
    return this.httpClient.get<ResponseModel>(api);
  }

  confirmUser(value:string){
    let api = this.apiUrl + "auth/confirmuser?value=" + value;
    return this.httpClient.get<ResponseModel>(api);
  }

  sendForgotPassword(email:string){
    let api = this.apiUrl + "auth/forgotPassword?email=" + email;
    return this.httpClient.get<ResponseModel>(api);
  }

  confirmForgotPasswordValue(value:string){
    let api = this.apiUrl + "auth/forgotPasswordLinkCheck?value=" + value;
    return this.httpClient.get(api);
  }

 changePasswordToForgotPassword(forgotPasswordDto: ForgotPasswordDto){
    let api = this.apiUrl + "auth/changePasswordToForgotPassword";
    return this.httpClient.post<ResponseModel>(api,forgotPasswordDto);
  }
}
