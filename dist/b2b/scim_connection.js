"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connection = void 0;
var _method_options = require("../shared/method_options");
var _shared = require("../shared");
// !!!
// WARNING: This file is autogenerated
// Only modify code within MANUAL() sections
// or your changes may be overwritten later!
// !!!

// Request type for `scim.connection.create`.

// Response type for `scim.connection.create`.

// Request type for `scim.connection.delete`.

// Response type for `scim.connection.delete`.

// Request type for `scim.connection.getGroups`.

// Response type for `scim.connection.getGroups`.

// Request type for `scim.connection.get`.

// Response type for `scim.connection.get`.

// Request type for `scim.connection.rotateCancel`.

// Response type for `scim.connection.rotateCancel`.

// Request type for `scim.connection.rotateComplete`.

// Response type for `scim.connection.rotateComplete`.

// Request type for `scim.connection.rotateStart`.

// Response type for `scim.connection.rotateStart`.

// Request type for `scim.connection.update`.

// Response type for `scim.connection.update`.

class Connection {
  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  /**
   * Update a SCIM Connection.
   * @param data {@link B2BSCIMConnectionUpdateRequest}
   * @param options {@link B2BSCIMConnectionUpdateRequestOptions}
   * @returns {@link B2BSCIMConnectionUpdateResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  update(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "PUT",
      url: `/v1/b2b/scim/${data.organization_id}/connection/${data.connection_id}`,
      headers,
      data: {
        display_name: data.display_name,
        identity_provider: data.identity_provider,
        scim_group_implicit_role_assignments: data.scim_group_implicit_role_assignments
      }
    });
  }

  /**
   * Deletes a SCIM Connection.
   * @param data {@link B2BSCIMConnectionDeleteRequest}
   * @param options {@link B2BSCIMConnectionDeleteRequestOptions}
   * @returns {@link B2BSCIMConnectionDeleteResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  delete(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: `/v1/b2b/scim/${data.organization_id}/connection/${data.connection_id}`,
      headers,
      data: {}
    });
  }

  /**
   * Start a SCIM token rotation.
   * @param data {@link B2BSCIMConnectionRotateStartRequest}
   * @param options {@link B2BSCIMConnectionRotateStartRequestOptions}
   * @returns {@link B2BSCIMConnectionRotateStartResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  rotateStart(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connection/${data.connection_id}/rotate/start`,
      headers,
      data: {}
    });
  }

  /**
   * Completes a SCIM token rotation. This will complete the current token rotation process and update the
   * active token to be the new token supplied in the
   * [start SCIM token rotation](https://stytch.com/docs/b2b/api/scim-rotate-token-start) response.
   * @param data {@link B2BSCIMConnectionRotateCompleteRequest}
   * @param options {@link B2BSCIMConnectionRotateCompleteRequestOptions}
   * @returns {@link B2BSCIMConnectionRotateCompleteResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  rotateComplete(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connection/${data.connection_id}/rotate/complete`,
      headers,
      data: {}
    });
  }

  /**
   * Cancel a SCIM token rotation. This will cancel the current token rotation process, keeping the original
   * token active.
   * @param data {@link B2BSCIMConnectionRotateCancelRequest}
   * @param options {@link B2BSCIMConnectionRotateCancelRequestOptions}
   * @returns {@link B2BSCIMConnectionRotateCancelResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  rotateCancel(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connection/${data.connection_id}/rotate/cancel`,
      headers,
      data: {}
    });
  }

  /**
   * Gets a paginated list of all SCIM Groups associated with a given Connection.
   * @param params {@link B2BSCIMConnectionGetGroupsRequest}
   * @param options {@link B2BSCIMConnectionGetGroupsRequestOptions}
   * @returns {@link B2BSCIMConnectionGetGroupsResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  getGroups(params, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "GET",
      url: `/v1/b2b/scim/${params.organization_id}/connection/${params.connection_id}`,
      headers,
      params: {
        cursor: params.cursor,
        limit: params.limit
      }
    });
  }

  /**
   * Create a new SCIM Connection.
   * @param data {@link B2BSCIMConnectionCreateRequest}
   * @param options {@link B2BSCIMConnectionCreateRequestOptions}
   * @returns {@link B2BSCIMConnectionCreateResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  create(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connection`,
      headers,
      data: {
        display_name: data.display_name,
        identity_provider: data.identity_provider
      }
    });
  }

  /**
   * Get SCIM Connections.
   * @param params {@link B2BSCIMConnectionGetRequest}
   * @param options {@link B2BSCIMConnectionGetRequestOptions}
   * @returns {@link B2BSCIMConnectionGetResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  get(params, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "GET",
      url: `/v1/b2b/scim/${params.organization_id}/connection`,
      headers,
      params: {}
    });
  }
}
exports.Connection = Connection;