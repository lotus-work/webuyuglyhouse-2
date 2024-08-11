import {
  Component, Input, OnInit
}
  from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Address
}
  from 'ngx-google-places-autocomplete/objects/address';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  @Input() heading: string | undefined;
  @Input() subheading: string | undefined;
  p: number = 1;
  options: any = {
    componentRestrictions: {
      country: 'CA'
    }
  }
  fullAddress: any;
  formattedAddress: any;
  citiesData: any = [
    {
      id: 1,
      name: "Bancroft",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
    "lat": 45.0555555556,
    "long": -77.855
    },
    {
      id: 2,
      name: "Barrie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 44.389355,
      "long": -79.690331
    },
    {
      id: 3,
      name: "Belleville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
    "lat": 44.166668,
    "long": -77.383331
    },
    {
      id: 4,
      name: "Brampton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.7315479,
      "long": -79.7624177
    },
    {
      id: 5,
      name: "Brantford",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.1393867,
      "long": -80.2644254
    },
    {
      id: 6,
      name: "Brockville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
    "lat": 44.583332,
    "long": -75.683334 
    },
    {
      id: 7,
      name: "Burlington",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.3255196,
      "long": -79.7990319
    },
    {
      id: 8,
      name: "Cambridge",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.397221,
      "long": -80.311386
    },
    {
      id: 9,
      name: "Chatham",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.404804,
      "long": -82.191040
    },
    {
      id: 10,
      name: "Chatham-Kent",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.404804,
      "long": -82.191040
    },
    {
      id: 11,
      name: "Cornwall",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 45.021276,
      "long": -74.730345
    },
    {
      id: 12,
      name: "Elliot Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 46.386700,
      "long": -82.654800
    },
    {
      id: 13,
      name: "Etobicoke",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.6435559,
      "long": -79.5656326
    },
    {
      id: 14,
      name: "Fort Erie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.900000,
      "long": -78.933333
    },
    {
      id: 15,
      name: "Fort Frances",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 48.616667,
      "long": -93.400000
    },
    {
      id: 16,
      name: "Gananoque",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 44.330618,
      "long": -76.161864
    },
    {
      id: 17,
      name: "Guelph",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.546165,
      "long": -80.250109
    },
    {
      id: 18,
      name: "Hamilton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.256080,
      "long": -79.872858
    },
    {
      id: 19,
      name: "Iroquois Falls",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 48.766667,
      "long": -80.683333
    },
    {
      id: 20,
      name: "Kapuskasing",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 49.416667,
      "long": -82.433333
    },
    {
      id: 21,
      name: "Kawartha Lakes",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 44.349998, "long": -78.750000
    },
    {
      id: 22,
      name: "Kenora",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 49.766666, "long": -94.483330
    },
    {
      id: 23,
      name: "Kingston",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 44.233334, "long": -76.500000
    },
    {
      id: 24,
      name: "Kirkland Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 48.1500, "long": -80.0333
    },
    {
      id: 25,
      name: "Kitchener",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.452969, "long": -80.495064
    },
    {
      id: 26,
      name: "Laurentian Hills",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 45.9551, "long": -77.5179
    },
    {
      id: 27,
      name: "London",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.5890452, "long": -79.6441198
    },
    {
      id: 28,
      name: "Midland",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 44.7500, "long": -79.8900
    },
    {
      id: 29,
      name: "Mississauga",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.5890452, "long": -79.6441198
    },
    {
      id: 30,
      name: "Moose Factory",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 51.25, "long": -80.6
    },
    {
      id: 31,
      name: "Moosonee",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 51.273089, "long": -80.640049
    },
    {
      id: 32,
      name: "Niagara Falls",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.089558, "long": -79.084944
    },
    {
      id: 33,
      name: "Niagara-on-the-Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.255721, "long": -79.071342
    },
    {
      id: 34,
      name: "North Bay",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 46.309115, "long": -79.460820
    },
    {
      id: 35,
      name: "North York",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.761539, "long": -79.411079
    },
    {
      id: 36,
      name: "Oakville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.467517, "long": -79.687666
    },
    {
      id: 37,
      name: "Orillia",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 44.608246, "long": -79.419678
    },
    {
      id: 38,
      name: "Oshawa",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.897545, "long": -78.865719
    },
    {
      id: 39,
      name: "Ottawa",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 45.421530, "long": -75.697193
    },
    {
      id: 40,
      name: "Parry Sound",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 45.347320, "long": -80.035270
    },
    {
      id: 41,
      name: "Perth",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 44.898811, "long": -76.248558
    },
    {
      id: 42,
      name: "Peterborough",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 44.3001, "long": -78.3162
    },
    {
      id: 43,
      name: "Picton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 44.0001, "long": -77.1328
    },
    {
      id: 44,
      name: "Port Colborne",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 42.891411, "long": -79.252075
    },
    {
      id: 45,
      name: "Saint Catharines",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.159374, "long": -79.246864
    },
    {
      id: 46,
      name: "Saint Thomas",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 42.778828, "long": -81.175369
    },
    {
      id: 47,
      name: "Sarnia-Clearwater",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 42.999443, "long": -82.308891
    },
    {
      id: 48,
      name: "Sault Sainte Marie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 46.5168, "long": -84.3333
    },
    {
      id: 49,
      name: "Scarborough",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , "lat": 43.777702, "long": -79.233238
    },
    {
      id: 50,
      name: "Simcoe",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.8333,
      "long": -80.3000
    },
    {
      id: 51,
      name: "Stratford",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.370834,
      "long": -80.981941
    },
    {
      id: 52,
      name: "Sudbury",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 46.493919,
      "long": -80.995415
  
    },
    {
      id: 53,
      name: "Temiskaming Shores",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 47.516666,
      "long": -79.683334
    },
    {
      id: 54,
      name: "Thorold",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.1236091,
      "long": -79.1989299
    },
    {
      id: 55,
      name: "Thunder Bay",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 48.382221,
      "long": -89.246109
    },
    {
      id: 56,
      name: "Timmins",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 48.4758208,
      "long": -81.3304953
    },
    {
      id: 57,
      name: "Toronto",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.651070,
      "long": -79.347015
    },
    {
      id: 58,
      name: "Trenton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 44.101029,
      "long": -77.576485
    },
    {
      id: 59,
      name: "Waterloo",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.4667,
      "long": -80.5167
    },
    {
      id: 60,
      name: "Welland",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.992157,
      "long": -79.248253
    },
    {
      id: 61,
      name: "West Nipissing",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 46.3704,
      "long": -79.9248
    },
    {
      id: 62,
      name: "Windsor",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.317432,
      "long": -83.026772
    },
    {
      id: 63,
      name: "Woodstock",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.130554,
      "long": -80.746666
    },
    {
      id: 64,
      name: "York",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.695683,
      "long": -79.450279
    },
    {
      "id": 64,
      "name": "Brant",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.116669,
      "long": -80.366669
    },
    {
      "id": 65,
      "name": "Clarence-Rockland",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 45.483334,
      "long": -75.199997
    },
    {
      "id": 66,
      "name": "Dryden",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 49.780094,
      "long": -92.836960
    },
    {
      "id": 67,
      "name": "Greater Sudbury",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 46.490002,
      "long": -81.010002
    },
    {
      "id": 68,
      "name": "Haldimand County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    
      ,
      "lat": 42.9280,
      "long": -79.8860},
    {
      "id": 69,
      "name": "Leamington",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.0531,
      "long": -82.5998
    },
    {
      "id": 70,
      "name": "Markham",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.856098,
      "long": -79.337021
    },
    {
      "id": 71,
      "name": "Norfolk County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.8334,
      "long": -80.38297
    },
    {
      "id": 72,
      "name": "Owen Sound",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 44.566666,
      "long": -80.933334
    },
    {
      "id": 73,
      "name": "Pembroke",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 45.826653,
      "long": -77.110886
    },
    {
      "id": 74,
      "name": "Pickering",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.838413,
      "long": -79.086761
    },
    {
      "id": 75,
      "name": "Prince Edward County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 44.000338,
      "long": -77.250494
    },
    {
      "id": 76,
      "name": "Quinte West",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 44.102524,
      "long": -77.581596
    },
    {
      "id": 77,
      "name": "Richmond Hill",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.8828401,
      "long": -79.4402808
    },
    {
      "id": 78,
      "name": "Sarnia",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.999443,
      "long": -82.308891
    },
    {
      "id": 79,
      "name": "St. Catharines",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.159374,
      "long": -79.246864
    },
    {
      "id": 80,
      "name": "St. Thomas",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 42.778828,
      "long": -81.175369
    },
    {
      "id": 81,
      "name": "Vaughan",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.837208,
      "long": -79.508278
    },
    {
      "id": 82,
      "name": "Woodstock",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      "lat": 43.130554,
      "long": -80.746666
    }


  ];

  cityNameFound: any ="";

  onSearchCityFound: any = [];

  isFound: string = 'false';

  noSearchShow: string = "false";
