/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryTiming } from './QueryTiming';
export type ActorsQueryResponse = {
    columns: Array<any>;
    hasMore?: (boolean | null);
    hogql: string;
    limit: number;
    missing_actors_count?: (number | null);
    offset: number;
    results: Array<Array<any>>;
    timings?: (Array<QueryTiming> | null);
    types: Array<string>;
};

