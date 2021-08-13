/* Algorithms for the basic construction and manipulation of data strucutres


Outline
1. Hash table
2. Linked list
3. Stack
4. Queue
5. Tree
6. Graph
7. Heap (tbd)
8. Binary search
9. Merge sort
10. Quick sort



HashTable  ____________________________________________________

1. Hash (str)
    1. Loop str and make charCodeAt str
    2. Return the number of string modulated by class attribute size

2. Set (key, value)
    1. Set three variables
      A. Index to hash of key
      B. Element to array with key and value
      C. Sub to array at index
        1. If sub is undefined, set array at index to element
    2. Set keyExists variable to false
    3. Loop sub
      A. If sub at loop itr equals key
        1. Set keyExists to true
        2. Set sub at index one to value
    4. If keyExists equals false, push element to sub

3. Get (key)
    1. Set index to hash of key and sub to array at index
      A. If not sub, return null
    2. Loop sub
      A. If sub at loop itr equals key, return sub at index one
    3. Return null 



LinkedList ____________________________________________________

1. Add (value)
    1. If head undefined, set head to new node and tail to head
    2. Else set node to new node, tail next to node, and tail to tail next

2. Remove (target)
    1. Set itr to head
    2. While itr data is not target and itr next is defined, iterate itr
    3. If itr is tail and itr data is not target, return null
    4. If itr is head
      A. If tail equals head, set head to null
      B. Else set head to head next
    5. Else if itr is tail, set tail to tail prev
    6. Else set itr prev to itr next and itr next to itr prev



Stack _________________________________________________________

1. Push (value)
    1. If not head, set head to new node with data and tail to head
    2. Else set new node to data, node next to tail, and tail to node

2. Pop ()
    1. Set node to undefined
    2. If not head, return null
    3. Else if head equals tail
      A. Set node to head, head and tail to null, return node
    4. Else set node to tail, tail to tail next, and return node



Queue _________________________________________________________

1. Enqueue (value)
    1. If not head, set head to new node with data and tail to head
    2. Else set new node to data, tail next to node, and tail to node
    
2. Dequeue ()
    1. Set node to undefined
    2. If not head, return null
    3. Else if head equals tail
      A. Set node to head, head and tail to null, return node
    4. Else set node to head, head to head next, and return node



Tree __________________________________________________________

Searches                    
1. Order
    1. Depth: orders
          A. Pre
          B. In
          C. Post
    2. Breadth
          A. Level order

2. Method
    1. Iteration

      A. Pre with stack ()
        1. Push root to stack
        2. While stack length
          A. Pop stack for vertex
          B. Save data to answer
          C. Push right and left to stack
        3. Return answer
      
      B. In with stack ()
        1. Set fast to root
        2. While true
          A. While fast
            1. Push fast to stack
            2. Set fast to fast left
          B. Break if stack is empty 
          C. Set slow to stack pop and 
              save data to answer
          D. Set fast to slow right
        3. Return answer
      
      C. Post with stack ()
        1. Set fast and slow to root
        2. While fast
          A. While fast left
            1. Push fast to stack
            2. Set fast to fast left
          B. While fast right is slow or undefined
            1. Save fast data to answer
            2. Set slow to fast
            3. Return if stack empty
            4. Set fast to stack pop
          C. Push fast to stack
          D. Set fast to fast right
        3. Return answer
      
      D. Level with queue ()
        1. Push root to q
        2. While q length
          A. Shift q for vertex
          B. Save vertex data to answer
          C. Push vertex left if left
          D. Push vertex right if right
        3. Return answer

    2. Recursion ()
      1. Pre: save data to answer; left; right
      2. In:  left; save data to answer; right
      3. Post: left; right; save data to answer



Graph ______________________________________________________

Searches
1. Order
    1. Depth: recursive and iterative
    2. Breadth: iterative

2. Method
    1. Iteration (vertex)
      A. Depth
        1. Push vertex to stack
        2. While stack length
          1. Pop stack for vertex
          2. If vertex unvisited, save data to answer and mark visited
          3. Loop vertex adjacencies
            A. If adjacent vertex unvisited, push vertex to stack
        3. Return answer

      B. Breadth (vertex)
        1. Enqueue vertex, mark data visited, push vertex to q
        2. While q length
          A. Dequeue q for vertex
          B. Loop vertex adjacencies
            1. If vertex adjacent unvisited
              A. Mark visited, sava data to answer, enqueue vertex
        3. Return answer
    
    2. Recursion
      A. Depth (vertex)
        1. Visit the first vertex
        2. Save vertex data to answer
        3. Loop vertex adjacencies
          A. Visit adjacent vertex if vertex is unvisited
        4. Return answer



Heaps         ______________________________________________________



Binary Search ______________________________________________________

1. Iterative (array, target)
    1. Set left, middle, and right variables to indices zero, mid, and last
    2. While left does not equal right
      A. If array at mid equals target, return mid
      B. Else if right minus left equals one
        1. If array at left or right equals target
          A. Return the variable that equals the target
        2. Else return null
      C. Else 
        1. If array at mid greater than target
          A. Set right to mid and mid to left plus right divided by two
        2. Else set left to mid and mid to left plus right divided by two

2. Recursive (array, x, start, end)
    1. Return if start greater than end
    2. Else
      A. Set mid to start plus end divided by two
      B. If array at mid equals x, return mid
      C. Else if array at mid greater than x
        1. Return recursive call with mid minus one for end
      D. Else return recursive call with mid plus one for start



Merge sort    ______________________________________________________

1. Iterative
    1. Merge (array, temp, from, mid, to)
      A. Definitions
        1. Set k to from
        2. Set i to from
        3. Set j to mid plus one
      B. While i less than or equal to mid and j less than or equal to to
        1. If array at i less than array
          A. Set temp at k to array at i and increment both
        2. Else set temp at k to array at j and increment both
      C. While i less than or equal to mid
        1. Set temp at k to array at i and increment both
      D. Loop from from to less than equal to to
        1. Set array at loop itr to temp at loop itr

    2. Sort (array)
      A. Definitions
        1. Set low to zero
        2. Set high to array length minus one
        3. Set temp to copy of array
      B. Nested loops
        1. From one until high minus low by two times loop itr
          A. From low until high by addition of two times previous loop itr
            1. Definitions
              A. Set from to inner loop itr
              B. Set mid to inner loop itr plus outer loop itr minus one
              C. Set to to min of inner loop iter plus two times outer loop itr minus one and then alternatively high

2. Recursive
    1. Merge (left, right)
      1. Set answer to empty array
      2. While left and right length
        A. Push to answer lesser of left and right at index zero
      3. Return answer concat with left or right, whichever has length

    2. Sort (array)
      1. If array length less than two, return array
      2. Else
        A. Set mid to half array length
        B. Set left to recursive call of array from zero to mid
        C. Set right to recursive call of array from mid to end of array
        D. Merge left and right



Quick sort    ______________________________________________________

1. Iterative 
    1. Swap (array, pivotIndex, end)
      A. Set temp to array at pivotIndex
      B. Set array at pivotIndex to array at end
      C. Set array at end to temp

    2. Partition (array, start, end)
      A. Set pivot to array at end
      B. Set pivotIndex to start
      C. Loop from start until end
        1. If array at loop less than or equal to pivot
          A. Swap array, loop itr, and pivotIndex
          B. Increment pivotIndex
      D. Swap array, pivotIndex, and end
      E. Return pivotIndex

    3. Sort (array)
      A. Set start to zero and end to array length minus one
      B. Push array of start and end to stack
      C. While stack length
        1. Set variable pair to stack pop
        2. Set start to pair at zer and end to pair at one
        3. Set pivot to partition of array, start, and end
        4. If pivot minus one greater than start
          A. Push array of start and pivot minus one to stack
        5. If pivot plus one less than end
          A. Push array of pivot plus one and end to stack
      D. Return array

2. Recursive
    1. Quicksort (array, low, high)
      A. If low less than high
        1. Set pivot to partition
        2. Recursive call with pivot minus one for high
        3. Recursive call with pivot plus one for low
      B. Return array

    2. Partition (array, low, high)
      A. Set index to high, i to low, and pivot to array at index
      B. While i less than array.length
        1. If array at i greater than pivot and i less than index
          A. Set variables
            1. Greater to array at i
            2. SubIndex to index minus one
            3. Sub to array at subIndex
          B. Set array elements
            1. Array at i to sub
            2. Array at pivot to greater
            3. Array at subIndex to pivot
        2. Else increment i
      C. Return index

*/