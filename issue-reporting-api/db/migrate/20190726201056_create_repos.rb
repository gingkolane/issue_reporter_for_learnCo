class CreateRepos < ActiveRecord::Migration[5.2]
  def change
    create_table :repos do |t|
      t.integer :github_repo_id
      t.string :name
      t.string :full_name
      t.string :url
      t.string :html_url
      t.string :readme
      t.integer :pulls_count
      t.integer :forks_count
      t.integer :network_count
      t.string :parent
      t.string :source

      t.timestamps
    end
  end
end
