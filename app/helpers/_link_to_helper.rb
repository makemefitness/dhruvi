module LinkToHelper

  def link_to_login_in_root(img = "images/logo.png", klass = "logo", title = "", alt = "", link_klass= "", link_title = "")
    # if current_admin_customer.present?
    #   link_to_customer_home(img, klass, title, alt)
    # elsif current_admin_user.present?
    #   link_to_admin_home(img, klass, title, alt)
    # else
    #   link_to root_path do
    #     image_pack_tag img, class: klass, tile: title, alt: alt
    #   end
    # end  
  end

  def link_to_admin_home(img, klass, title, alt)
    link_to static_pages_usershome_path do
      image_pack_tag img, class: klass, tile: title, alt: alt
    end
  end

  def link_to_customer_home(img, klass, title, alt)
    link_to static_pages_customershome_path do
      image_pack_tag img, class: klass, tile: title, alt: alt
    end
  end

  def remote_if_customer
    current_admin_customer.present? ? true : false
  end
end