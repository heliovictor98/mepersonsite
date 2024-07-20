import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleNameComponent } from './title-name.component';

describe('TitleNameComponent', () => {
  let component: TitleNameComponent;
  let fixture: ComponentFixture<TitleNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleNameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
