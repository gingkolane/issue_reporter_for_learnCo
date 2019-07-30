class AddColumnToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :avartar_url, :string
  end
end
