import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-chat',
  templateUrl: './whatsapp-chat.component.html',
  styleUrls: ['./whatsapp-chat.component.scss']
})
export class WhatsappChatComponent {

  constructor() { }
/** 
  public openWhatsAppChat() {
    const phoneNumber = '08125699389';
    const message = 'Hello, saya ingin booking kamar untuk tanggal () apa masih tersedia?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  */
}
