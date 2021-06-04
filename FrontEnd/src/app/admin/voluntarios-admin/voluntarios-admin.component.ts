import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClubService } from './../../services/club.service';

@Component({
  selector: 'app-voluntarios-admin',
  templateUrl: './voluntarios-admin.component.html',
  styleUrls: ['./voluntarios-admin.component.scss']
})
export class VoluntariosAdminComponent implements OnInit {

  formKid: FormGroup;
  selected = '';

  constructor(
    private formBuilder: FormBuilder,
    public _kidServices: ClubService
  ) {
    this.buildFormArchive();
    this.formKid.patchValue(this._kidServices.selectedField);
  }

  ngOnInit(): void {
  }
  // resetForm(clubForm?: NgForm): void {
  //   this.ClubService.selectedClub = {
  //     id: null,
  //     name: '',
  //     surname: '',
  //     ci: '',
  //     description: '',
  //     address: '',
  //     availability: '',
  //     foto: '',
  //   };
  // }


  buildFormArchive() {
    this.formKid = this.formBuilder.group({
      id: [null],//valor por defecto, 
      name: ['', [Validators.required, Validators.maxLength(20)]],
      surname: ['', [Validators.required, Validators.maxLength(20)]],
      ci: ['', [Validators.required, Validators.maxLength(10)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      address: ['', [Validators.required, Validators.maxLength(100)]],
      availability: ['', [Validators.required, Validators.maxLength(100)]],
      foto: [null]

    });
    this.formKid.get('foto').valueChanges.subscribe((value) => {
      if (value !== null && value !== '') {
        this.imgToBase64((document.querySelector('input[type="file"]') as HTMLInputElement).files[0])
      }
      console.log(this.formKid.get('foto').value);
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

  onSaveArchive(): void {
    console.log(this.formKid.value);
    this.formKid.markAllAsTouched()

  }

}