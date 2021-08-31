import { Component, OnInit } from '@angular/core';
import {
	Output,
	EventEmitter
	
	
} from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
		this.close.emit();
	}

}
