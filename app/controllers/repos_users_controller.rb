class ReposUsersController < ApplicationController

  # POST /reposUser
  def create
    reposUser = ReposUser.create(reposUser_params)
byebug
    if reposUser.valid?
      render json: reposUser
    else
      render json: {errors: reposUser.errors.full_messages}
    end
  end

  private 

  def reposUser_params
    params.require(:reposUser).permit(:github_repo_id, :github_user_id, :repo_id, :user_id)
  end

end
