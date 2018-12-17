import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {
      baseUrl: string = 'http://localhost:4200/api/employee/'

    constructor(private _http: Http) { }

   
    getEmployees = () =>   [
    { id: 1, name: 'X-Wing Fighter', role: 'Doc', status: 'Active' },
     { id: 2, name: 'Y-Wing Fighter', role: 'Eng', status: 'Inactive' },
      { id: 3, name: 'Z-Wing Fighter', role: 'Admin', status: 'Inactive' },
  ];

    getEmployeeById(id){
      return this._http.get(this.baseUrl +"GetEmployeeById/"+ id)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    saveEmployee(customer){
      return this._http.post(this.baseUrl +   "saveEmployee", customer)
              .map((response: Response) => response.json())
              .catch(this._errorHandler)
    }

    deleteEmployee(id){
      return this._http.delete(this.baseUrl + "DeleteEmployee/" + id)
                .map((response:Response) =>  response.json())
                .catch(this._errorHandler)
    }

    _errorHandler(error:Response){debugger;
      console.log(error);
      return Observable.throw(error || "Internal server error");
    }
}
