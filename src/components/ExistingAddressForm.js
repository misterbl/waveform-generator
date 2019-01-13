import React from "react";

class ExistingAddressForm extends React.PureComponent {
  onAddressChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("selectAddress", event.target.value);
  };

  render() {
    const { handleSubmit, addresses } = this.props;
    console.log("addresses", addresses);
    return (
      <form onSubmit={handleSubmit}>
        <select
          onChange={this.onAddressChange}
          name="selectAddress"
          className="custom-select"
          id="selectAddress"
        >
          <option selected>Select an existing address></option>

          {addresses.map((addresse, index) => (
            <option value={index}>{addresse.streetName}</option>
          ))}
        </select>
        <button
          type="submit"
          id="select-address-button"
          className="btn next-button mt-5"
        >
          Next
          {/* {isInFlight ? (
                <Loading size="small" colour="purple" />
              ) : (
                <Trans i18nKey="global|button|createyourteam" />
              )} */}
        </button>
      </form>
    );
  }
}
export default ExistingAddressForm;
