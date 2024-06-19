import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoneyComponent } from './show-money.component';

describe('ShowMoneyComponent', () => {
  let component: ShowMoneyComponent;
  let fixture: ComponentFixture<ShowMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
