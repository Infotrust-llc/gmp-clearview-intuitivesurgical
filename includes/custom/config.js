/*
	This file is part of "GA4 Dataform Package".
	Copyright (C) 2023-2024 Superform Labs <support@ga4dataform.com>
	Artem Korneev, Jules Stuifbergen,
	Johan van de Werken, Krisztián Korpa,
	Simon Breton

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, version 3 of the License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License in the LICENSE.txt file for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

// do not remove this line
const { helpers } = require("../core/helpers");
const lowerSQL = helpers.lowerSQL;

/*
    ga4dataform runs the core model with SQL that can be tweaked with
    configuration settings in this file.

    Below, you will find a sample config file that you can tweak to
    your likings.

    See the documentation for all details.

    There are more configuration settings than in this sample file.
    See core/config.js for all config parameters
*/

// config object should be a valid javascript object


const customConfig = {
  // on a new or full build, this start date will be picked

  GA4_START_DATE: "2025-07-01",

  // custom definitions
  // a very complete list of all recommended and standard event parameters is
  // included in the `event_params` column.
  // If you have custom definitions, add them here and they will appear in 
  // the `events_params_custom` column.

  // all custom_ arrays should be in the form:
  // 
  // { name: "paramname", type: "TYPE", renameTo: "outputcolumnname" }
  //
  // "paramname" will be extracted from the data (event param / user property / item custom dim / url parameter)
  // TYPE will be the column type.
  // - "int" -> look for int_value, store as INT
  // - "string" -> look for all values, store as STRING
  // - "decimal" -> look for all numerical values, store as FLOAT
  // options:
  // - "renameTo" -> name the output column to this name. Default: "paramname" will be used
  // cleaningMethod: lowerSQL -> transform the output (of strings) to lower case

  CUSTOM_EVENT_PARAMS_TO_EXCLUDE: ['batch_event_index','batch_ordering_id','batch_page_id'], // by default,  all custom arams are unnested except thse listed here
  // event dimensions and metrics
  // example:
  // CUSTOM_EVENT_PARAMS_ARRAY: [
  //    { name: "event_value", type: "decimal" },
  //    { name: "event_value", type: "string", renameTo: "event_value_string" }
  // ],
  CUSTOM_EVENT_PARAMS_ARRAY: [
  // example set: this will populate 5 fields in the `event_params_custom` column in the `ga4_events` table
  // known limitation: the output column names must be valid. use letters and underscores to be safe 
{
  "name": "source",
  "type": "string"
}, {
  "name": "ga_session_id",
  "type": "int"
}, {
  "name": "term",
  "type": "string"
}, {
  "name": "internal_link_click_count",
  "type": "int"
}, {
  "name": "unique_search_term",
  "type": "int"
}, {
  "name": "video_title",
  "type": "string"
}, {
  "name": "provider_search",
  "type": "string"
}, {
  "name": "provider_distance",
  "type": "int"
}, {
  "name": "provider_search_result_selected_count",
  "type": "int"
}, {
  "name": "provider_search_result",
  "type": "string"
}, {
  "name": "link_classes",
  "type": "string"
}, {
  "name": "form_name",
  "type": "string"
}, {
  "name": "current_page",
  "type": "int"
}, {
  "name": "ga_session_number",
  "type": "int"
}, {
  "name": "link_type",
  "type": "string"
}, {
  "name": "link_format",
  "type": "string"
}, {
  "name": "video_provider",
  "type": "string"
}, {
  "name": "carousel_action",
  "type": "string"
}, {
  "name": "provider_location",
  "type": "int"
}, {
  "name": "file_download_count",
  "type": "int"
}, {
  "name": "outbound_mailto_link_click_count",
  "type": "int"
}, {
  "name": "navigation_direction",
  "type": "string"
}, {
  "name": "content_language",
  "type": "string"
}, {
  "name": "batch_page_id",
  "type": "int"
}, {
  "name": "timestamp",
  "type": "string"
}, {
  "name": "gtm_tag_name",
  "type": "string"
}, {
  "name": "gtm_container_version",
  "type": "int"
}, {
  "name": "session_engaged",
  "type": "int"
}, {
  "name": "sort_by",
  "type": "string"
}, {
  "name": "search_result_selected_count",
  "type": "int"
}, {
  "name": "cta_type",
  "type": "int"
}, {
  "name": "video_complete_count",
  "type": "int"
}, {
  "name": "video_watch_time",
  "type": "int"
}, {
  "name": "robotic_program_procedure",
  "type": "string"
}, {
  "name": "gclsrc",
  "type": "string"
}, {
  "name": "external_referrer",
  "type": "string"
}, {
  "name": "percent_scrolled",
  "type": "int"
}, {
  "name": "video_play_type",
  "type": "string"
}, {
  "name": "video_current_time",
  "type": "int"
}, {
  "name": "outbound_tel_link_click_count",
  "type": "int"
}, {
  "name": "file_name",
  "type": "string"
}, {
  "name": "outbound_general_link_click_count",
  "type": "int"
}, {
  "name": "outbound_social_link_click_count",
  "type": "int"
}, {
  "name": "search_filter",
  "type": "string"
}, {
  "name": "debug_mode",
  "type": "int"
}, {
  "name": "client_id_2",
  "type": "string"
}, {
  "name": "header",
  "type": "int"
}, {
  "name": "ignore_referrer",
  "type": "string"
}, {
  "name": "click_url",
  "type": "string"
}, {
  "name": "num_search_results",
  "type": "int"
}, {
  "name": "video_url",
  "type": "int"
}, {
  "name": "outbound",
  "type": "string"
}, {
  "name": "gad_campaignid",
  "type": "string"
}, {
  "name": "search_term",
  "type": "decimal"
}, {
  "name": "outbound_link_type",
  "type": "string"
}, {
  "name": "link_text",
  "type": "string"
}, {
  "name": "link_url",
  "type": "string"
}, {
  "name": "gtm_container_id",
  "type": "string"
}, {
  "name": "milestone",
  "type": "int"
}, {
  "name": "gclid",
  "type": "string"
}, {
  "name": "search_result",
  "type": "string"
}, {
  "name": "video_duration",
  "type": "int"
}, {
  "name": "video_percent",
  "type": "int"
}, {
  "name": "campaign_id",
  "type": "string"
}, {
  "name": "filter_specialty",
  "type": "string"
}, {
  "name": "batch_ordering_id",
  "type": "int"
}, {
  "name": "previous_url",
  "type": "string"
}, {
  "name": "firebase_conversion",
  "type": "int"
}, {
  "name": "user_agent_string",
  "type": "string"
}, {
  "name": "entrances",
  "type": "int"
}, {
  "name": "engagement_time_msec",
  "type": "int"
}, {
  "name": "search_type",
  "type": "string"
}, {
  "name": "video_start_count",
  "type": "int"
}, {
  "name": "video_impression_count",
  "type": "int"
}, {
  "name": "robotic_program_surgeon_selected_count",
  "type": "int"
}, {
  "name": "form_submission_complete_count",
  "type": "int"
}, {
  "name": "form_submission_attempt_count",
  "type": "int"
},  {
  "name": "form_submission_failure_count",
  "type": "int"
},{
  "name": "link_id",
  "type": "string"
}, {
  "name": "medium",
  "type": "string"
}, {
  "name": "page_title",
  "type": "string"
}, {
  "name": "campaign",
  "type": "string"
}, {
  "name": "location",
  "type": "string"
}, {
  "name": "click_text",
  "type": "string"
}, {
  "name": "traffic_type",
  "type": "string"
}, {
  "name": "search_count",
  "type": "int"
}, {
  "name": "content",
  "type": "string"
}, {
  "name": "provider_procedure",
  "type": "string"
}, {
  "name": "link_domain",
  "type": "string"
}, {
  "name": "filter_product",
  "type": "string"
}, {
  "name": "robotic_program_surgeon",
  "type": "string"
}, {
  "name": "page_location",
  "type": "string"
}, {
  "name": "engaged_session_event",
  "type": "int"
}, {
  "name": "page_referrer",
  "type": "string"
}, {
  "name": "gad_source",
  "type": "string"
}, {
  "name": "cta_text",
  "type": "string"
}, {
  "name": "file_extension",
  "type": "string"
}, {
  "name": "cta_url",
  "type": "string"
}, {
  "name": "previous_page",
  "type": "int"
}, {
  "name": "filter_page_types",
  "type": "string"
}],

  // user properties
  // example:
  // CUSTOM_USER_PROPERTIES_ARRAY: [
  //    { name: "lifetime_value",   type: "decimal" }
  // ],
CUSTOM_USER_PROPERTIES_ARRAY: [
    {  type: "string",  name: "customer_id" },   
    {  type: "string", name: "login_status" }
],

 CUSTOM_ITEM_PARAMS_TO_EXCLUDE: [], // by default,  all custom arams are unnested except thse listed here
  // item custom dimensions and metrics
  // these will appear in `items.item_params_custom.*`
  // example:
  // CUSTOM_ITEM_PARAMS_ARRAY: [
  //    { name: "stock_status", type: "string" }
  // ]
  CUSTOM_ITEM_PARAMS_ARRAY: [],

  // URL parameters to extract to own column
  // (note: all standard utm params are already extracted to `url_params`)
  // custom url params will appear in `url_params_custom`
  // (this does NOT support the "type" key: only strings are supported)

  // Examples based on internal search engine params:
  //   CUSTOM_URL_PARAMS_ARRAY: [
  //      { name: "q", cleaningMethod: lowerSQL },
  //      { name: "s", cleaningMethod: lowerSQL },
  //      { name: "search",cleaningMethod: lowerSQL }
  //   ],


  CUSTOM_URL_PARAMS_ARRAY: [    
  { name: "location", cleaningMethod: lowerSQL }, 
  { name: "procedure", cleaningMethod: lowerSQL },
  { name: "search", cleaningMethod: lowerSQL }
  ],

  // filters
  // array: list the event names you want to exclude from the events table 
  EVENTS_TO_EXCLUDE: [],
  // arrays: list the hostnames you want to exclude (or include) from the events table
  // for including/excluding NULL values, use the empty string ( "" )
  HOSTNAME_EXCLUDE: [],
  HOSTNAME_INCLUDE_ONLY: [],

// Key events to include as metrics. up to 5
  KEY_EVENTS_ARRAY: ["cta_click","form_submission_complete","internal_link_click","page_view","provider_locator_cta_click","provider_locator_get_directions_click",
                  "provider_locator_mailto_click", "provider_locator_search", "provider_locator_search_result_selected", "provider_locator_tel_click", "video_complete", "video_start"],

  // Set this to true to enable "Organic AI" (and possible other future channels that
  // are not compatible with GA4)
  EXTRA_CHANNEL_GROUPS: true,

  // attribution
  // if a visitors lands on your site without a source, we look back to
  // find a previous session of this user with a source. How many days?
  LAST_NON_DIRECT_LOOKBACK_DAYS: 90,

  // by default, we leave duplicate transaction_ids alone, but you can deduplicate here
  // note: setting this to true will still keep all transactions with NULL transaction_id
  TRANSACTIONS_DEDUPE: true,

  // we keep a running count for transactions, based on an identifier. Defaults to "user_pseudo_id"
  // if you have an other one, you can change it here (e.g. "user_id" - make sure it's a valid column)
  TRANSACTION_TOTALS_UID: 'user_pseudo_id',

  // assertions and quality checks can be toggled on (true) or off (false) here
  // quality checks can be toggled off by changing to false

  // assertions
  // id uniqueness checks
  ASSERTIONS_EVENT_ID_UNIQUENESS: false,
  ASSERTIONS_SESSION_ID_UNIQUENESS: false,

  // check for session durations and events look valid?
  ASSERTIONS_SESSION_DURATION_VALIDITY: false,
  ASSERTIONS_SESSIONS_VALIDITY: false, 
  // check GA4 tables: are they on time?
  ASSERTIONS_TABLES_TIMELINESS: false,
  // check for a transaction IDs on a purchase?
  ASSERTIONS_TRANSACTION_ID_COMPLETENESS: false,
  // check for cookies on all hits? (note: cookieless pings will trigger a fail)
  ASSERTIONS_USER_PSEUDO_ID_COMPLETENESS: false,

  //GCS bucketlist 
 GCS_BUCKET : ["gmp_clearview_export_uat"]

}



module.exports = {
    customConfig
};
