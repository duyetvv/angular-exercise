import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreageComponent } from './acreage.component';

describe('AcreageComponent', () => {
  let component: AcreageComponent;
  let fixture: ComponentFixture<AcreageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcreageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
