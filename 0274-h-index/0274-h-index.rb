# @param {Integer[]} citations
# @return {Integer}
# sudo code 
# first sort the array 
# loop through the array 
# compare index and the current element : if papers is greater than or equal index,then update h-index, if papers = or less index, then return update h-index, and return it, 
# update the h-index with the current index, 

def h_index(citations)
  sorted_array = citations.sort{|x,y| -( x<=>y )}
  h_index = 0
  sorted_array.each_with_index do | citation, index |
    if (citation >= index + 1)
      h_index += 1
    end 
  end 
  h_index
end