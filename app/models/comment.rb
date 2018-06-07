class Comment < ApplicationRecord
  belongs_to :post
  validates :commenter, :body, :presence => true
  validates_format_of :commenter, :with => /\A[a-zA-Z][a-zA-Z0-9-_\.]{1,20}\Z/ 
end
