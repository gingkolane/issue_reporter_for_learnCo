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

ActiveRecord::Schema.define(version: 2019_08_05_150919) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "repos", id: :integer, default: nil, force: :cascade do |t|
    t.bigint "github_repo_id"
    t.string "name"
    t.integer "forks_count"
    t.integer "open_issues_count"
    t.string "reason_a"
    t.string "reason_b"
    t.string "reason_c"
    t.string "reason_d"
  end

  create_table "repos_all", id: :bigint, default: -> { "nextval('repos_id_seq'::regclass)" }, force: :cascade do |t|
    t.bigint "github_repo_id"
    t.string "name"
    t.integer "forks_count"
    t.integer "open_issues_count"
    t.string "parent"
    t.string "source"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "forks_url"
    t.string "type"
    t.string "reason_a"
    t.string "reason_b"
    t.string "reason_c"
    t.string "reason_d"
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
    t.bigint "github_user_id"
    t.string "login"
    t.string "username"
    t.string "password"
    t.string "cohort_name"
    t.string "role"
    t.string "karma"
    t.string "avatar_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "surveys", "repos_all", column: "repo_id"
  add_foreign_key "surveys", "users"
end
