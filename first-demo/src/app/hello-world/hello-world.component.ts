import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})

export class HelloWorldComponent implements OnInit {

   sayHelloId = 1
   fontColor = 'blue'
   message = 'Hi Dev'
   canClick = false
   canEdit = false

  constructor() { 
  }

  ngOnInit(): void {
  }

  sayMessage(): void {
    alert(this.message)
  }

  onEditClick(): void{
    this.canEdit = !this.canEdit
    if (this.canEdit){
      this.message = 'You can edit me!'
    }else{
      this.message = 'I am read only'
    }
  }

}
