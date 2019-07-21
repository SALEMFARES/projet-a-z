export class AppareilService {

  appareils = [
    {
      name: 'Machine à laver',
      status: 'etaint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
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
}
