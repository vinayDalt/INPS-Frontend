import { Component, OnInit, HostBinding } from '@angular/core';
import { ModalService } from 'carbon-components-angular';
import { LoginComponent } from 'src/app/login/login.component';




@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	// adds padding to the top of the document, so the content is below the header
	@HostBinding('class.bx--header') headerClass = true;

	
	constructor(private modalService: ModalService) { }

	ngOnInit(): void {
	}

	openModal(){
		this.modalService.create({component: LoginComponent});
		console.log("this is for modal")
	}

	

	
	

}
