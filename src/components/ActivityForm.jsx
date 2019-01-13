import React from "react";

class ActivityForm extends React.PureComponent {
  createOptions = () => {
    let options = [];

    for (let i = 1; i < 12; i++) {
      const value = i > 1 ? `${i} years` : `${i} year`;
      options.push(
        <option key={value} value={value}>
          {value}
        </option>
      );
    }
    return options;
  };
  onActivityNameChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("activityName", event.target.value);
  };

  onActivityWebpageChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("activityWebpage", event.target.value);
  };

  onActivityPhoneNumberChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("activityPhoneNumber", event.target.value);
  };

  onMinRecommendedAgeChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("minRecommendedAge", event.target.value);
  };

  onMaxRecommendedAgeChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("maxRecommendedAge", event.target.value);
  };

  render() {
    const { values, handleSubmit, errors, backToPreviousPage } = this.props;
    const activityNameError = Boolean(errors.activityName);

    const activityWebpageError = Boolean(errors.activityWebpage);

    const activityPhoneNumberError = Boolean(errors.activityPhoneNumber);
    return (
      <form onSubmit={handleSubmit} className="form-group mb-0">
        <label className="font-weight-bold" htmlFor="activityName">
          Activity Name
        </label>
        <input
          id="activityName"
          className={`form-control ${activityNameError ? "" : "mb-4"}`}
          type="text"
          name="activityName"
          value={values.activityName}
          onChange={this.onActivityNameChange}
          aria-invalid={activityNameError}
        />
        {activityNameError && (
          <span
            id="errors-activityName"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.activityName}
          </span>
        )}
        <label className="font-weight-bold" htmlFor="recommendedAge">
          Recommended Age
        </label>
        <div className="d-flex mb-4" id="recommendedAge">
          <select
            onChange={this.onMinRecommendedAgeChange}
            name="minRecommendedAge"
            className="custom-select mr-3"
            id="minRecommendedAge"
          >
            <option defaultValue>No Min. Age</option>
            {this.createOptions()}
          </select>
          <select
            onChange={this.onMaxRecommendedAgeChange}
            className="custom-select"
            id="maxRcommendedAge"
            name="maxRcommendedAge"
          >
            <option defaultValue>No Max. Age</option>
            {this.createOptions()}
          </select>
        </div>
        <label className="font-weight-bold m-0" htmlFor="activityWebpage">
          Activity Webpage
        </label>
        <p className="text-secondary mb-1">
          Use a specific page if possible. Try to avoid homepage links.
        </p>
        <input
          id="activityWebpage"
          className={`form-control ${activityWebpageError ? "" : "mb-4"}`}
          type="text"
          name="activityWebpage"
          value={values.activityWebpage}
          onChange={this.onActivityWebpageChange}
          aria-invalid={activityWebpageError}
        />
        {activityWebpageError && (
          <span
            id="errors-activityWebpage"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.activityWebpage}
          </span>
        )}
        <label
          className="font-weight-bold d-flex justify-content-between"
          htmlFor="activityPhoneNumber"
        >
          <span> Activity Phone Number</span>
          <span className="font-weight-lighter text-black-50">Optional</span>
        </label>
        <input
          id="activityPhoneNumber"
          className={`form-control ${activityPhoneNumberError ? "" : "mb-4"}`}
          type="number"
          name="activityPhoneNumber"
          value={values.activityPhoneNumber}
          onChange={this.onActivityPhoneNumberChange}
          aria-invalid={activityPhoneNumberError}
        />
        {activityPhoneNumberError && (
          <span
            id="errors-activityPhoneNumber"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.activityPhoneNumber}
          </span>
        )}
        <div className="button-container bg-white d-flex flex-row-reverse py-2">
          <button
            type="submit"
            id="next-button"
            className="btn next-button ml-3"
            disabled={
              values.activityName === "" || values.activityWebpage === ""
            }
          >
            Next
          </button>
          <button
            type="button"
            onClick={backToPreviousPage}
            id="back-button"
            className="btn back-button"
          >
            Back
          </button>
        </div>
      </form>
    );
  }
}
export default ActivityForm;
