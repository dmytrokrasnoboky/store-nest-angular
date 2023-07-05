# HybridFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Pages

| Page                       | Endpoint                                    | Access |
|----------------------------|---------------------------------------------|--------|
| Landing                    | /                                           | all    |
| Create seller              | /register/seller                            | all    |
| Create buyer               | /register/merchant                          | all    |
| Login                      | /login                                      | all    |
| Seller store               | /seller/{sellerid}                          | seller |
| Seller add product         | /seller/{sellerid}/product/create           | seller |
| Seller edit product        | /seller/{sellerid}/product/{productid}/edit | seller |
| Seller view orders         | /seller/{sellerid}/orders                   | seller |
| Seller view order detail   | /seller/{sellerid}/orders/{orderId}         | seller |
| Buyer browse               | /browse                                     | buyer  |
| Buyer shopping cart        | /cart                                       | buyer  |
| Buyer checkout             | /checkout                                   | buyer  |
| Buyer purchases            | /orders                                     | buyer  |
| Buyer view purchase detail | /orders/{orderId}                           | buyer  |
| AGB                        | /terms                                      | all    |

## Test login

| Role   | Email            | Password |
|--------|------------------|----------|
| Seller | seller@test.com  | test     |
| Seller | seller2@test.com | test     |
| Buyer  | buyer@test.com   | test     |
