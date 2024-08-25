import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCallsService } from 'src/app/services/api-calls/api-calls.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  testDate: any = [
    {
        "config": {
            "default_value": null,
            "delta": 0,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 1 ",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "title",
        "field_id": 257865429,
        "label": "Question 1 ",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "How many homes has IBuyUglyHouses bought over the years?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 1,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 1",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer",
        "field_id": 257865430,
        "label": "Answer 1",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>Since 2014 we have purchased hundreds of homes in the Province of Ontario We are not an outside agency that swoops in to buy up homes.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 2,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 2",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-2",
        "field_id": 257943963,
        "label": "Question 2",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "What do you need to know in order to buy my house?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 3,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 2",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-2",
        "field_id": 257943962,
        "label": "Answer 2",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>We can get started with just some basic information about your house. How many bedrooms? How many bathrooms? Is there a garage? Is the basement finished? What is the overall condition of the property?</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 4,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 3",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-3",
        "field_id": 257943961,
        "label": "Question 3",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "Can you really buy my house in just one week?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 5,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 3",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-3",
        "field_id": 257943960,
        "label": "Answer 3",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>If all the paperwork is completed promptly, you have clear title and there are no problems, we can often complete the purchase of a property in just 7 days. Our fastest ever close was done in less than 24 hours.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 6,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 4",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-4",
        "field_id": 257943959,
        "label": "Question 4",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "Is there a fee you charge when you buy a house?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 7,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 4",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-4",
        "field_id": 257943958,
        "label": "Answer 4",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>No. Unlike many home buying companies or real estate agents,we  never charges a fee.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 8,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 5",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-5",
        "field_id": 257943957,
        "label": "Question 5",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "How long do I have to decide once you make an offer on my house?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 9,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 5",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-5",
        "field_id": 257943948,
        "label": "Answer 5",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>Most of our offers have a 30 day expiration date. But in many cases, homeowners find our offers so attractive and fair they accept them immediately!</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 10,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 6",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-6",
        "field_id": 257943956,
        "label": "Question 6",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "Do you buy condominiums?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 11,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 6",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-6",
        "field_id": 257943955,
        "label": "Answer 6",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>Yes. IBuyUglyHouses will purchase a condo, town- house, duplex, farm, apartment house, vacation property, land – almost any piece of real estate.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 12,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 7",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-7",
        "field_id": 257943954,
        "label": "Question 7",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "I have a mortgage. Does it get paid off?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 13,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 7",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-7",
        "field_id": 257943953,
        "label": "Answer 7",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>Yes. By law, any mortgage or other liens must be paid off when you sell the house. The balance of the money goes to you.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 14,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 8",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-8",
        "field_id": 257943952,
        "label": "Question 8",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "I am facing foreclosure. Can you still buy my house?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 15,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 8",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-8",
        "field_id": 257943951,
        "label": "Answer 8",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>Yes, if we work quickly! Many lenders would prefer to receive payment on their mortgage loan instead of taking the property. IBuyUglyHouses often works with lenders to delay foreclosure until we can complete the home purchase and you have the money to pay off the mortgage and avoid foreclosure. If you live in Ontario and are within a certain period of time before your foreclosure sale date, we will introduce you to a Foreclosure Consultant.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 16,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 9",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-9",
        "field_id": 257943949,
        "label": "Question 9",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "How do you determine the amount you will pay for a house?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 17,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 9",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-9",
        "field_id": 257943950,
        "label": "Answer 9",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>We take many factors into consideration, including: location of the home, age and condition of the property, any needed repairs, selling prices of similar homes, etc. We’ve been making real estate transactions for many years and have deep experience in determining the fair market value of a home.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 18,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 10",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-10",
        "field_id": 257944083,
        "label": "Question 10",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "My house needs several repairs. Does this mean you won’t buy it?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 19,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 10",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-10",
        "field_id": 257944085,
        "label": "Answer 10",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>Not at all! Most of the houses we purchase are in need of repairs or updating. So long as the home is basically in good condition, we’ll buy it from you.</p>"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 20,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Question 11",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "small",
                "format": "plain"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "question-11",
        "field_id": 257944082,
        "label": "Question 11",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "Where do you buy property?"
            }
        ]
    },
    {
        "config": {
            "default_value": null,
            "delta": 21,
            "description": null,
            "hidden": false,
            "hidden_create_view_edit": false,
            "label": "Answer 11",
            "mapping": null,
            "required": false,
            "settings": {
                "size": "large",
                "format": "html"
            },
            "unique": false,
            "visible": true
        },
        "external_id": "answer-11",
        "field_id": 257944084,
        "label": "Answer 11",
        "status": "active",
        "type": "text",
        "values": [
            {
                "value": "<p>We currently buy properties all over Ontario.</p>"
            }
        ]
    }
];
  faqData: any = [];
 // Define the data structure based on the response
  newData: any = [];
  constructor(private spinner : NgxSpinnerService, private http : HttpClient, private _toast : NgToastService, private _apiCallServices : ApiCallsService) {}

  ngOnInit() {
    console.log(this.faqData);

    // sessionStorage.setItem('faqData', JSON.stringify(this.faqData));
    const storedData = sessionStorage.getItem('faqData');

    if (storedData) {
      this.faqData = JSON.parse(storedData);
      console.log(this.faqData);
      
      console.log(this.structureFaq(this.faqData));
    } else {
      this.getFaqData('2693909249');

    }
    
  }

  getFaqData(id: string) {
  
    this.spinner.show();
    
      this._apiCallServices.getFaqDataFromPodio(id).subscribe(
        (data) => {
          setTimeout(() => {
            this.spinner.hide();
        }, 1000);
          this.faqData = data;
          
          // Save data in session storage with a 2-hour expiration
        sessionStorage.setItem('faqData', JSON.stringify(data));
        const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
        sessionStorage.setItem('faqDataExpiration', expirationTime.toString());
  
          console.log('FAQ Data:', data);
          this.structureFaq(this.faqData);
        },
        (error) => {
          console.error('Error:', error);
          setTimeout(() => {
            this.spinner.hide();
        }, 1000);
        }
      );
    }

    structureFaq(value: any) {
        console.log(value.length);
        this.newData = []; // Clear newData before repopulating
        for (let i = 0; i < value.length; i += 2) {
          const question = value[i]?.values[0]?.value || '';
          const answer = value[i + 1]?.values[0]?.value || '';
    
          // Replace any occurrence of "Michael the Home Buyer" with "IBuyUglyHouse", case-insensitive
          const modifiedQuestion = question.replace(/Michael the Home Buyer/gi, 'IBuyUglyHouse');
          const modifiedAnswer = answer.replace(/Michael the Home Buyer/gi, 'IBuyUglyHouse');
    
          this.newData.push({
            question: modifiedQuestion,
            answer: modifiedAnswer
          });
        }
        this.faqData = this.newData;
        console.log(this.newData);
      }
    }