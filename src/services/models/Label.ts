/* tslint:disable */
/* eslint-disable */
/**
 * PP-Label API Spec
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
/**
 * 
 * @export
 * @interface Label
 */
export interface Label {
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    readonly labelId?: number;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    readonly created?: string;
    /**
     * 
     * @type {string}
     * @memberof Label
     */
    readonly modified?: string;
    /**
     * 
     * @type {number}
     * @memberof Label
     */
    superCategoryId?: number;
}

export function LabelFromJSON(json: any): Label {
    return LabelFromJSONTyped(json, false);
}

export function LabelFromJSONTyped(json: any, ignoreDiscriminator: boolean): Label {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labelId': !exists(json, 'label_id') ? undefined : json['label_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'projectId': !exists(json, 'project_id') ? undefined : json['project_id'],
        'name': json['name'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'created': !exists(json, 'created') ? undefined : json['created'],
        'modified': !exists(json, 'modified') ? undefined : json['modified'],
        'superCategoryId': !exists(json, 'super_category_id') ? undefined : json['super_category_id'],
    };
}

export function LabelToJSON(value?: Label | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'project_id': value.projectId,
        'name': value.name,
        'color': value.color,
        'comment': value.comment,
        'super_category_id': value.superCategoryId,
    };
}

