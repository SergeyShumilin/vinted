import { render } from "@testing-library/react";
import sinon from "sinon";
import * as AppHooks from "./App.hooks";
import App from "./App";

describe("<App />", () => {
  let useAppStub;

  beforeAll(() => {
    useAppStub = sinon.stub(AppHooks, "useApp");
  });

  afterAll(() => {
    useAppStub.restore();
  });

  it("HTML structure", () => {
    useAppStub.returns({ photos: { 1: {}, 2: {} } });
    const { queryByTestId, queryAllByTestId } = render(<App />);
    expect(queryByTestId("app")).not.toBeNull();
    expect(queryAllByTestId("photo")).toHaveLength(2);
  });
});
