#!/usr/bin/env ruby -w

# Non-duplicate values in an Array

def non_duplicated_values(values)
  values.find_all { |x| values.count(x) == 1 }
end