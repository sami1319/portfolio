import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  scrollToWork() {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  }
}
