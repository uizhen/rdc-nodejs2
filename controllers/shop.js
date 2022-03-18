const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};



exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getContact = (req, res, next) => {
  res.render('shop/contact', {
    path: '/contact.html',
    pageTitle: 'Холбогдох'
  });
};

exports.getAbout = (req, res, next) => {
  res.render('shop/about', {
    path: '/about.html',
    pageTitle: 'Checkout'
  });
};
exports.getBlog = (req, res, next) => {
  res.render('shop/blog', {
    path: '/blog.html',
    pageTitle: 'Checkout'
  });
};
exports.getService = (req, res, next) => {
  res.render('shop/service', {
    path: '/service.html',
    pageTitle: 'Service'
  });
};
