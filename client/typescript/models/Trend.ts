/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterAction } from './FilterAction';
import type { FilterEvent } from './FilterEvent';
import type { Property } from './Property';
export type Trend = {
    /**
     * Events to filter on. One of `events` or `actions` is required.
     */
    events?: Array<FilterEvent>;
    /**
     * Actions to filter on. One of `events` or `actions` is required.
     */
    actions?: Array<FilterAction>;
    /**
     * Filter events by event property, person property, cohort, groups and more.
     */
    properties?: Property;
    /**
     * Whether to filter out internal and test accounts. See "project settings" in your PostHog account for the filters.
     */
    filter_test_accounts?: boolean;
    /**
     * What date to filter the results from. Can either be a date `2021-01-01`, or a relative date, like `-7d` for last seven days, `-1m` for last month, `mStart` for start of the month or `yStart` for the start of the year.
     */
    date_from?: string;
    /**
     * What date to filter the results to. Can either be a date `2021-01-01`, or a relative date, like `-7d` for last seven days, `-1m` for last month, `mStart` for start of the month or `yStart` for the start of the year.
     */
    date_to?: string;
    /**
     * A property or cohort to break down on. You can select the type of the property with breakdown_type.
     * - `event` (default): a property key
     * - `person`: a person property key
     * - `cohort`: an array of cohort IDs (ie `[9581,5812]`)
     */
    breakdown?: string;
    /**
     * Type of property to break down on.
     *
     * * `event` - event
     * * `person` - person
     * * `cohort` - cohort
     * * `group` - group
     * * `session` - session
     * * `hogql` - hogql
     */
    breakdown_type?: Trend.breakdown_type;
    /**
     * How to display the data. Will change how the data is returned.
     *
     * * `ActionsLineGraph` - ActionsLineGraph
     * * `ActionsLineGraphCumulative` - ActionsLineGraphCumulative
     * * `ActionsTable` - ActionsTable
     * * `ActionsPie` - ActionsPie
     * * `ActionsBar` - ActionsBar
     * * `ActionsBarValue` - ActionsBarValue
     * * `WorldMap` - WorldMap
     * * `BoldNumber` - BoldNumber
     */
    display?: Trend.display;
    /**
     * Combine the result of events or actions into a single number. For example `A + B` or `(A-B)/B`. The letters correspond to the order of the `events` or `actions` lists.
     */
    formula?: string;
    /**
     * For each returned result show the current period and the previous period. The result will contain `compare:true` and a `compare_label` with either `current` or `previous`.
     */
    compare?: boolean;
};
export namespace Trend {
    /**
     * Type of property to break down on.
     *
     * * `event` - event
     * * `person` - person
     * * `cohort` - cohort
     * * `group` - group
     * * `session` - session
     * * `hogql` - hogql
     */
    export enum breakdown_type {
        EVENT = 'event',
        PERSON = 'person',
        COHORT = 'cohort',
        GROUP = 'group',
        SESSION = 'session',
        HOGQL = 'hogql',
    }
    /**
     * How to display the data. Will change how the data is returned.
     *
     * * `ActionsLineGraph` - ActionsLineGraph
     * * `ActionsLineGraphCumulative` - ActionsLineGraphCumulative
     * * `ActionsTable` - ActionsTable
     * * `ActionsPie` - ActionsPie
     * * `ActionsBar` - ActionsBar
     * * `ActionsBarValue` - ActionsBarValue
     * * `WorldMap` - WorldMap
     * * `BoldNumber` - BoldNumber
     */
    export enum display {
        ACTIONS_LINE_GRAPH = 'ActionsLineGraph',
        ACTIONS_LINE_GRAPH_CUMULATIVE = 'ActionsLineGraphCumulative',
        ACTIONS_TABLE = 'ActionsTable',
        ACTIONS_PIE = 'ActionsPie',
        ACTIONS_BAR = 'ActionsBar',
        ACTIONS_BAR_VALUE = 'ActionsBarValue',
        WORLD_MAP = 'WorldMap',
        BOLD_NUMBER = 'BoldNumber',
    }
}

