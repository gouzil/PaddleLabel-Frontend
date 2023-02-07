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
import type { Annotation } from './Annotation';
import { AnnotationFromJSON, AnnotationFromJSONTyped, AnnotationToJSON } from './Annotation';
import type { Project } from './Project';
import { ProjectFromJSON, ProjectFromJSONTyped, ProjectToJSON } from './Project';

/**
 * An annotation task
 * @export
 * @interface Task
 */
export interface Task {
  /**
   *
   * @type {number}
   * @memberof Task
   */
  readonly taskId?: number;
  /**
   *
   * @type {number}
   * @memberof Task
   */
  projectId: number;
  /**
   *
   * @type {Array<string>}
   * @memberof Task
   */
  dataPaths?: Array<string>;
  /**
   *
   * @type {Array<Annotation>}
   * @memberof Task
   */
  annotations?: Array<Annotation>;
  /**
   *
   * @type {Project}
   * @memberof Task
   */
  project?: Project;
  /**
   *
   * @type {number}
   * @memberof Task
   */
  set?: number;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  readonly modified?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  readonly created?: string;
}

/**
 * Check if a given object implements the Task interface.
 */
export function instanceOfTask(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'projectId' in value;

  return isInstance;
}

export function TaskFromJSON(json: any): Task {
  return TaskFromJSONTyped(json, false);
}

export function TaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): Task {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    taskId: !exists(json, 'task_id') ? undefined : json['task_id'],
    projectId: json['project_id'],
    dataPaths: !exists(json, 'data_paths') ? undefined : json['data_paths'],
    annotations: !exists(json, 'annotations')
      ? undefined
      : (json['annotations'] as Array<any>).map(AnnotationFromJSON),
    project: !exists(json, 'project') ? undefined : ProjectFromJSON(json['project']),
    set: !exists(json, 'set') ? undefined : json['set'],
    modified: !exists(json, 'modified') ? undefined : json['modified'],
    created: !exists(json, 'created') ? undefined : json['created'],
  };
}

export function TaskToJSON(value?: Task | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    project_id: value.projectId,
    data_paths: value.dataPaths,
    annotations:
      value.annotations === undefined
        ? undefined
        : (value.annotations as Array<any>).map(AnnotationToJSON),
    project: ProjectToJSON(value.project),
    set: value.set,
  };
}
