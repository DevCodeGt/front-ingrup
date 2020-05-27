import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { source } from "./../../../environments/config";

// import "rxjs/add/operator/toPromise";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    headers = new HttpHeaders({'Access-Control-Allow-Origin':'*',
    'cache-control':'no-cache',
    'server':'Apache/2.4.18 (Ubuntu)',
    'x-ratelimit-limit':'60',
    'x-ratelimit-remaining':'59'})
  private basePath:string = source.production?source.url:source.urlDev;

  constructor(private http:HttpClient){

  }

  private handleError(error:any):Promise<any> {
  console.error("ha ocurrido un error")
  console.log(error)
  return Promise.reject(error.message || error)
  }


    Authentication(login:any):Promise<any> {
      let url = `${this.basePath}/api/login`

      return this.http.post(url,login)
                      .toPromise()
                      .then(response => {
                        // console.log(response.json())
                        return response;
                      })
                      .catch(this.handleError)
    }

    recovery(form:any):Promise<any>{
      let url = `${this.basePath}/api/users/password/reset`

      return this.http.post(url,form)
                        .toPromise()
                        .then(response => {
                          return response;
                        })
                        .catch(this.handleError)
    }

    updatePass(form):Promise<any> {
      let url = `${this.basePath}/api/users/${form.id}/changepassword`

        return this.http.post(url,form)
                        .toPromise()
                          .then(response => {
                            //console.log(response.json())
                            return response
                          })
                          .catch(this.handleError)
      }

      upload(form):Promise<any> {
        let url = `${this.basePath}/api/upload`

          return this.http.post(url,form)
                          .toPromise()
                            .then(response => {
                              //console.log(response.json())
                              return response
                            })
                            .catch(this.handleError)
        }

    send(form):Promise<any> {
        let url = `${this.basePath}/api/send`

        return this.http.post(url,form)
                        .toPromise()
                            .then(response => {
                            //console.log(response.json())
                            return response
                            })
                            .catch(this.handleError)
        }

  }
