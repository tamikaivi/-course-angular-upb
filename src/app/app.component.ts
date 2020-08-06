import { Component, OnInit } from '@angular/core';
import {from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-course';

  ngOnInit(){

    const array = from([1,2,3,4,5,6]);
    array.subscribe(s => console.log('Items', s))

    const aux = fromEvent<MouseEvent>(document, 'mousemove');
    aux.subscribe(s => console.log('event: ',s.clientX +', ' +s.clientY));

    const aux1 = [1,2,3,4,5,6]

    const index = aux1.findIndex(s=> s===-1);
    console.log(index)

    const aux3 = aux1.filter(s=> s%2 ===0);
    console.log('pares ',aux3)

    const aux4 = aux1.map(s=> s*2);
    console.log('pares ',aux4)

    const aux5 = aux1.sort();
    console.log('pares ',aux5)

    //spread operator es una copia
    const aux6 = [10000,2211,...aux1]
    console.log('pares ',aux6)

    const aux7 = {
      name : 'Vivian',
      lastname: 'Loza'
    }

    const aux8 = {
      adress : 'Villa victoria',
      ...aux7
    }
    console.log('copia ',aux8)


    //destructuring 

    const persona = {
      data : {
        name : 'viv'
      },
      
      address: {
        n :1,
        p : 4
      }
      
    }

    const {data,address} = persona;

    console.log('data',data)
    console.log('addres ',address)

    //let dentro del contextonomas funciona
    for (let index= 0;index <aux1.length;index++){
      console.log('aaaaaaaaaaa ',index)
    }

    if (2>1){

      return 'algo1'
    }else{
      return 'no'

    }

    2>1 ? 'algo1' : 'no'
  }
}
