// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

export class ParentType {
  constructor() {
    console.log(`Parent constructor...`);    
  }

  sayHi() {
    console.log(`I'm parent`);    
  }
}

export class SubType1 extends ParentType {
  constructor() {
    super();
    console.log(`SubType1 constructor...`);    
  }  

  sayHi() {
    console.log(`I'm child 1`);    
  }
}

export class SubType2 extends ParentType {
  constructor() {
    super();
    console.log(`SubType2 constructor...`);    
  }  

  sayHi() {
    console.log(`I'm child 2`);    
  }
}

export enum TypeListEnum {
  sub1 = "SubType1",
  sub2 = "SubType2"
}

export class Instantiator {
  enumObj: TypeListEnum;
  instances: ParentType[];
  
  instanciateAll() {
    this.instances = [];
    this.enumToStringArray().forEach((typeName) => {
      this.instances.push(new (<any>window)[typeName]());
    });

    this.instances.forEach(elem => elem.sayHi());
  }
  
  enumToStringArray(): string[] {
    return Object.values(TypeListEnum);
  }
}

let i = new Instantiator();
i.instanciateAll();