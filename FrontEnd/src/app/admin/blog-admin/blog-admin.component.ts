import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {

  formBlog: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public _blogServices: BlogService
             ) {
                this.buildFormArchive();
                this.formBlog.patchValue(this._blogServices.selectedField);
   }

  ngOnInit(): void {
  }

  buildFormArchive(){
    this.formBlog=this.formBuilder.group({
      id:[null],//valor por defecto, 
      title:['',[Validators.required, Validators.maxLength(20)]],
      description:['',[Validators.required, Validators.maxLength(20)]],
      foto:[null]//si es una validacicion tener un Validators
    });


    this.formBlog.get('foto').valueChanges.subscribe((value)=>{
      if(value !== null && value !== ''){
        this.imgToBase64((document.querySelector('input[type="file"]') as HTMLInputElement).files[0])
      }
      console.log(this.formBlog.get('foto').value);
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
    console.log(this.formBlog.value);
    this.formBlog.markAllAsTouched()

  }
}
