import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { Sponsor } from '../models/sponsors';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public selectedField: Sponsor = {
    nombre: '',
    id: null,
    foto: '',
  };

  constructor(private http: HttpService) { }

  public async eliminarBlog(idBlog) {
    return await this.http.delete("/api/blogD/?id=".concat(idBlog));
  }

  public async agregarBlog(blog: Blog) {
    return await this.http.post("/api/blog", blog);
  }
  public async obtenerBlog() {
    return await this.http.get("/api/blog");
  }
  /**/
  public async modificarBlog(blog: Blog) {
    return await this.http.update("/api/blog", blog);
  }

  public async obtenerPorId(idBlog){
    return await this.http.get("/api/blog/?id=".concat(idBlog));
  }
    
  
  /*
  El formdata debe tener el id del producto
   */

   //TODO REVISAR LA SUBIDA DE IMAGENES


  public async agregarFotoBlog(foto: FormData) {
    return await this.http.formdata("/foto_blog", foto);
  }

  public async obtenerProductosConFotos() {
    return await this.http.get("/blog_con_foto");
  }

  public async obtenerProductoConFotosPorId(idProducto) {
    return await this.http.get("/producto?id=".concat(idProducto));
  }

  
}
