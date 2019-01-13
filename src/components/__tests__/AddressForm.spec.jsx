import * as React from "react";
import { shallow } from "enzyme";
import AddressForm from "../AddressForm";
import formikRenderMock from "../../testMocks/formikRender.mock";

describe("AddressForm", () => {
  const props = {
    ...formikRenderMock,
    values: {
      buildingUnit: "buildingUnit",
      buildingName: "buildingName",
      streetNumber: "streetNumber",
      streetName: "streetName",
      town: "town",
      postcode: "postcode"
    },
    initialValues: { teamName: "" },
    isInFlight: false,
    isError: false
  };
  const wrapper = shallow(<AddressForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
