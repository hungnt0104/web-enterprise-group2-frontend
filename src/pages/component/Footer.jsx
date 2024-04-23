import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Footer Start */}
      <div className="footer-main footer-bg">
        
        {/* footer-bottom area */}
        <div className="footer-bottom-area footer-bg">
          <div className="container">
            <div className="footer-border">
              <div className="row d-flex align-items-center">
                <div className="col-xl-12">
                  <div className="footer-copy-right text-center">
                    <p>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved 
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </footer>
  );
};

export default Footer;
