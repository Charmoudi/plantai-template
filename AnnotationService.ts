export class AnnotationService {
  private apiUrl = 'http://localhost:8080/api/annotations';

  getFilteredAnnotations(modelType: string | null, classes: string[] | null): Observable<Annotation[]> {
    const params = new HttpParams()
      .set('modelType', modelType || '')
      .set('predictedClasses', classes?.join(',') || '');
    return this.http.get<Annotation[]>(`${this.apiUrl}/filter`, { params });
