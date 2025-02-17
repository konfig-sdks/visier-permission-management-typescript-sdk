/*
Visier Permission Management APIs

Visier APIs for managing permissions within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MemberSelectionDTO } from './member-selection-dto';

/**
 * 
 * @export
 * @interface StaticDimensionFilterDTO
 */
export interface StaticDimensionFilterDTO {
    /**
     * The dimension ID associated with the static dimension filter.
     * @type {string}
     * @memberof StaticDimensionFilterDTO
     */
    'dimensionId'?: string;
    /**
     * The subject reference path.
     * @type {Array<string>}
     * @memberof StaticDimensionFilterDTO
     */
    'subjectReferencePath'?: Array<string>;
    /**
     * A list of objects representing the member selections associated with the static dimension filter.
     * @type {Array<MemberSelectionDTO>}
     * @memberof StaticDimensionFilterDTO
     */
    'memberSelections'?: Array<MemberSelectionDTO>;
}

