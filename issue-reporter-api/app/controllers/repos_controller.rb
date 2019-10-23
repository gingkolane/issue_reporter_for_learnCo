class ReposController < ApplicationController

  # GET /repos
  def index   
    # repos = Repo.all
    repos = Repo.where(cohort_name: 'dumbo-web-051319')
    render json: repos
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