import {Component, OnInit} from '@angular/core';
import {ModelsForMake} from '../models-for-make';
import {ActivatedRoute} from '@angular/router';
import {JsonVehiclesServiceService} from '../json-vehicles-service.service';
import {Car} from '../car';
import {Pixbay} from '../pixbay';
import {ImageService} from '../image.service';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
    modelsForMake: ModelsForMake;
    cars: Car[];
    showUpCars: Car[];
    pixbayImage: Pixbay;
    private maker: string;

    constructor(
        private jsonVehiclesService: JsonVehiclesServiceService,
        private route: ActivatedRoute,
        private imageService: ImageService
    ) {
    }

    ngOnInit() {
        this.showUpCars = [];
        this.maker = this.route.snapshot.paramMap.get('maker');
        this.getCars();
    }

    getCars() {
        this.jsonVehiclesService
            .getCars(this.maker)
            .subscribe(json => ((this.cars = json.Results), this.getImage()));
    }

    getCarsLength() {
        return this.cars && this.cars.length ? this.cars.length : [];
    }

    getImage() {
        this.cars.forEach(car => {
            this.imageService
                .getImage(`${car.Make_Name}+${car.Model_Name}`)
                .subscribe(json => {
                    if (json.total === 0) {
                        car.imgLink = 'https://pixabay.com/static/img/logo_square.png';
                    } else {
                        const random = Math.random() * json.hits.length;
                        car.imgLink = json.hits[Math.floor(random)].webformatURL;
                        this.showUpCars.push(car);
                    }
                });
        });
    }
}
