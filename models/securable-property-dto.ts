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
 * @interface SecurablePropertyDTO
 */
export interface SecurablePropertyDTO {
    /**
     * The property ID.
     * @type {string}
     * @memberof SecurablePropertyDTO
     */
    'propertyId'?: string;
    /**
     * An identifiable property name to display in Visier, such as \"Job Pay Level\".
     * @type {string}
     * @memberof SecurablePropertyDTO
     */
    'displayName'?: string;
    /**
     * The property\'s analytic object ID.
     * @type {string}
     * @memberof SecurablePropertyDTO
     */
    'analyticObjectId'?: string;
    /**
     * If true, this property is the analytic object\'s primary key.
     * @type {boolean}
     * @memberof SecurablePropertyDTO
     */
    'isPrimaryKey'?: boolean;
    /**
     * The reference symbol name.
     * @type {string}
     * @memberof SecurablePropertyDTO
     */
    'referenceSymbolName'?: string;
}

