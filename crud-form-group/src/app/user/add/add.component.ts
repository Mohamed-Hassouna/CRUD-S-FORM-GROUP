import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActionsService } from 'src/app/service/user-action/actions.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm:FormGroup;

  constructor(private userService:ActionsService) { }
  
  ngOnInit(): void {
  }
  formAddGroup(): void {
    this.addForm = new FormGroup({
      name: this.nameFormGroup(),
      birthdate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    })


 

}
  nameFormGroup(): FormGroup {
    return new FormGroup({
      first: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      last: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    })
  }
  onAdd(): void {
    if (this.addForm.valid) {
      this.userService.addUser(this.addForm.value);
    }
  }
}
