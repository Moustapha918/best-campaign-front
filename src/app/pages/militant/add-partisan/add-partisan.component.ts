import {Component} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {PartisanService} from "../../../services/partisan.service";
import {PartisanModel} from "../../../datamodels/partisan.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-partisan',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatIcon,
    MatSuffix,
    FormsModule,
    NgIf
  ],
  templateUrl: './add-partisan.component.html',
  styleUrl: './add-partisan.component.css'
})
export class AddPartisanComponent {

  constructor(private partisanService: PartisanService) {
  }

  nni: string = "";
  foundPartisan!: PartisanModel;

  findPartisan() {
    if (this.nni) {
      this.partisanService.findByNni(this.nni).subscribe(
        partisan => this.foundPartisan = partisan,
      )
    }
  }
}
