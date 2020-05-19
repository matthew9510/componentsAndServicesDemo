import { Component, OnInit } from "@angular/core";
import { StorageOneService } from "../services/storage-one.service";

@Component({
  selector: "app-nested-right-component",
  templateUrl: "./nested-right-component.component.html",
  styleUrls: ["./nested-right-component.component.scss"],
})
export class NestedRightComponentComponent implements OnInit {
  constructor(public _storageOneService: StorageOneService) {}

  ngOnInit(): void {}
}
