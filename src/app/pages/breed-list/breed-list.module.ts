import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BreedListPage } from "./breed-list.page";
import { RouterUtils } from "core/utils/router.utils";
import { BreedApi } from "core/domain/api/breed.api";
import { CardBreedModule } from "src/app/component/card-breed/card-breed.module";
import { PaginationModule } from "src/app/component/pagination/pagination.module";

@NgModule({
    declarations: [BreedListPage],
    imports: [
        CommonModule,
        RouterUtils.createRouterPage("", BreedListPage),
        CardBreedModule,
        PaginationModule
    ],
    providers: [BreedApi],
    exports: [BreedListPage]
})
export class BreedListModule {}