
import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  public selectedField: Person = {
    name: '',
    id: null,
    image: '', 
    surname: '', 
    dateBirth: '',
    ci: '',
    motherName:'',
    fatherName: '',
    study: '',
    houseAddress: '',
    schoolName: '',
    age: null 
    
  };

  constructor(private http: HttpService) { }

  public async eliminarPerson(idPerson) {
    return await this.http.delete("/child?id=".concat(idPerson));
  }

  public async agregarPerson(person: Person) {
    return await this.http.post("/child", person);
  }

  public async obtenerPerson() {
    return await this.http.get("/child");
  }

  public async obtenerPorId(idPerson){
    return await this.http.get("/child/?id=".concat(idPerson));
  }

  public async modificarPerson(person: Person) {
    return await this.http.update("/child",person);
  }
  //TODO
  //AGREGAR  EL UPDATE
}
