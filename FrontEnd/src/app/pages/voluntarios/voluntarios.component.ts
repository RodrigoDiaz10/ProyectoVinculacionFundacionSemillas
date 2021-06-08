//import { VoluntariosAdminComponent } from './../../admin/voluntarios-admin/voluntarios-admin.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClubService } from './../../services/club.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.scss']
})
export class VoluntariosComponent implements OnInit {
  // displayResponsive: boolean;
  formKid: FormGroup;
  displayResponsiveCrear: boolean;
  submitted = false;
  registerClub: FormGroup;

  constructor(private formBuilder: FormBuilder, public _kidServices: ClubService, private router: Router, private restService: ClubService, private toastr: ToastrService) {
    this.registerClub = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      surname: ['', [Validators.required, Validators.maxLength(20)]],
      ci: ['', [Validators.required, Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      availability: ['', [Validators.required, Validators.maxLength(100)]],
    });

  }

  ngOnInit(): void {
  }

  crearClub() {
    this.displayResponsiveCrear = false;
    this.submitted = true;
    if (this.registerClub.invalid) {
      return;
    }
    //Objeto json que se envia al back
    let objetoCrear = {
      "volunteers": {
        "name": this.registerClub.value.name,
        "surname": this.registerClub.value.surname,
        "ci": this.registerClub.value.surname,
        "description": this.registerClub.value.description,
        "address": this.registerClub.value.address,
        "availability": null,
        "image": null,
        "state": null
      }
      // "events": {
      //   "id": this.registerClub.value.event
      // }
    }
    console.log("valores crear: ", objetoCrear)
    this.restService.add(objetoCrear, "/volunteer").subscribe(
      res => {
        this.toastr.success('Club creado Exitosamente');
        console.log("creado exitosamente", res)
        this.resetForm();
      },
      err => {
        console.log("error crear", err)
      }
    );
  }
  // buildFormArchive() {
  //   this.formKid = this.formBuilder.group({
  //     name: ['', [Validators.required, Validators.maxLength(20)]],
  //     surname: ['', [Validators.required, Validators.maxLength(20)]],
  //     ci: ['', [Validators.required, Validators.maxLength(10)]],
  //     description: ['', [Validators.required, Validators.maxLength(200)]],
  //     address: ['', [Validators.required, Validators.maxLength(100)]],
  //     availability: ['', [Validators.required, Validators.maxLength(100)]],

  //   });
  // }
  // showResponsiveDialog() {
  //   this.displayResponsive = true;
  //   this.formKid.patchValue(this._kidServices.selectedField);
  // }
  onSaveArchive(): void {
    console.log(this.formKid.value);
    this.formKid.markAllAsTouched()

  }
  modalCrear() {
    this.displayResponsiveCrear = true;
  }
  resetForm() {
    this.registerClub.reset();
  }
}