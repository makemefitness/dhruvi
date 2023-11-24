module ButtonHelper
  def add_button_outline(text="")
    "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fas fa-plus-circle'> </i> #{text}</span>".html_safe
  end

  def add_button_outline_non_border(text="", title="")
    "<span class='my-btn p-1 pl-2 pr-2' title='#{title}'><i class='fas fa-plus-circle text-primary' title='#{title}'> </i> #{text}</span>".html_safe
  end
end