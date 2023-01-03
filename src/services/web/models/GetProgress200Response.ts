/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
 * Web backend APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.5.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface GetProgress200Response
 */
export interface GetProgress200Response {
  /**
   *
   * @type {number}
   * @memberof GetProgress200Response
   */
  finished?: number;
  /**
   *
   * @type {number}
   * @memberof GetProgress200Response
   */
  total?: number;
}

/**
 * Check if a given object implements the GetProgress200Response interface.
 */
export function instanceOfGetProgress200Response(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function GetProgress200ResponseFromJSON(json: any): GetProgress200Response {
  return GetProgress200ResponseFromJSONTyped(json, false);
}

export function GetProgress200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetProgress200Response {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    finished: !exists(json, 'finished') ? undefined : json['finished'],
    total: !exists(json, 'total') ? undefined : json['total'],
  };
}

export function GetProgress200ResponseToJSON(value?: GetProgress200Response | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    finished: value.finished,
    total: value.total,
  };
}
