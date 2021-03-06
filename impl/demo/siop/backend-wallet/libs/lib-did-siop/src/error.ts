export enum DID_SIOP_ERRORS {
  NO_KID_PROVIDED = 'No kid provided.',
  NO_DIDDOCUMENT_KID = 'Kid could not be found on DID Document.',
  NO_ALG_SUPPORTED = 'Algorithm not supported.',
  NO_KEY_CURVE_SUPPORTED = 'Key Curve not supported.',
  NO_DIDAUTHN_SCOPE_INCLUDED = 'openid did_authn not included in scope.',
  KID_MISMATCH = 'Kid in DID Document does not match SIOP Request kid',
  DID_MISMATCH = 'DID does not match Issuer DID',
  NOT_IMPLEMENTED = 'Feature not implemented yet.',
  NO_HEX_PUBKEY = 'No Public Key in Hex format found.',
  PUBKEY_FORMAT_NOT_SUPPORTED = 'Public Key format not supported.',
  KEY_MALFORMED_THUMBPRINT = 'JWK malformed, should contain its thumbprint.',
  INVALID_PARAMS = 'Invalid Request parameters.',
  ISS_NOT_SELF_ISSUED = 'iss value Claim MUST be https://self-isued.me',
  AUD_MISMATCH = 'Audience Claim MUST contain the value of the redirect_uri in the Request',
  SIGNATURE_VALIDATION_ERROR = 'Error validating the SIOP JWT signature',
  SUB_CLAIM_ERROR = 'sub Claim value MUST be the base64url encoded representation of the thumbprint of the key in the sub_jwk',
  TOKEN_EXPIRED = 'Token expired',
  NONCE_MISMATCH = 'Nonce mismatch from the one sent in the Request',
  INVALID_SIOP_REQUEST = 'SIOP request is not valid',
  SIOP_REQUEST_RETRIEVE_ERROR = 'SIOP Request Object cannot be retrieved.'
}