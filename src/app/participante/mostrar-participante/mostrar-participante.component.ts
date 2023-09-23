import { Component, OnInit , Input} from '@angular/core';
import {IParticipante} from './../tipos/IParticipante';

@Component({
  selector: 'app-mostrar-participante',
  templateUrl: './mostrar-participante.component.html',
  styleUrls: ['./mostrar-participante.component.scss'],
})
export class MostrarParticipanteComponent  implements OnInit {

  @Input() public mostrar!: IParticipante;
  constructor() { }

  ngOnInit() {}

}
