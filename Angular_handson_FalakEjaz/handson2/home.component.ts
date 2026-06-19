import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }
}
import { OnInit, OnDestroy } from '@angular/core';

export class HomeComponent implements OnInit, OnDestroy {

  ngOnInit() {
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}
