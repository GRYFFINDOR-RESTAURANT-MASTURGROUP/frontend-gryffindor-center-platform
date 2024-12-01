import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {Table} from '../../model/table.entity';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {TableService} from '../../service/table.service';
import {TableCreateAndEditComponent} from '../../components/table-create-and-edit/table-create-and-edit.component';
import {NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-tables-management',
  imports: [
    TableCreateAndEditComponent,
    MatTable,
    MatSort,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatSortHeader,
    MatCell,
    MatCellDef,
    MatPaginator,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    NgClass,
    MatIcon
  ],
  templateUrl: './tables-management.component.html',
  styleUrl: './tables-management.component.css'
})
export class TablesManagementComponent implements OnInit, AfterViewInit{

  protected tableData!: Table;
  protected columnsToDisplay: string[] = ['id', 'chairs', 'state', 'actions'];
  @ViewChild(MatPaginator, {static: false})
  protected paginator!: MatPaginator;
  @ViewChild(MatSort)
  protected sort!: MatSort;
  protected editMode: boolean = false;
  protected dataSource!: MatTableDataSource<any>;
  private tableService: TableService = inject(TableService);

  constructor() {
    this.editMode = false;
    this.tableData = new Table({});
    this.dataSource = new MatTableDataSource();
    console.log(this.tableService);
  }

  protected onEditItem(item: Table) {
    this.editMode = true;
    this.tableData = item;
  }

  protected onDeleteItem(item: Table) {
    this.deleteTable(item.id);
  }

  protected onCancelRequested() {
    this.resetEditState();
    this.getAllTables();
  }

  protected onTableAddRequested(item: Table) {
    this.tableData = item;
    this.createTable();
    this.resetEditState();
  }

  protected onTableUpdateRequested(item: Table) {
    this.tableData = item;
    this.updateTable();
    this.resetEditState();
  }

  private resetEditState() {
    this.tableData = new Table({});
    this.editMode = false;
  }

  private getAllTables() {
    this.tableService.getAll().subscribe((response: Array<Table>) => {
      this.dataSource.data = response;
    });
  }

  private createTable() {
    this.tableService.create(this.tableData).subscribe((response: Table) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    });
  }

  private updateTable() {
    let tableToUpdate = this.tableData;
    this.tableService.update(tableToUpdate.id, tableToUpdate).subscribe((response: Table) => {
      let index = this.dataSource.data.findIndex((table: Table) => table.id === response.id);
      this.dataSource.data[index] = response;
      this.dataSource.data = this.dataSource.data;
    });
  }

  private deleteTable(id: number) {
    this.tableService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((table: Table) => table.id !== id);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllTables();
  }
}
