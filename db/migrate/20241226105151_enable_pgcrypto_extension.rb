class EnablePgcryptoExtension < ActiveRecord::Migration[7.1]
  def change
    # enable_extension 'pgcrypto' unless ActiveRecord::Base.connection.adapter_name == 'PostgreSQL' && extension_enabled?('pgcrypto')
  end
end
