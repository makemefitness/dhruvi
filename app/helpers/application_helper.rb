module ApplicationHelper

  def link_to_add_row(name, f, association, **args)
    new_object = f.object.send(association).klass.new
    id = new_object.object_id
    fields = f.fields_for(association, new_object, child_index: id) do |builder|
      render(association.to_s.singularize, f: builder)
    end
    link_to(name, '#', class: 'add_fields ' + args[:class], data: {id: id, fields: fields.gsub("\n", "")})
  end

  def log_in?
    return current_user.present?
    return false
    current_admin_customer.present? || current_admin_user.present?
  end

  def get_login_user_name
    if current_admin_customer.present?
      current_admin_customer.username 
    elsif current_admin_user.present?
      current_admin_user.username
    end
  end

  def get_login_user
    if current_admin_customer.present?
      current_admin_customer
    elsif current_admin_user.present?
      current_admin_user
    end
  end

  ##############################################################
  
  def get_type_of_login
    ####
    return 'none'
    if log_in?
      if current_admin_user.present?
        'users'
      elsif current_admin_customer.present?
        'customers'
      else
        'none'
      end
    end
  end

  def online_status(user, type)
    if type == 'customers'
      content_tag :span, user.name,
                class: "customer-#{user.id} online_status #{'online' if Customer.find(user.id).online?} #{type}"
    else
      content_tag :span, user.name,
                  class: "user-#{user.id} online_status #{'online' if user.online?} #{type}"
    end

  end


  def bootstrap_class_for flash_type
    {
      success: "alert-success",
      error: "alert-danger",
      alert: "alert-warning",
      notice: "alert-info"
      }[flash_type.to_sym] || flash_type.to_s
  end

  def flash_messages(_opts = {})
    # return if flash[0][0] == :form_error
    flash.each do |msg_type, message|
      next if msg_type == :form_error
      concat(content_tag(:div, message.html_safe, {
        class: "alert #{bootstrap_class_for(msg_type)} fade in"}) do
          concat content_tag(:button, 'x', class: "close", data: {
            dismiss: 'alert'
          })
          concat message.html_safe
        end)
      end
    nil
  end

end