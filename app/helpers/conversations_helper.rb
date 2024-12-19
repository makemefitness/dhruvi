module ConversationsHelper
  def mailbox_section(title, current_box, opts = {})
    opts[:class] = opts.fetch(:class, '')
    content_tag :li, link_to(title.capitalize, conversations_path(box: title.downcase), class: "nav-link #{'active' if title.downcase == current_box}"), opts
  end
end