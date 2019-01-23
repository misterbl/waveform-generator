import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as Yup from "yup";
import { saveActivityData } from "../actions/actionCreators/apiActions";
import ActivityForm from "../components/ActivityForm";
import ROUTES from "../const/route";
import {
  localStorageSetItem,
  localStorageGetItem
} from "../utils/localStorage";
export class Activity extends React.Component {
  state = {
    activityData: localStorageGetItem("activityData") //TODO set the state to this in ComponentWillMount if getActivityData returns null(create the getActivityData too)
  };
  handleSubmit = async data => {
    const {
      saveActivityData,
      history: { push }
    } = this.props;
    await localStorageSetItem("activityData", data);
    await saveActivityData(data);
    push(ROUTES.ADDRESS);
  };
  backToPreviousPage = () => {
    this.props.history.push(ROUTES.INDEX);
  };

  render() {
    const { activityData } = this.state;

    return (
      <main className="bg-white form-container p-5">
        <h1 className="font-30 text-center mb-5">About your activity</h1>
        <Formik
          validationSchema={Yup.object().shape({
            activityName: Yup.string().required("Activity name required"),
            activityWebpage: Yup.string().required("Activity webpage required"),
            activityPhoneNumber: Yup.number()
          })}
          initialValues={{
            activityName: activityData ? activityData.activityName : "",
            minRecommendedAge: activityData
              ? activityData.minRecommendedAge
              : "No Min. Age",
            maxRecommendedAge: activityData
              ? activityData.maxRecommendedAge
              : "No Max. Age",
            activityWebpage: activityData ? activityData.activityWebpage : "",
            activityPhoneNumber: activityData
              ? activityData.activityPhoneNumber
              : ""
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
