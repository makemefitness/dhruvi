module UsersHelper

  # Returns the Gravatar for the given user.
  def gravatar_for(user)
    if user.avatar.present?
      image_tag(user.avatar, alt: user.first_name, class: "gravatar")
    else
      gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
      gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
      image_tag(gravatar_url, alt: user.first_name, class: "gravatar", style: "width:50px;height:50px;")
    end
  end
end