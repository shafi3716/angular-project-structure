import { ApiCommonService } from './../../../../service/common/api-common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loader = false;

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiCommon: ApiCommonService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { 
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {

    if (this.registerForm.valid){

      this.apiCommon.store('auth/register', this.registerForm.value).subscribe(
        res => {
          if (res.status === 'success') {
            this.router.navigateByUrl('/login');
            this.snackBar.open(res.message, 'close', {
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: ['snackbar']
            });
          }
        }
      );
    }

  }

}
