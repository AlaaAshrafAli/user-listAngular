import { Component , Input , Output , EventEmitter} from '@angular/core';
import { Users } from '../interfaces/users';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() user !: Users;
  @Output() sendUser = new EventEmitter<string>()
  showData(uname : string ){
    this.sendUser.emit(uname)
  }
}
