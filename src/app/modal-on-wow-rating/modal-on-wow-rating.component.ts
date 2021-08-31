import { AfterContentChecked, ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import {
	Output,
	EventEmitter
		
} from "@angular/core";
import { MailrecommendationService } from '../services/mailrecommendation.service';
import {AdhocFeedback} from '../tsclasses/adhoc-feedback';

@Component({
  selector: 'app-modal-on-wow-rating',
  templateUrl: './modal-on-wow-rating.component.html',
  styleUrls: ['./modal-on-wow-rating.component.scss']
})
export class ModalOnWowRatingComponent implements AfterContentChecked {

  emps = [];
  items:any = [];
  adhoc : AdhocFeedback = new AdhocFeedback(" ", 5, " ",  " ", " ",new Date()," ", " "," ", " "," "," "," ", false, false, false," ",new Date(),new Date());
	selected : any;
  selectedEmpDetails : any;
  obj1 : any;

  @Output() close = new EventEmitter();
  constructor(private service : MailrecommendationService, private cdref : ChangeDetectorRef, protected injector: Injector) {
    this.obj1 = this.injector.get("obj");
   }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  closeModal(): void {
		this.close.emit();
	}

  onSearch(event:any){
    //console.log(this.items[1].content)
    const selected = this.items.find(
      ( content:any ) => content.content.toLowerCase().includes(event.toLowerCase())
    );
    console.log(event.length)
    if (event.length > 1){
      this.service.getGeoPm(event).subscribe((data: any) => {
        let result:any = data;
        const mySuggestions: { content: any; selected: boolean; }[] = [];
        result.forEach((item: any)=>{
          
          if(item.email==undefined){
            
          }
          else{
            
            // const myObj={ content: item.name.concat(",".toString()).concat(item.email.toString()), selected: false }
            const myObj={ content: item.name+", "+item.email, selected: false }
            mySuggestions.push(myObj)
          }
        })
        this.items=mySuggestions;
         })

    }
    else if(event.length < 2){
      console.log('0 items')
      this.items=[]
      console.log(this.items)
      for (let index = 0; index < this.items.length; index++) {
        this.items.pop()
      }
     
    }
  }
 
  onEnter1(event:any){
  }

  selected1(event:any){
    var index:number
    var email:string
    var name:string
    this.selected = event.item.content
    index=this.selected.indexOf(',')
    console.log(this.selected, index)
    name=this.selected.slice(0,index)
    email=this.selected.slice(index+2)
    console.log('name:',name,'email:',email)
    this.service.getGeoPm(email).subscribe((data:any) => {this.selectedEmpDetails=data[0]
     
    // var obj=new FeedbackFormComponent(this.service,this.modalService,this.bluePageService)
    this.obj1.procDetails(name,email,this.selectedEmpDetails)
       })
  }


}
