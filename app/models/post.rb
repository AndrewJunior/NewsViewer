class Post < ApplicationRecord
    validates :title,  :namesummary, :body, :presence => true

    has_many :comments, :dependent => :destroy
end
