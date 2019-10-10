class AuthController < ApplicationController
  
  def create
# byebug
    user = User.find_by(username: params[:username])
    is_authenticated = user.authenticate(params[:password]) if user

    if is_authenticated
      render json: { user: user, token: encode_token(user) }
    else
      render json: { errors: ["Wrong username or password bud. Sorry!"] }, status: :unprocessable_entity
    end
  end

end
