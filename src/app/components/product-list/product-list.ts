import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';
import productData from './product-data';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import Snackbar from 'awesome-snackbar';
import { Zoomin } from '../../custom-directives/zoomin';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    Zoomin, RouterLink,
    FontAwesomeModule, NgxPaginationModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductsList {
  productArr = productData;
  faStar = faStar;
  p = 1;
  searchText = '';
  isSearchInvalid = false;
  selectedCategory = '';

  filterByCategory() {
    if (!this.selectedCategory) {
      this.productArr = productData;
    } else {
      this.productArr = productData.filter(product =>
        product.category === this.selectedCategory
      );
    }

    this.p = 1;
  }

  validateAndFilter() {
    this.isSearchInvalid = /[^a-zA-Z\s]/.test(this.searchText);

    if (this.isSearchInvalid) {
      return;
    }

    this.productArr = productData.filter(product =>
      product.title.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.p = 1;
  }


  sortAsc() {
    this.productArr.sort((p1, p2) => p1.price - p2.price);
  }

  sortDesc() {
    this.productArr.sort((p1, p2) => p2.price - p1.price);
  }

  openSweetAlert() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      background: '#fff7ed',
      color: '#7c2d12',
      confirmButtonColor: '#ea580c',
      iconColor: '#f97316',
      showCloseButton: true,
      confirmButtonText: 'OK'
    });
  }

  openSnackbar() {
    new Snackbar('Helloooo, Good Morning', {
      position: 'top-center',
      theme: 'light',
      timeout: 5000,
      actionText: 'X',
      style: {
        background: '#fff7ed',
        color: '#7c2d12'
      }
    });
  }

}
