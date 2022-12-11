import http from './http';

export async function getAllProduct() {
  return http.get('/allProducts');
}
export async function addToProduct(data){
  return http.post('/allProducts',data)
}

export async function getCart() {
  return http.get('/cart');
}

export async function addToCart(data) {
  return http.post('/cart', data);
}
export async function removeFromCart(id) {
  return http.delete(`/cart/${id}`);
}

export async function getAuthor() {
  return http.get('/author');
}
export async function getBlogList() {
  return http.get('/blogList')
}
