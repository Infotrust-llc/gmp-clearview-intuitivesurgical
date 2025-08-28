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

const ga4Events = require("includes/core/documentation/ga4_events.json");
const ga4Sessions = require("includes/core/documentation/ga4_sessions.json");
const ga4Navigation = require("includes/core/documentation/ga4_navigation.json");
const ga4Provider = require("includes/core/documentation/ga4_provider.json");
const ga4Video = require("includes/core/documentation/ga4_video.json");
const ga4FileForm = require("includes/core/documentation/ga4_file_form.json");

const { helpers } = require("includes/core/helpers");
const config = helpers.getConfig();

config.CUSTOM_EVENT_PARAMS_ARRAY.forEach((param) => {
  if (param.description) {
    const paramName = param.renameTo ? param.renameTo : param.name;
    if (!ga4Events.event_params_custom) {
      ga4Events.event_params_custom = {};
      ga4Events.event_params_custom.description = "Custom event parameters";
      ga4Events.event_params_custom.columns = {};
    }
    if (!ga4Events.event_params_custom.columns) {
      ga4Events.event_params_custom.columns = {};
    }
    ga4Events.event_params_custom.columns[paramName] = param.description;
  }
});

config.CUSTOM_USER_PROPERTIES_ARRAY.forEach((param) => {
  if (param.description) {
    const paramName = param.renameTo ? param.renameTo : param.name;
    if (!ga4Events.user_properties) {
      ga4Events.user_properties = {};
      ga4Events.user_properties.description = "Custom user properties";
    }
    if (!ga4Events.user_properties.columns) {
      ga4Events.user_properties.columns = {};
    }
    ga4Events.user_properties.columns[paramName] = param.description;
  }
});

config.CUSTOM_URL_PARAMS_ARRAY.forEach((param) => {
  if (param.description) {
    const paramName = param.renameTo ? param.renameTo : param.name;
    if (!ga4Events.url_params_custom) {
      ga4Events.url_params_custom = {};
      ga4Events.url_params_custom.description = "Custom URL parameters";
      ga4Events.url_params_custom.columns = {};
    }
    ga4Events.url_params_custom.columns[paramName] = param.description;
  }
});

config.CUSTOM_ITEM_PARAMS_ARRAY.forEach((param) => {
  if (param.description) {
    const paramName = param.renameTo ? param.renameTo : param.name;
    if (!ga4Events.items.columns.item_params_custom) {
      ga4Events.items.columns.item_params_custom = {};
      ga4Events.items.columns.item_params_custom.description =
        "Custom item parameters";
    }
    if (!ga4Events.items.columns.item_params_custom.columns) {
      ga4Events.items.columns.item_params_custom.columns = {};
    }
    ga4Events.items.columns.item_params_custom.columns[paramName] =
      param.description;
  }
});

module.exports = {
  ga4Events,
  ga4Sessions,
  ga4Navigation,
  ga4Video,
  ga4FileForm,    
  ga4Provider
};
