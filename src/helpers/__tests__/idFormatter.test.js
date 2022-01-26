import { idFormatter } from "../idFormatter";

test("renders single word id", () => {
  expect(idFormatter("test")).toBe("test");
});

test("renders two words id", () => {
  expect(idFormatter("test_prop")).toBe("testProp");
});

test("renders multiple words id", () => {
  expect(idFormatter("test_my_prop_here")).toBe("testMyPropHere");
});
