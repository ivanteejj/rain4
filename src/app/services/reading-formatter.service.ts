import { Injectable } from '@angular/core';
import { reading } from '../shared/reading';
import { formattedReading } from '../shared/formattedReading';
import { metadata } from '../shared/metadata';

const unavailable : string = "Sorry! Information unavailable :(";

@Injectable({
  providedIn: 'root'
})
export class ReadingFormatterService {

  constructor() { }

  // TODO : put date inside here
  formatReading(read : reading, meta : metadata) {
    var outputString : string;

    if(read.value === -1) {
      outputString = unavailable;
    } else {
      if(meta.reading_unit == "percentage") {
        outputString = read.value + "%"
      } else if (meta.reading_unit == "mm") {
        outputString = read.value + "mm"
      } else if (meta.reading_unit == "deg C") {
        outputString = read.value + '\u00B0' + "C";
      } else {
        outputString = "reading cannot be formatted :(";
      }
    }

    var toBeReturned : formattedReading = {
      'reading' : read,
      'outputString' : outputString
    }

    return toBeReturned;
  }
}
