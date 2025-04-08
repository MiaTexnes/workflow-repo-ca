import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/login", "/login")).toBe(true);
    expect(isActivePath("/register", "/register")).toBe(true);
    expect(isActivePath("/venue", "/venue")).toBe(true);
  });

  it("returns true for root path when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    expect(isActivePath("/venue", "/venue/123")).toBe(true);
    expect(isActivePath("/login", "/login/reset")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/login", "/register")).toBe(false);
    expect(isActivePath("/venue", "/login")).toBe(false);
    expect(isActivePath("/register", "/login/reset")).toBe(false);
  });
});
