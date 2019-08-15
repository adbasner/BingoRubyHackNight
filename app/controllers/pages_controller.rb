class PagesController < ApplicationController
  def home
    b_options=*(1..15)
    i_options=*(16..30)
    n_options=*(31..45)
    g_options=*(46..60)
    o_options=*(61..75)


    p b_options
    p i_options
    p n_options
    p g_options
    p o_options
    #   whil
    # end
    # b_options = [1, 2, 3, 4,]


    render 'index.html.erb'
  end
end
