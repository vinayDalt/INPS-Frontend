import { Component, OnInit, Injector } from '@angular/core';
import {
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {

  modalText: string;
  constructor(protected injector: Injector) {
    this.modalText = this.injector.get("modalText");
   }

   @Output() close = new EventEmitter();

  ngOnInit(): void {
  }

  closeModal(): void {
    this.close.emit();
  }

}
