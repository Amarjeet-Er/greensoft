import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import{faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { GsService } from 'src/app/gs.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {

  faWhatsapp = faWhatsapp
  contactus_form! : FormGroup;

  constructor(
    private fb:FormBuilder,
    private service:GsService
  ) { }

  ngOnInit(): void {
    this.contactus_form = this.fb.group({
      name:["",Validators.required],
      mobile:["",Validators.required],
      email:["",Validators.required],
      message:["",Validators.required],
    })
  }
  onsubmit(){
    console.log(this.contactus_form.value)
    this.service.contact_insert(this.contactus_form.value).subscribe(
      (res:any)=>{
        console.log(res)
      }
    )
  }
}
