import * as React from "react";
import { shallow } from "enzyme";
import historyMock from "../../testMocks/history.mock";
import { Activity } from "../Activity";
import ROUTES from "../../const/route";
import formikRenderMock from "../../testMocks/formikRender.mock";

describe("Activity", () => {
  const props = {
    values: {
      activityName: "activityNameTest",
      activityWebpage: "activityWebpageTest",
      activityPhoneNumber: "activityPhoneNumberTest"
    },
    errors: { activityName: null, activityWebpage: null },
    ...formikRenderMock,
    initialValues: {
      activityName: "",
      activityWebpage: "",
      activityPhoneNumber: ""
    },
    history: historyMock
  };
  const wrapper = shallow(<Activity {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Formik element", () => {
    expect(wrapper.find("Formik").length).toBe(1);
  });
  describe("backToPreviousPage", () => {
    it("calls history.push", () => {
      wrapper.instance().backToPreviousPage();
      expect(props.history.push).toHaveBeenCalledWith(ROUTES.INDEX);
    });
  });
});
