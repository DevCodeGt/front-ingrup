import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesDataComponent } from './tables.component';

describe('TablesDataComponent', () => {
  let component: TablesDataComponent;
  let fixture: ComponentFixture<TablesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesDataComponent ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
