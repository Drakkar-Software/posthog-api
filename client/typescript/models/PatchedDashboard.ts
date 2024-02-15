/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type PatchedDashboard = {
    readonly id?: number;
    name?: string | null;
    description?: string;
    pinned?: boolean;
    readonly created_at?: string;
    readonly created_by?: UserBasic;
    readonly is_shared?: boolean;
    deleted?: boolean;
    /**
     * * `default` - Default
     * * `template` - Template
     * * `duplicate` - Duplicate
     */
    readonly creation_mode?: PatchedDashboard.creation_mode;
    use_template?: string;
    use_dashboard?: number | null;
    delete_insights?: boolean;
    filters?: any;
    tags?: Array<any>;
    readonly tiles?: Array<Record<string, any>> | null;
    /**
     * * `21` - Everyone in the project can edit
     * * `37` - Only those invited to this dashboard can edit
     */
    restriction_level?: PatchedDashboard.restriction_level;
    readonly effective_restriction_level?: PatchedDashboard.effective_restriction_level;
    readonly effective_privilege_level?: PatchedDashboard.effective_privilege_level;
};
export namespace PatchedDashboard {
    /**
     * * `default` - Default
     * * `template` - Template
     * * `duplicate` - Duplicate
     */
    export enum creation_mode {
        DEFAULT = 'default',
        TEMPLATE = 'template',
        DUPLICATE = 'duplicate',
    }
    /**
     * * `21` - Everyone in the project can edit
     * * `37` - Only those invited to this dashboard can edit
     */
    export enum restriction_level {
        '_21' = 21,
        '_37' = 37,
    }
    export enum effective_restriction_level {
        '_21' = 21,
        '_37' = 37,
    }
    export enum effective_privilege_level {
        '_21' = 21,
        '_37' = 37,
    }
}

