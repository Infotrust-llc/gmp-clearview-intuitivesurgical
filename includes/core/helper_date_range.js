// ${helper_date_range.FilterSuffix}


// Date constants that we'll use for the table overwrite logic.
const test = false;

const startDate = test ? `current_date()-3` : `date_checkpoint`; // BQ has a 72 hour delay, so for all the source tables we'll replace the data of the past 3 days to ensure it's correct.
const endDate = `current_date()-2`; // Since currently there's no fixed time for when yesterday's data is available, we'll disregard yesterday's data entirely in our reports.
const FilterSuffix = `(_table_suffix >= cast(${startDate} as string format "YYYYMMDD") and _table_suffix <= cast(${endDate} as string format "YYYYMMDD"))`;
const FilterDate = `(event_date >= cast(${startDate} as datetime) and event_date <= cast(${endDate} as datetime))`;


const date_checkpoint  = () => {
  // Access project-level variables defined in dataform.json or dataform project config
  const vars = dataform.projectConfig.vars;

    if (vars.TRANSFORMATIONS_DATASET;
};


const generateFilterByDateRangeSQL = (clickId) => {
  if (clickId.sources.includes("collected_traffic_source")) {
    return `coalesce(collected_traffic_source.${clickId.name}, event_params.${clickId.name},click_ids.${clickId.name}) as ${clickId.name}`;
  }
  return `click_ids.${clickId.name} as ${clickId.name}`;
};

// In order to be able to call the constants and functions in SQLX files, we have to mention them here.
module.exports = {FilterSuffix, FilterDate, generateFilterByDateRangeSQL, date_checkpoint}