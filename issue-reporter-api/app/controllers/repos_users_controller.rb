class ReposUsersController < ApplicationController
  
  # GET /repos_users/1
  def show
    repos_user = ReposUser.find(params[:repos_user_id])
    render json: { repo: repo, users: repo_users }
  end

  # POST /repos_users/find_repos_user
  def find_repos_user
    # use repo_id and user_id to find the corresponding repos_user
    repos_user = ReposUser.find_by(repo_id: params[:repo_id], user_id: params[:user_id])
    # if repos_user exist, gives back repos_users_id
    if repos_user
      render json: repos_user

    # if repos_user does not exist(note json is an object, so message has to be in {})
    else
      render json: {message: "did not find corresponding repos_user"}
    end  
  end

  private 

  def repos_user_params
    params.permit(:repo_id, :user_id, :repos_user_id)
  end

end
