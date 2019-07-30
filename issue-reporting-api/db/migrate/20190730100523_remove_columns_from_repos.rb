class RemoveColumnsFromRepos < ActiveRecord::Migration[5.2]
  def change
    remove_column :repos, :network_count, :string
    remove_column :repos, :pulls_count, :string
  end
end
