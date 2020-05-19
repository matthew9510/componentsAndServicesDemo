import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // do once for the whole app
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LeftComponentComponent } from "./left-component/left-component.component";
import { RightComponentComponent } from "./right-component/right-component.component";
import { ContainerComponent } from "./container/container.component";
import { NestedRightComponentComponent } from "./nested-right-component/nested-right-component.component";

@NgModule({
  declarations: [
    AppComponent,
    LeftComponentComponent,
    RightComponentComponent,
    ContainerComponent,
    NestedRightComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
