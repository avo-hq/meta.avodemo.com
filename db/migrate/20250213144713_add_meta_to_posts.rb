class AddMetaToPosts < ActiveRecord::Migration[8.0]
  def change
    add_column :posts, :meta, :json
  end
end
