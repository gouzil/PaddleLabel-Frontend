/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
 * Web backend APIs for PaddleLabel
 *
 * The version of the OpenAPI document: 1.0.2
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
 * @interface ProjectOtherSettingsModelSettingsValue
 */
export interface ProjectOtherSettingsModelSettingsValue {
  /**
   *
   * @type {string}
   * @memberof ProjectOtherSettingsModelSettingsValue
   */
  modelFilePath?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectOtherSettingsModelSettingsValue
   */
  paramFilePath?: string;
}

/**
 * Check if a given object implements the ProjectOtherSettingsModelSettingsValue interface.
 */
export function instanceOfProjectOtherSettingsModelSettingsValue(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ProjectOtherSettingsModelSettingsValueFromJSON(
  json: any,
): ProjectOtherSettingsModelSettingsValue {
  return ProjectOtherSettingsModelSettingsValueFromJSONTyped(json, false);
}

export function ProjectOtherSettingsModelSettingsValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProjectOtherSettingsModelSettingsValue {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    modelFilePath: !exists(json, 'modelFilePath') ? undefined : json['modelFilePath'],
    paramFilePath: !exists(json, 'paramFilePath') ? undefined : json['paramFilePath'],
  };
}

export function ProjectOtherSettingsModelSettingsValueToJSON(
  value?: ProjectOtherSettingsModelSettingsValue | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    modelFilePath: value.modelFilePath,
    paramFilePath: value.paramFilePath,
  };
}
