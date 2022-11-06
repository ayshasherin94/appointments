import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface patient {
  Patient: string;
  Time: number;
  Type: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
  doc: any;
  initAppointment: any;
  appointment: any;
  displayedColumns: string[] = ['Patient', 'Time', 'Type'];

  constructor(private http: HttpClient) {
 
  }

  ngOnInit() {
    this.getDoctor();
  }

  getDoctor() {
    this.http.get('http://localhost:3000/api/docs').subscribe(response => {
      this.doc = response;
    }, error => {
      console.log(error);
    })
  }


  docAppointments(id: number) {
    this.http.get('http://localhost:3000/api/appointment/'+id).subscribe(
      (data) => {
        this.appointment = data;
      },
      (error) => console.error(error)
    );
  }
}
