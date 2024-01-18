module ButtonToHelper
  # = link_to new_admin_customer_registration_path do
  #   <span class="my-btn my-btn--pink p-1 pl-2 pr-2"><i class="fas fa-plus-circle text-light"></i> Dodaj nowego klienta</span>
  def add_button(href = "#", text="text")
    content_tag(:div, class: "form-group") do
      link_to href do
        concat content_tag(:span, text, class: "my-btn my-btn--pink p-1 pl-2 pr-2 glyphicon glyphicon-plus") do
          concat content_tag(:i, class: "fas fa-plus-circle text-light").html_safe + "+ Dodaj nowego klienta"
        end
        # concat content_tag(:i, )
      end
    end
    # content_tag(:a) do
    #   content_tag(:span, class: "my-btn my-btn--pink p-1 pl-2 pr-2").html_safe + \

    # = link_to new_admin_customer_registration_path do
    #   <span class="my-btn my-btn--pink p-1 pl-2 pr-2"><i class="fas fa-plus-circle text-light"></i> Dodaj nowego klienta</span>
  end

  def add_button(text="", href="#", options={})
    link_to href, options do
      "<span class='my-btn my-btn--pink p-1 pl-2 pr-2'><i class='fa fa-plus-circle text-light'></i> #{text}</span>".html_safe
    end
  end

  def add_button_outline(text="", href="#", options={})
    link_to href, options do
      "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fas fa-plus-circle'></i> #{text}</span>".html_safe
    end
  end

  def show_button(text="", href="#", options={title: "Szczegóły"})
    link_to href, options do
      "<span class='my-btn my-btn--pink p-1 pl-2 pr-2'><i class='fas fa-eye text-light'></i> #{text}</span>".html_safe
    end
  end

  def delete_button(text="", href="#", options={})
    link_to href, options do
      "<span class='my-btn my-btn--pink p-1 pl-2 pr-2'><i class='fas fa-minus-circle text-light'></i> #{text}</span>".html_safe
    end
  end

  def edit_button(text="", href="#", options={})
    link_to href, options do
      "<span class='my-btn my-btn--pink p-1 pl-2 pr-2'><i class='fa fa-edit text-light'></i> #{text}</span>".html_safe
    end
  end

  def edit_outline_button(text="", href="#", options={})
    link_to href, options.merge({title:"Edytuj"}) do
      "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fa fa-edit'></i> #{text}</span>".html_safe
    end
  end

  def edit_outline_button_non_border(text="", href="#" , title="Edytuj", options={})
    link_to href, options.merge({title:"Edytuj"}) do
      "<span class='my-btn p-1 pl-2 pr-2' title='#{title}'><i class='fa-solid fa-edit text-success' title='#{title}'> </i> #{text}</span>".html_safe
    end
  end

  def show_outline_button(text="", href="#", options={})
    link_to href, options.merge({title: "Szczegóły"}) do
      "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fas fa-eye'></i> #{text}</span>".html_safe
    end
  end

  def delete_outline_button(text="", href="#", options={})
    link_to href, options.merge({title: "Delete!", data: { "turbo-method": :delete }}) do
      # "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fas fa-minus-circle'></i> #{text}</span>".html_safe
      "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fas fa-trash-alt'></i> #{text}</span>".html_safe
    end
  end

  def delete_outline_button_non_border(text="", href="#" , title="Usuń!", options={})
    link_to href, options.merge({title: "Usuń!", method: :delete, data: { confirm: 'Jesteś pewny?' }}) do
      # "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fas fa-minus-circle'></i> #{text}</span>".html_safe
      "<span class='my-btn p-1 pl-2 pr-2'><i class='fas fa-trash-alt text-danger'></i> #{text}</span>".html_safe
    end
  end


  # TODO CHANGE NAME TO LEFT AND FIND ALL LINKS WITH THIS NAME
  def button_to_right(text="", href="#", options={})
    link_to href, options do
      "<span class='my-btn my-btn--pink p-1 pl-2 pr-2'><i class='fas fa-arrow-circle-left'></i> #{text}</span>".html_safe
    end
  end

  def button_to_outline_right(text="", href="#", options={})
    link_to href, options do
      "<span class='my-btn my-btn--outline-primary p-1 pl-2 pr-2'><i class='fas fa-arrow-circle-left'></i> #{text}</span>".html_safe
    end
  end
end