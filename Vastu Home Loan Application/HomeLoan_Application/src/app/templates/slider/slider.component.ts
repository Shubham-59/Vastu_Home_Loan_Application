import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  
  images = [
    {
      url: '../assets/Images/1st.jpg',
      alt: 'First Image',
      title: 'AboutUs',
      description: 'Fast, Easy, Affordable Home Loans Available At 8.70% * p.a'
    },
    {
      url: '../assets/Images/2nd.jpg',
      alt: 'Second Image',
      title: 'Turn your dream into reality',
      description: 'With our low-interest home loans and personalized service'
    }
    ,{
      url: '../assets/Images/aboutus.jpg',
      alt: 'Third Image',
      title: 'Apply for Home Loan',
      description: 'Fill out our simple application form now'
    }
  ];

}
