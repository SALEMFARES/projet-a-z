export class AppareilService {
  [x: string]: any;

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'etaint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'etaint'
    }
  ];


  switchOnAll() {
      for ( let appareil of this.appareils ) {
          appareil.status = 'allumé';
      }
  }

  switchOffAll() {
    for ( let appareil of this.appareils ) {
        appareil.status = 'etaint';
    }
}



switchOneOne(index: number) {
  this.appareils[index].status = 'allumé';

}
switchOffOne(index: number) {
  this.appareils[index].status = 'etaint';
}

addAppareil(name: string, status: string) {
  const appareilObject = {
    id: 0,
    name: '',
    status: ''
  };
  appareilObject.name = name;
  appareilObject.status = status;
  appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

  this.appareils.push(appareilObject);

}

}
