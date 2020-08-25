import { Component, OnInit } from "@angular/core";
import { ImageService } from "../image.service";
import { Makers } from "./makers";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-makers",
  templateUrl: "./makers.page.html",
  styleUrls: ["./makers.page.scss"]
})
export class MakersPage implements OnInit {
  manufSearch: string;
  makers: Makers[] = [
    { Make_ID: 1, Make_Name: "Volkswagen" },
    { Make_ID: 2, Make_Name: "Audi" },
    { Make_ID: 3, Make_Name: "Tesla" },
    { Make_ID: 4, Make_Name: "BMW" },
    { Make_ID: 5, Make_Name: "Ferrari" },
    { Make_ID: 6, Make_Name: "Jaguar" },
    { Make_ID: 7, Make_Name: "Porsche" },
    { Make_ID: 8, Make_Name: "Mercedes" },
    { Make_ID: 9, Make_Name: "Toyota" },
    { Make_ID: 10, Make_Name: "Hyundai" },
    { Make_ID: 11, Make_Name: "Ford" },
    { Make_ID: 12, Make_Name: "General Motors" },
    { Make_ID: 13, Make_Name: "Honda" }
  ];

  constructor(
    private imageService: ImageService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.setDefaultImg();
    this.getImage();
    this.manufSearch = "";
  }

  getImage() {
    this.makers.forEach(maker => {
      this.imageService
        .getImage(`${maker.Make_Name}`)
        .subscribe(json =>
          json.total == 0
            ? (maker.webformatURL =
                "https://pixabay.com/static/img/logo_square.png")
            : (maker.webformatURL = json.hits[Math.floor(Math.random() * json.hits.length)].webformatURL)
        );
    });
  }

  setDefaultImg() {
    this.makers.forEach(maker => {
      maker.webformatURL = "https://pixabay.com/static/img/logo_square.png";
    });
  }

  clearSearch() {
    this.manufSearch = "";
  }

  search() {
    this.manufSearch.length > 0
      ? this.router.navigate(["cars", this.manufSearch])
      : this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Error",
      subHeader: "No Manufacturer name",
      message: "Enter a name to search.",
      buttons: ["OK"]
    });

    await alert.present();
  }
}
