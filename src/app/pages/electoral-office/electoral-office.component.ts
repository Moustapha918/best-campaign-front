import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatOption} from "@angular/material/autocomplete";
import {OfficeModel} from "../../datamodels/officeModel";

@Component({
  selector: 'app-electoral-office',
  templateUrl: './electoral-office.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatOption
  ],
  styleUrls: ['./electoral-office.component.css']
})
export class ElectoralOfficeComponent implements OnInit {

  @Input()
  electoralOffices: OfficeModel[] = [];

  @Output()
  validatedOffice = new EventEmitter<OfficeModel>();

  constructor() { }

  ngOnInit(): void {
  }

  selectOffice(office: OfficeModel) {
    this.validatedOffice.emit(office)
  }
}
