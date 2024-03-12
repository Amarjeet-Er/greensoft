import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GsService } from 'src/app/gs.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  enquiry_form!:FormGroup
  constructor(
    private fb:FormBuilder,
    private servics:GsService,
    private clo: MatDialogRef<EnquiryComponent>,
    private popup:NgToastService
  ) { }
 
  ngOnInit(): void {
    this.enquiry_form = this.fb.group({
      Name:["",Validators.required],
      Type:["",Validators.required],
      Mobile:["",Validators.required],
      Email:["",Validators.required],
      Message:["",Validators.required],
    })
  }
  onsubmit(){
    console.log(this.enquiry_form.get('services')?.value)
    console.log(this.enquiry_form.value)
    this.servics.enquriy_insert(this.enquiry_form.value).subscribe(
      (res:any)=>{
        console.log(res);
        this.popup.success({detail:'success',summary:'enquiry insert successfully'})
        this.clo.close();
      },
      (error:any)=>{
        this.popup.error({detail:'failed',summary:'enquiry not insert'})
      }

    )
  }
  
}
