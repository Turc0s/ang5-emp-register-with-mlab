import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()
export class TodoService {

  constructor(private _http: Http) {
      console.log("Todo service initialized...");
   }

   getTodos() {
     return this._http.get("/api/todos").map(res => res.json());
   }

}