
import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpService) { }

  public async eliminarPerson(idPerson) {
    return await this.http.delete("/api/person?id=".concat(idPerson));
  }

  public async agregarPerson(person: Person) {
    return await this.http.post("/api/person", person);
  }

  public async obtenerPerson() {
    return await this.http.get("/api/person");
  }

  public async obtenerPorId(idPerson){
    return await this.http.get("/api/person/?id=".concat(idPerson));
  }

  public async modificarPerson(person: Person) {
    return await this.http.update("/api/person",person);
  }
  //TODO
  //AGREGAR  EL UPDATE
}
