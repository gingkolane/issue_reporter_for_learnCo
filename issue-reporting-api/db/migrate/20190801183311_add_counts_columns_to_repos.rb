class AddCountsColumnsToRepos < ActiveRecord::Migration[5.2]
  def change
    add_column :repos, :reason_a, :string
    add_column :repos, :reason_b, :string
    add_column :repos, :reason_c, :string
    add_column :repos, :reason_d, :string
  end
end
