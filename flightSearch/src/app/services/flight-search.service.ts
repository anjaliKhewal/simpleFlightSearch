import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


  let service:string = 'http://localhost:3000/';

  export interface FlightInterface {
    flightNumber: string;
    carrier: string;
    origin: string;
    departure:string
    destination: string;
    arrival:string;
    aircraft:string;
    distance:string;
    travelTime:string;
    status: string;
    }

@Injectable()
export class FlightSearchService {

  
  constructor(private http:HttpClient) { }

  load(flight,date){
    if(flight){
      return this.http.get<Array<FlightInterface>>(service+flight+'/'+date); 
    }
  }
  loadFromOrigin(origin,destination,date){
    if(origin){
      return this.http.get<Array<FlightInterface>>(service+'details/'+origin+'/'+destination+'/'+date);
    }
  }

}
