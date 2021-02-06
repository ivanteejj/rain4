import { location } from './location';
import { Station } from './station';
import { item } from './item';

export class httpResponse {
    "api_info" : {
        "status" : string;
    };
    "metadata" : {
        "stations" : Station[];
        "reading_type": string,
        "reading_unit": string;
    };
    "items" : item[];
}