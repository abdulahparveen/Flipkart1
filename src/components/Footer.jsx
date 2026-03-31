

function Footer() {
  return (
    <footer className="bg-dark text-white mt-4 pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-uppercase">About</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Contact Us</a></li>
              <li><a href="#" className="text-white-50">About Us</a></li>
              <li><a href="#" className="text-white-50">Careers</a></li>
              <li><a href="#" className="text-white-50">Flipkart Stories</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-uppercase">Help</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Payments</a></li>
              <li><a href="#" className="text-white-50">Shipping</a></li>
              <li><a href="#" className="text-white-50">Cancellation</a></li>
              <li><a href="#" className="text-white-50">FAQ</a></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-uppercase">Policy</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Return Policy</a></li>
              <li><a href="#" className="text-white-50">Terms of Use</a></li>
              <li><a href="#" className="text-white-50">Security</a></li>
              <li><a href="#" className="text-white-50">Privacy</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-6 col-md-2 mb-3">
            <h6 className="text-uppercase">Social</h6>
            <ul className="list-unstyled d-flex gap-3">
              <li><a href="#" className="text-white"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#" className="text-white"><i className="bi bi-instagram"></i></a></li>
              <li><a href="#" className="text-white"><i className="bi bi-youtube"></i></a></li>
            </ul>
          </div>

          {/* Mail Us Section */}
          <div className="col-12 col-md-4 mb-3">
            <h6 className="text-uppercase">Mail Us</h6>
            <p className="text-white-50">
              Flipkart Internet Pvt Ltd,<br />
              Buildings Alyssa, Begonia & Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103, Karnataka, India
            </p>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center text-white-50">
          © 2026 Flipkart Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
