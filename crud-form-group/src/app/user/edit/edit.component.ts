import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ActionsService } from 'src/app/service/user-action/actions.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  editForm: FormGroup;

  constructor(private userService: ActionsService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.id = id;
      this.editForm.setValue(this.userService.getUserById(id));
    });
  }

  formEditGroup(): void {
    this.editForm = new FormGroup({
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

  onEdit(): void {
    const updatedUser = {
      id: this.id,
      name: {
        first: this.editForm.value.name.first,
        last: this.editForm.value.name.last
      },
      birthdate: this.editForm.value.birthdate,
      email: this.editForm.value.email,
      phone: this.editForm.value.phone,
      address: this.editForm.value.address
    };
    
    this.userService.updateUser(this.id, updatedUser);
    this.router.navigate(['/user-list']);
  }

}