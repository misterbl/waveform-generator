// import * as React from "react";
// import { shallow } from "enzyme";
// import historyMock from "../../testMocks/history.mock";
// import { Home } from "../Home";

// describe("Home", () => {
//   const props = {
//     history: historyMock
//   };

//   const wrapper = shallow(<Home {...props} />);
//   it("matches the snapshot", () => {
//     expect(wrapper).toMatchSnapshot();
//   });
//   it("should call history.push on button click", () => {
//     wrapper
//       .find("button")
//       .at(0)
//       .simulate("click");
//     expect(props.history.push).toHaveBeenCalledWith(ROUTES.ACTIVITY);
//   });
// });
