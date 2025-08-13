  /*
  This file is part of "GMP Clearview" package.
  Copyright (C)  2025 Infotrust 
  Alina Zilbergerts, Trish Dothkar,
  -- */


declare({
    database: dataform.projectConfig.vars.INPUT_PROJECT,
    schema: dataform.projectConfig.vars.GA4_DATASET,
    name: 'events_*'  
});
 