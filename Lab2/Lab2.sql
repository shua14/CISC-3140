CREATE TABLE cars AS 
  SELECT Car_ID, Year, Make, Model, Name, Email 
  FROM csv;

CREATE TABLE judges AS 
  SELECT DISTINCT Judge_ID, Judge_Name
  FROM csv;

CREATE TABLE car_score AS 
  SELECT Car_ID, Racer_Turbo,Racer_Supercharged,Racer_Performance,Racer_Horsepower,Car_Overall,Engine_Modifications,Engine_Performance,Engine_Chrome,Engine_Detailing,Engine_Cleanliness,Body_Frame_Undercarriage,Body_Frame_Suspension,Body_Frame_Chrome,Body_Frame_Detailing,Body_Frame_Cleanliness,Mods_Paint,Mods_Body,Mods_Wrap,Mods_Rims,Mods_Interior,Mods_Other,Mods_ICE,Mods_Aftermarket,Mods_WIP,Mods_Overall
  FROM csv;

CREATE TABLE firstQ AS
SELECT cars.Car_ID, Year, Make, Model, Racer_Turbo + Racer_Supercharged + Racer_Performance + Racer_Horsepower + Car_Overall + Engine_Modifications + Engine_Performance + Engine_Chrome + Engine_Detailing + Engine_Cleanliness + Body_Frame_Undercarriage + Body_Frame_Suspension + Body_Frame_Chrome + Body_Frame_Detailing + Body_Frame_Cleanliness + Mods_Paint + Mods_Body + Mods_Wrap + Mods_Rims + Mods_Interior + Mods_Other + Mods_ICE + Mods_Aftermarket + Mods_WIP + Mods_Overall as total 
FROM  cars 
JOIN car_score 
ON cars.Car_ID == car_score.Car_ID  
ORDER BY Racer_Turbo + Racer_Supercharged + Racer_Performance + Racer_Horsepower + Car_Overall + Engine_Modifications + Engine_Performance + Engine_Chrome + Engine_Detailing + Engine_Cleanliness + Body_Frame_Undercarriage + Body_Frame_Suspension + Body_Frame_Chrome + Body_Frame_Detailing + Body_Frame_Cleanliness + Mods_Paint + Mods_Body + Mods_Wrap + Mods_Rims + Mods_Interior + Mods_Other + Mods_ICE + Mods_Aftermarket + Mods_WIP + Mods_Overall DESC;
SELECT rowid, * from firstQ;

WITH table_extract AS (
SELECT rowid, Make, Car_ID, total, ROW_NUMBER () OVER (PARTITION BY Make ORDER BY Make ASC) AS rank_num 
FROM firstQ  
)
SELECT rowid, Make, Car_ID, total, rank_num 
FROM table_extract
WHERE rank_num <= 3;

ALTER TABLE judges ADD COLUMN cars_judged INTEGER;

UPDATE  judges 
SET cars_judged = (SELECT count(Judge_ID) 
FROM csv
WHERE csv.Judge_ID = judges.Judge_ID
GROUP BY Judge_ID
);
