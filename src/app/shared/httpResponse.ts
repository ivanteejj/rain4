import { location } from './location';
import { Station } from './station';
import { item } from './item';
import { metadata } from './metadata';

export class httpResponse {
    "api_info" : {
        "status" : string;
    };
    "metadata" : metadata;
    "items" : item[];
}