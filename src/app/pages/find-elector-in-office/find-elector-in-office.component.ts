import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";

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
    ReactiveFormsModule
  ],
  templateUrl: './find-elector-in-office.component.html',
  styleUrl: './find-elector-in-office.component.css'
})
export class FindElectorInOfficeComponent implements OnInit {
  electorControl = new FormControl<Elector | null>(null);
  electors: Elector[] = [
    { name: 'John Doe', number: '123' },
    { name: 'Jane Smith', number: '456' },
    { name: 'Emily Johnson', number: '789' },
    // Add more electors as needed
  ];
  filteredElectors: Elector[] = [];

  ngOnInit(): void {
    this.filteredElectors = this.electors;
  }

  filterElectors(searchValue: any): void {
    if (!searchValue) {
      this.filteredElectors = this.electors;
      return;
    }
    this.filteredElectors = this.electors.filter(elector =>
      elector.name.toLowerCase().includes(searchValue.value.toLowerCase()) ||
      elector.number.includes(searchValue)
    );
  }
}

