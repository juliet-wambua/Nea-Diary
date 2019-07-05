import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  diarys:Diary [] = [
    new Diary(1, 'Today Goal', 'Go to School and make sure i have my project done', new Date(2019,3,14)),
    new Diary(2, 'Set Objectives', 'Make sure my project has met all the rubric requirements',new Date(2019,3,14) ),
    new Diary(3, 'Activities', 'Just Study for today. Nothing more',new Date(2019,3,14)),
    new Diary(4, 'Venues', 'Moringa Scool',new Date(2019,3,14)),
    new Diary(5, 'Any Other Business', 'Visit my friend', new Date(2019,3,14)),
   ];

   toggleDetails(index){
     this.diarys[index].showDescription = !this.diarys[index].showDescription;
   }
   deleteDiary(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.diarys[index].name}?`)

      if (toDelete){
        this.diarys.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
