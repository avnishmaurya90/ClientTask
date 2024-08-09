import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root'
})
export class SocketService {
    private socket: io.Socket;

    constructor() {
        this.socket = io.connect('http://localhost:5000'); // Replace with your server URL
    }

    sendMessage(message: string) {
      console.log(this.socket);
        this.socket.emit('message', message);
    }

    getMessage(): Observable<string> {
        const observable = new Observable<string>((observer) => {
            this.socket.on('message', (data:any) => {
                observer.next(data);
            });
        });
        return observable;
    }
}