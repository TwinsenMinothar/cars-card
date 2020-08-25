import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ModelsForMake } from "./models-for-make";

@Injectable({
  providedIn: "root"
})
export class JsonVehiclesServiceService {
  constructor(private http: HttpClient) {}
  private jsonUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/";

  getCars(maker: String): Observable<ModelsForMake> {
    return this.http.get<ModelsForMake>(`${this.jsonUrl}/${maker}?format=json`);
  }
}
