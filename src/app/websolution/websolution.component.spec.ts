import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsolutionComponent } from './websolution.component';

describe('WebsolutionComponent', () => {
  let component: WebsolutionComponent;
  let fixture: ComponentFixture<WebsolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
