## Tables
# CSV
    "Timestamp" TEXT,
  "Email" TEXT,
  "Name" TEXT,
  "Year" TEXT,
  "Make" TEXT,
  "Model" TEXT,
  "Car_ID" TEXT,
  "Judge_ID" TEXT,
  "Judge_Name" TEXT,
  "Racer_Turbo" TEXT,
  "Racer_Supercharged" TEXT,
  "Racer_Performance" TEXT,
  "Racer_Horsepower" TEXT,
  "Car_Overall" TEXT,
  "Engine_Modifications" TEXT,
  "Engine_Performance" TEXT,
  "Engine_Chrome" TEXT,
  "Engine_Detailing" TEXT,
  "Engine_Cleanliness" TEXT,
  "Body_Frame_Undercarriage" TEXT,
  "Body_Frame_Suspension" TEXT,
  "Body_Frame_Chrome" TEXT,
  "Body_Frame_Detailing" TEXT,
  "Body_Frame_Cleanliness" TEXT,
  "Mods_Paint" TEXT,
  "Mods_Body" TEXT,
  "Mods_Wrap" TEXT,
  "Mods_Rims" TEXT,
  "Mods_Interior" TEXT,
  "Mods_Other" TEXT,
  "Mods_ICE" TEXT,
  "Mods_Aftermarket" TEXT,
  "Mods_WIP" TEXT,
  "Mods_Overall" TEXT

# Cars 
Car_ID TEXT,
  Year TEXT,
  Make TEXT,
  Model TEXT,
  Name TEXT,
  Email TEXT

# Judges 
Judge_ID TEXT,
Judge_Name TEXT, 
cars_judged INTEGER

# Car_score 
Car_ID TEXT,
  Racer_Turbo TEXT,
  Racer_Supercharged TEXT,
  Racer_Performance TEXT,
  Racer_Horsepower TEXT,
  Car_Overall TEXT,
  Engine_Modifications TEXT,
  Engine_Performance TEXT,
  Engine_Chrome TEXT,
  Engine_Detailing TEXT,
  Engine_Cleanliness TEXT,
  Body_Frame_Undercarriage TEXT,
  Body_Frame_Suspension TEXT,
  Body_Frame_Chrome TEXT,
  Body_Frame_Detailing TEXT,
  Body_Frame_Cleanliness TEXT,
  Mods_Paint TEXT,
  Mods_Body TEXT,
  Mods_Wrap TEXT,
  Mods_Rims TEXT,
  Mods_Interior TEXT,
  Mods_Other TEXT,
  Mods_ICE TEXT,
  Mods_Aftermarket TEXT,
  Mods_WIP TEXT,
  Mods_Overall TEXT

# FirstQ (For getting score first, then used to get rank)
Car_ID TEXT,
  Year TEXT,
  Make TEXT,
  Model TEXT,
  total 

# sqlite commands needed to import csv into table 
.import /Users/Shua/VScode/CISC-3140/d66a59b6db4e59c16efd4c42ad411f8e/data.csv csv
