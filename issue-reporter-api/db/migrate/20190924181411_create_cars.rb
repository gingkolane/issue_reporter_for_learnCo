class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|

      t.timestamps
    end
  end
end
