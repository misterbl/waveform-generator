import * as React from "react";
import { shallow } from "enzyme";
import ActivityForm from "../ActivityForm";
import formikRenderMock from "../../testMocks/formikRender.mock";

describe("ActivityForm", () => {
  const props = {
    ...formikRenderMock,
    values: {
      activityName: "activityName",
      minRecommendedAge: "2",
      maxRcommendedAge: "5",
      activityWebpage: "activityWebpage",
      activityPhoneNumber: "activityPhoneNumber"
    }
  };
  const wrapper = shallow(<ActivityForm {...props} />);
  it("matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
