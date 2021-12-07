import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less'],
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}
  @Output() testEvent = new EventEmitter<string>();
  ngOnInit(): void {}
  onClickEvent() {
    this.testEvent.emit('I‘m from message !!!');
  }
}
