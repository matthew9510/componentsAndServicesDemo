import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-left-component",
  templateUrl: "./left-component.component.html",
  styleUrls: ["./left-component.component.scss"],
})
export class LeftComponentComponent implements OnInit {
  name: string;
  constructor() {}

  ngOnInit(): void {}

  run() {
    alert(this.name);
  }
}
