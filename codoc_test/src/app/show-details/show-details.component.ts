import { Component, OnInit } from '@angular/core';
import { RequiredServiceService } from '../required-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  username: any;
  url: any;
  name: any;
  constructor(private service: RequiredServiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  	this.router.params.forEach((userName: Params) => {
      this.username = userName.username;
    });
	 this.service.get().subscribe((response)=>{
	    for(let x in response) {
          if(response[x].username == this.username ) {
          	this.name = response[x].name;
          	this.url = response[x].profile_picture;
          }
	    }

	 });
  }

}
