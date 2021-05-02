import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  selectedAlbum: any;

  years = [
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
  ]

  albums = [{
    imagen: './assets/img/2.jpg',
    titulo: 'Viaje 1',
    id: 1,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: 2020
  }, {
    imagen: './assets/img/3.jpg',
    titulo: 'Viaje 2',
    id: 2,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: 2019
  },
  {
    imagen: './assets/img/4.jpg',
    titulo: 'Viaje 3',
    id: 3,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: 2018
  },
  {
    imagen: './assets/img/2.jpg',
    titulo: 'Viaje 4',
    id: 4,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: 2020
  }, {
    imagen: './assets/img/3.jpg',
    titulo: 'Viaje 5',
    id: 5,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: 2021
  }
    ,
  {
    imagen: './assets/img/4.jpg',
    titulo: 'Viaje 6',
    id: 6,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    year: 2021
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

  filtrarEventoYear(value) {
    console.log("año: ", value);
    // this.selectedAlbum = this.albums.filter(albums => albums.year === value);
    this.albums = this.albums.filter(albums => albums.year === value);

    console.log("album final: ", this.albums);

  }
}
