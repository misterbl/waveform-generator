import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import * as Yup from "yup";
import * as apiThunk from "../actions/thunks/apiThunk";
import AddressForm from "../components/AddressForm";
import { getRegisteredAddresses } from "../selectors/apiSelectors";
import { saveActivityAddress } from "../actions/actionCreators/apiActions";
import ROUTES from "../const/route";
import ExistingAddressForm from "../components/ExistingAddressForm";

export class Address extends React.Component {
  state = {
    modalIsOpen: false,
    selectedAddress: {
      buildingUnit: "",
      buildingName: "",
      streetNumber: "",
      streetName: "",
      town: ""
    }
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = data => {
    const {
      saveActivityAddress,
      history: { push }
    } = this.props;
    saveActivityAddress(data);
    push(ROUTES.CONFIRMATION);
  };

  backToPreviousPage = () => {
    this.props.history.push(ROUTES.ACTIVITY);
  };

  onClick = async () => {
    await this.props.getAddresses();
    this.openModal();
  };

  onAddressSelect = event => {
    this.setState({
      selectedAddress: this.props.addresses[Number(event.selectAddress)],
      modalIsOpen: false
    });
  };

  render() {
    const { addresses } = this.props;
    const { selectedAddress } = this.state;
    return (
      <main className="bg-white form-container px-5 pb-5 pt-4">
        <div className="d-flex justify-content-center">
          <h1 className="text-center title-30 ml-5 mb-5 w-100 pt4">
            Add the address
          </h1>
          <button
            type="button"
            id="copy-activity-button"
            className="btn copy-activity-button ml-3"
            onClick={this.onClick}
          >
            Copy from Existing Activity
          </button>
          <Modal
            appElement={document.getElementById("root")}
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Address selection"
          >
            <button className="close-modal-button " onClick={this.closeModal}>
              X
            </button>
            {addresses && <div>Hello</div>}
            {addresses && (
              <div className="mt-5">
                <Formik
                  initialValues={{
                    selectAddress: ""
                  }}
                  onSubmit={this.onAddressSelect}
                  render={formikProps => (
                    <ExistingAddressForm
                      {...formikProps}
                      addresses={addresses}
                    />
                  )}
                />
              </div>
            )}
          </Modal>
        </div>
        <Formik
          enableReinitialize
          validationSchema={Yup.object().shape({
            streetNumber: Yup.string().required("Street number requiered"),
            streetName: Yup.string().required("Street name requiered"),
            town: Yup.string().required("Town requiered"),
            postcode: Yup.string().required("Postcode requiered")
          })}
          initialValues={{
            buildingUnit: selectedAddress.buildingUnit,
            buildingName: selectedAddress.buildingName,
            streetNumber: selectedAddress.streetNumber,
            streetName: selectedAddress.streetName,
            town: selectedAddress.town,
            postcode: selectedAddress.postcode
          }}
          onSubmit={this.handleSubmit}
          render={formikProps => (
            <AddressForm
              {...formikProps}
              backToPreviousPage={this.backToPreviousPage}
            />
          )}
        />
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  addresses: getRegisteredAddresses(state)
});

export const mapDispatchToProps = {
  getAddresses: apiThunk.getAddresses,
  saveActivityAddress
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Address)
);
