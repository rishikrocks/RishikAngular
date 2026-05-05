import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  myName = "Rishik Kurikelly";
  img_url = "https://monochrome-watches.com/app/uploads/2025/07/2025-Koenigsegg-Sadairs-Spear-Featured.jpg";
  flag1= true;
  max_length= 20;
  column_span=2;

  


  toggleFlag2() {
    this.flag1= !this.flag1;
  }
}