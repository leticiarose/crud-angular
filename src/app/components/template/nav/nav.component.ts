import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  name = 'Letícia';
  dataAniversario = new Date(2003, 12, 17);
  preco = 12855.32;
  troco = 0.57392;

  constructor() { }

  ngOnInit(): void {
  }

}
