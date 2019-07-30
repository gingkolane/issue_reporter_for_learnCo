class AddColumnsToRepos < ActiveRecord::Migration[5.2]
  def change
    add_column :repos, :open_issues_count, :integer
  end
end
