class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    users = User.all
    render json: users
  end

  # GET /users/1
  def show
    user = User.find(params[:id])
    render json: user
  end

  # POST /users
  def create
    user = User.create(user_params)

    if user.valid?
      render json: { token: encode_token(user) }
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # def profile
  #   render json: current_user
  # end 
  
  def profile
    # current_user was defined in ApplicationController
    # user_id = decoded_token[0]["user_id"]
    # current_user = User.find(user_id)
    current_user_repos = current_user.repos
    render json: { user: current_user, repos: current_user_repos }
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.permit(:username, :password,:github_user_id, :login, :role, :karma, :avatar_url, :url, :html_url, :repos_url, :cohort_name)
    end

end