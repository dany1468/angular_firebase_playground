import { ApplicationRef, Component, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_firebase_playground';

  constructor(
    appRef: ApplicationRef,
  ) {
    if (isDevMode()) {
      appRef.isStable.pipe(
        debounceTime(200),
        distinctUntilChanged(),
      ).subscribe(it => {
        console.log('isStable', it);
      });
    }
  }
}
