#!/usr/bin/env ruby -w

# Calculator

class Calculator  
	def initialize(number_1, number_2)
    	@number_1 = number_1
    	@number_2 = number_2
	end

	def add(num_1, num_2)
		num_1 + num_2
	end

	def subtract(num_1, num_2)
    	num_1 - num_2
  	end
end
