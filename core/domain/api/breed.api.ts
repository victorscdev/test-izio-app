import { IBreedRepository } from "../repositories/breed.repository";
import { BreedGateway } from "core/infrastructure/gateways/breed.gateway";

export class BreedApi implements IBreedRepository {
    private _breedGateway: BreedGateway = new BreedGateway()

    public readBreeds(limit: number, page: number): Promise<any> {
        return this._breedGateway.getBreeds(limit, page)
    }

    public readBreedById(id: string): Promise<any> {
        return this._breedGateway.getBreedById(id)
    }
}