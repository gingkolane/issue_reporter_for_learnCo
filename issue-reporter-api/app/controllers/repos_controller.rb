class ReposController < ApplicationController

  # GET /repos
  def index   
    # take repos with less than 50% completion and of cohort 042219 and 051319
    cohort_repos = Repo.where(cohort_name: "dumbo-web-051319").or(Repo.where(cohort_name: "dumbo-web-career-042219"))
    filtered_repos = cohort_repos.filter{|repo| repo.percent_completion < 50 }
    
    render json: filtered_repos
  end

  # GET /repos/1
  def show
    repo = Repo.find(params[:id])
    render json: repo
  end

  private
    def repo_params
      params.permit(:github_repo_id, :name, :full_name, :url, :html_url, :readme, :open_issues_count, :forks_count, :forks_url, :parent, :source )
    end

  end