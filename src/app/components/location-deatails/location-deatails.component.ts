import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-location-deatails',
  templateUrl: './location-deatails.component.html',
  styleUrls: ['./location-deatails.component.css']
})
export class LocationDeatailsComponent {
  sub: any;
  cityParams: any = "";

  citiesData: any = [
    {
      id: 1,
      name: "Bancroft",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 2,
      name: "Barrie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 3,
      name: "Belleville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 4,
      name: "Brampton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 5,
      name: "Brantford",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 6,
      name: "Brockville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 7,
      name: "Burlington",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 8,
      name: "Cambridge",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 9,
      name: "Chatham",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 10,
      name: "Chatham-Kent",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 11,
      name: "Cornwall",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 12,
      name: "Elliot Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 13,
      name: "Etobicoke",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 14,
      name: "Fort Erie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 15,
      name: "Fort Frances",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 16,
      name: "Gananoque",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 17,
      name: "Guelph",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 18,
      name: "Hamilton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 19,
      name: "Iroquois Falls",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 20,
      name: "Kapuskasing",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 21,
      name: "Kawartha Lakes",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 22,
      name: "Kenora",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 23,
      name: "Kingston",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 24,
      name: "Kirkland Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 25,
      name: "Kitchener",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 26,
      name: "Laurentian Hills",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 27,
      name: "London",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 28,
      name: "Midland",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 29,
      name: "Mississauga",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 30,
      name: "Moose Factory",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 31,
      name: "Moosonee",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 32,
      name: "Niagara Falls",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 33,
      name: "Niagara-on-the-Lake",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 34,
      name: "North Bay",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 35,
      name: "North York",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 36,
      name: "Oakville",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 37,
      name: "Orillia",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 38,
      name: "Oshawa",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 39,
      name: "Ottawa",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 40,
      name: "Parry Sound",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 41,
      name: "Perth",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 42,
      name: "Peterborough",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 43,
      name: "Picton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 44,
      name: "Port Colborne",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 45,
      name: "Saint Catharines",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 46,
      name: "Saint Thomas",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 47,
      name: "Sarnia-Clearwater",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 48,
      name: "Sault Sainte Marie",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 49,
      name: "Scarborough",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 50,
      name: "Simcoe",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 51,
      name: "Stratford",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 52,
      name: "Sudbury",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 53,
      name: "Temiskaming Shores",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 54,
      name: "Thorold",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 55,
      name: "Thunder Bay",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 56,
      name: "Timmins",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 57,
      name: "Toronto",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 58,
      name: "Trenton",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 59,
      name: "Waterloo",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 60,
      name: "Welland",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 61,
      name: "West Nipissing",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 62,
      name: "Windsor",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 63,
      name: "Woodstock",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      id: 64,
      name: "York",
      providence: "Ontario",
      country: "Canada",
      coverPhoto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      desc: "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 64,
      "name": "Brant",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 65,
      "name": "Clarence-Rockland",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 66,
      "name": "Dryden",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 67,
      "name": "Greater Sudbury",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 68,
      "name": "Haldimand County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 69,
      "name": "Leamington",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 70,
      "name": "Markham",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 71,
      "name": "Norfolk County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 72,
      "name": "Owen Sound",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 73,
      "name": "Pembroke",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 74,
      "name": "Pickering",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 75,
      "name": "Prince Edward County",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 76,
      "name": "Quinte West",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 77,
      "name": "Richmond Hill",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 78,
      "name": "Sarnia",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 79,
      "name": "St. Catharines",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 80,
      "name": "St. Thomas",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 81,
      "name": "Vaughan",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    },
    {
      "id": 82,
      "name": "Woodstock",
      "providence": "Ontario",
      "country": "Canada",
      "coverPhoto": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Toronto_August_2017.jpg",
      "desc": "It doesn’t matter what type of ugly home you have, we would like to make a no obligation cash offer to purchase your home for cash."
    }


  ];

  
  onSearchCityFound: any = [];
  isFound : any = "false";

  constructor(private route: ActivatedRoute,private spinner : NgxSpinnerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var getParams = params['id'];
      var temp = this.processSlug(getParams);
      var removedHypen = this.removeHyphens(temp);
      this.cityParams = this.capitalize(removedHypen);
    });

    this.getDetails(this.cityParams);
  }



  getDetails(cityToBeSearched:string){
    
    this.spinner.show();
    
    if (cityToBeSearched != "") {

      for (var i = 0; i < this.citiesData.length; i++) {
        if (this.citiesData[i].name == cityToBeSearched) {
          this.onSearchCityFound.push(this.citiesData[i]);
          this.isFound = 'true';
          console.log(this.onSearchCityFound);
          
          console.log(this.onSearchCityFound.length);
        }
        
        setTimeout(() => {
          this.spinner.hide();
      }, 1000);
      }

      if(this.isFound != 'true')
      {
        this.isFound = 'false';
         this.onSearchCityFound.length = 0;
         
        setTimeout(() => {
          this.spinner.hide();
      }, 1000);
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

  capitalize(inputText: string): string {
    return inputText
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  removeHyphens(inputString: string): string {
    return inputString.split('-').join(' ');
  }

  processSlug(slug: string): string {
    // Implement the logic to convert the slug back to the city name (e.g., reverse of the slug function)
    return slug.replace(/-/g, ' '); // Replace hyphens with spaces
  }

}
