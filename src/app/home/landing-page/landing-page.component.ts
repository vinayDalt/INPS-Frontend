import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';




@Component({
	selector: 'app-landing-page',
	templateUrl: './landing-page.component.html',
	styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

	isAdmin: boolean;
	isGeoLead: boolean;

	constructor(private auth : AuthServiceService) {
		this.isAdmin = false;
		this.isGeoLead = false;
    	auth.isAdmin().subscribe( data => { this.isAdmin = data;  });
		auth.isGeoLead().subscribe( data => { this.isGeoLead = data; });
	 }

	ngOnInit(): void {	}

	
	



}
