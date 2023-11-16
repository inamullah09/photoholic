import { Component, OnInit } from '@angular/core';

interface IPhotographer {
  name: string,
  service: string,
  imgUrl: string
}

@Component({
  selector: 'app-photographerspage',
  templateUrl: './photographerspage.component.html',
  styleUrls: ['./photographerspage.component.scss'],
})
export class PhotographerspageComponent {
  photographers: Array<IPhotographer> = [
    {
      name: 'Inam',
      service: 'Wedding Photography',
      imgUrl: 'https://source.unsplash.com/random',
    },
    {
      name: 'Inam',
      service: 'Wedding Photography',
      imgUrl: 'https://source.unsplash.com/random',
    },
    {
      name: 'Inam',
      service: 'Wedding Photography',
      imgUrl: 'https://source.unsplash.com/random',
    },
    {
      name: 'Inam',
      service: 'Wedding Photography',
      imgUrl: 'https://source.unsplash.com/random',
    },
    {
      name: 'Inam',
      service: 'Wedding Photography',
      imgUrl: 'https://source.unsplash.com/random',
    },
    {
      name: 'Inam',
      service: 'Wedding Photography',
      imgUrl: 'https://source.unsplash.com/random',
    },
    // Add more photographers as needed
  ];

  viewProfile(photographer: IPhotographer) {
    // Implement navigation to photographer's profile page
    console.log(`View profile of ${photographer.name}`);
  }
  constructor() { }

}
