import { Component } from '@angular/core';
import { Users } from '../interfaces/users';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  users : Array<Users> = [
    {
      UName : "lol ali",
      Email : "lolo@gmail.com",
      Phone : 55413456315,
      personalPic : "../../assets/1.png",
      BD : new Date("18-02-2000")
    },
    {
      UName : "mera neer",
      Email : "merao2341@gmail.com",
      Phone : 6162626164642,
      personalPic : "../../assets/2.png",
      BD : new Date("01-01-1999")
    },
    {
      UName : "ali emam",
      Email : "alemam@gmail.com",
      Phone : 1172910213,
      personalPic : "../../assets/3.jepg",
      BD : new Date("17-09-2011")
    },
    {
      UName : "Ahmed mo",
      Email : "ah25@gmail.com",
      Phone : 1269201651,
      personalPic : "../../assets/4.png",
      BD : new Date("07-24-2000")
    },
    {
      UName : "Mona nor",
      Email : "Mo029473@gmail.com",
      Phone : 1049029211,
      personalPic : "../../assets/5.jepg",
      BD : new Date("09-30-2030")
    }
  ]
  selectedUser !: string;
  userData(uname : any){
     this.selectedUser = uname;
  }
}
