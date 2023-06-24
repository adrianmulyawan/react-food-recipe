import React from 'react';

const MessageUpdateComponent = () => {
  return (
    <>
      <div className="message-update-component" style={{ marginTop: '48px' }}>
        <div className="row d-flex justify-content-center">
          <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6 my-2">
            <img src={process.env.PUBLIC_URL+"newsletter.jpg"} alt="message-banner" style={{ borderRadius: '10px' }} />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-12 col-lg-6 my-2 p-2">
            <div className="card border-0 my-5" style={{ backgroundColor: '#fff' }}>
              <h2 className='text-bold'>
                Get the latest recipe updates by registering now!
              </h2>
              <div className="input-group" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <input type="text" className="form-control" placeholder="Your Email Address..." />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{ backgroundColor: '#02A057', color: 'white' }}>Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageUpdateComponent;
