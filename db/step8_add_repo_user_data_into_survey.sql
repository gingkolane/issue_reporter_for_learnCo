-- This creates the reporting table for use with react-table
-- This was done in navicat using sql

UPDATE surveys
SET 
"github_username" = (select "repos_users"."github_username" from repos_users where "repos_users"."id" = surveys."repos_user_id"),
"repo_name" = (select "repos_users"."repo_name" from repos_users where "repos_users"."id" = surveys."repos_user_id");

update surveys
SET
"master_repo" = split_part("repo_name", '-dumbo-' , 1 ), 
"cohort_name" = concat('dumbo-', split_part("repo_name", '-dumbo-' , 2 ));