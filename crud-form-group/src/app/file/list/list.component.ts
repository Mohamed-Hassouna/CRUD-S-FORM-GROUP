import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/models/file.model';
import { FileActionService } from 'src/app/service/file-action/file-action.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private fileAction:FileActionService ) { }

  data: Path[] = []; 

  ngOnInit(): void {
    this.data = this.fileAction.getFiles();
  }
}
