class RenameLoactionToLocation < ActiveRecord::Migration[7.0]
  def change
    rename_column :services, :loaction, :location
  end
end
