# project3/tests/test_app.rb

require_relative '../src/app.rb'
require 'test/unit'

class TestApp < Test::Unit::TestCase
  def test_sample
    # Add your test cases here
    assert_equal(2, 1 + 1)
  end
end