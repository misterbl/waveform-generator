import React from "react";

class ActivityForm extends React.PureComponent {
  onActivityNameChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("activityName", event.target.value);
  };

  onActivitWebpageChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("activitWebpage", event.target.value);
  };

  onActivityPhoneNumberChange = event => {
    const { setFieldValue } = this.props;
    setFieldValue("activityPhoneNumber", event.target.value);
  };

  render() {
    const {
      values,
      handleSubmit,
      touched,
      errors,
      backToPreviousPage
    } = this.props;
    const activityNameError = Boolean(
      touched.activityName && errors.activityName
    );

    const activitWebpageError = Boolean(
      touched.activitWebpage && errors.activitWebpage
    );

    const activityPhoneNumberError = Boolean(
      touched.activityPhoneNumber && errors.activityPhoneNumber
    );
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
            name="minRecommendedAge"
            className="custom-select mr-3"
            id="minRecommendedAge"
          >
            <option selected>No Min. Age</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="2">4 years</option>
            <option value="3">5 years</option>
            <option value="2">6 years</option>
            <option value="3">7 years</option>
            <option value="2">8 years</option>
            <option value="3">9 years</option>
            <option value="2">10 years</option>
            <option value="3">11 years</option>
          </select>
          <select
            className="custom-select"
            id="maxRcommendedAge"
            name="maxRcommendedAge"
          >
            <option selected>No Max. Age</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
            <option value="2">4 years</option>
            <option value="3">5 years</option>
            <option value="2">6 years</option>
            <option value="3">7 years</option>
            <option value="2">8 years</option>
            <option value="3">9 years</option>
            <option value="2">10 years</option>
            <option value="3">11 years</option>
          </select>
        </div>
        <label className="font-weight-bold m-0" htmlFor="activitWebpage">
          Activity Webpage
        </label>
        <p className="text-secondary mb-1">
          Use a specific page if possible. Try to avoid homepage links.
        </p>
        <input
          id="activitWebpage"
          className={`form-control ${activitWebpageError ? "" : "mb-4"}`}
          type="text"
          name="activitWebpage"
          value={values.activitWebpage}
          onChange={this.onActivitWebpageChange}
          aria-invalid={activitWebpageError}
        />
        {activitWebpageError && (
          <span
            id="errors-activitWebpage"
            className="text-danger mt-1 d-block mb-4"
            role="alert"
          >
            {errors.activitWebpage}
          </span>
        )}
        <label className="font-weight-bold" htmlFor="activityPhoneNumber">
          Activity Phone Number
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
              values.activityName === "" ||
              values.activitWebpage === "" ||
              values.activityPhoneNumber === ""
            }
          >
            Next
            {/* {isInFlight ? (
              <Loading size="small" colour="purple" />
            ) : (
              <Trans i18nKey="global|button|createyourteam" />
            )} */}
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
