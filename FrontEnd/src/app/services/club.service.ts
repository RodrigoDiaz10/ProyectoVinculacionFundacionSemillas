import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  public selectedField: Club = {
    id: null,
    name: '',
    surname: '',
    ci: '',
    description: '',
    address: '',
    availability: '',
    image: '',

  };

  constructor(private http: HttpService) { }

  public async eliminarClub(idClub) {
    return await this.http.delete("/api/club?id=".concat(idClub));
  }

  public async agregarClub(club: Club) {
    return await this.http.post("/api/club", club);
  }

  public async obtenerClub() {
    return await this.http.get("/api/club");
  }

  public async obtenerPorId(idClub) {
    return await this.http.get("/api/club/?id=".concat(idClub));
  }

  public async modificarClub(club: Club) {
    return await this.http.update("/api/club", club);
  }
  //TODO
  //AGREGAR  EL UPDATE
}
