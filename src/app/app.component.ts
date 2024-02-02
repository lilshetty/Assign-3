import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ChildComponent]
})
export class AppComponent {
  title = 'Assign-3';
  str:string='';
  sendUsername(value:string){
    this.str=value;
  }
}
