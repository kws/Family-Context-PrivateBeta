/**
 * Family Context
 * This is the API definition for Family Context
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The SourceData model module.
* @module model/SourceData
* @version 0.0.1
*/
export default class SourceData {
    /**
    * Constructs a new <code>SourceData</code>.
    * @alias module:model/SourceData
    * @class
    */

    constructor() {
                
    }

    /**
    * Constructs a <code>SourceData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SourceData} obj Optional instance to populate.
    * @return {module:model/SourceData} The populated <code>SourceData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SourceData();
                                    if (data.hasOwnProperty('coverageStartDate')) {
                obj['coverageStartDate'] = ApiClient.convertToType(data['coverageStartDate'], 'Date');
            }
            if (data.hasOwnProperty('coverageEndDate')) {
                obj['coverageEndDate'] = ApiClient.convertToType(data['coverageEndDate'], 'Date');
            }
            if (data.hasOwnProperty('coverageGeographicArea')) {
                obj['coverageGeographicArea'] = ApiClient.convertToType(data['coverageGeographicArea'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Date} coverageStartDate
    */
    coverageStartDate = undefined;
    /**
    * @member {Date} coverageEndDate
    */
    coverageEndDate = undefined;
    /**
    * @member {String} coverageGeographicArea
    */
    coverageGeographicArea = undefined;




}
