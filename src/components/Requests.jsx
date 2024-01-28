function Requests() {
  return (
    <div className="container mt-4">
      <div className="d-flex requests-container">
        <div className="img-requests w-25 pr-4 d-grid">
          <img
            className="w-75"
            src="https://t4.ftcdn.net/jpg/03/00/56/43/360_F_300564349_sK6cEfUj30c1O9hVQAK4e8zhSh2mI2T0.jpg"
            alt=""
          />
          <div className="bg-light mt-4 p-4 d-grid">
            <h4>Filter</h4>
            <hr />
            <label className="font-weight-bold mt-2">Status</label>
            <select class="form-control form-control-sm">
              <option>None</option>
            </select>
            <label className="font-weight-bold mt-2">Employee</label>
            <select class="form-control form-control-sm">
              <option>None</option>
            </select>
            <label className="font-weight-bold mt-2">Start date</label>
            <select class="form-control form-control-sm">
              <option>None</option>
            </select>
            <label className="font-weight-bold mt-2">End date</label>
            <select class="form-control form-control-sm">
              <option>None</option>
            </select>
          </div>
        </div>
        <div className="requests-conteiner border border-light w-75">
          <h3 className="pl-4 p-2 bg-light">
            Requests
            <button
              className="btn btn-success float-right font-weight-bold text-center"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              +
            </button>
          </h3>
          <div id="request">
            <div class="media border border-light">
              <img
                class="align-self-center mr-3"
                width="20%"
                src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-employee-icon-vector-illustration-in-glyph-style-for-any-purpose-png-image_998315.jpg"
                alt="Generic placeholder image"
              />
              <div class="media-body p-2 bg-light">
                <h5 class="mt-0">Reason:</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </p>
                <div className="row container">
                  <div className="col-sm-2">
                    <div className="row">
                      <label className="font-weight-bold text-truncate">
                        Start date
                      </label>
                    </div>
                    <div className="row">
                      <span className="text-truncate mb-0">12.3.2023.</span>
                    </div>
                  </div>
                  <div className="col-sm-2 text-center mt-3 text-success">
                    <svg
                      width="50"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                  </div>
                  <div className="col-sm-4">
                    <div className="row">
                      <label className="font-weight-bold text-truncate">
                        End date
                      </label>
                    </div>
                    <div className="row">
                      <span className="text-truncate mb-0">16.3.2023.</span>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <button className="btn btn-success">Accept</button>
                  </div>
                  <div className="col-sm-2">
                    <button className="btn btn-danger">Refuse</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Create request
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group pl-4 pr-4">
                    <label>Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="3"
                    ></textarea>
                  </div>

                  <div class="form-group p-4">
                    <label>Type</label>
                    <select className="form-control" name="type" id="type">
                      <option value="">Sick</option>
                      <option value="">Sick</option>
                      <option value="">Sick</option>
                    </select>
                  </div>

                  <div className="d-flex justify-content-around mb-4">
                    <div class="form-group">
                      <label>Start date</label>
                      <input
                        type="date"
                        class="form-control input-large"
                        id="start-date"
                        // value={}
                        onChange={(event) => {
                          // setEmail(event.target.value);
                        }}
                      />
                    </div>

                    <div class="form-group">
                      <label>End date</label>
                      <input
                        type="date"
                        class="form-control"
                        id="password"
                        // value={}
                        onChange={(event) => {
                          // setPassword(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requests;
