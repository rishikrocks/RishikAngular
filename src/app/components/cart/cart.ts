import { Component, IterableDiffer, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
  inputs:['cartItems']
})
export class Cart {
  itemCount = 0;
  total = 0;
  cartItems:any;

  differ:IterableDiffer<any> |undefined;
  constructor(private differs:IterableDiffers){
    this.differ = this.differs.find([]).create();
  }

  ngOnChanges(){
    console.log('cart ngOnchanges')
  }
  ngDoCheck(){
    console.log('cart Updated in ngDocheck');
    const changes = this.differ?.diff(this.cartItems);
    if(changes){
      this.itemCount = this.cartItems.length;
      this.total = this.cartItems.reduce((sum:any,item:any)=>sum+item.price,0);
    }
  }

}
