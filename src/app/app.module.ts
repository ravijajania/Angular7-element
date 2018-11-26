import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GradebookComponent } from './gradebook/gradebook.component';


@NgModule({
  declarations: [GradebookComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
  entryComponents: [GradebookComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(GradebookComponent, { injector: this.injector });
    customElements.define('gradebook-ui', el);
  }
}
