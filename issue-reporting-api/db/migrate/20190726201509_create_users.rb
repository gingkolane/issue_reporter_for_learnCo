class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :learnco_username
      t.string :learnco_password
      t.string :cohort
      t.integer :github_user_id
      t.string :login
      t.string :role
      t.string :karma
      t.string :avatar_url
      t.string :url
      t.string :html_url
      t.string :repos_url

      t.timestamps
    end
  end
end
