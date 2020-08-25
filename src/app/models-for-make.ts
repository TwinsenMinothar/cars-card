import { Car } from './car';

export interface ModelsForMake {
    Count: number;
    Message: String;
    SearchCriteria: String;
    Results: Car[];
}
