import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "react-modal";
import * as Yup from "yup";
import { ClipLoader } from "react-spinners";
import * as apiThunk from "../actions/thunks/apiThunk";
import AddressForm from "../components/AddressForm";
import {
  getRegisteredAddresses,
  fetchingAddresses
} from "../selectors/apiSelectors";
import { saveActivityAddress } from "../actions/actionCreators/apiActions";
import ROUTES from "../const/route";
import hoopLogo from "../hoop-logo.png";

export class Address extends React.Component {
  activityAddress = JSON.parse(localStorage.getItem("activityAddress"));
  state = {
    modalIsOpen: false,
    selectedAddress: {
      buildingUnit: this.activityAddress
        ? this.activityAddress.buildingUnit
        : "",
      buildingName: this.activityAddress
        ? this.activityAddress.buildingName
        : "",
      streetNumber: this.activityAddress
        ? this.activityAddress.streetNumber
        : "",
      streetName: this.activityAddress ? this.activityAddress.streetName : "",
      postcode: this.activityAddress ? this.activityAddress.postcode : "",
      town: this.activityAddress ? this.activityAddress.town : ""
    }
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleSubmit = async data => {
    const {
      saveActivityAddress,
      history: { push }
    } = this.props;
    await localStorage.setItem("activityAddress", JSON.stringify(data));
    await saveActivityAddress(data);
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
      selectedAddress: this.props.addresses[Number(event.target.value)],
      modalIsOpen: false
    });
  };

  render() {
    const { addresses, fetchingAddresses } = this.props;
    const { selectedAddress } = this.state;
    const postcode_regex = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/gi;
    return (
      <main className="bg-white form-container px-5 pb-5 pt-4">
        <div className="d-flex justify-content-center">
          <h1 className="text-center font-30 ml-5 mb-5 w-100 pt4">
            Add the address
          </h1>
          <button
            type="button"
            id="copy-activity-button"
            className="btn copy-activity-button ml-3"
            onClick={this.onClick}
          >
            {fetchingAddresses ? (
              <ClipLoader
                sizeUnit={"px"}
                size={30}
                color={"#123abc"}
                loading={true}
              />
            ) : (
              "Copy from Existing Activity"
            )}
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
            {addresses && (
              <div className="mt-5">
                <img src={hoopLogo} alt="Hoop's logo" className="w-25 mb-5" />

                <select
                  onChange={this.onAddressSelect}
                  name="selectAddress"
                  className="custom-select"
                  id="selectAddress"
                >
                  <option selected>Select an existing address></option>
                  {addresses.map((addresse, index) => (
                    <option key={addresse.streetName} value={index}>
                      {addresse.streetName}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </Modal>
        </div>
        <Formik
          enableReinitialize
          validationSchema={Yup.object().shape({
            streetNumber: Yup.string().required("Street number required"),
            streetName: Yup.string().required("Street name required"),
            town: Yup.string().required("Town required"),
            postcode: Yup.string()
              .required("Postcode required")
              .matches(postcode_regex, "Postcode not valid")
          })}
          initialValues={{
            buildingUnit: selectedAddress.buildingUnit || "",
            buildingName: selectedAddress.buildingName || "",
            streetNumber: selectedAddress.streetNumber || "",
            streetName: selectedAddress.streetName || "",
            town: selectedAddress.town || "",
            postcode: selectedAddress.postcode || ""
          }}
          onSubmit={data => {
            this.handleSubmit(data);
          }}
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
  addresses: getRegisteredAddresses(state),
  fetchingAddresses: fetchingAddresses(state)
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
