exports.getIndex = (req, res, next) => {
  res.render('index/index', {
    path: '/',
    pageTitle: ''
  });
};



exports.getContact = (req, res, next) => {
  res.render('index/contact', {
    path: '/contact.html',
    pageTitle: 'Холбогдох'
  });
};

exports.getAbout = (req, res, next) => {
  res.render('index/about', {
    path: '/about.html',
    pageTitle: 'Checkout'
  });
};
exports.getBlog = (req, res, next) => {
  res.render('index/blog', {
    path: '/blog.html',
    pageTitle: 'Checkout'
  });
};
exports.getService = (req, res, next) => {
  res.render('index/service', {
    path: '/service.html',
    pageTitle: 'Service'
  });
};
