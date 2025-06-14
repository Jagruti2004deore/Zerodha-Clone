import React from 'react';


function Signup() {
  return (
    <div className="container py-5">
      <div className=" fs-2 text-center">
           <h2 className="fw-bold mb-3">Open a free demat & trading account online</h2>
            <p className="text-muted mb-4">
              Start investing brokerage free and join a community of 1.5+ crore investors and traders
            </p>
      </div>
          
  
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="/media/login.png" 
            alt="Kite App Preview"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="form-section" style={{ maxWidth: '420px', margin: 'auto' }}>

            <h5 className="fw-semibold mb-2">Signup now</h5>
            <p className="text-muted mb-4">Or track your existing application</p>

            <div className="d-flex align-items-center mb-3">
              <div
                className="bg-light d-flex align-items-center px-3 border border-end-0 rounded-start"
                style={{ height: '38px' }}
              >
                <img
                  src="https://flagcdn.com/in.svg"
                  alt="India Flag"
                  width="20"
                  className="me-2"
                />
                +91
              </div>
              <input
                type="text"
                className="form-control rounded-end"
                placeholder="Enter your mobile number"
              />
            </div>

            <button className="btn btn-primary w-100 mb-3 fs-5">Get OTP</button>

            <p className="text-muted small">
              By proceeding, you agree to the Zerodha{' '}
              <a href="#" className="text-decoration-none">
                terms
              </a>{' '}
              &{' '}
              <a href="#" className="text-decoration-none">
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
