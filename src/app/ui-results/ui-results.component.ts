import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-ui-results',
  templateUrl: './ui-results.component.html', 
  styleUrls: ['./ui-results.component.scss']
})
export class UiResultsComponent {

  context = {
    results: this.getResults(10)
  }

  private getResults(count: number) {
    let results = [];
    for (let i = 0; i < count; i++) {
      results.push({
        name: faker.name.fullName(),
        email: faker.internet.email(),
        company: faker.company.name(),
        premium: faker.commerce.price(12000, 3000000),
        slogan: faker.company.catchPhrase(),
        ruleName: `${faker.word.verb()} ${faker.word.noun()} ${faker.word.preposition()} ${faker.word.noun()} ${faker.word.preposition()} ${faker.word.noun()}`,
        ruleDescription: `${faker.lorem.sentence()}`,
        rules: this.getRules(Math.max(2, Math.floor(Math.random() * 50)-42))
      })
    }
    return results;
  }

  private getRules(count: number) {
    let rules = [];
    for (let i=0; i < count; i++){
      rules.push({
        name: `${faker.word.verb()} ${faker.word.noun()} ${faker.word.preposition()} ${faker.word.noun()} ${faker.word.preposition()} ${faker.word.noun()} \r\n${faker.address.buildingNumber()} ${faker.address.cardinalDirection()} ${faker.address.street()}\r\n${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      });       
    }
    return rules;
  }
}
