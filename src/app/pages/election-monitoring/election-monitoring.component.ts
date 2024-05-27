import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperModule,
  MatStepperNext,
  MatStepperPrevious
} from '@angular/material/stepper';
import {MatButton, MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-election-monitoring',
  standalone: true,
  imports: [
    MatStepper,
    MatStep,
    ReactiveFormsModule,
    MatFormField,
    MatStepLabel,
    MatInput,
    MatButton,
    MatStepperNext,
    MatStepperPrevious,
    MatFormFieldModule
  ],
  templateUrl: './election-monitoring.component.html',
  styleUrl: './election-monitoring.component.css'
})
export class ElectionMonitoringComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}
