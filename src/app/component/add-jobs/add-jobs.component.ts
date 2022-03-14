import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {
  constructor(private FormBuilder:FormBuilder, private JobServiceEZ:JobsService) { 


  
  }


  
  jobGroup=this.FormBuilder.group({
    id:[''],
    Title:['',Validators.required],
    Description:['',Validators.required],
    DateOfPublish: [''],
    Salary:[''],
    Location: [''],
  })

  
  ngOnInit(): void {
    
  }
  onSubmit():void{
    if (this.jobGroup.get('Description')?.hasError('required')||(this.jobGroup.get('Title')?.hasError('required'))){
      alert("Veuillez remplir tous les champs")
    }
    else{
      console.log(this.jobGroup.value);
      this.JobServiceEZ.setJobs(this.jobGroup.value);
    }
  }
}
