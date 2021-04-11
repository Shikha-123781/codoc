import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequiredServiceService } from '../required-service.service';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ShowDetailsComponent} from '../show-details/show-details.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	submitted:any;
	password:any;
   group: FormGroup;
   username: any;
  constructor(private fb: FormBuilder, private router: Router,private service: RequiredServiceService) { }

  ngOnInit(): void {
  	this.group = this.fb.group({
      username: ['',[Validators.required, this.exist.bind(this)]],
      password: ['',Validators.required],
    }, { validator: this.passwordMatch.bind(this) });
  }

	exist(control: FormControl) {
		let c = control.value;
		this.service.get().subscribe((response)=>{
			for(let x in response) {
				if(response[x].username==c) {
					this.username = response[x].username;
					this.password = response[x].password; 
					return null;
				}
			}
		   return {exist:true};
		});
		
	}

	passwordMatch(control:AbstractControl) {
		let password = control.value.password;
		console.log(password+" "+this.password);
        if(password==this.password) {
        	return null;
        }
        return {passwordMatch:true};
	}
	onSubmit() {
		console.log(this.group);
		this.submitted = true;
		if(this.group.valid) {
			this.router.navigateByUrl('/showDetails/'+this.username);
		}
	}
}