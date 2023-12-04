# list1 = [5,10,15,20,25]
# for i in list1:
#     print(i)

# list1 = list[5,10,15,20,25]
# for i in list1:
#     print(i)

# list2 = list([5,10,15,20,25])
# for i in range(len(list2)):
#     print(list2[i])

# list3 = list([5,10,15,20,25])
# for i in range(0,len(list3)):
#     print(list3[i])

# list4 = list([5,10,15,20,25])
# for i in range(2,len(list4),1):
#     print(list4[i])

# ____________________________TasK____________ERROR
# num = [12345]
# while num in range(0,len(num),2):
#     num1 = num + 1
#     print(num1)

#___________________________________________________

# count=0
# while (count < 9):
#     count=count+1
#     print(count)
# #___________________________________________________

def countDigit(n):
        count = 0 
        while n!= 0:
            n //= 10
            count += 1
        return count

n= 55555
print("Number of Digits : % d" % (countDigit(n)))
# ____________________________________________________________________________

# list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

#  a = 0
#      for i in range(0,30):
#          print("Day",str(i),list[a])
#          a += 1

# ____________________________________________________________________________

from ast import If, Num
from datetime import date
now = date.today()
print("Today ia a ",now.strftime("%A"))

WeekDays = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday']
Week = 0
for i in range(0,7):
         print("Weekdays is",str(i),WeekDays[Week])
         Week += 1

# ____________________________________________________________________________

for WeekDays in range(0,len(WeekDays)):
    print(format(WeekDays))
    if WeekDays  == 0:
        print(" Weekday 1 is : monday")

# ____________________________________________________________________________

Num = [5,10,15,20,25]
for i in range(0,5):
    i += 1
    print("the nmubers is",(i))
# ____________________________________________________________________________

print("The First 10 Natural is: ")
for i in range(1,11):
    print(i)
# ____________________________________________________________________________
print("The even number between 1 to 20 is: ")
for i in range(1,21):
    if i% 2 == 0:
        print(i)
#____________________________________________________________________________

print("The odd  number between 1 to 20 is: ")
for i in range(1,21):
    if i% 2 != 0:
        print(i)
# ____________________________________________________________________________

print("My all Friends is")
All_Friends = ['a Friend', 'b Friend', 'c Friend', 'd Friend', 'e Friend', 'f Friend', 'g Friend']
friend = 0
for i in range(0,7):
         print(All_Friends[friend])
         friend += 1
# ____________________________________________________________________________

age = int(input("enter  your  age :"))
if age > 18 :
    print("Eligible for vote")
else:
    print("Not Eligible for vote")

# ------------------------------------------------------------------------------

age = int(input("enter  the  age ::"))

for i in range(age):
    if i%2 ==1:
        print(i)

# ------------------------------------------------------------------------------
val = int(input("enter  the  values ::"))
for i in range(val): 

    if i != 100: 
        print(i) 
    elif i > 0:
    	break

# ------------------------------------------------------------------------------

for i in range(1,100):
   # print(i)
    if i %3 == 0 and i %5 == 0:
        print("fizzbuzz")
    elif i %5 == 0:
        print("fizz")
    elif i %3 == 0:
        print("buzz")
    else:
        print(i)

# ------------------------------------------------------------------------------
A = int(input("enter the first  number :"))
B = int(input("enter the second number :"))
if A > B:
    print(" A is greater")
else:
    print(" B is greater")

# ------------------------------------------------------------------------------
A = int(input("enter the first  number :"))
B = int(input("enter the second number :"))
C = int(input("enter the Third number :"))
if A > B:
    print(" A is greater")
elif B > C:
    print(" B is greater")
elif A > C:
    print(" A is greater")
else:
    print(" None of these values are same")

# ------------------------------------------------------------------------------

for i in range(1,10,+1):
    i += 1
    print("Current".format(i))

    for i in range(1,10,-1):
        i -= 1
        print("pre ".format(i)) 

# ------------------------------------------------------------------------------
for i in range (10):
    PreviousNum = 0
    sum = PreviousNum + i
    print("Current Number is",i,"Previous Number is",PreviousNum,"Sum is:", PreviousNum+i)

# ------------------------------------------------------------------------------


   
# ------------------------------------------------------------------------------    
#   # div by 5 in the list
# list1 = [ 10 , 20 , 30 , 40 , 10]         
#     for i in list1:
#          if i %5 == 0:
#             print(i)
#------------------------------------------------------------------------------
 # 1st and 2nd numbers are the same
