import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {PartisanModel} from "../../datamodels/partisan.model";
import {PreventSpaceActionOnSelect} from "../../components/prevent-space-action-on-select.directive";

interface Elector {
  name: string;
  number: string;
}

@Component({
  selector: 'app-find-elector-in-office',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    PreventSpaceActionOnSelect
  ],
  templateUrl: './find-elector-in-office.component.html',
  styleUrl: './find-elector-in-office.component.css'
})
export class FindElectorInOfficeComponent implements OnInit {

  @Input()
  electors: PartisanModel[] = [];
  @Input()
  filteredElectors: PartisanModel[] = [];

  @Output()
  selectElector=  new EventEmitter<PartisanModel>();
  electorControl = new FormControl<PartisanModel | null>(null);

  constructor() {
  }

  ngOnInit(): void {
    this.filteredElectors = this.electors;

    this.electorControl.valueChanges.subscribe(
      value => value ? this.selectElector.emit(value) : null
    );
  }

  filterElectors(searchValue: any): void {
    if (!searchValue) {
      this.filteredElectors = this.electors;
      return;
    }
    this.filteredElectors = this.electors.filter(elector =>
      elector.fullName.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      elector.numberOnOfficeRegister == searchValue.value
    );
  }
}

