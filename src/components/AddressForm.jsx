import React from "react";

class AddressForm extends React.PureComponent {
  onBuildingUnitChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("buildingUnit", event.target.value);
  };

  onBuildingNameChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("buildingName", event.target.value);
  };

  onStreetNumberChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("streetNumber", event.target.value);
  };

  onStreetNameChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("streetName", event.target.value);
  };

  onTownChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("town", event.target.value);
  };

  onPostcodeChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("postcode", event.target.value);
  };

  render() {
    const { values, handleSubmit, errors, backToPreviousPage } = this.props;
    const streetNumberError = Boolean(errors.streetNumber);
    const streetNameError = Boolean(errors.streetName);
    const townError = Boolean(errors.town);
    const postcodeError = Boolean(errors.postcode);
    return (
      <form onSubmit={handleSubmit} className="form-group mb-0">
        <label
          className="font-weight-bold d-flex justify-content-between"
          htmlFor="buildingUnit"
        >
          <span>Building Unit</span>
          <span className="font-weight-lighter text-black-50">Optional</span>
        </label>
        <input
          id="buildingUnit"
          className="form-control mb-4"
          type="text"
          name="buildingUnit"
          value={values.buildingUnit}
          onChange={this.onBuildingUnitChange}
        />
        <label
          className="font-weight-bold m-0 d-flex justify-content-between"
          htmlFor="buildingName"
        >
          <span>Building Name</span>
          <span className="font-weight-lighter text-black-50">Optional</span>
        </label>
        <input
          id="buildingName"
          className="form-control mb-4"
          type="text"
          name="buildingName"
          value={values.buildingName}
          onChange={this.onBuildingNameChange}
        />
        <label className="font-weight-bold" htmlFor="streetNumber">
          Street Number
        </label>
        <input
          id="streetNumber"
          className={`form-control ${streetNumberError ? "" : "mb-4"}`}
          type="text"
          name="streetNumber"
          value={values.streetNumber}
          onChange={this.onStreetNumberChange}
          aria-invalid={streetNumberError}
        />
        {streetNumberError && (
          <span
            id="errors-streetNumber"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.streetNumber}
          </span>
        )}
        <label className="font-weight-bold" htmlFor="streetName">
          Street Name
        </label>
        <input
          id="streetName"
          className={`form-control ${streetNameError ? "" : "mb-4"}`}
          type="text"
          name="streetName"
          value={values.streetName}
          onChange={this.onStreetNameChange}
          aria-invalid={streetNameError}
        />
        {streetNameError && (
          <span
            id="errors-streetNumber"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.streetName}
          </span>
        )}
        <label className="font-weight-bold" htmlFor="town">
          Town
        </label>
        <input
          id="town"
          className={`form-control ${townError ? "" : "mb-4"}`}
          type="text"
          name="town"
          value={values.town}
          onChange={this.onTownChange}
          aria-invalid={townError}
        />
        {townError && (
          <span
            id="errors-streetNumber"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.town}
          </span>
        )}
        <label className="font-weight-bold" htmlFor="postcode">
          Postcode
        </label>
        <input
          id="postcode"
          className={`form-control ${postcodeError ? "" : "mb-4"}`}
          type="text"
          name="postcode"
          value={values.postcode}
          onChange={this.onPostcodeChange}
          aria-invalid={postcodeError}
        />
        {postcodeError && (
          <span
            id="errors-streetNumber"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.postcode}
          </span>
        )}
        <div className="button-container bg-white d-flex flex-row-reverse py-2">
          <button
            type="submit"
            id="next-button"
            className="btn next-button ml-3"
            disabled={
              values.streetNumber === "" ||
              values.streetName === "" ||
              values.town === "" ||
              values.postcode === ""
            }
          >
            Next
          </button>
          <button
            type="button"
            id="back-button"
            className="btn back-button"
            onClick={backToPreviousPage}
          >
            Back
          </button>
        </div>
      </form>
    );
  }
}
export default AddressForm;
