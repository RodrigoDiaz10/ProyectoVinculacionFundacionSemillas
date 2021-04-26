import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {


  albums = [{
      imagen: './assets/img/2.jpg',
      titulo: 'Viaje 1',
      id: 1,
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      
  }, {
    imagen: './assets/img/3.jpg',
    titulo: 'Viaje 2',
    id: 2,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    imagen: './assets/img/4.jpg',
    titulo: 'Viaje 3',
    id: 3,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    imagen: './assets/img/2.jpg',
    titulo: 'Viaje 4',
    id: 4,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }, {
    imagen: './assets/img/3.jpg',
    titulo: 'Viaje 5',
    id: 5,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
    ,
  {
    imagen: './assets/img/4.jpg',
    titulo: 'Viaje 6',
    id: 6,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getId(item) {
    let id = item.id;
    let album = item.titulo;
    console.log("galeria: ", id + "  || ", album)
    this.router.navigate(['/imagenes', id, album], { skipLocationChange: true });
  }
}
