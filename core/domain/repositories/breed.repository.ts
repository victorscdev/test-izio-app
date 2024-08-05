import { IBreed } from "../models/breed.model";

export interface IBreedRepository {
    readBreeds(limit: number, page: number): Promise<IBreed | null | any>;
    readBreedById(id: string): Promise<IBreed |null | any>
}