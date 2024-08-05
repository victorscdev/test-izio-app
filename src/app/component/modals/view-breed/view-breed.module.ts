import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ModalViewBreedComponent } from "./view-breed.component";

@NgModule({
    declarations: [ModalViewBreedComponent],
    imports: [
        CommonModule
    ],
    exports: [ModalViewBreedComponent]
})
export class ModalViewBreedModule {}