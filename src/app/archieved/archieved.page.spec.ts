import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchievedPage } from './archieved.page';

describe('ArchievedPage', () => {
  let component: ArchievedPage;
  let fixture: ComponentFixture<ArchievedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchievedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
