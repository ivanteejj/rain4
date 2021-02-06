import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQueryComponent } from './home-query.component';

describe('HomeQueryComponent', () => {
  let component: HomeQueryComponent;
  let fixture: ComponentFixture<HomeQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
