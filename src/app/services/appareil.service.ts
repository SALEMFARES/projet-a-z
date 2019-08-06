import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'selenium-webdriver/http';

@Injectable()
export class AppareilService {
  [x: string]: any;

  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];


  constructor(private httpClient: HttpClient) { }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
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

  saveAppareilsToServer() {
    this.httpClient
      .put('https://http-client-demo-873ee.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé!');
        },
        (error) => {
          console.log('Erreur de sauvgerd ! + error');
        }
      );

  }


  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
}
