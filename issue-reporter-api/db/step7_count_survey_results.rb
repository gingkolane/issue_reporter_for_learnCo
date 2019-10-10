# to run this file, first go into rails console, then do:
# load 'db/step7_count_survey_results.rb'

Repo.where(cohort_name: 'dumbo-web-051319').each do |repo|
  
  count_a = repo.surveys.where(incompleteReason: "A").count
  count_b = repo.surveys.where(incompleteReason: "B").count
  count_c = repo.surveys.where(incompleteReason: "C").count
  count_d = repo.surveys.where(incompleteReason: "D").count

  Repo.update(
    repo.id,
    "reason_a": count_a,
    "reason_b": count_b,
    "reason_c": count_c,
    "reason_d": count_d
  )
  
end 