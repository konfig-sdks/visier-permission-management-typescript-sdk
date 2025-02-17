/*
Visier Permission Management APIs

Visier APIs for managing permissions within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface MemberSelectionDTO
 */
export interface MemberSelectionDTO {
    /**
     * The member name path.
     * @type {Array<string>}
     * @memberof MemberSelectionDTO
     */
    'namePath'?: Array<string>;
    /**
     * The flag for excluding the member.
     * @type {boolean}
     * @memberof MemberSelectionDTO
     */
    'excluded'?: boolean;
}

