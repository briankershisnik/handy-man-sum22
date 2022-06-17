class Api::ServicesController < ApplicationController
  before_action :set_worker
  before_action :set_service, only: [:show, :update, :destroy]
 
  def index
    render json: @worker.services
  end

  def show
    render json: @service
  end

  def create
    @service = @worker.services.new(worker_params)
    if @service.save 
      render json: @service 
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @service.update(worker_params)
      render json: @service
    else
      render json: { errors: @service.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @service.destroy
    render json: { message: ' Deleted' }
  end

  private 
  
    def worker_params
      params.require(:service).permit(:first_name, :last_name, :image)
    end

    def set_worker
      @worker = Worker.find(params[:worker_id])
    end

    def set_service
      @service = @worker.services.find(params[:id])
    end
end

