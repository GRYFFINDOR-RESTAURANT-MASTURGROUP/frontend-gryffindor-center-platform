import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateAndEditComponent } from './table-create-and-edit.component';

describe('TableCreateAndEditComponent', () => {
  let component: TableCreateAndEditComponent;
  let fixture: ComponentFixture<TableCreateAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCreateAndEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCreateAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
