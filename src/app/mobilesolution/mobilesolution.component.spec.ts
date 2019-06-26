import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesolutionComponent } from './mobilesolution.component';

describe('MobilesolutionComponent', () => {
  let component: MobilesolutionComponent;
  let fixture: ComponentFixture<MobilesolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
