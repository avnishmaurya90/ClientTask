import { Component, Inject, ViewChild, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menus.service';
import { SocketService } from 'src/app/services/socket.service';

interface menusItem {
  id: number;
  MenuName: string;
  ParentMenuName: string;
  Route: string;
  MenuIcon: string;
  IsActive: string;
  serialNumber?: number;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  receivedMessages: string[] = [];
  sentMessages: string[] = [];
  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.getMessage().subscribe((msg: any) => {
      this.receivedMessages.push(msg);
      console.log('Received message:', msg);
    });
  }

  sendMessage() {
    this.sentMessages.push("Hello from Angular!");
    this.socketService.sendMessage('Hello from Angular!');
  }
}
