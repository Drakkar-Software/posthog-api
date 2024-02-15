/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportedAsset } from '../models/ExportedAsset';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExportsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExportedAsset
     * @throws ApiError
     */
    public exportsCreate(
        projectId: string,
        requestBody: ExportedAsset,
    ): CancelablePromise<ExportedAsset> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/exports/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this exported asset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExportedAsset
     * @throws ApiError
     */
    public exportsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExportedAsset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this exported asset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExportedAsset
     * @throws ApiError
     */
    public exportsContentRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExportedAsset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/exports/{id}/content/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
