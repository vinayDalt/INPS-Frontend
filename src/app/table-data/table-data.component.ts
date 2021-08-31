import { AfterContentInit, AfterViewInit, Component, ContentChildren, HostListener, OnInit, Output, QueryList, Input } from '@angular/core';
import { ContentSwitcherOption, ModalService, TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { FeedbackServiceService } from '../services/feedback-service.service';
import {AdhocFeedback} from '../tsclasses/adhoc-feedback';
import { DatePipe } from '@angular/common'
import { range } from 'rxjs';
import flatpickr from 'flatpickr';
import { EventEmitter} from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ElementFinder } from 'protractor';
import { AuthServiceService } from '../services/auth-service.service';
import { ExcelServiceService } from '../services/excel-service.service';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})

export class TableDataComponent implements OnInit {
  title=''
  description=''
  Model = new TableModel();
  date = new Date()
  format=''
  isAdmin : boolean;
  adhoc : AdhocFeedback = new AdhocFeedback(" ", 5, " ",  " ", " ",new Date()," ", " "," ", " "," "," "," ", false, false, false," ",new Date(),new Date());
  items: any = [ { content: "None", selected: true },
  { content: "DateRange" },
  { content: "Country" },
  { content: "SourceID" }];
  countryFilter: any = [ 
    { content: "None", selected: true },
    { content: "Australia" },
    { content: "China" },
    { content: "India" },
    { content: "Singapore" },
     { content: "USA" }];
  constructor(private service : FeedbackServiceService, public datepipe: DatePipe,
     private auth : AuthServiceService, private excelservice : ExcelServiceService, private modalService : ModalService) { 
      this.isAdmin = false;
    	auth.isAdmin().subscribe( data => { this.isAdmin = data;  })
    }

  data=[];
  copyData: any;
  tempData: any;
  allData: any;
  dissatData: any;
  neutralData: any;
  satData: any;
  date1: any;
  date2: any;
  index: any;
  y: any;
  dateFilter=false;
  dateFilterData: any;
  countryfilter=false;
  countryfilterData: any;
  searchFilter=false;
  searchFilterData: any;
  searchkeyword: any;
  country : any;
  filteredData : any;

  //z: any;
  @Output() z = new EventEmitter<ContentSwitcherOption>();
  @ContentChildren(ContentSwitcherOption) options =new QueryList<ContentSwitcherOption>();

  @Input() itemsPerPageOptions: number[] = [10,20,50,100,200];

ngOnInit() {
  this.title='All NPS Feedback'
  this.description='This table contains all feedbacks given by the users'
  this.service.getAllNPSFeedback().subscribe( (response : any) => {
      for (let index = 0; index < response.length; index++) {
        this.Model.addRow([new TableItem({data: response[index]._id}), new TableItem({data: response[index].sourceID}), 
        new TableItem({data: this.datepipe.transform(response[index].createDate,'dd-MM-yyyy HH:MM:SS')}),
        new TableItem({data: response[index].rating}), new TableItem({data: response[index].country}),
        new TableItem({data: response[index].comments}), new TableItem({data: response[index].divCode}),
        new TableItem({data: response[index].internet_id}) ,new TableItem({data: response[index].jobRole}),
        new TableItem({data: response[index].orgCode}), new TableItem({data: response[index].orgGroup}),new TableItem({data: response[index].divisionName}), 
        new TableItem({data: response[index].procName}),new TableItem({data: response[index].zeroToSix}),
        new TableItem({data: response[index].sevenToEight}), new TableItem({data: response[index].nineToTen}),
        new TableItem({data: this.datepipe.transform(response[index].feedbackSent,'dd-MM-yyyy HH:MM:SS')}),new TableItem({data: this.datepipe.transform(response[index].feedbackTaken,'dd-MM-yyyy HH:MM:SS')})])
    }
    this.Model.data = this.Model.data.reverse();
    this.copyData=this.Model.data;
    this.tempData=this.Model.data;
    this.allData=this.Model.data;
    this.dissatData=this.Model.data;
    this.neutralData=this.Model.data;
    this.satData=this.Model.data;
    this.data = this.copyData; 
    this.Model.pageLength = 10 ;
    this.Model.totalDataLength = response.length;
    this.selectPage(1);
    this.Model.header = [
      new TableHeaderItem({data:"ID"}), new TableHeaderItem({data: "Source ID" }),
      new TableHeaderItem({data: "Create Date" }), new TableHeaderItem({data: "Rating" }), 
      new TableHeaderItem({data: "Country" }), new TableHeaderItem({data: "Comments" }),
      new TableHeaderItem({data:"Div Code"}), new TableHeaderItem({data: "Internet_ID" }), 
      new TableHeaderItem({data: "Job Role" }), new TableHeaderItem({data: "Org Code" }),
      new TableHeaderItem({data: "Org Group" }), new TableHeaderItem({data: "Division Name" }),
      new TableHeaderItem({data: "Procurement Name" }), new TableHeaderItem({data:" 0-6 "}), 
      new TableHeaderItem({data: " 6-8 " }), new TableHeaderItem({data: " 9-10 " }),
      new TableHeaderItem({data: "Feedback Sent" }),new TableHeaderItem({data: "Feedback Taken" })
    ];
  })
 }

