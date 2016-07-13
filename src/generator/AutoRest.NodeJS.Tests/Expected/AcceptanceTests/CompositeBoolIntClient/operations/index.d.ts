/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Bool
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the CompositeBoolInt.
 */
export interface Bool {

    /**
     * Get true Boolean value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getTrue(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;
    getTrue(callback: ServiceCallback<boolean>): void;

    /**
     * Set Boolean value true
     *
     * @param {boolean} boolBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putTrue(boolBody: boolean, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putTrue(boolBody: boolean, callback: ServiceCallback<void>): void;

    /**
     * Get false Boolean value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFalse(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;
    getFalse(callback: ServiceCallback<boolean>): void;

    /**
     * Set Boolean value false
     *
     * @param {boolean} boolBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putFalse(boolBody: boolean, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putFalse(boolBody: boolean, callback: ServiceCallback<void>): void;

    /**
     * Get null Boolean value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNull(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;
    getNull(callback: ServiceCallback<boolean>): void;

    /**
     * Get invalid Boolean value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalid(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<boolean>): void;
    getInvalid(callback: ServiceCallback<boolean>): void;
}

/**
 * @class
 * IntModel
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the CompositeBoolInt.
 */
export interface IntModel {

    /**
     * Get null Int value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNull(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getNull(callback: ServiceCallback<number>): void;

    /**
     * Get invalid Int value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalid(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getInvalid(callback: ServiceCallback<number>): void;

    /**
     * Get overflow Int32 value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getOverflowInt32(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getOverflowInt32(callback: ServiceCallback<number>): void;

    /**
     * Get underflow Int32 value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUnderflowInt32(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getUnderflowInt32(callback: ServiceCallback<number>): void;

    /**
     * Get overflow Int64 value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getOverflowInt64(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getOverflowInt64(callback: ServiceCallback<number>): void;

    /**
     * Get underflow Int64 value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUnderflowInt64(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<number>): void;
    getUnderflowInt64(callback: ServiceCallback<number>): void;

    /**
     * Put max int32 value
     *
     * @param {number} intBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putMax32(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putMax32(intBody: number, callback: ServiceCallback<void>): void;

    /**
     * Put max int64 value
     *
     * @param {number} intBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putMax64(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putMax64(intBody: number, callback: ServiceCallback<void>): void;

    /**
     * Put min int32 value
     *
     * @param {number} intBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putMin32(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putMin32(intBody: number, callback: ServiceCallback<void>): void;

    /**
     * Put min int64 value
     *
     * @param {number} intBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putMin64(intBody: number, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putMin64(intBody: number, callback: ServiceCallback<void>): void;

    /**
     * Get datetime encoded as Unix time value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getUnixTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getUnixTime(callback: ServiceCallback<Date>): void;

    /**
     * Put datetime encoded as Unix time
     *
     * @param {date} intBody
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    putUnixTimeDate(intBody: Date, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    putUnixTimeDate(intBody: Date, callback: ServiceCallback<void>): void;

    /**
     * Get invalid Unix time value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getInvalidUnixTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getInvalidUnixTime(callback: ServiceCallback<Date>): void;

    /**
     * Get null Unix time value
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getNullUnixTime(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<Date>): void;
    getNullUnixTime(callback: ServiceCallback<Date>): void;
}