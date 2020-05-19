import { Component, OnInit } from "@angular/core";
import { StorageOneService } from "../services/storage-one.service";
@Component({
  selector: "app-left-component",
  templateUrl: "./left-component.component.html",
  styleUrls: ["./left-component.component.scss"],
})
export class LeftComponentComponent implements OnInit {
  // name: string;

  // Don't do this way
  // serviceReference;
  // constructor(){
  //   this.serviceReference = new StorageOneService(cxvcxvcxz);
  // }

  // constructor(private serviceReference: StorageOneService) {  }
  constructor(public _storageOneService: StorageOneService) {}

  ngOnInit(): void {}

  run() {
    // alert(this.name)
    alert(this._storageOneService.name);
  }
}
