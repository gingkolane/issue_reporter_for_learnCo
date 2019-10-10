class ReposUsersController < ApplicationController

  # POST /reposUser
  def create
    reposUser = ReposUser.create(reposUser_params)
    if reposUser.valid?
      render json: reposUser
    else
      render json: {errors: reposUser.errors.full_messages}
    end
  end

  private 

  def reposUser_params
    params.permit(:repo_id, :user_id)
  end

end
