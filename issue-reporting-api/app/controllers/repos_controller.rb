class ReposController < ApplicationController

  # GET /repos
  def index
    repos = Repo.all
    render json: repos
  end

  # GET /repos/1
  def show
    repo = Repo.find(params[:id])
    render json: repo

    # Above is to get data from our own database
    # Below is to get data from github API directly without writing to our database
    # client = Octokit::Client.new(:access_token => 'eeae13544e7e1690311ed39afd7ed2c8ccb98916')
    # repo = Repo.find(params[:id])
    # repo = client.repo "learn-co-students/#{repo.name}"
    # # render json: repo
    # render json: { 
    #   forks_count: repo.forks_count, # number of students forked
    #   open_issues_count: repo.open_issues_count, # /this is actually how many students who completed - merged pull request with 'Done'.
    #   parent: repo.parent, 
    #   source: repo.source
    # }

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