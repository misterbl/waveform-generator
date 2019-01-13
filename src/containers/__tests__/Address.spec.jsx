import * as React from "react";
import { shallow } from "enzyme";
import historyMock from "../../testMocks/history.mock";
import { Address } from "../Address";
import ROUTES from "../../const/route";
import formikRenderMock from "../../testMocks/formikRender.mock";

describe("Address", () => {
  const props = {
    values: {
      streetNumber: "streetNumberTest",
      streetName: "streetNameTest",
      town: "townTest",
      postcode: "postcodeTest"
    },
    errors: {
      streetNumber: null,
      streetName: null,
      town: null,
      postcode: null
    },
    ...formikRenderMock,
    initialValues: {
      streetNumber: "",
      streetName: "",
      town: "",
      postcode: ""
    },
    history: historyMock
  };
  const wrapper = shallow(<Address {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a Formik element", () => {
    expect(wrapper.find("Formik").length).toBe(1);
  });
  describe("backToPreviousPage", () => {
    it("calls history.push", () => {
      wrapper.instance().backToPreviousPage();
      expect(props.history.push).toHaveBeenCalledWith(ROUTES.ACTIVITY);
    });
  });
});