lst = [1, 2, 3, 4, 5]                     
if lst[0] == lst[-1]:
  print("The first and last numbers are the same.")
else:
#   print("The first and last numbers are not the same.")
# --------------------------------------------------------------------------------

x = [23, 4, -6, 23, -9, 21, 3, -45, -8]    # Positive Num & Negative Number using list
# iterating each number in list
for num in x:
    if num > 0:
        print("The Positive Number is ",num)
    elif num < 0:
        print("The Negative Number is ",num)
    else:
        break

# --------------------------------------------------------------------------------

list1 = [  5,12,14,18,20,25,1 ]             # Div By 5
for i in list1:
    if i % 5 == 0: 
        print(i)
# --------------------------------------------------------------------------------

ch = input("Enter a character: ")

if(ch=='A' or ch=='a' or ch=='E' or ch =='e' or ch=='I'
 or ch=='i' or ch=='O' or ch=='o' or ch=='U' or ch=='u'):
    print(ch, "is a Vowel")
else:
    print(ch, "is a Consonant")

# --------------------------------------------------------------------------------
#                     count Even and Odd numbers in a  list of numbers

list1 = [10, 21, 4, 45, 66, 93, 1]
even_count, odd_count = 0, 0
for num in list1:
	if num % 2 == 0:
		even_count += 1
	else:
		odd_count += 1
print("Even numbers in the list: ", even_count)
print("Odd numbers in the list: ", odd_count)
# --------------------------------------------------------------------------------
#                         sort without loop

x = int(input("Input first number: "))
y = int(input("Input second number: "))
z = int(input("Input third number: "))
# Find the min value  x, y, and z and store in variable a1.
a1 = min(x, y, z)
# Find the max value  x, y, and z and store in variable a3.
a3 = max(x, y, z)
# Calculate the middle value (not the minimum or maximum) by subtract 
# Print  in sort 3 order (a1, a2, a3).
print("Numbers in sorted order: ", a1, a2, a3)

# --------------------------------------------------------------------------------

list2=[1,3,3,4,3,2,3]
print("Elements: ",list2)
n=3
# Count occurrences using count()
print("3 occurrence: ",list2.count(n),"Times")
# --------------------------------------------------------------------------------

string_ = "Adam is a boy and Adam loves to play cricket."
print("Elements: ",string_)
n='Adam'
print("2 occurrence: ",string_.count(n),"Times")

# --------------------------------------------------------------------------------
def multiplication_or_sum(num1, num2):
    product = num1 * num2
    if product <= 500:
        return product
    else:
        return num1 + num2
result = multiplication_or_sum(20,30)
print("The sum result is = ", result)
result = multiplication_or_sum(50,10)
print("The product result is = ", result)

# --------------------------------------------------------------------------------

my_list = [22,25,12,27,11,28,21,22]
print(f"My mixed list : {my_list}")

my_even = []
my_odd = []

for num in my_list:
    if num % 2 == 0:
        my_even.append(num)
    else:
        my_odd.append(num)

print(f"My even list : {my_even}")
print(f"My odd list : {my_odd}")

# --------------------------------------------------------------------------------
test_str = 'The task is to return the number of characters in the string.'
# printing original string
print("The original string is : " + str(test_str))
# isalpha() to computation of Alphabets
res = len([ele for ele in test_str if ele.isalpha()])
print("Count of Alphabets : " + str(res))

# --------------------------------------------------------------------------------

a = [10,20,30,20,10,50,60,40,80,50,40]

dup_items = set()
uniq_items = []
for x in a:
    if x not in dup_items:
        uniq_items.append(x)
        dup_items.add(x)
print(dup_items)

# --------------------------------------------------------------------------------

def max_num_in_list( list ):
    max = list[ 0 ]
    for a in list:
        if a > max:
            max = a
    return max
print(max_num_in_list([1, 2, -8, 0]))

#--------------------------------------------------------------------------------
list1 = [1, 2, 3, 4, 5]                     
if list1[0] == list1[-1]:
        print("The first and last numbers are the same.")
else:
        print("The first and last numbers are not same.")

        list1 = [10 , 20 , 30 , 40 , 10]           # 1st and last NUmber are the same in the list
for i in range(0,len(list1),4):
    print(" the  result  is  true ",list1[i]) 