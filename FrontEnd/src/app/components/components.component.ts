import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {

imageObject = [{
        image: './assets/img/2.jpg',
        thumbImage: './assets/img/2.jpg',
        alt: 'alt of image',
        title: '1'
    },{
        image: './assets/img/3.jpg',
        thumbImage: './assets/img/3.jpg',
        alt: 'alt of image',
        title: '2'
    },{
        image: './assets/img/4.jpg',
        thumbImage: './assets/img/4.jpg',
        alt: 'alt of image',
        title: '3'
    },{
        image: './assets/img/2.jpg',
        thumbImage: './assets/img/2.jpg',
        alt: 'alt of image',
        title: '4'
    },{
        image: './assets/img/3.jpg',
        thumbImage: './assets/img/3.jpg',
        alt: 'alt of image',
        title: '5'
    },{
        image: './assets/img/4.jpg',
        thumbImage: './assets/img/4.jpg',
        alt: 'alt of image',
        title: '6'
    }
];

    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: { year: number, month: number };
    model: NgbDateStruct;
    voluntarios: any[];
    constructor(private renderer: Renderer2) {




        this.voluntarios = [
            {
                "nombre": "Marcos",
                "apellido": "Perez",
                "imagen": "./assets/img/faces/clem-onojeghuo-3.jpg",
                "cargo": "por definir"
            },
            {
                "nombre": "Viviana",
                "apellido": "Reyes",
                "imagen": "./assets/img/faces/joe-gardner-2.jpg",
                "cargo": "por definir"
            },
            {
                "nombre": "Patricio",
                "apellido": "Caicedo",
                "imagen": "./assets/img/faces/erik-lucatero-2.jpg",
                "cargo": "por definir"
            },

        ]
    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;


    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        }
        console.log("voluntarios: ", this.voluntarios)
    }

}
