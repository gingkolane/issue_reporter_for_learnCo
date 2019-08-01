class ReposController < ApplicationController

  # GET /repos
  def index
    repos = Repo.all
    render json: repos
  end

  def data
    data = Repo.all.map { |repo| 
      {
        "repo_name" => repo.name,
        "percent_incomplete" => (repo.forks_count - repo.open_issues_count)/repo.forks_count*100,
        "percent_incompleteColor" => "hsl(169, 70%, 50%)"
      }
    }
    render json: data
  end

    def survey_result
      # result = Repo.
    end 

  # GET /repos/1
  def show
    repo = Repo.find(params[:id])
    render json: repo
  end

  # POST /repos
  def create
    @repo = Repo.create(repo_params)
    render json: @repo
  end

  # PATCH/PUT /repos/1
  def update
    if @repo.update(repo_params)
      render json: @repo
    else
      render json: @repo.errors, status: :unprocessable_entity
    end
  end

  private
    def repo_params
      params.permit(:github_repo_id, :name, :full_name, :url, :html_url, :readme, :open_issues_count, :forks_count, :parent, :source)
    end

  end