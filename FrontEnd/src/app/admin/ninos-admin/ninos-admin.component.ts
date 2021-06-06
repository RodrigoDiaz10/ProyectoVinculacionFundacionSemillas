import { PersonService } from './../../services/person.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ninos-admin',
  templateUrl: './ninos-admin.component.html',
  styleUrls: ['./ninos-admin.component.scss']
})
export class NinosAdminComponent implements OnInit {

  formKid: FormGroup;
  selected = '';

  constructor(
              private formBuilder: FormBuilder,
              public _kidServices: PersonService
              ) { 
                this.buildFormArchive();
                this.formKid.patchValue(this._kidServices.selectedField);
              }

  ngOnInit(): void {
  }
  // resetForm(blogForm?: NgForm): void {
  //   this.blogsService.selectedBlog = {
  //     id: null,
  //     title: '',
  //     image: '',
  //     description: '',
  //     link: '',
     
  //   };
  // }


  buildFormArchive(){
    this.formKid=this.formBuilder.group({
      id:[null],//valor por defecto, 
      name:['',[Validators.required, Validators.maxLength(20)]],
      surname:['',[Validators.required, Validators.maxLength(20)]],//pipe para fechas??
      foto:[null],//si es una validacicion tener un Validators
      dateBirth:[null],
      ci:[null],
      houseAddress:['',[Validators.required,Validators.maxLength(70)]],
      motherName:['',[Validators.required,Validators.maxLength(70)]],
      fatherName:['',[Validators.required,Validators.maxLength(70)]],
      study:[null],
      schoolName:['',[Validators.required,Validators.maxLength(70)]],
      age:[null,[Validators.required]]

    });
 


    this.formKid.get('foto').valueChanges.subscribe((value)=>{
      if(value !== null && value !== ''){
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

  onSaveArchive(): void{
    console.log(this.formKid.value);
    this.formKid.markAllAsTouched()

    if(this.formKid.valid){// is es valido da true
      //nuevo
      if(this.formKid.controls['id'].value== null){
       this._kidServices.agregarPerson(this.formKid.value);
      }
      
    } else{
      //actualizar
      //this._libraryServices.editField(formarchive.value.id, formarchive.value);
      this.formKid.markAllAsTouched()//activar los errores que hay
    }
  }

}
