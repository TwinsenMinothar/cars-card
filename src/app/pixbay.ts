import {Image} from './image'
export interface Pixbay {
  total: number;
  totalHits: number;
  hits: Image[];
}
