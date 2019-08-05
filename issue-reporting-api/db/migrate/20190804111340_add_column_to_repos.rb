class AddColumnToRepos < ActiveRecord::Migration[5.2]
  def change
    add_column :repos, :type, :string
  end
end
