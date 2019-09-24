-- After data acquisition in repos_all to get all repos from learn-co-student, 
-- filter repos used in Access Lab and forks_count between 5 and 50 in navicat using sql

-- filter dumbo cohort and forks_count 5 to 50
create table repos as 
(select
"id",
"github_repo_id",
"name",
"forks_count",
"open_issues_count",
(100 * "open_issues_count"/"forks_count") AS "percent_completion",
"reason_a",
"reason_b",
"reason_c",
"reason_d"
FROM repos_all
WHERE
repos_all."name" like '%-dumbo-%'
AND
repos_all."forks_count" between 5 AND 50);

-- make id field primary key field
alter table repos add primary key (id);

-- add two columns repo_name and cohort_name, add split_part result into these two columns
ALTER TABLE repos
ADD COLUMN "master_repo" varchar, 
ADD COLUMN "cohort_name" varchar;

UPDATE repos
SET "master_repo" = split_part("name", '-dumbo-' , 1 ), 
"cohort_name" = concat('dumbo-', split_part("name", '-dumbo-' , 2 ));