 selectPage(page : any) {
  const offset = this.Model.pageLength * (page - 1);
  const pageRawData = this.data.slice(offset, offset + this.Model.pageLength);
  this.Model.data = this.prepareData1(pageRawData)
  this.Model.currentPage = page;

}

prepareData1(data: any){
  const newData=[];
  for (const i of data){
    newData.push([
      new TableItem({data: String(i[0].data)}),
      new TableItem({data: String(i[1].data)}),
      new TableItem({data: i[2].data}),
      new TableItem({data: i[3].data}),
      new TableItem({data: String(i[4].data)}),
      new TableItem({data: String(i[5].data)}),
      new TableItem({data: String(i[6].data)}),
      new TableItem({data: String(i[7].data)}),
      new TableItem({data: String(i[8].data)}),
      new TableItem({data: String(i[9].data)}),
      new TableItem({data: String(i[10].data)}),
      new TableItem({data: String(i[11].data)}),
      new TableItem({data: String(i[12].data)}),
      new TableItem({data: String(i[13].data)}),
      new TableItem({data: String(i[14].data)}),
      new TableItem({data: String(i[15].data)}),
      new TableItem({data: String(i[16].data)}),
      new TableItem({data: String(i[17].data)})
    ]);
  }
  this.Model.data=newData;
  this.filteredData = this.Model.data;
   return newData;
}

deleteFeedbackFromTable(){
   
  this.y = this.Model.rowsSelected
  
  for (let index = 0; index < this.y.length; index++) {
    if(this.y[index]==true){
        this.service.deleteFeedback(this.Model.data[index][0].data).subscribe(() => {
        })
        
        this.data=this.data.filter(
          (e : any) => e[0].data!=this.Model.data[index][0].data
        )
        this.Model.totalDataLength = this.data.length;
        this.selectPage(this.Model.currentPage)
        
    }
  }

  this.modalService.create({component: ModalMessageComponent, inputs: {modalText: "Deleted"}});
}





searchValueChange(event : Event) {
  this.searchkeyword = (event.target as HTMLInputElement).value;
  if(this.searchkeyword){
    this.searchFilter=true;
  }
  else{
    this.searchFilter=false;
  }
  this.filterfunction()
}

  onRangeValueChange(event : any){
    if(event[0]!= null && event[1]!= null){
    this.date1=this.datepipe.transform(event[0],'yyyy-MM-dd')
    this.date2=this.datepipe.transform(event[1],'yyyy-MM-dd')
    this.dateFilter=true;
    }
    else{
      this.dateFilter=false;
    }
    this.filterfunction()
  }


 

  selected(event : any)
     {
      this.country=event.item.content
      if(this.country!="None"){
        this.countryfilter=true;
      }
      else{
        this.countryfilter=false
      }
        this.filterfunction()
     }

     filterfunction(){
      if(this.searchFilter){
        this.data = this.data.filter( 
          (item : any) => item[0].data.toLowerCase().includes(this.searchkeyword.toLowerCase()) || 
          item[1].data.toLowerCase().includes(this.searchkeyword.toLowerCase()) ||
          item[4].data.toLowerCase().includes(this.searchkeyword.toLowerCase()) ||
          item[5].data.toLowerCase().includes(this.searchkeyword.toLowerCase()) 
          );
      }
      if(this.dateFilter){
        this.data = this.data.filter(
          (e : any) => e[2].data.split("-").reverse().join("-")>=this.date1 && e[2].data.split("-").reverse().join("-")<=this.date2
        )
      }
      if(this.countryfilter){
        this.data = this.data.filter( 
          (e : any) => e[4].data.toLowerCase().includes(this.country.toLowerCase())
        )
      }
      this.Model.totalDataLength = this.data.length;
      this.selectPage(1);
      this.filteredData = this.data;
      this.data=this.copyData
    }



    demoFunction(event:any){
      var x: any;
            
      if(event.name=="All NPS"){
        this.title='All NPS Feedback'
        this.description='This table contains all the feedbacks given by the users'
        this.data=this.allData
        console.log(this.data)
        this.tempData=this.data
        this.copyData=this.data
        this.Model.totalDataLength = this.data.length;
        this.selectPage(1);
      }
      else if(event.name=="Dissatisfied"){
        this.title='All NPS Dissatisfied Feedback'
        this.description='This table contains all the Dissatisfied feedbacks given by the users'
        this.data=this.dissatData.filter(
          (e : any) => e[3].data < 6
        )
        
        this.tempData=this.data
        this.copyData=this.data
        this.Model.totalDataLength = this.data.length;
        this.selectPage(1);
      }
      else if(event.name=="Neutral"){
        this.title='All NPS Neutral Feedback'
        this.description='This table contains all the Neutral feedbacks given by the users'
        

this.data=this.neutralData.filter(
          (e : any) => 7<=e[3].data && e[3].data<=8
        )
        
        this.tempData=this.data
        this.copyData=this.data
        this.Model.totalDataLength = this.data.length;
        this.selectPage(1);
      }
      else if(event.name=="Satisfied"){
        this.title='All NPS Satisfied Feedback'
        this.description='This table contains all the Satisfied feedbacks given by the users'
        
        this.data=this.neutralData.filter(
          (e : any) => e[3].data>8
        )
       
        this.tempData=this.data
        this.copyData=this.data
        this.Model.totalDataLength = this.data.length;
        this.selectPage(1);
      }
    }

    //for downloading Excel
    exportAsXLSX():void {
      var arr=new Array()
      var temp1=new Array()
      for (let index = 0; index < this.Model.header.length; index++) {
        var v=temp1.push(this.Model.header[index].data)        
      }
      arr.push(temp1)
      
      this.y = this.Model.rowsSelected
      
      for (let index = 0; index <this.y.length; index++) {
        if(this.y[index]){
          var temp=new Array()
          for (let j = 0; j < this.Model.header.length; j++) {
          var x= temp.push(this.filteredData[index][j].data)
          }
        var z=arr.push(temp)
        }        
      }
       this.excelservice.exportAsExcelFile(arr,'data');
    }
  }















