class SurveysController < ApplicationController
  before_action :set_survey, only: [:show, :update, :destroy]

  # GET /surveys
  def index
    surveys = Survey.all
    # byebug
    # selectedSurveys = surveys.select {|survey| survey.repo.percent_completion < 50 }
    # Todo: filter only percent_completion < 50 surveys to make loading faster
    render json: surveys
  end



  # GET /surveys/1
  def show
    render json: survey
  end

  # POST /surveys
  def create
    # byebug
    survey = Survey.new(survey_params)
    if survey.save
      render json: survey, status: :created, location: survey
    else
      render json: survey.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /surveys/1
  def update
    if survey.update(survey_params)
      render json: survey
    else
      render json: survey.errors, status: :unprocessable_entity
    end
  end

  # DELETE /surveys/1
  def destroy
    survey.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_survey
      survey = Survey.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def survey_params
      params.permit(:repos_user_id, :completion_status, :incompleteReason, :issueType, :problemAnalysis, :suggestedFix)
    end

end