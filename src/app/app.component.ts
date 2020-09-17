import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      cities: [null]
    });
  }

  public onClick(): void {
    this.form.patchValue({
      cities: ["London", "New York"]
    });
  }
}
