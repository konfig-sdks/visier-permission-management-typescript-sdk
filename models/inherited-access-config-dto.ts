/*
Visier Permission Management APIs

Visier APIs for managing permissions within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MemberFilterConfigDTO } from './member-filter-config-dto';

/**
 * 
 * @export
 * @interface InheritedAccessConfigDTO
 */
export interface InheritedAccessConfigDTO {
    /**
     * The analytic object ID associated with the inherited access configuration.
     * @type {string}
     * @memberof InheritedAccessConfigDTO
     */
    'analyticObjectId'?: string;
    /**
     * The flag for removing access to the inherited analytic object.
     * @type {boolean}
     * @memberof InheritedAccessConfigDTO
     */
    'removeAccess'?: boolean;
    /**
     * The member filter configurations that defines the population in the inherited analytic object.
     * @type {Array<MemberFilterConfigDTO>}
     * @memberof InheritedAccessConfigDTO
     */
    'memberFilterConfigs'?: Array<MemberFilterConfigDTO>;
}

