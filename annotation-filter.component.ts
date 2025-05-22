export class AnnotationFilterComponent {
  selectedModelType: string | null = null;
  selectedClasses: string[] = [];
  availableClasses: string[] = ['lisse', 'dentée', 'tige', 'fleur']; // À adapter

  constructor(private annotationService: AnnotationService) {}

  applyFilters() {
    this.annotationService.loadFilteredAnnotations(this.selectedModelType, this.selectedClasses);
  }
}
