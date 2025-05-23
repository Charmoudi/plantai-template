import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css']
})
export class ImageFilterComponent implements OnInit {
  modelTypes = ['classification', 'segmentation'];
  selectedModelType = '';
  availableClasses = ['lisse', 'dentée', 'tige', 'fleur']; // à remplacer par un appel backend
  selectedClasses: string[] = [];
  filteredImages: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  applyFilter(): void {
    const params = {
      modelType: this.selectedModelType,
      predictedClasses: this.selectedClasses
    };
    this.http.post<any[]>('http://localhost:8080/api/images/filter', params)
      .subscribe(images => this.filteredImages = images);
  }
}
