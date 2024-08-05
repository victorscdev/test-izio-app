interface IBreedWeight {
    imperial: string;
    metric: string;
}

interface IBreedHeight {
    imperial: string;
    metric: string;
}

interface IBreedImage {
    id: string;
    width: number;
    height: number;
    url: string;
}

export interface IBreed {
    weight: IBreedWeight;
    height: IBreedHeight;
    id: number;
    name: string;
    bred_for: string;
    breed_group: string;
    life_span: string;
    temperament: string;
    origin: string;
    reference_image_id: string;
    image: IBreedImage;
}
