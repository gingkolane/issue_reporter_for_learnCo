class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :cohort, :cohort_name
  end
end
