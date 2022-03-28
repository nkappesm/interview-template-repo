class UsersController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json { render json: UsersDatatable.new(view_context, action: params[:action]) }
    end
  end

  def show; end
end
