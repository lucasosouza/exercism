class Hamming
  def self.compute(dna1,dna2)
      match = 0
      dna1.each_char.each_with_index do |char, i|
          match += 1 if dna1[i]!=dna2[i] && dna1[i] != nil && dna2[i] != nil
      end
      match
  end
end

puts Hamming.compute("a","b")
p Hamming.compute("c","d")
print Hamming.compute("e","f")


#niptickes:
# @dna1.each_char.each_with_index do |char, i|
# //test match
# end
# :each_char iterates over the characters, and :each_with_index can be tacked onto the end to provide an index value at the end of your closure's argument list

# original solution:
# dna1.length < dna2.length ? length = dna1.length : length = dna2.length
# arr_dna1 = dna1.split("")
# arr_dna2 = dna2.split("")
# match = 0
# length.times do |i|
#   match += 1 if arr_dna1[i] != arr_dna2[i]
# end
# return match

#syntax fixes:
#match = Fixnum.new ---> match=0
#match++ ---> match += 1