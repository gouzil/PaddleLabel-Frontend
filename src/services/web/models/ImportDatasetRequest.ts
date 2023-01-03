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
 * @interface ImportDatasetRequest
 */
export interface ImportDatasetRequest {
  /**
   *
   * @type {string}
   * @memberof ImportDatasetRequest
   */
  importDir?: string;
  /**
   *
   * @type {string}
   * @memberof ImportDatasetRequest
   */
  importFormat?: string | null;
}

/**
 * Check if a given object implements the ImportDatasetRequest interface.
 */
export function instanceOfImportDatasetRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ImportDatasetRequestFromJSON(json: any): ImportDatasetRequest {
  return ImportDatasetRequestFromJSONTyped(json, false);
}

export function ImportDatasetRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ImportDatasetRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    importDir: !exists(json, 'import_dir') ? undefined : json['import_dir'],
    importFormat: !exists(json, 'import_format') ? undefined : json['import_format'],
  };
}

export function ImportDatasetRequestToJSON(value?: ImportDatasetRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    import_dir: value.importDir,
    import_format: value.importFormat,
  };
}
