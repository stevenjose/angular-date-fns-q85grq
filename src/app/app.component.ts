import { Component } from '@angular/core';
import { parse, subYears } from 'date-fns'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   x = parse('14.03.2018', 'dd.MM.yyyy', new Date());
   maxDate = subYears(new Date(),18);
}