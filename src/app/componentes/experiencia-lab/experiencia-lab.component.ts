import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-lab',
  templateUrl: './experiencia-lab.component.html',
  styleUrls: ['./experiencia-lab.component.css']
})
export class ExperienciaLabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
