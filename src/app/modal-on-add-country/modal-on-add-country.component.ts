import { Component, OnInit } from '@angular/core';
import {
  Output,
  EventEmitter
} from "@angular/core";
import { Country } from '../tsclasses/country';
import { ModalService } from 'carbon-components-angular';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-modal-on-add-country',
  templateUrl: './modal-on-add-country.component.html',
  styleUrls: ['./modal-on-add-country.component.scss']
})
export class ModalOnAddCountryComponent implements OnInit {

  country: Country = new Country('','','','');
  @Output() close = new EventEmitter();

  constructor(private modalService : ModalService, private service : FeedbackServiceService ) { }

  ngOnInit(): void {
  }

  newEntrySave(){
    let resp = this.service.saveCountry(this.country);
    resp.subscribe((data : any) => 
    {
      console.log(this.country);
    })
    this.modalService.create({component: ModalMessageComponent, inputs: {modalText: "Added"}});
  }
  closeModal(): void {
    this.close.emit();
  }

}
