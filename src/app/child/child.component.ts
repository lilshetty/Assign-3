import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() data:string='';
userName: string="sathwik shetty";
verifyUser(data: string):boolean{
  return data === this.userName;
}
}
