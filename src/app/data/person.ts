/**
 * Data object
 */
export class Person {
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    state: string,
    zipCode: number,
    phone: number,
    employer: string,
    iProvider: string,
    iPlanNum: string,
  ) {}

  static toPerson(data: any): Person {
    return new Person(
      data.id, data.firstName, data.lastName, data.address, data.state, data.zipCode, data.phone, data.employer, data.iProvider, data.iPlanNum
    );
  }

}
