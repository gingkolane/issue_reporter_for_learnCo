class SurveysController < ApplicationController
  before_action :set_survey, only: [:show, :update, :destroy]

  # GET /surveys
  def index
    @surveys = Survey.all

    render json: @surveys
  end


  def incomplete_reason_count(repoid)

    surveysOfOneRepo = Survey.all.filter { |survey| survey.repo_id == repoid }
    repo = Repo.find(repoid)

    count_a = 0, count_b = 0, count_d = 0, count_d = 0

    surveysOfOneRepo.each do |survey|
      case survey.incompleteReason
        when "A"
          count_a = count_a + 1
        when "B"
          count_b = count_b + 1
        when "C"
          count_c = count_c + 1
        when "D"
          count_d = count_d + 1
        else 
          continue;
      end 
      
      # update repo data table
      repo.update
    end

    render json: @surveyresult

  end 

  # GET /surveys/1
  def show
    render json: @survey
  end

  # POST /surveys
  def create
    @survey = Survey.new(survey_params)
    # byebug
    if @survey.save
      render json: @survey, status: :created, location: @survey
    else
      render json: @survey.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /surveys/1
  def update
    if @survey.update(survey_params)
      render json: @survey
    else
      render json: @survey.errors, status: :unprocessable_entity
    end
  end

  # DELETE /surveys/1
  def destroy
    @survey.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_survey
      @survey = Survey.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def survey_params
      params.permit(:repo_id, :user_id, :completion_status, :incompleteReason, :issueType, :problemAnalysis, :suggestedFix, :reason_a, :reason_b, :reason_c, :reason_d)
    end
end
