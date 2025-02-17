/*
Visier Permission Management APIs

Visier APIs for managing permissions within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  PermissionManagementApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { VisierPermissionManagementCustom } from "./client-custom";

export class VisierPermissionManagement extends VisierPermissionManagementCustom {
  readonly permissionManagement: PermissionManagementApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.permissionManagement = new PermissionManagementApi(configuration);
  }

}
