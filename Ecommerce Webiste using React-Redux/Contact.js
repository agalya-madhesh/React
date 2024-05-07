import React from "react";

function Contact() {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="/Assets/contact.avif" alt="Contact Us" height="300px" width="300px" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="Agalya"
                />
              </div>

              <div class="mb-3">
                <label for="exampleForm" class="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="agalya@gmail.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  What can we help you with?
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
