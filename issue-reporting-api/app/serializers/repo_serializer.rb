class RepoSerializer < ActiveModel::Serializer
  attributes :id, :github_repo_id, :name, :forks_count, :parent, :source, :open_issues_count, :reason_a, :reason_b, :reason_c, :reason_d, :reason_A, :reason_B, :reason_C, :reason_D

  def reason_A
    object.surveys.where(incompleteReason: "A").count
  end

  def reason_B
    object.surveys.where(incompleteReason: "B").count
  end

  def reason_C
    object.surveys.where(incompleteReason: "C").count
  end

  def reason_D
    object.surveys.where(incompleteReason: "D").count
  end
end
