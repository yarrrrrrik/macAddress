import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressStoryComponent } from './address-story.component';

describe('AddressStoryComponent', () => {
  let component: AddressStoryComponent;
  let fixture: ComponentFixture<AddressStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
