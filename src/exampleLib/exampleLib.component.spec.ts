import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleLibComponent } from './exampleLib.component';

describe('example lib component', () => {
  let fixture: ComponentFixture<ExampleLibComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleLibComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ExampleLibComponent);
    fixture.detectChanges();
  });
  it('should show correct values', () => {
    const map =
      fixture.debugElement.nativeElement.querySelector(
        '#lib-element'
      ).innerHTML;
    expect(map).toBe('ExampleLib');
  });
});
