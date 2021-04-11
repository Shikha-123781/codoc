import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequiredServiceService {

  constructor(private http :HttpClient) { }

   get(){
  	return this.http.get("http://mmohit.xyz/API/get.php");
  }
}

