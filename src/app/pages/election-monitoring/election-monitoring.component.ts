import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';
import {MatButton} from '@angular/material/button';
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {VoteCenter} from "../../datamodels/vote.center";
import {CenterService} from "../../services/center.service";
import {OfficeModel} from "../../datamodels/officeModel";
import {ElectoralOfficeComponent} from "../electoral-office/electoral-office.component";
import {FindElectorInOfficeComponent} from "../find-elector-in-office/find-elector-in-office.component";

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
    MatFormFieldModule,
    MatOption,
    MatSelect,
    ElectoralOfficeComponent,
    FindElectorInOfficeComponent
  ],
  templateUrl: './election-monitoring.component.html',
  styleUrl: './election-monitoring.component.css'
})
export class ElectionMonitoringComponent implements OnInit {
  voteCenters: VoteCenter[] = [];
  selectedCenterOffices: OfficeModel[] = [];
  @ViewChild('stepper') private myStepper: MatStepper | undefined;

  voteFormGroup = this._formBuilder.group({
    center: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder,
              private centerService: CenterService) {
  }

  ngOnInit(): void {

    this.centerService.getCenters().subscribe(
      data => this.voteCenters = data
    );
    this.voteFormGroup.valueChanges.subscribe(
      value => {
        value.center && this.centerService.getOffices(value.center)
          .subscribe(
            offices => this.selectedCenterOffices = offices
          )
      }
    )
  }

  selectOffice($event: OfficeModel) {
    console.log($event);
    this.myStepper?.next()
  }
}
