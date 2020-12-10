import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  enteredValue = ''
  newPost = 'No Content'
  user = {
    userID: 1234,
    firstName: 'mehdi',
    lastName: 'kamoun',
    DOB: '2/02/1979',
    salary: 500.45
  }



  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    this.newPost = this.enteredValue
  }

}
