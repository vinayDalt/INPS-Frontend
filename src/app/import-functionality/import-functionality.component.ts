import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { FeedbackServiceService } from '../services/feedback-service.service';
import { POPBluepagesService } from '../services/popbluepages.service';
import { POP } from '../tsclasses/pop';


@Component({
  selector: 'app-import-functionality',
  templateUrl: './import-functionality.component.html',
  styleUrls: ['./import-functionality.component.scss']
})
export class ImportFunctionalityComponent implements OnInit {

  pop : POP = new POP(" ", 5, " ",  " ", " ",new Date()," ", " "," ", " "," "," "," ", false, false, false," ", new Date(),new Date());

  constructor(private popService:POPBluepagesService, private service : FeedbackServiceService) { }

  ngOnInit(): void {
  }

  onFileChange(ev:any){
    let workBook:any = null;
      let jsonData = null;
      const reader = new FileReader();
      const file = ev.target.files[0];
      reader.onload = (event) => {
          const data = reader.result;
          workBook = XLSX.read(data, { type: 'binary' });
          jsonData = workBook.SheetNames.reduce((initial:any, name:any) => {
            const sheet = workBook.Sheets[name];
            initial[name] = XLSX.utils.sheet_to_json(sheet);
            return initial;
          }, {});
          //const dataString = JSON.stringify(jsonData);
      const rows = jsonData.Sheet1
        //console.log(jsonData);
      console.log(rows[0]);
      console.log(rows[1]);

      
          //document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
          //this.setDownload(dataString);
      //console.log(dataString)

      // for(var i=0; i< jsonData.length;i++){
        // this.popService.email = rows[i]['Request email'];

          this.popService.POPdetailsFromBluepage(rows[0]['Request email']).subscribe( data =>{
            
            this.pop.internet_id = data.INTERNET;
            this.pop.divCode = data.DIV;
            this.pop.jobRole = data.JOBRESPONSIB;
            this.pop.orgCode = data.ORGCODE;
            this.pop.country = data.COUNTRY;

            console.log(this.pop);
            let resp = this.service.saveFeedbackForPOP(this.pop);
            resp.subscribe((data : any) => 
            {
                console.log(data);
            });

          });
        

      // }
        }
      reader.readAsBinaryString(file);
  }

}
