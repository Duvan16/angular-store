import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

describe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(httpClient);
    httpTestingController = TestBed.get(httpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('should return products', () => {
      // arrange
      const expectData = [
        {
          id: '1',
          title: 'asas',
          price: 1212,
          description: 'asas',
          image: 'img/img.jpg'
        },
        {
          id: '2',
          title: 'ssdf',
          price: 1212,
          description: 'asas',
          image: 'img/img.jpg'
        }
      ];
      let dataError, dataResponse;
      // act
      service.getAllProducts()
        .subscribe(response => {
          dataResponse = response;
        }, error => {
          dataError = error;
        });
      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);
      // assert
      expect(dataResponse.lenght).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
