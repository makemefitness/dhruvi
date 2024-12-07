class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :customer

  enum status: { scheduled: 0, completed: 1, cancelled: 2 }

  validates :start_time, :end_time, :status, presence: true
  validate :start_time_before_end_time
  validate :no_overlap

  private

  def start_time_before_end_time
    return if start_time.blank? || end_time.blank?

    errors.add(:end_time, "must be after the start time") if start_time >= end_time
  end

  def no_overlap
    return if start_time.blank? || end_time.blank?
    overlapping_appointments = Appointment.where(user: user)
                                           .where.not(id: id)
                                           .where("start_time < ? AND end_time > ?", end_time, start_time)
    errors.add(:base, "conflicts with another appointment") if overlapping_appointments.exists?
  end
end
