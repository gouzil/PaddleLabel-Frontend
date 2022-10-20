/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
 * Back end APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Label } from './Label';
import {
    LabelFromJSON,
    LabelFromJSONTyped,
    LabelToJSON,
} from './Label';

/**
 * 
 * @export
 * @interface Annotation
 */
export interface Annotation {
    /**
     * 
     * @type {number}
     * @memberof Annotation
     */
    annotationId?: number;
    /**
     * 
     * @type {number}
     * @memberof Annotation
     */
    frontendId?: number;
    /**
     * 
     * @type {number}
     * @memberof Annotation
     * @deprecated
     */
    taskId?: number;
    /**
     * 
     * @type {number}
     * @memberof Annotation
     */
    labelId?: number;
    /**
     * 
     * @type {Label}
     * @memberof Annotation
     */
    label?: Label;
    /**
     * 
     * @type {number}
     * @memberof Annotation
     * @deprecated
     */
    projectId?: number;
    /**
     * 
     * @type {number}
     * @memberof Annotation
     */
    dataId: number;
    /**
     * 
     * @type {string}
     * @memberof Annotation
     */
    result?: string;
    /**
     * 
     * @type {string}
     * @memberof Annotation
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Annotation
     */
    readonly created?: string;
    /**
     * 
     * @type {string}
     * @memberof Annotation
     */
    readonly modified?: string;
    /**
     * 推理出这个结果的模型的名字
     * @type {string}
     * @memberof Annotation
     */
    predictedBy?: string;
}

/**
 * Check if a given object implements the Annotation interface.
 */
export function instanceOfAnnotation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dataId" in value;

    return isInstance;
}

export function AnnotationFromJSON(json: any): Annotation {
    return AnnotationFromJSONTyped(json, false);
}

export function AnnotationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Annotation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'annotationId': !exists(json, 'annotation_id') ? undefined : json['annotation_id'],
        'frontendId': !exists(json, 'frontend_id') ? undefined : json['frontend_id'],
        'taskId': !exists(json, 'task_id') ? undefined : json['task_id'],
        'labelId': !exists(json, 'label_id') ? undefined : json['label_id'],
        'label': !exists(json, 'label') ? undefined : LabelFromJSON(json['label']),
        'projectId': !exists(json, 'project_id') ? undefined : json['project_id'],
        'dataId': json['data_id'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'modified': !exists(json, 'modified') ? undefined : json['modified'],
        'predictedBy': !exists(json, 'predicted_by') ? undefined : json['predicted_by'],
    };
}

export function AnnotationToJSON(value?: Annotation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'annotation_id': value.annotationId,
        'frontend_id': value.frontendId,
        'task_id': value.taskId,
        'label_id': value.labelId,
        'label': LabelToJSON(value.label),
        'project_id': value.projectId,
        'data_id': value.dataId,
        'result': value.result,
        'type': value.type,
        'predicted_by': value.predictedBy,
    };
}

