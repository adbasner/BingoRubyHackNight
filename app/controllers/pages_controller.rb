class PagesController < ApplicationController
  def home
    b_options=*(1..15)
    i_options=*(16..30)
    n_options=*(31..45)
    g_options=*(46..60)
    o_options=*(61..75)


    @b_picks=[]
    @i_picks=[]
    @n_picks=[]
    @g_picks=[]
    @o_picks=[]

    5.times do
      @b_picks << b_options.delete_at(rand(b_options.length))
    end

    5.times do
      @i_picks << i_options.delete_at(rand(i_options.length))
    end

    5.times do
      @n_picks << n_options.delete_at(rand(n_options.length))
    end

    5.times do
      @g_picks << g_options.delete_at(rand(g_options.length))
    end

    5.times do
      @o_picks << o_options.delete_at(rand(o_options.length))
    end

    render 'index.html.erb'
  end
end
