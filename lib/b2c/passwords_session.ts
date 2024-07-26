// !!!
// WARNING: This file is autogenerated
// Only modify code within MANUAL() sections
// or your changes may be overwritten later!
// !!!

import {} from "../shared/method_options";
import { fetchConfig } from "../shared";
import { request } from "../shared";
import { Session } from "./sessions";
import { User } from "./users";

// Request type for `passwords.sessions.reset`.
export interface PasswordsSessionResetRequest {
  /**
   * The password for the user. Any UTF8 character is allowed, e.g. spaces, emojis, non-English characers,
   * etc.
   */
  password: string;
  // The `session_token` associated with a User's existing Session.
  session_token?: string;
  // The `session_jwt` associated with a User's existing Session.
  session_jwt?: string;
  /**
   * Set the session lifetime to be this many minutes from now. This will start a new session if one doesn't
   * already exist,
   *   returning both an opaque `session_token` and `session_jwt` for this session. Remember that the
   * `session_jwt` will have a fixed lifetime of
   *   five minutes regardless of the underlying session duration, and will need to be refreshed over time.
   *
   *   This value must be a minimum of 5 and a maximum of 527040 minutes (366 days).
   *
   *   If a `session_token` or `session_jwt` is provided then a successful authentication will continue to
   * extend the session this many minutes.
   *
   *   If the `session_duration_minutes` parameter is not specified, a Stytch session will not be created.
   */
  session_duration_minutes?: number;
  /**
   * Add a custom claims map to the Session being authenticated. Claims are only created if a Session is
   * initialized by providing a value in `session_duration_minutes`. Claims will be included on the Session
   * object and in the JWT. To update a key in an existing Session, supply a new value. To delete a key,
   * supply a null value.
   *
   *   Custom claims made with reserved claims ("iss", "sub", "aud", "exp", "nbf", "iat", "jti") will be
   * ignored. Total custom claims size cannot exceed four kilobytes.
   */
  session_custom_claims?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

// Response type for `passwords.sessions.reset`.
export interface PasswordsSessionResetResponse {
  /**
   * Globally unique UUID that is returned with every API call. This value is important to log for debugging
   * purposes; we may ask for this value to help identify a specific API call when helping you debug an issue.
   */
  request_id: string;
  // The unique ID of the affected User.
  user_id: string;
  /**
   * The `user` object affected by this API call. See the
   * [Get user endpoint](https://stytch.com/docs/api/get-user) for complete response field details.
   */
  user: User;
  // A secret token for a given Stytch Session.
  session_token: string;
  // The JSON Web Token (JWT) for a given Stytch Session.
  session_jwt: string;
  /**
   * The HTTP status code of the response. Stytch follows standard HTTP response status code patterns, e.g.
   * 2XX values equate to success, 3XX values are redirects, 4XX are client errors, and 5XX are server errors.
   */
  status_code: number;
  /**
   * If you initiate a Session, by including `session_duration_minutes` in your authenticate call, you'll
   * receive a full Session object in the response.
   *
   *   See [GET sessions](https://stytch.com/docs/api/session-get) for complete response fields.
   *
   */
  session?: Session;
}

export class Sessions {
  private fetchConfig: fetchConfig;

  constructor(fetchConfig: fetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  /**
   * Reset the user’s password using their existing session. The endpoint will error if the session does not
   * have a password, email magic link, or email OTP authentication factor that has been issued within the
   * last 5 minutes. This endpoint requires either a `session_jwt` or `session_token` be included in the
   * request.
   *
   * Note that a successful password reset via an existing session will revoke all active sessions for the
   * `user_id`, except for the one used during the reset flow.
   * @param data {@link PasswordsSessionResetRequest}
   * @returns {@link PasswordsSessionResetResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  reset(
    data: PasswordsSessionResetRequest
  ): Promise<PasswordsSessionResetResponse> {
    const headers: Record<string, string> = {};
    return request<PasswordsSessionResetResponse>(this.fetchConfig, {
      method: "POST",
      url: `/v1/passwords/session/reset`,
      headers,
      data,
    });
  }
}
