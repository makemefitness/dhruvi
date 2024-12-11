module UsersHelper

  # Returns the Gravatar for the given user.
  def gravatar_for(user, size = 30, title = user)
    if user.avatar.attached?
      image_tag(user.avatar, alt: user.email, class: "gravatar" )
    else
      gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
      gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
      image_tag(gravatar_url, alt: user.name, class: "gravatar", style: "width:50px;height:50px;")
    end
  end

  def gravatar_for_login(user)
    if user.avatar.present?
      # image_tag(user.avatar, alt: "zdjecie #{user.email}", class: "user-nav__user-photo user-nav__user-photo-#{get_type_of_login}")
      image_tag(user.avatar, alt: "zdjecie #{user.email}", class: "user-nav__user-photo user-nav__user-photo-#{get_type_of_login}") if user.avatar.attached?
    else
      gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
      gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
      image_tag(gravatar_url, class: "user-nav__user-photo")
    end
  end
end
