import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Pages/shared/header/header.component";
import { FooterComponent } from "./Pages/shared/footer/footer.component";


@Component({
  selector: 'app-Faculty-of-Archaeology',
  templateUrl: './Faculty-of-Archaeology.component.html',
  styleUrls: ['./Faculty-of-Archaeology.component.css'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]})
export class FacultyOfArchaeologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
