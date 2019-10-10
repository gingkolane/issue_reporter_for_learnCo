-- after filling in github_username and github_repo_name in repos_users joint table, 
-- add corresponding repo_id and user_id on matching reponame and username


-- syntax
-- UPDATE TABLE A
-- SET column1=SELECT (column2) FROM A
-- But if source is the same table...
-- UPDATE users
-- SET username = users.'login


-- clean up data in users
-- make github_username the same as useranme in users 


UPDATE users SET "github_username" = username; 
-- upate cohort_name in user so that it is the same as in repos table
update users set cohort_name = concat('dumbo-', cohort_name)

-- repos_users table
-- add repo_id to repos_users table, on github_repo_name and github_username
UPDATE repos_users
SET 
repo_id = (SELECT repos.id FROM repos WHERE repos_users.repo_name = repos.name);

-- add user_id to repos_users table, on github_repo_name and github_userna
UPDATE repos_users 
SET 
user_id = (SELECT users.id FROM users WHERE repos_users.github_username = users.github_username);

