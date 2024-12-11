module MessagesHelper
  def recipients_options
    s = ''
    Customer.order(:first_name).each do |user|
      s << "<option value='#{user.id}' data-img-src='#{gravatar_image_url(user.email, size: 50)}'>#{user.name}</option>"
    end
    s.html_safe
  end

  def recipients_options_for_customer
    s = ''
    User.all.each do |user|
      s << "<option value='#{user.id}' data-img-src='#{gravatar_for user, size: 50, title: user}'>#{user.email}</option>"
    end
    s.html_safe
  end
end
