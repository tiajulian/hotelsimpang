import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{

  constructor() { }

  openWhatsAppChat() {
    const phoneNumber = '+628125699389';
    const message = 'Hello, saya ingin booking kamar untuk tanggal (dd/mm/yyyy) apa masih tersedia?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

}
