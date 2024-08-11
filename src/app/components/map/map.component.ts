import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  
  lat = 45.3495391;
  lng = -80.0936722;
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v12?optimize=true' 

  // data
  source: any;
  markers: any;

  buyerListingMapDataObject: any[] = [];

  citiesData: any = [
    {
      id: 1,
      name: "Bancroft",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
    lat: 45.0555555556,
    lng: -77.855
    },
    {
      id: 2,
      name: "Barrie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 44.389355,
      lng: -79.690331
    },
    {
      id: 3,
      name: "Belleville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
    lat: 44.166668,
    lng: -77.383331
    },
    {
      id: 4,
      name: "Brampton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.7315479,
      lng: -79.7624177
    },
    {
      id: 5,
      name: "Brantford",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.1393867,
      lng: -80.2644254
    },
    {
      id: 6,
      name: "Brockville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
    lat: 44.583332,
    lng: -75.683334 
    },
    {
      id: 7,
      name: "Burlington",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.3255196,
      lng: -79.7990319
    },
    {
      id: 8,
      name: "Cambridge",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.397221,
      lng: -80.311386
    },
    {
      id: 9,
      name: "Chatham",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.404804,
      lng: -82.191040
    },
    {
      id: 10,
      name: "Chatham-Kent",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.404804,
      lng: -82.191040
    },
    {
      id: 11,
      name: "Cornwall",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 45.021276,
      lng: -74.730345
    },
    {
      id: 12,
      name: "Elliot Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 46.386700,
      lng: -82.654800
    },
    {
      id: 13,
      name: "Etobicoke",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.6435559,
      lng: -79.5656326
    },
    {
      id: 14,
      name: "Fort Erie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.900000,
      lng: -78.933333
    },
    {
      id: 15,
      name: "Fort Frances",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 48.616667,
      lng: -93.400000
    },
    {
      id: 16,
      name: "Gananoque",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 44.330618,
      lng: -76.161864
    },
    {
      id: 17,
      name: "Guelph",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.546165,
      lng: -80.250109
    },
    {
      id: 18,
      name: "Hamilton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.256080,
      lng: -79.872858
    },
    {
      id: 19,
      name: "Iroquois Falls",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 48.766667,
      lng: -80.683333
    },
    {
      id: 20,
      name: "Kapuskasing",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 49.416667,
      lng: -82.433333
    },
    {
      id: 21,
      name: "Kawartha Lakes",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 44.349998, lng: -78.750000
    },
    {
      id: 22,
      name: "Kenora",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 49.766666, lng: -94.483330
    },
    {
      id: 23,
      name: "Kingston",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 44.233334, lng: -76.500000
    },
    {
      id: 24,
      name: "Kirkland Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 48.1500, lng: -80.0333
    },
    {
      id: 25,
      name: "Kitchener",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.452969, lng: -80.495064
    },
    {
      id: 26,
      name: "Laurentian Hills",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 45.9551, lng: -77.5179
    },
    {
      id: 27,
      name: "London",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.5890452, lng: -79.6441198
    },
    {
      id: 28,
      name: "Midland",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 44.7500, lng: -79.8900
    },
    {
      id: 29,
      name: "Mississauga",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.5890452, lng: -79.6441198
    },
    {
      id: 30,
      name: "Moose Factory",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 51.25, lng: -80.6
    },
    {
      id: 31,
      name: "Moosonee",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 51.273089, lng: -80.640049
    },
    {
      id: 32,
      name: "Niagara Falls",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.089558, lng: -79.084944
    },
    {
      id: 33,
      name: "Niagara-on-the-Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.255721, lng: -79.071342
    },
    {
      id: 34,
      name: "North Bay",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 46.309115, lng: -79.460820
    },
    {
      id: 35,
      name: "North York",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.761539, lng: -79.411079
    },
    {
      id: 36,
      name: "Oakville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.467517, lng: -79.687666
    },
    {
      id: 37,
      name: "Orillia",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 44.608246, lng: -79.419678
    },
    {
      id: 38,
      name: "Oshawa",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.897545, lng: -78.865719
    },
    {
      id: 39,
      name: "Ottawa",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 45.421530, lng: -75.697193
    },
    {
      id: 40,
      name: "Parry Sound",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 45.347320, lng: -80.035270
    },
    {
      id: 41,
      name: "Perth",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 44.898811, lng: -76.248558
    },
    {
      id: 42,
      name: "Peterborough",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 44.3001, lng: -78.3162
    },
    {
      id: 43,
      name: "Picton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 44.0001, lng: -77.1328
    },
    {
      id: 44,
      name: "Port Colborne",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 42.891411, lng: -79.252075
    },
    {
      id: 45,
      name: "Saint Catharines",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.159374, lng: -79.246864
    },
    {
      id: 46,
      name: "Saint Thomas",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 42.778828, lng: -81.175369
    },
    {
      id: 47,
      name: "Sarnia-Clearwater",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 42.999443, lng: -82.308891
    },
    {
      id: 48,
      name: "Sault Sainte Marie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 46.5168, lng: -84.3333
    },
    {
      id: 49,
      name: "Scarborough",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      , lat: 43.777702, lng: -79.233238
    },
    {
      id: 50,
      name: "Simcoe",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.8333,
      lng: -80.3000
    },
    {
      id: 51,
      name: "Stratford",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.370834,
      lng: -80.981941
    },
    {
      id: 52,
      name: "Sudbury",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 46.493919,
      lng: -80.995415
  
    },
    {
      id: 53,
      name: "Temiskaming Shores",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 47.516666,
      lng: -79.683334
    },
    {
      id: 54,
      name: "Thorold",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.1236091,
      lng: -79.1989299
    },
    {
      id: 55,
      name: "Thunder Bay",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 48.382221,
      lng: -89.246109
    },
    {
      id: 56,
      name: "Timmins",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 48.4758208,
      lng: -81.3304953
    },
    {
      id: 57,
      name: "Toronto",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.651070,
      lng: -79.347015
    },
    {
      id: 58,
      name: "Trenton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 44.101029,
      lng: -77.576485
    },
    {
      id: 59,
      name: "Waterloo",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.4667,
      lng: -80.5167
    },
    {
      id: 60,
      name: "Welland",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.992157,
      lng: -79.248253
    },
    {
      id: 61,
      name: "West Nipissing",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 46.3704,
      lng: -79.9248
    },
    {
      id: 62,
      name: "Windsor",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.317432,
      lng: -83.026772
    },
    {
      id: 63,
      name: "Woodstock",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.130554,
      lng: -80.746666
    },
    {
      id: 64,
      name: "York",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.695683,
      lng: -79.450279
    },
    {
      "id": 64,
      "name": "Brant",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.116669,
      lng: -80.366669
    },
    {
      "id": 65,
      "name": "Clarence-Rockland",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 45.483334,
      lng: -75.199997
    },
    {
      "id": 66,
      "name": "Dryden",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 49.780094,
      lng: -92.836960
    },
    {
      "id": 67,
      "name": "Greater Sudbury",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 46.490002,
      lng: -81.010002
    },
    {
      "id": 68,
      "name": "Haldimand County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    
      ,
      lat: 42.9280,
      lng: -79.8860},
    {
      "id": 69,
      "name": "Leamington",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.0531,
      lng: -82.5998
    },
    {
      "id": 70,
      "name": "Markham",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.856098,
      lng: -79.337021
    },
    {
      "id": 71,
      "name": "Norfolk County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.8334,
      lng: -80.38297
    },
    {
      "id": 72,
      "name": "Owen Sound",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 44.566666,
      lng: -80.933334
    },
    {
      "id": 73,
      "name": "Pembroke",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 45.826653,
      lng: -77.110886
    },
    {
      "id": 74,
      "name": "Pickering",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.838413,
      lng: -79.086761
    },
    {
      "id": 75,
      "name": "Prince Edward County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 44.000338,
      lng: -77.250494
    },
    {
      "id": 76,
      "name": "Quinte West",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 44.102524,
      lng: -77.581596
    },
    {
      "id": 77,
      "name": "Richmond Hill",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.8828401,
      lng: -79.4402808
    },
    {
      "id": 78,
      "name": "Sarnia",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.999443,
      lng: -82.308891
    },
    {
      "id": 79,
      "name": "St. Catharines",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.159374,
      lng: -79.246864
    },
    {
      "id": 80,
      "name": "St. Thomas",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 42.778828,
      lng: -81.175369
    },
    {
      "id": 81,
      "name": "Vaughan",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.837208,
      lng: -79.508278
    },
    {
      "id": 82,
      "name": "Woodstock",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
      ,
      lat: 43.130554,
      lng: -80.746666
    }


  ];

  constructor(private spinner: NgxSpinnerService, private _toast: NgToastService, private _router: Router) {
    (mapboxgl as any).accessToken = "pk.eyJ1IjoibG90dXNiaXN3YXMiLCJhIjoiY2t5ZTd4ZnFjMDUycjJucG1vamhuMmFxbSJ9.iot_0EeUP_G4rtV33DV_QA";
   
  }
  ngOnInit() {
    this.initializeMap();
    this.getBuyersData();

  }

  
  getBuyersData() {
    for(var i=0;i<this.citiesData.length;i++){
      var mapData = {
        type: 'IBuyUglyHouses',
        geometry: {
          type: 'Point',
          'coordinates': {
            "lng": this.citiesData[i].lng,
            "lat": this.citiesData[i].lat
          },
        },
        properties: {
          cityName: this.citiesData[i].name,
          providence: this.citiesData[i].providence,
          country: this.citiesData[i].country,
          url: this.generateSlug(this.citiesData[i].name)
        }
      };

      this.buyerListingMapDataObject.push(mapData);
      console.log(this.buyerListingMapDataObject);

       // alert(this.freeListingMapDataObject.length);
       console.log(this.buyerListingMapDataObject);
       for (const listFree of this.buyerListingMapDataObject) {
         // create a HTML element for each feature
         const el = document.createElement('div');
         el.className = 'marker';
         el.style.backgroundImage = "url(https://img.icons8.com/?size=48&id=E70fsabn6Rl1&format=png)";
 
         // make a marker for each feature and add it to the map
         new mapboxgl.Marker(el)
           .setLngLat([listFree.geometry.coordinates.lng, listFree.geometry.coordinates.lat])
           .setPopup(
             new mapboxgl.Popup({ offset: 25 }) // add popups
               .setHTML(
                 `<h5>${listFree.properties.cityName}</h5>
                 <p
                 style="padding-top:5px;">Province:
                 ${listFree.properties.providence}</p>
                 <p
                 style="padding-bottom:5px;">Country:
                 ${listFree.properties.country}</p>
                 <a href="location/${listFree.properties.url}" target="_blank">More Details</a> `
               )
           )
           .addTo(this.map);
 
 
       }
    }

  }
  private initializeMap() {
    var lat = this.lat;
    var lng = this.lng;

    /// locate the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.map.flyTo({
          center: [lng, lat]
        })
      });
    }

    this.buildMap()

  }
  buildMap() {
    var lat = this.lat;
    var lng = this.lng;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [lng, lat]
    });


    const trackPin =
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
      });

    /// Add map controls
    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true
    });

    this.map.addControl(navControl, "bottom-right");
    this.map.addControl(trackPin, "bottom-right")
  }

  generateSlug(cityName: string): string {
    return cityName
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ''); // Remove any non-alphanumeric characters
  }

 

}
