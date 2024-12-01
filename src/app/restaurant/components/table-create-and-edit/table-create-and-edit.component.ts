import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Table} from '../../model/table.entity';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-table-create-and-edit',
  imports: [],
  templateUrl: './table-create-and-edit.component.html',
  styleUrl: './table-create-and-edit.component.css'
})
export class TableCreateAndEditComponent {
  @Input() table!: Table;
  @Input() editMode: boolean = false;
  @Output() tableAddRequested = new EventEmitter<Table>();
  @Output() tableUpdateRequested = new EventEmitter<Table>();
  @Output() cancelRequested = new EventEmitter();
  @ViewChild('tableForm', { static: false }) tableForm!: NgForm;

  constructor() {
    this.table = new Table({});
  }

  private resetEditState() {
    this.table = new Table({});
    this.editMode = false;
    this.tableForm.resetForm();
  }

  onSubmit() {
    if (this.tableForm.form.valid) {
      let emitter = this.editMode ? this.tableUpdateRequested : this.tableAddRequested;
      emitter.emit(this.table);
      this.resetEditState();
    } else {
      console.error('Invalid form data');
    }
  }

  onCancel() {
    this.cancelRequested.emit();
    this.resetEditState();
  }
}
