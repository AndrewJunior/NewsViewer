class CommentsController < ApplicationController
  http_basic_authenticate_with :name => "123", :password => "123", :only => :destroy
  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.new(post_id: @post.id) 
    @comment.assign_attributes(comment_params)
    if @comment.save
      redirect_to post_path(@post)
    else
      render 'posts/show'
    end
  end
  def destroy
    @post = Post.find(params[:post_id])
    @comment = @post.comments.find(params[:id])
    @comment.destroy
      redirect_to post_path(@post)
  end

  private
    def comment_params
        params.require(:comment).permit(:commenter, :body)
    end
end