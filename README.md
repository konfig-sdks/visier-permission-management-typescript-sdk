<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for managing permissions within an organization

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visierpermissionmanagement.permissionManagement.createPermissions`](#visierpermissionmanagementpermissionmanagementcreatepermissions)
  * [`visierpermissionmanagement.permissionManagement.deletePermissions`](#visierpermissionmanagementpermissionmanagementdeletepermissions)
  * [`visierpermissionmanagement.permissionManagement.getCapabilities`](#visierpermissionmanagementpermissionmanagementgetcapabilities)
  * [`visierpermissionmanagement.permissionManagement.getCapability`](#visierpermissionmanagementpermissionmanagementgetcapability)
  * [`visierpermissionmanagement.permissionManagement.getContentPackage`](#visierpermissionmanagementpermissionmanagementgetcontentpackage)
  * [`visierpermissionmanagement.permissionManagement.getContentPackages`](#visierpermissionmanagementpermissionmanagementgetcontentpackages)
  * [`visierpermissionmanagement.permissionManagement.getDataSecurityObjects`](#visierpermissionmanagementpermissionmanagementgetdatasecurityobjects)
  * [`visierpermissionmanagement.permissionManagement.getPermission`](#visierpermissionmanagementpermissionmanagementgetpermission)
  * [`visierpermissionmanagement.permissionManagement.getPermissions`](#visierpermissionmanagementpermissionmanagementgetpermissions)
  * [`visierpermissionmanagement.permissionManagement.updatePermissions`](#visierpermissionmanagementpermissionmanagementupdatepermissions)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=PermissionManagement&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierPermissionManagement } from "visier-permission-management-typescript-sdk";

const visierpermissionmanagement = new VisierPermissionManagement({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const createPermissionsResponse =
  await visierpermissionmanagement.permissionManagement.createPermissions({});

console.log(createPermissionsResponse);
```

## Reference<a id="reference"></a>


### `visierpermissionmanagement.permissionManagement.createPermissions`<a id="visierpermissionmanagementpermissionmanagementcreatepermissions"></a>

This API allows you to create new permissions. Administrating tenant users can specify the tenant in which to add these permissions.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPermissionsResponse =
  await visierpermissionmanagement.permissionManagement.createPermissions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### permissions: [`PermissionDTO`](./models/permission-dto.ts)[]<a id="permissions-permissiondtomodelspermission-dtots"></a>

The list of permissions that will be created or updated

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to create permissions in.

#### 🔄 Return<a id="🔄-return"></a>

