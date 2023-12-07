import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
  response:any[] = [];
  constructor(private http: HttpClient) 
  { 
    this.http.get('http://localhost:8080/WeatherForecast').subscribe((response: any) => {
      console.log(response);
	  this.response = response;		
	});
  }  
}
