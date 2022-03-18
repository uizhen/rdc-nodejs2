

exports.getIndex = (req, res, next) => {
  res.render('shop/index', {
    path: '/',
    pageTitle: ''
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
