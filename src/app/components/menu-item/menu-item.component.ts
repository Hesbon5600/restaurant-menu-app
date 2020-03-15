import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  checked = false;
  related = false;

  @Input() item;
  constructor() {}

  ngOnInit() {}

  showChoices(e) {
    this.checked = e.target.checked; 
}
showRelated(e) {
  this.related = e.target.checked; 
}
}