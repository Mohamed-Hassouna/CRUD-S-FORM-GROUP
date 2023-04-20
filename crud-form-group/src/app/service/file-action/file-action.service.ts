import { Injectable } from '@angular/core';
import { Path } from 'src/app/models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileActionService {

  constructor() { }
  files: Path[] = [
    { id: 1, name: "pdf", description: "******************************" },
    { id: 2, name: "pdf", description: "******************************" },
    { id: 3, name: "pdf", description: "******************************" },
    { id: 4, name: "pdf", description: "******************************" },
    { id: 5, name: "pdf", description: "******************************" }
  ]
  getFiles() {
    return this.files;
  }
}
