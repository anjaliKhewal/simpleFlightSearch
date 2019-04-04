import { Component, OnInit } from '@angular/core';
import { FlightSearchService, FlightInterface } from 'src/app/services/flight-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  flight:string;
  origin:string;
  destination:string;
  date:string;
  flightResult:Array<FlightInterface>;
  res:string;
  
  constructor(private flightService:FlightSearchService) { }

  ngOnInit() {
  }

  search(flight,origin,destination,date){
   // this.flightService.load(flight).subscribe(res => {
     // this.res = res;
    if(flight!=undefined){
      this.flightService.load(flight,date).subscribe(flightResult => {
      this.flightResult = flightResult;
      //console.log(flightResult);
      });
    }
    else if(origin!=undefined && destination!=undefined){
      this.flightService.loadFromOrigin(origin,destination,date).subscribe(flightResult => {
      this.flightResult = flightResult;
      //console.log(flightResult);
      });
    }
  }

}
