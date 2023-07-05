import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SellerStoreService } from '../../../../../shared/services/seller-store.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductCategory } from '../../../../../shared/api/models/product-category';
import { CreateProductRequest } from '../../../../../shared/api/models/create-product-request';
import { Observable } from 'rxjs';
import { CreateProductResponse } from '../../../../../shared/api/models/create-product-response';
import { ProductResponse } from '../../../../../shared/api/models/product-response';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.scss'],
})
export class CreateEditProductComponent {
  @ViewChild('fileSelector') fileSelector!: ElementRef;

  @Input() set editProductData(data: Partial<ProductResponse>) {
    this.productDataFromServer = data;
    this.form.reset(data);
    this.imageUrl = data.imageUrl || '';
  }

  @Input() formSubmit!: (
    body: CreateProductRequest
  ) => Observable<CreateProductResponse | void>;

  productDataFromServer?: Partial<ProductResponse>;
  categories = Object.values(ProductCategory);
  isImageLoading = false;
  imageName = '';
  imageUrl = '';

  formTemplate = this.fb.group({
    name: ['', [Validators.required]],
    brandName: ['', [Validators.required]],
    price: this.fb.group({
      value: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.pattern(/^[0-9.,]+$/),
        ],
      ],
      currency: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]{3}$/)],
      ],
    }),
    category: ['', [Validators.required]],
    description: ['', [Validators.required]],
    imageUrl: [''],
  });

  form: FormGroup = this.formTemplate;

  constructor(
    private fb: FormBuilder,
    private sellerService: SellerStoreService,
    private snackBar: MatSnackBar
  ) {}

  openFileSelector(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.imageName = this.preparedImageName(file.name);
      this.getImgSrc(file);
    }
  }

  uploadPhoto(): void {
    this.fileSelector.nativeElement.click();
  }

  onSubmit(): void {
    this.form.disable();

    const body: CreateProductRequest = {
      ...this.form.value,
      imageUrl: this.imageUrl || '',
    };

    if (this.productDataFromServer) {
      const dataForCheck = { ...this.productDataFromServer };
      delete dataForCheck['id'];
      delete dataForCheck['seller'];

      const isHasChanges = (Object.keys(body) as Array<keyof typeof body>).some(
        (key) => {
          if (typeof body[key] === 'string') {
            return (body[key] + '').trim() !== (dataForCheck[key] + '').trim();
          }
          return (
            JSON.stringify(body[key]) !== JSON.stringify(dataForCheck[key])
          );
        }
      );

      if (!isHasChanges) {
        this.form.enable();
        this.snackBar.open('Nothing has changed', 'OK');
        return;
      }
    }

    this.formSubmit(body).subscribe({
      next: () => {
        this.form.enable();

        if (!this.productDataFromServer) {
          this.form = this.formTemplate;
        }

        this.productDataFromServer = body;
      },
      error: (error) => {
        this.snackBar.open(error.message, 'OK');
        this.form.enable();
      },
    });
  }

  private getImgSrc(file: File): void {
    this.isImageLoading = true;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imageUrl = reader.result?.toString() || '';

      this.sellerService.uploadFile({ file, name: file.name }).subscribe({
        next: (value) => {
          this.imageUrl = value.url;
          this.isImageLoading = false;
        },
        error: (err) => {
          this.snackBar.open(err.messagge, 'OK');
          this.isImageLoading = false;
        },
      });
    };
  }

  clearImage(): void {
    this.imageUrl = this.imageName = '';
  }

  preparedImageName(name: string): string {
    const newName = name
      .split('.')
      .map((value) =>
        value.length > 10 ? value.substring(0, 10) + '... ' : value
      );

    return newName.join('.');
  }

  get price(): FormGroup {
    return this.form.get('price') as FormGroup;
  }
}
