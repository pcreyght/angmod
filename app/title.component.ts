import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-title',
  templateUrl: 'app/title.component.html',
})
export class TitleComponent {
    @Input() subtitle = '';
    title = 'Plant module';
     
}