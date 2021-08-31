import { Component, OnInit } from '@angular/core';
import {AdhocFeedback} from '../../tsclasses/adhoc-feedback';
// import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from "@angular/forms";

import {FeedbackServiceService} from '../../services/feedback-service.service';
import { ModalService } from 'carbon-components-angular';
import { ModalOnWowRatingComponent } from 'src/app/modal-on-wow-rating/modal-on-wow-rating.component';
import { W3SSORetrievalService } from 'src/app/services/w3-ssoretrieval.service';
import { BluepageDetailsService } from 'src/app/services/bluepage-details.service';
import { ModalMessageComponent } from 'src/app/modal-message/modal-message.component';
import { HttpClient } from '@angular/common/http';
import { OrgDetailsService } from 'src/app/services/org-details.service';



@Component({
	selector: 'app-feedback-form',
	templateUrl: './feedback-form.component.html',
	styleUrls: ['./feedback-form.component.scss']
})


export class FeedbackFormComponent implements OnInit {

	x: any;
	displayName : any;
	w3Data : any
	adhoc : AdhocFeedback = new AdhocFeedback(" ", 5, " ",  " ", " ",new Date()," ", " "," ", " "," "," "," ", false, false, false," ", new Date(),new Date());
	procname : any; 
	sourceIDName :any;
	
	

	countryList: any = [ { content: "None", selected: true },
							{ content: "Australia" },
							{ content: "China" },
							{ content: "India" },
							{ content: "Singapore" },
							 { content: "U.S.A" }];

	constructor(private service : FeedbackServiceService, private modalService : ModalService,
		 private service2 : W3SSORetrievalService, private bluePageService : BluepageDetailsService ,
		 private http: HttpClient, private orgService : OrgDetailsService) { }

	 private orgGroupAPI='https://bluepages.ibm.com/BpHttpApisv3/wsapi?orgCodes=';
	feedbackSave(){
        
        // this.adhoc.country=this.x.content;
		
		this.adhoc.sourceID="Adhoc";
		
		this.bluePageService.detailsFromBluepage().subscribe(data =>
			{
				this.adhoc.internet_id = data.INTERNET;
				this.adhoc.divCode = data.DIV;
				this.adhoc.jobRole = data.JOBRESPONSIB;
				this.adhoc.orgCode = data.ORGCODE;
				if(this.x ==null){
					
					this.adhoc.country = data.COUNTRY;
				}
				else
				{
					this.adhoc.country = this.x.content;
				}

				this.orgService.detailsFromOrgGroup().subscribe(data =>
					{
						this.adhoc.orgUnitID = data.UNITID;
						this.adhoc.orgGroup = data.GROUPID;
						this.adhoc.divisionName = data.ORGDISPLAY;
					})
															
			})

		// this.adhoc.procName = this.procDetails(procname , email, details);

		if(this.adhoc.rating < 7){
			this.adhoc.zeroToSix = true;
		}
		else
		{
			if(this.adhoc.rating == 7 || this.adhoc.rating == 8){
				this.adhoc.sevenToEight = true;
			}
			else{
				this.adhoc.nineToTen = true;
			}
		}
		
        let resp = this.service.saveFeedback(this.adhoc);
        resp.subscribe((data : any) => 
        {
            console.log(this.adhoc);
        });

		this.modalService.create({component: ModalMessageComponent, inputs: {modalText: "Submitted"}});

    }

	ngOnInit(): void {
		
		this.service2.userName().subscribe(name => this.displayName = name);
		this.sourceIDName = "Adhoc";

		var header:any = document.getElementById("myButtons1");
        var btns = header.getElementsByClassName("item");
        for (var i = 0; i < btns.length; i++) {
            btns[i]?.addEventListener("click", this.func1)
        }
        var header:any = document.getElementById("myButtons2");
        var btns = header.getElementsByClassName("item");
        for (var i = 0; i < btns.length; i++) {
            btns[i]?.addEventListener("click", this.func2)
        }
		
	}

	openModalOnWowRating(){

		this.modalService.create({component : ModalOnWowRatingComponent, inputs: {obj:this}})
		console.log("inside model on wow")
		
	}

	func1(this: HTMLElement) { 
        //var current = document.getElementsByClassName("item-low-highlight");
        var current = document.getElementsByClassName("low1-highlight");
        console.log(current.length)
        if(current.length!=0){
            console.log(this.className)
            console.log(current)
            console.log(current[0].className)
            //current[0].className = current[0].className.replace("item-low-highlight", "low");
            current[0].className = current[0].className.replace("-highlight", "");
        }
        var current = document.getElementsByClassName("mid1-highlight");
        console.log(current.length)
        if(current.length!=0){
            console.log(this.className)
            console.log(current)
            console.log(current[0].className)
            //current[0].className = current[0].className.replace("item-low-highlight", "low");
            current[0].className = current[0].className.replace("-highlight", "");
        }
        var current = document.getElementsByClassName("high1-highlight");
        console.log(current.length)
        if(current.length!=0){
            console.log(this.className)
            console.log(current)
            console.log(current[0].className)
            //current[0].className = current[0].className.replace("item-low-highlight", "low");
            current[0].className = current[0].className.replace("-highlight", "");
        }
        this.className=this.className+'-highlight'
    }
    func2(this: HTMLElement) {  
        //var current = document.getElementsByClassName("item-low-highlight");
        var current = document.getElementsByClassName("low2-highlight");
        console.log(current.length)
        if(current.length!=0){
            console.log(this.className)
            console.log(current)
            console.log(current[0].className)
            //current[0].className = current[0].className.replace("item-low-highlight", "low");
            current[0].className = current[0].className.replace("-highlight", "");
        }
        var current = document.getElementsByClassName("mid2-highlight");
        console.log(current.length)
        if(current.length!=0){
            console.log(this.className)
            console.log(current)
            console.log(current[0].className)
            //current[0].className = current[0].className.replace("item-low-highlight", "low");
            current[0].className = current[0].className.replace("-highlight", "");
        }
        var current = document.getElementsByClassName("high2-highlight");
        console.log(current.length)
        if(current.length!=0){
            console.log(this.className)
            console.log(current)
            console.log(current[0].className)
            //current[0].className = current[0].className.replace("item-low-highlight", "low");
            current[0].className = current[0].className.replace("-highlight", "");
        }
        this.className=this.className+'-highlight'
    }
	
	procDetails(name:string,email:string,details:any){
        this.procname=name;
		if(this.adhoc.rating == 10){
			this.adhoc.procName=name;
			
		}
		else
		this.adhoc.procName = " ";
		// if(this.adhoc.rating == 10)
		// return name;
		// else
		// return " ";
           
    }


}
