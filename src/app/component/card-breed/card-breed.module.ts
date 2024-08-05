import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardBreedComponent } from "./card-breed.component";
import { ModalViewBreedModule } from "../modals/view-breed/view-breed.module";
import { BreedApi } from "core/domain/api/breed.api";

@NgModule({
    declarations: [CardBreedComponent],
    imports: [
        CommonModule,
        ModalViewBreedModule
    ],
    exports: [CardBreedComponent],
    providers: [BreedApi]
})
export class CardBreedModule {}