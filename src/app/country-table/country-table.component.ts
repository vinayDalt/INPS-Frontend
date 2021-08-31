import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { ModalService, TableHeaderItem, TableItem, TableModel } from 'carbon-components-angular';
import { ModalOnAddCountryComponent } from '../modal-on-add-country/modal-on-add-country.component';
import { AuthServiceService } from '../services/auth-service.service';
import { ExcelServiceService } from '../services/excel-service.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit {

  title=''
  description=''
  Model = new TableModel();
  y: any;
  data: any;
  isAdmin: boolean;
  

  constructor(private service : FeedbackServiceService , private modalService : ModalService, private auth : AuthServiceService, private excelservice : ExcelServiceService) {
    this.isAdmin = false;
    auth.isAdmin().subscribe( data => { this.isAdmin = data;  })
   }

  ngOnInit(): void {

    this.title='Country Table'
    this.description='This table contains all the information such as IDs, country codes of all the countries'
    this.service.getAllCountryData().subscribe( (response : any) => {
        for (let index = 0; index < response.length; index++) {
        this.Model.addRow([
          new TableItem({data: response[index].id}), 
          new TableItem({data: response[index].countryName}), 
          new TableItem({data: response[index].geo}),
          new TableItem({data: response[index].imt})
      ])
         //console.log(response[index]);
        }
        this.Model.header = [
          new TableHeaderItem({data:"ID"}),
          new TableHeaderItem({data: "Country Name" }),
          new TableHeaderItem({data: "Geo" }),
          new TableHeaderItem({data: "IMT" })
        ];

        this.data = this.Model.data;
      })

  }

  deleteCountry() {
    this.y = this.Model.rowsSelected
    for (let index = 0; index < this.y.length; index++) {
      if(this.y[index]==true){
        console.log(this.Model.data[index][0].data)
        this.service.deleteCountry(this.Model.data[index][0].data).subscribe(() => {
          })
          //this.data.splice(index,1)
          this.data=this.data.filter(
            (e : any) => e[0].data!=this.Model.data[index][0].data)
          this.Model.data=this.data
          console.log("deleted successfully")
        }
      }
    }
    
  AddCountry(){
      this.modalService.create({component : ModalOnAddCountryComponent})
      console.log("inside modal to add country")
  }

  exportAsXLSX():void {
    console.log("Inside new export function")
    var arr =new Array();
    arr.push(['ID','COUNTRY','Geo','IMT']);
    for (let index = 0; index < this.data.length; index++) {
      var temp=new Array()
      for (let j = 0; j < 3; j++) {
       
        var x= temp.push(this.data[index][j].data)
      }
      var y=arr.push(temp)        
    }
    console.log(arr)
    //console.log(this.Model.data)
    this.excelservice.exportAsExcelFile(arr, 'data');
  }



}
