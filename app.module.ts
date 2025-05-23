import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageFilterComponent } from './components/image-filter/image-filter.component';

@NgModule({
  declarations: [ImageFilterComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
})
export class AppModule {}

