import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {
  navigationSubscription;
  id: number;
  currentIndex: any = -1;
  showFlag: any = false;

  fotos = [{
    image: './assets/img/2.jpg',
    titulo: 'Evento',
    id: 1,
    descripcion: "descripcion"
  }, {
    image: './assets/img/3.jpg',
    titulo: 'Evento',
    id: 2,
    descripcion: "descripcion"
  },
  {
    image: './assets/img/4.jpg',
    titulo: 'Evento',
    id: 3,
    descripcion: "descripcion"
  },
  {
    image: './assets/img/2.jpg',
    titulo: 'Evento',
    id: 4,
    descripcion: "descripcion"
  }, {
    image: './assets/img/3.jpg',
    titulo: 'Evento',
    id: 5,
    descripcion: "descripcion"
  }
    ,
  {
    image: './assets/img/4.jpg',
    titulo: 'Evento',
    id: 6,
    descripcion: "descripcion"
  }
  ];
  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initializar();
      }
    });
  }

  initializar() {
    if (this.route.snapshot.params.id.lenght) {
      this.id = this.route.snapshot.params.id;
      console.log("Componente Imagenes id: ", this.id)
    }
  }

  ngOnInit(): void {
  }

  showLightbox(index) {
    this.currentIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

}
