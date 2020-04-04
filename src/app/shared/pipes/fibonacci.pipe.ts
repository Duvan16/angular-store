import { Pipe, PipeTransform } from '@angular/core';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Pipe({
  name: 'fibonacci',
  pure: true
  /* Si esta en false es mala practica , 
   esto porque desactiva lo funciones puras lo de cache por defecto siempre esta en true*/
})
export class FibonacciPipe implements PipeTransform {

  transform(value: number): any {
    console.log('calc');
    return fibonacci(value);
  }

}
