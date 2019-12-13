// @flow
import type { ApiRequestConfigObject } from "../package/types";
import mapRequestEndpointToConfigObject from "../package/mapRequestEndpointToConfigObject";

test("test mapRequestEndpointToConfigObject", () => {
  const apiRequestConfig1: ApiRequestConfigObject = {
    requestEndpoint: "url1",
    baseActionType: "ACTION_1"
  };

  const apiRequestConfig2: ApiRequestConfigObject = {
    requestEndpoint: "url2",
    baseActionType: "ACTION_2"
  };

  const apiRequestConfig3: ApiRequestConfigObject = {
    requestEndpoint: "url3",
    baseActionType: "ACTION_3"
  };

  const BaseActionsConfigurations = [
    apiRequestConfig1,
    apiRequestConfig2,
    apiRequestConfig3
  ];

  expect(
    mapRequestEndpointToConfigObject("url1", BaseActionsConfigurations)
  ).toBe(apiRequestConfig1);

  expect(
    mapRequestEndpointToConfigObject("url2", BaseActionsConfigurations)
  ).toBe(apiRequestConfig2);

  expect(
    mapRequestEndpointToConfigObject(
      "url3?param=value",
      BaseActionsConfigurations
    )
  ).toBe(apiRequestConfig3);

  expect(() =>
    mapRequestEndpointToConfigObject("action3", BaseActionsConfigurations)
  ).toThrow("strange request endpoint: action3");
});