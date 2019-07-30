# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_30_101040) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "repos", force: :cascade do |t|
    t.integer "github_repo_id"
    t.string "name"
    t.string "full_name"
    t.string "url"
    t.string "html_url"
    t.string "readme"
    t.integer "forks_count"
    t.string "parent"
    t.string "source"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "open_issues_count"
  end

  create_table "surveys", force: :cascade do |t|
    t.bigint "repo_id"
    t.bigint "user_id"
    t.string "completion_status"
    t.string "incompleteReason"
    t.string "issueType"
    t.string "problemAnalysis"
    t.string "suggestedFix"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["repo_id"], name: "index_surveys_on_repo_id"
    t.index ["user_id"], name: "index_surveys_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "learnco_username"
    t.string "learnco_password"
    t.string "cohort"
    t.integer "github_user_id"
    t.string "login"
    t.string "role"
    t.string "karma"
    t.string "avatar_url"
    t.string "url"
    t.string "html_url"
    t.string "repos_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "avartar_url"
  end

  add_foreign_key "surveys", "repos"
  add_foreign_key "surveys", "users"
end
