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

import * as runtime from '../runtime';
import type { Annotation } from '../models';
import { AnnotationFromJSON, AnnotationToJSON } from '../models';

export interface CreateRequest {
  annotation: Array<Annotation>;
  requestId?: number;
  deduplicate?: boolean;
}

export interface GetRequest {
  annotationId: number;
}

export interface RemoveRequest {
  annotationId: number;
}

export interface UpdateRequest {
  annotationId: number;
  annotation: Annotation;
}

/**
 *
 */
export class AnnotationApi extends runtime.BaseAPI {
  /**
   * Create a new annotation
   */
  async createRaw(
    requestParameters: CreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Annotation>>> {
    if (requestParameters.annotation === null || requestParameters.annotation === undefined) {
      throw new runtime.RequiredError(
        'annotation',
        'Required parameter requestParameters.annotation was null or undefined when calling create.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters.requestId !== undefined && requestParameters.requestId !== null) {
      headerParameters['request_id'] = String(requestParameters.requestId);
    }

    if (requestParameters.deduplicate !== undefined && requestParameters.deduplicate !== null) {
      headerParameters['deduplicate'] = String(requestParameters.deduplicate);
    }

    const response = await this.request(
      {
        path: `/annotations/`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters.annotation.map(AnnotationToJSON),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AnnotationFromJSON));
  }

  /**
   * Create a new annotation
   */
  async create(
    annotation: Array<Annotation>,
    requestId?: number,
    deduplicate?: boolean,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Annotation>> {
    const response = await this.createRaw(
      { annotation: annotation, requestId: requestId, deduplicate: deduplicate },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get info of a specific annotation
   */
  async getRaw(
    requestParameters: GetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Annotation>> {
    if (requestParameters.annotationId === null || requestParameters.annotationId === undefined) {
      throw new runtime.RequiredError(
        'annotationId',
        'Required parameter requestParameters.annotationId was null or undefined when calling get.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/annotations/{annotation_id}`.replace(
          `{${'annotation_id'}}`,
          encodeURIComponent(String(requestParameters.annotationId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => AnnotationFromJSON(jsonValue));
  }

  /**
   * Get info of a specific annotation
   */
  async get(
    annotationId: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Annotation> {
    const response = await this.getRaw({ annotationId: annotationId }, initOverrides);
    return await response.value();
  }

  /**
   * Get all annotations, sort by last modified
   */
  async getAllRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Annotation>>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/annotations/`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AnnotationFromJSON));
  }

  /**
   * Get all annotations, sort by last modified
   */
  async getAll(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Annotation>> {
    const response = await this.getAllRaw(initOverrides);
    return await response.value();
  }

  /**
   * Delete an annotation
   * Delete an annotation
   */
  async removeRaw(
    requestParameters: RemoveRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.annotationId === null || requestParameters.annotationId === undefined) {
      throw new runtime.RequiredError(
        'annotationId',
        'Required parameter requestParameters.annotationId was null or undefined when calling remove.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/annotations/{annotation_id}`.replace(
          `{${'annotation_id'}}`,
          encodeURIComponent(String(requestParameters.annotationId)),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete an annotation
   * Delete an annotation
   */
  async remove(
    annotationId: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.removeRaw({ annotationId: annotationId }, initOverrides);
  }

  /**
   * Edit annotation. Provide key value pair to change one value only. Provide all changed values to change multiple. Empty string will be set. Leave values don\'t intend to change out of request body.
   * Edit annotation
   */
  async updateRaw(
    requestParameters: UpdateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Annotation>> {
    if (requestParameters.annotationId === null || requestParameters.annotationId === undefined) {
      throw new runtime.RequiredError(
        'annotationId',
        'Required parameter requestParameters.annotationId was null or undefined when calling update.',
      );
    }

    if (requestParameters.annotation === null || requestParameters.annotation === undefined) {
      throw new runtime.RequiredError(
        'annotation',
        'Required parameter requestParameters.annotation was null or undefined when calling update.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/annotations/{annotation_id}`.replace(
          `{${'annotation_id'}}`,
          encodeURIComponent(String(requestParameters.annotationId)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: AnnotationToJSON(requestParameters.annotation),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => AnnotationFromJSON(jsonValue));
  }

  /**
   * Edit annotation. Provide key value pair to change one value only. Provide all changed values to change multiple. Empty string will be set. Leave values don\'t intend to change out of request body.
   * Edit annotation
   */
  async update(
    annotationId: number,
    annotation: Annotation,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Annotation> {
    const response = await this.updateRaw(
      { annotationId: annotationId, annotation: annotation },
      initOverrides,
    );
    return await response.value();
  }
}