[PermissionBulkOperationResponseDTO](./models/permission-bulk-operation-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.deletePermissions`<a id="visierpermissionmanagementpermissionmanagementdeletepermissions"></a>

This API allows you to delete existing permissions.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePermissionsResponse =
  await visierpermissionmanagement.permissionManagement.deletePermissions({
    requestBody: "body_example",
    tenantCode: "string_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to delete permissions from.

##### requestBody: `string`<a id="requestbody-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PermissionBulkOperationResponseDTO](./models/permission-bulk-operation-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.getCapabilities`<a id="visierpermissionmanagementpermissionmanagementgetcapabilities"></a>

This API allows you to retrieve all the permission capabilities in your tenant.
 You can use the returned capabilities in other API calls when creating or updating permissions to assign the capability to the permission.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCapabilitiesResponse =
  await visierpermissionmanagement.permissionManagement.getCapabilities({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve the capabilities from.

#### 🔄 Return<a id="🔄-return"></a>

[GetCapabilitiesAPIResponseDTO](./models/get-capabilities-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/capabilities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.getCapability`<a id="visierpermissionmanagementpermissionmanagementgetcapability"></a>

This API allows you to retrieve the details of a specific capability.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCapabilityResponse =
  await visierpermissionmanagement.permissionManagement.getCapability({
    capabilityId: "capabilityId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### capabilityId: `string`<a id="capabilityid-string"></a>

The unique identifier of the capability you want to retrieve.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve a capability from.

#### 🔄 Return<a id="🔄-return"></a>

[CapabilityDTO](./models/capability-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/capabilities/{capabilityId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.getContentPackage`<a id="visierpermissionmanagementpermissionmanagementgetcontentpackage"></a>

This API allows you to retrieve the details of a specific content package.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentPackageResponse =
  await visierpermissionmanagement.permissionManagement.getContentPackage({
    contentPackageId: "contentPackageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contentPackageId: `string`<a id="contentpackageid-string"></a>

The unique identifier of the content package you want to retrieve.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve a content package from.

#### 🔄 Return<a id="🔄-return"></a>

[ContentPackageDTO](./models/content-package-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/content-packages/{contentPackageId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.getContentPackages`<a id="visierpermissionmanagementpermissionmanagementgetcontentpackages"></a>

This API allows you to retrieve the list of available content packages.
 You can use the returned content packages in other API calls when creating or updating permissions to add the content package to the permission.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getContentPackagesResponse =
  await visierpermissionmanagement.permissionManagement.getContentPackages({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve the content packages from.

##### searchString: `string`<a id="searchstring-string"></a>

Optional search string to return only content packages whose display name or description contains that search string.  If searchString is empty or not provided, the response returns a list of all content packages.

#### 🔄 Return<a id="🔄-return"></a>

[GetContentPackagesAPIResponseDTO](./models/get-content-packages-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/content-packages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.getDataSecurityObjects`<a id="visierpermissionmanagementpermissionmanagementgetdatasecurityobjects"></a>

This API allows you to retrieve the list of available data security objects.
 Data security objects are analytic objects and their related objects that are available to define
 permissions’ data security profiles.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDataSecurityObjectsResponse =
  await visierpermissionmanagement.permissionManagement.getDataSecurityObjects(
    {}
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`[]<a id="id-string"></a>

The unique identifiers of the data security objects (analytic objects) to retrieve.  Default is all data security objects.

##### includeDetails: `boolean`<a id="includedetails-boolean"></a>

If true, the response includes the analytic objects (display name, ID, and object type), related objects,  securable properties, and securable dimensions. If false, the response only includes analytic objects  (display name, ID, and object type). Default is false.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve data security objects from.

#### 🔄 Return<a id="🔄-return"></a>

[GetDataSecurityObjectsAPIResponseDTO](./models/get-data-security-objects-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/data-security-objects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.getPermission`<a id="visierpermissionmanagementpermissionmanagementgetpermission"></a>

This API allows you to retrieve the details for a specified permission.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPermissionResponse =
  await visierpermissionmanagement.permissionManagement.getPermission({
    permissionId: "permissionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### permissionId: `string`<a id="permissionid-string"></a>

The unique identifier of the permission you want to retrieve.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve a permission from.

#### 🔄 Return<a id="🔄-return"></a>

[PermissionDTO](./models/permission-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions/{permissionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.getPermissions`<a id="visierpermissionmanagementpermissionmanagementgetpermissions"></a>

This API allows you to retrieve the full list of user permissions in your tenant.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPermissionsResponse =
  await visierpermissionmanagement.permissionManagement.getPermissions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve the permissions from.

##### includeDetails: `boolean`<a id="includedetails-boolean"></a>

If true, returns the permission\'s details. If false, only returns the permissions\' ID, display name,  and description. Default is false.

#### 🔄 Return<a id="🔄-return"></a>

[GetPermissionsAPIResponseDTO](./models/get-permissions-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierpermissionmanagement.permissionManagement.updatePermissions`<a id="visierpermissionmanagementpermissionmanagementupdatepermissions"></a>

This API allows you to update existing permissions.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePermissionsResponse =
  await visierpermissionmanagement.permissionManagement.updatePermissions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### permissions: [`PermissionDTO`](./models/permission-dto.ts)[]<a id="permissions-permissiondtomodelspermission-dtots"></a>

The list of permissions that will be created or updated

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to update permissions in.

#### 🔄 Return<a id="🔄-return"></a>

[PermissionBulkOperationResponseDTO](./models/permission-bulk-operation-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
