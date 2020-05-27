import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTemplateComponentComponent } from './block-template-component.component';

describe('BlockTemplateComponentComponent', () => {
  let component: BlockTemplateComponentComponent;
  let fixture: ComponentFixture<BlockTemplateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockTemplateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockTemplateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
