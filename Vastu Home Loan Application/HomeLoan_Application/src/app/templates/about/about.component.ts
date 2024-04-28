import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  currentIndex = 0;
  images = [
    '../assets/Images/1st.jpg',
    '../assets/Images/2nd.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // 5 seconds interval
  }
}
