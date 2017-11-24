/**
 * Data object
 */
export class Person {

  constructor(
    public moo: string,
    public firstName: string,
    public lastName: string,
    public address: string,
    public state: string,
    public zipCode: number,
    public phone: number,
    public employer: string,
    public iProvider: string,
    public iPlanNum: string,
  ) {}

  static toPerson(data: any): Person {
    return new Person(
      data.moo, data.firstName, data.lastName, data.address, data.state, data.zipCode, data.phone, data.employer, data.iProvider, data.iPlanNum
    );
  }

}
