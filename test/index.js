/**
 * A block comment when you have to talk a lot
 */

import module from 'module';

export default class MyClass {
  constructor(options) {
    this.people = ['john', 'vanessa', 'gina'];
    this.options = {
      display: true,
      layout: 'basic',
      ...options,
    };

    this.addEventListeners();
    this.createPeopleCards();
  }

  addEventListeners() {
    const link = document.querySelector('.link');
    const el = document.querySelector('.element');

    link.addEventListener('click', this.open.bind(this));
    el.addEventListener('click', this.toggle.bind(this));
  }

  createPeopleCards() {
    this.peopleCards = this.people.map(people => `<div class="people">${people.name}</div>`);
  }

  open(e) {
    const parentNode = e.currentTarget.parentElement;
    let result;

    // Small comment for whatever you like
    switch (parentNode.type) {
      case 'text':
        result = `Lorem ipsum ${parentNode.value} dolor sit amet`;
        break;
      case 'textarea':
        result = parentNode.value;
        break;
      default:
        result = 42;
    }

    return result;
  }

  toggle(e) {
    e.preventDefault();

    if (e.target) {
      this.people.push(e.target.name);
      module.foo();
    } else if (e.name === 'john') {
      module.hereItIs();
    } else {
      module.bar();
    }
  }
}
