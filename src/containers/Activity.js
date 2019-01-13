import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
import { saveActivityData } from "../actions/actionCreators/apiActions";
import ActivityForm from "../components/ActivityForm";
import ROUTES from "../const/route";

export class Activity extends React.Component {
  handleSubmit = data => {
    const {
      saveActivityData,
      history: { push }
    } = this.props;
    push(ROUTES.ADDRESS);
    saveActivityData(data);
  };

  backToPreviousPage = () => {
    this.props.history.push(ROUTES.INDEX);
  };

  render() {
    return (
      <main className="bg-white form-container p-5">
        <h1 className="title-30 text-center mb-5">About your activity</h1>
        <Formik
          validationSchema={Yup.object().shape({
            activityName: Yup.string().required("Activity name requiered"),
            activitWebpage: Yup.string().required("Activity webpage requiered"),
            activityPhoneNumber: Yup.string().required(
              "Activity phone number requiered"
            )
          })}
          initialValues={{
            activityName: "",
            minRecommendedAge: "No Min. Age",
            maxecommendedAge: "No Max. Age",
            activitWebpage: "",
            activityPhoneNumber: ""
          }}
          onSubmit={this.handleSubmit}
          render={formikProps => (
            <ActivityForm
              {...formikProps}
              backToPreviousPage={this.backToPreviousPage}
            />
          )}
        />
      </main>
    );
  }
}

export const mapDispatchToProps = {
  saveActivityData
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Activity)
);
