/*
Visier Permission Management APIs

Visier APIs for managing permissions within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DynamicPropertyMappingDTO } from './dynamic-property-mapping-dto';

/**
 * 
 * @export
 * @interface DynamicDimensionFilterDTO
 */
export interface DynamicDimensionFilterDTO {
    /**
     * The dimension ID associated with the dynamic dimension filter.
     * @type {string}
     * @memberof DynamicDimensionFilterDTO
     */
    'dimensionId'?: string;
    /**
     * The subject reference path.
     * @type {Array<string>}
     * @memberof DynamicDimensionFilterDTO
     */
    'subjectReferencePath'?: Array<string>;
    /**
     * A list of objects representing the dynamic property mappings associated with the dynamic dimension filter.
     * @type {Array<DynamicPropertyMappingDTO>}
     * @memberof DynamicDimensionFilterDTO
     */
    'dynamicPropertyMappings'?: Array<DynamicPropertyMappingDTO>;
}

