/*Decorador: tipo de rol que cumple clase:
componete, pipe...*/

import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.module';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    @Output() productClicked:
        EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    ngOnInit() {
        /*es muy común hacer llamado a servicio de datos*/
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        /*el ngOnChanges y ngDoCheck no son compatibles*/
        console.log('4. ngDoCheck');
    }

    /*Se ejecut cuando el elemneto es quitado o eliminado
    muy utili cuando tengamos una suscrpción de datos
    */
    ngOnDestroy() {
        console.log('4. ngDoCheck');
    }

    addCart() {
        console.log('añadir al carrilto');
        this.productClicked.emit(this.product.id);
    }
}