showMap: any = "false";

  constructor(private router: Router, private route: ActivatedRoute, private spinner : NgxSpinnerService) { }
  ngOnInit(): void { }


  handleAddressChange(address: Address) {

    this.fullAddress = address;
    console.log(address);

    this.formattedAddress = address.formatted_address;

    // console.log(address.formatted_address)
    // console.log(address.geometry.location.lat())
    // console.log(address.geometry.location.lng())
    // console.log(address.address_components);


    // const state = address.address_components.find(comp => comp.types.includes('administrative_area_level_1'))?.short_name;
    // const city = address.address_components.find(comp => comp.types.includes('locality'))?.long_name;
    // const country = address.address_components.find(comp => comp.types.includes('country'))?.long_name;


    // console.log(`State: ${state}`);
    // console.log(`City: ${city}`);
    // console.log(`Country: ${country}`);



    // const cityName = this.fullAddress.address_components.find((comp: { types: any | any[]; }) => comp.types.includes('locality'))?.long_name;

    // if(cityName!="")
    // {


    // for (const city of this.citiesData) {
    //   if (city.city === cityName ) {


    // this.onSearchCityFound = city;
    //     return city; // City found, return its data
    //     this.isFound = true;
    //   }
    // }
    // this.isFound = false; // City not found

    // }
    // else{

    // this.onSearchCityFound = "";
    // this.isFound = false;
    // }



  }


  
  generateSlug(cityName: string): string {
    return cityName
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ''); // Remove any non-alphanumeric characters
  }

  getAddress(target: HTMLElement) {

    target.scrollIntoView();

    this.spinner.show();
    
    
    this.cityNameFound = "";
    this.onSearchCityFound = [];
    
    this.isFound = 'false';

    console.log(this.fullAddress);

    const cityName = this.fullAddress.address_components.find((comp: { types: any | any[]; }) => comp.types.includes('locality'))?.long_name;
    console.log(cityName);
    this.cityNameFound = cityName;
    if (this.cityNameFound != "") {

      for (var i = 0; i < this.citiesData.length; i++) {
        if (this.citiesData[i].name == cityName) {
          this.onSearchCityFound.push(this.citiesData[i]);
          this.isFound = 'true';
          setTimeout(() => {
            this.spinner.hide();
        }, 1000);
          console.log(this.onSearchCityFound);
          
          console.log(this.onSearchCityFound.length);
        }
      }

      if(this.isFound != 'true')
      {
        setTimeout(() => {
          this.spinner.hide();
      }, 1000);
        this.isFound = 'false';
        this.noSearchShow = "true";
      this.onSearchCityFound.length = 0;
      }
    }
    else {
      this.onSearchCityFound.length = 0;
      this.isFound = 'false';
      setTimeout(() => {
        this.spinner.hide();
    }, 1000);
    }
  }



  getMap(mapView: HTMLElement)
  {
    mapView.scrollIntoView();
    
  }

}


