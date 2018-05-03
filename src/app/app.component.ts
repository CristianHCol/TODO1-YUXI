import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title: String = "my application";
  author: String = "Cristian Hernandez";
  count: Number = 0;
  imgSource: String = "./../favicon.ico";
  isDisabled: Boolean = false;

  disabled() {
    this.isDisabled = true;
  }
}
