import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AlbumService } from './../../services/album.service';
import { ToastrService } from 'ngx-toastr';
// @ViewChild('closebutton') closebutton;

@Component({
  selector: 'app-albumnes-admin',
  templateUrl: './albumnes-admin.component.html',
  styleUrls: ['./albumnes-admin.component.scss']
})
export class AlbumnesAdminComponent implements OnInit {
  modifAlbum: FormGroup;
  registerAlbum: FormGroup;
  albums: any;
  albumseleccionado: any;
  displayResponsiveCrear: boolean;
  displayResponsiveModificar: boolean;
  idEliminar: number;
  eventos: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private restService: AlbumService, private toastr: ToastrService) {
    this.modifAlbum = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
      event: ["", Validators.required],
    });
    this.registerAlbum = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      date: ["", Validators.required],
      event: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAlbums();
    this.getEventos();
  }
// seteo de objeto enviar
  crearAlbum() {
    this.displayResponsiveCrear = false;
    this.submitted = true;
    if (this.registerAlbum.invalid) {
      return;
    }
    //Objeto json que se envia al back
    let objetoCrear = {
      "albums": {
        "title": this.registerAlbum.value.title,
        "description": this.registerAlbum.value.description,
        "date": this.registerAlbum.value.date
      },
      "events": {
        "id": this.registerAlbum.value.event
      }
    }
    // console.log("valores crear: ", objetoCrear)
    this.restService.add(objetoCrear, "/album").subscribe(
      res => {
        this.toastr.success('Album creado Exitosamente');
        console.log("creado exitosamente", res)
        this.resetForm();
        this.getAlbums();
      },
      err => {
        console.log("error crear", err)
      }
    );
  }

 

  // Obtengo todos los albumnes
  getAlbums() {
    this.restService.get("/album").subscribe((data) => {
      this.albums = data;
      console.log("albumnes: ", this.albums);
    });
  }

  // Seteo del objeto modificar 
  modificarAlbum() {
    this.displayResponsiveModificar = false;
    this.submitted = true;
    if (this.modifAlbum.invalid) {
      return;
    }
    //Objeto json que se envia al back
    let objetoModificar = {
      "albums": {
        "title": this.modifAlbum.value.title,
        "description": this.modifAlbum.value.description,
        "date": this.modifAlbum.value.date
      },
      "events": {
        "id": this.modifAlbum.value.event
      }
    }
    // console.log("objetoModificar: ", objetoModificar)
    this.restService.updateData(objetoModificar, "/album/" + this.albumseleccionado.id).subscribe(
      res => {
        this.toastr.success('Álbum modificado Exitosamente');
        console.log("modificado: exitosamente", res);
        this.getAlbums();
      },
      err => {
        console.log("error: modificar", err)
      }
    );
  }

  // Obtener album por Id
  getAlbum(id: number) {
    this.modalModificar();
    this.restService.get("/album/" + id).subscribe((data) => {
      this.albumseleccionado = data;
      console.log("album seleccionado: ", this.albumseleccionado);
    });
  }

  getIdEliminar(id) {
    this.idEliminar = id;
    console.log("this.idEliminar = id: ", this.idEliminar = id)
  }

  // Servicio para eliminar objeto
  deleteAlbum(id) {
    console.log("id a eliminar:")
    this.restService.delete("/album/" + id).subscribe(
      res => {
        this.toastr.success('Eliminado Exitosamente');

        console.log("eliminado: exitosamente", res);
        this.getAlbums();
      },
      err => {
        console.log("error: eliminar", err)
      }
    );
  }

  //Obtengo todos los eventos
  getEventos() {
    this.restService.get("/event").subscribe((data) => {
      this.eventos = data;
      console.log("eventos: ", this.eventos);
    });
  }


//Despliege de Modales
  modalModificar() {
    this.displayResponsiveModificar = true;
  }

  modalCrear() {
    this.displayResponsiveCrear = true;
  }

  resetForm() {
    this.registerAlbum.reset();
  }
}
