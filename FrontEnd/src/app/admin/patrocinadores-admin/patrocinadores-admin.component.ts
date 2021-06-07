import { SponsorService } from './../../services/sponsor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patrocinadores-admin',
  templateUrl: './patrocinadores-admin.component.html',
  styleUrls: ['./patrocinadores-admin.component.scss']
})
export class PatrocinadoresAdminComponent implements OnInit {
  modifSponsor: FormGroup;
  registerSponsor: FormGroup;
  sponsors: any;
  sponsorseleccionado: any;
  displayResponsiveCrear: boolean;
  displayResponsiveModificar: boolean;
  idEliminar: number;
  
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private restService: SponsorService, private toastr: ToastrService) {
    this.modifSponsor = this.formBuilder.group({
      id:[null],//valor por defecto, 
      nombre:['',[Validators.required, Validators.maxLength(20)]],
      foto:[null]//si es una validacicion tener un Validators
    });
    this.registerSponsor = this.formBuilder.group({
      id:[null],//valor por defecto, 
      nombre:['',[Validators.required, Validators.maxLength(20)]],
      foto:[null]//si es una validacicion tener un Validators
    });
  }

  ngOnInit(): void {
    this.getSponsors();
  }
// seteo de objeto enviar
  crearAlbum() {
    this.displayResponsiveCrear = false;
    this.submitted = true;
    if (this.registerSponsor.invalid) {
      return;
    }
    //Objeto json que se envia al back
    let objetoCrear = {
      "sponsors": {
        "id": this.registerSponsor.value.id,
        "nombre": this.registerSponsor.value.nombre,
        "foto": this.registerSponsor.value.foto
      }
    }
    // console.log("valores crear: ", objetoCrear)
    this.restService.add(objetoCrear, "/album").subscribe(
      res => {
        this.toastr.success('Album creado Exitosamente');
        console.log("creado exitosamente", res)
        this.resetForm();
        this.getSponsors();
      },
      err => {
        console.log("error crear", err)
      }
    );
  }

 

  // Obtengo todos los albumnes
  getSponsors() {
    this.restService.get("/album").subscribe((data) => {
      this.sponsors = data;
      console.log("albumnes: ", this.sponsors);
    });
  }

  // Seteo del objeto modificar 
  modificarAlbum() {
    this.displayResponsiveModificar = false;
    this.submitted = true;
    if (this.modifSponsor.invalid) {
      return;
    }
    //Objeto json que se envia al back
    let objetoModificar = {
      "sponsors": {
        "id": this.modifSponsor.value.id,
        "nombre": this.modifSponsor.value.nombre,
        "foto": this.modifSponsor.value.foto
      }
    }
    // console.log("objetoModificar: ", objetoModificar)
    this.restService.updateData(objetoModificar, "/album/" + this.sponsorseleccionado.id).subscribe(
      res => {
        this.toastr.success('Álbum modificado Exitosamente');
        console.log("modificado: exitosamente", res);
        this.getSponsors();
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
      this.sponsorseleccionado = data;
      console.log("album seleccionado: ", this.sponsorseleccionado);
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
        this.getSponsors();
      },
      err => {
        console.log("error: eliminar", err)
      }
    );
  }




//Despliege de Modales
  modalModificar() {
    this.displayResponsiveModificar = true;
  }

  modalCrear() {
    this.displayResponsiveCrear = true;
  }

  resetForm() {
    this.registerSponsor.reset();
  }
  /**
  formSponsor: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public _sponsorServices: BlogService
             ) {
              this.buildFormArchive();
              this.formSponsor.patchValue(this._sponsorServices.selectedField);
              }

  ngOnInit(): void {
  }

  buildFormArchive(){
    this.formSponsor=this.formBuilder.group({
      id:[null],//valor por defecto, 
      nombre:['',[Validators.required, Validators.maxLength(20)]],
      foto:[null]//si es una validacicion tener un Validators
    });



    this.formSponsor.get('foto').valueChanges.subscribe((value)=>{
      if(value !== null && value !== ''){
        this.imgToBase64((document.querySelector('input[type="file"]') as HTMLInputElement).files[0])
      }
      console.log(this.formSponsor.get('foto').value);
    })
  }

  private imgToBase64(file: any) {
    if (file) {
      const reader = new FileReader();
      reader.onload = this.toBase64.bind(this);
      reader.readAsBinaryString(file);
    }
  }
  toBase64(e) {
    console.log('data:image/png;base64,' + btoa(e.target.result));
  }

  onSaveArchive(): void{
    console.log(this.formSponsor.value);
    this.formSponsor.markAllAsTouched()

  } */
}
