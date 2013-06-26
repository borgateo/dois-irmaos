require 'spec_helper'

describe PagesController do

  describe "GET 'evento'" do
    it "returns http success" do
      get 'evento'
      response.should be_success
    end
  end

end
