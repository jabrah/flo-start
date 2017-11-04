import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const data =[
      { id: 0, firstName: "Scott", lastName: "Pilgrim", address: "OutOfTown", zipCode: 12345, phone: 5555555555, employer: "N/A", iProvider: "NO INSURANCE", iPlanNum: -1 },
      { id: 1, firstName: "Link", lastName: "", address: "Kakariko Village", zipCode: -1, phone: -1, employer: "Kingdom of Hyrule", iProvider: "Fairies", iPlanNum: 2 },
      { id: 2, firstName: "Moo", lastName: "Man", address: "Atlantis", zipCode: 30303, phone: 5555555556, employer: "MooTown Industries", iProvider: "BlueCross", iPlanNum: 6498401 }
    ];
    return {data};
  }
}
