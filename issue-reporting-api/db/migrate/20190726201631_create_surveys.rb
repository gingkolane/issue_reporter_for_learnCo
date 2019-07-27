class CreateSurveys < ActiveRecord::Migration[5.2]
  def change
    create_table :surveys do |t|
      t.references :repo, foreign_key: true
      t.references :user, foreign_key: true
      t.string :completion_status
      t.string :incompleteReason
      t.string :issueType
      t.string :problemAnalysis
      t.string :suggestedFix

      t.timestamps
    end
  end
end
