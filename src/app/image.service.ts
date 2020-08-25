import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pixbay } from "./pixbay";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  private API_URL: string = "https://pixabay.com/api/?";
  private API_KEY: string = "key=17891056-8256ffc8e97a5ff5895e927ce";
  private URL: string = this.API_URL + this.API_KEY + "&q=";
  private OPTIONS: string = "&per_page3";

  constructor(private http: HttpClient) {}

  getImage(query: string): Observable<Pixbay> {
    return this.http.get<Pixbay>(`${this.URL}${query}${this.OPTIONS}`);
  }
}
