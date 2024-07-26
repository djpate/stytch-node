"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OIDC = void 0;
var _method_options = require("../shared/method_options");
var _shared = require("../shared");
// !!!
// WARNING: This file is autogenerated
// Only modify code within MANUAL() sections
// or your changes may be overwritten later!
// !!!

// Request type for `sso.oidc.createConnection`.

// Response type for `sso.oidc.createConnection`.

// Request type for `sso.oidc.updateConnection`.

// Response type for `sso.oidc.updateConnection`.

class OIDC {
  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  /**
   * Create a new OIDC Connection.
   * @param data {@link B2BSSOOIDCCreateConnectionRequest}
   * @param options {@link B2BSSOOIDCCreateConnectionRequestOptions}
   * @returns {@link B2BSSOOIDCCreateConnectionResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  createConnection(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/sso/oidc/${data.organization_id}`,
      headers,
      data: {
        display_name: data.display_name,
        identity_provider: data.identity_provider
      }
    });
  }

  /**
   * Updates an existing OIDC connection.
   *
   * When the value of `issuer` changes, Stytch will attempt to retrieve the
   * [OpenID Provider Metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata)
   * document found at `$/.well-known/openid-configuration`.
   * If the metadata document can be retrieved successfully, Stytch will use it to infer the values of
   * `authorization_url`, `token_url`, `jwks_url`, and `userinfo_url`.
   * The `client_id` and `client_secret` values cannot be inferred from the metadata document, and *must* be
   * passed in explicitly.
   *
   * If the metadata document cannot be retrieved, Stytch will still update the connection using values from
   * the request body.
   *
   * If the metadata document can be retrieved, and values are passed in the request body, the explicit
   * values passed in from the request body will take precedence over the values inferred from the metadata
   * document.
   *
   * Note that a newly created connection will not become active until all of the following fields are
   * provided:
   * * `issuer`
   * * `client_id`
   * * `client_secret`
   * * `authorization_url`
   * * `token_url`
   * * `userinfo_url`
   * * `jwks_url`
   * @param data {@link B2BSSOOIDCUpdateConnectionRequest}
   * @param options {@link B2BSSOOIDCUpdateConnectionRequestOptions}
   * @returns {@link B2BSSOOIDCUpdateConnectionResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  updateConnection(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "PUT",
      url: `/v1/b2b/sso/oidc/${data.organization_id}/connections/${data.connection_id}`,
      headers,
      data: {
        display_name: data.display_name,
        client_id: data.client_id,
        client_secret: data.client_secret,
        issuer: data.issuer,
        authorization_url: data.authorization_url,
        token_url: data.token_url,
        userinfo_url: data.userinfo_url,
        jwks_url: data.jwks_url,
        identity_provider: data.identity_provider
      }
    });
  }
}
exports.OIDC = OIDC;