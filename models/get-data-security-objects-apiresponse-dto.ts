/*
Visier Permission Management APIs

Visier APIs for managing permissions within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AnalyticObjectDTO } from './analytic-object-dto';

/**
 * 
 * @export
 * @interface GetDataSecurityObjectsAPIResponseDTO
 */
export interface GetDataSecurityObjectsAPIResponseDTO {
    /**
     * A list of analytic objects and their related objects that are available to define data access to.
     * @type {Array<AnalyticObjectDTO>}
     * @memberof GetDataSecurityObjectsAPIResponseDTO
     */
    'analyticObjects'?: Array<AnalyticObjectDTO>;
}

