export class AdhocFeedback {
    _id : string;
    rating : number;
    country : string;
    comments : string;
    sourceID : string ;
    createDate  :Date;

    //for Bluepage data
    internet_id : any;
    jobRole : any;
    divCode : any;
    orgCode : any;
    orgUnitID : any;
    orgGroup : any;
    divisionName : any;

    zeroToSix : boolean;
    sevenToEight : boolean;
    nineToTen : boolean;
    procName : any;
    feedbackSent : Date;
    feedbackTaken : Date;
    

   constructor(m1:string, m2:number, m3:string, m4:string, m5:string, m6:Date, m7:any, 
    m8:any, m9:any, m10:any,m11:any, m12:any, m13:any, m14:boolean, m15:boolean, m16:boolean, m17:any, m18:any, m19:any){
       this._id = m1;
       this.rating = m2;
       this.country = m3;
       this.comments = m4;
       this.sourceID = m5;
       this.createDate = m6;
       this.internet_id = m7;
       this.jobRole = m8;
       this.divCode = m9;
       this.orgCode = m10;
       this.orgUnitID = m11;
       this.orgGroup = m12;
       this.divisionName = m13;
       this.zeroToSix = m14;
       this.sevenToEight = m15;
       this.nineToTen = m16;
       this.procName = m17;
       this.feedbackSent = m18;
       this.feedbackTaken = m19;


   }

}
