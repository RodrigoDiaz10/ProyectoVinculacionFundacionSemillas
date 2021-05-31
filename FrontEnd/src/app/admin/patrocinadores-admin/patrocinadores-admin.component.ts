import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-patrocinadores-admin',
  templateUrl: './patrocinadores-admin.component.html',
  styleUrls: ['./patrocinadores-admin.component.scss']
})
export class PatrocinadoresAdminComponent implements OnInit {
  
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

  }

  

}
