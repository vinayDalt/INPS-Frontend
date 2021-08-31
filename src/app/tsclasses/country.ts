export class Country {

    id : string;
    
    countryName : string;
    geo : string;
    imt : string;

    constructor(m1:string, m2:string, m3:string, m4:string){
        this.id = m1;
        this.countryName = m2;
        this.geo = m3;
        this.imt = m4;
    }
}
