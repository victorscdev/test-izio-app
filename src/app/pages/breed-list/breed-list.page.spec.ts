import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BreedListPage } from './breed-list.page';
import { BreedApi } from 'core/domain/api/breed.api';
import { PaginationModule } from 'src/app/component/pagination/pagination.module';
import { of } from 'rxjs';

describe('BreedListPage', () => {
    let component: BreedListPage;
    let fixture: ComponentFixture<BreedListPage>;
    let breedApi: BreedApi;

    beforeEach(async () => {
        const breedApiStub = {
            readBreeds: () => Promise.resolve([{ name: 'Bulldog', temperament: 'Friendly', image: { url: 'bulldog.jpg' } }])
        };

        await TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                PaginationModule
            ],
            declarations: [BreedListPage],
            providers: [{ provide: BreedApi, useValue: breedApiStub }]
        }).compileComponents();

        fixture = TestBed.createComponent(BreedListPage);
        component = fixture.componentInstance;
        breedApi = TestBed.inject(BreedApi);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load breeds on init', () => {
        expect(component.breeds.length).toBe(1);
        expect(component.breeds[0].name).toBe('Bulldog');
    });
});
