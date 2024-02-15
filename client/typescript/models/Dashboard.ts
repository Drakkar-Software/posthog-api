/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type Dashboard = {
    readonly id: number;
    name?: string | null;
    description?: string;
    pinned?: boolean;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly is_shared: boolean;
    deleted?: boolean;
    /**
     * * `default` - Default
     * * `template` - Template
     * * `duplicate` - Duplicate
     */
    readonly creation_mode: Dashboard.creation_mode;
    use_template?: string;
    use_dashboard?: number | null;
    delete_insights?: boolean;
    filters?: any;
    tags?: Array<any>;
    readonly tiles: Array<Record<string, any>> | null;
    /**
     * * `21` - Everyone in the project can edit
     * * `37` - Only those invited to this dashboard can edit
     */
    restriction_level?: Dashboard.restriction_level;
    readonly effective_restriction_level: Dashboard.effective_restriction_level;
    readonly effective_privilege_level: Dashboard.effective_privilege_level;
};
export namespace Dashboard {
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

