import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent {
  constructor(private router: Router) { }
    goToIndex(){ 
      this.router.navigate(['/','index']);}
    goToAboutUs(){
      this.router.navigate(['/','about-us']);}
    goToRooms(){
      this.router.navigate(['/','products']);}
    goToContact(){
      this.router.navigate(['/','contact']);}
  }

