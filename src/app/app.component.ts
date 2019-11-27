import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
posts: Post[] = [
  { title: 'учу', text: 'англар'},
  { title: 'учу 2й день', text: 'передача параметров'}
];
}
