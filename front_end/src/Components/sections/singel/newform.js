import React, { useState } from "react";
import { Card, CardBody, Modal, ModalBody, ModalFooter } from "reactstrap";

const Modals = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  function tog_modal() {
    setModal(!modal);
  }

  return (
    <React.Fragment>
      <Card className="mt-4" id="modals">

        <CardBody className="p-4">
      

          <button
            onClick={openModal}
            type="button"
            className="btn  waves-effect waves-light cliccckkk"
          >
        <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>

          <div
            id="myModal"
            className="modal fade"
            tabIndex="-1"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <Modal isOpen={modal} toggle={openModal} role="dialog" centered>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title mt-0" id="myModalLabel">
                    Modal Heading
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={openModal}
                  ></button>
                </div>
                <ModalBody>
                  <p>
                    <label>Comment</label>
                   <input type="text"></input>
                  </p>
                </ModalBody>
                <ModalFooter>
                  <button
                    type="button"
                    onClick={() => {
                      tog_modal();
                    }}
                    className="btn btn-secondary waves-effect"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                  >
                    Save changes
                  </button>
                </ModalFooter>
              </div>
            </Modal>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Modals;