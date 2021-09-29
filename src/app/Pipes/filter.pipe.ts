import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, nome: string): any {
    const resultArray = [];

    if (value.length === 0 || filterString === '' || nome === ''){
      return value;
    }

    for (const item of value){
      if(item[nome] === filterString){
        resultArray.push(item);
      }
    }

    return resultArray;


  }

}
