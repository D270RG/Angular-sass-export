import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleLibModule } from 'exampleLib/exampleLib.module';
import { AppComponent } from './app.component';

describe('app component', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleLibModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });
  it('should show correct values', () => {
    const map =
      fixture.debugElement.nativeElement.querySelector('#full-map').innerHTML;
    const colorVar =
      fixture.debugElement.nativeElement.querySelector('#color-var').innerHTML;
    const fontVar =
      fixture.debugElement.nativeElement.querySelector('#font-var').innerHTML;

    expect(JSON.parse(map)).toEqual({
      'status-color-primary': '#000',
      'status-color-success': '#27ba6c',
      'status-color-info': '#03a9f4',
      'status-color-warning': '#ff8833',
      'status-color-danger': '#ff1a1a',
      'font-weight-regular': '400',
      'font-weight-medium': '500',
      'font-weight-bold': '700',
    });
    expect(colorVar).toEqual(`#000`);
    expect(fontVar).toEqual(`400`);

    expect(fixture.debugElement.componentInstance.fullMap).toEqual({
      'status-color-primary': '#000',
      'status-color-success': '#27ba6c',
      'status-color-info': '#03a9f4',
      'status-color-warning': '#ff8833',
      'status-color-danger': '#ff1a1a',
      'font-weight-regular': '400',
      'font-weight-medium': '500',
      'font-weight-bold': '700',
    });
    expect(fixture.debugElement.componentInstance.colorVar).toEqual(`#000`);
    expect(fixture.debugElement.componentInstance.fontVar).toEqual(`400`);
  });
});
