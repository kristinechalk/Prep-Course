#!/usr/bin/env ruby -w

# Fizz, Buzz, Fizzbuzz

upto(100) do |i|
    if i % 5 == 0 and i % 3 == 0
        puts "FizzBuzz"
    elsif i % 3 == 0
        puts "Fizz"
    elsif i % 5 == 0
        puts "Buzz"
    else
        puts i
    end
end