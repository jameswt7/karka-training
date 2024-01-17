// 1.

// var nums = [3,2,2,3]
// function RemAndRep(arrdata,oldnum,newnum)
// {
//     for (let index = 0; index < nums.length; index++) {
//         if(nums[index]===oldnum)
//         {
//             nums[index]=newnum;
//         }
        
//     }
//     return arrdata
// }
// console.log("Original Array is : ",nums)
// console.log(RemAndRep(nums,3,2))

// 2.

// var nums1=[1,2,3,1]
// var nums2=[1,2,3,4]
// function conditionRepeatTrueOrFalse(nums)
// {
//     const unique_item = new Set();
//     for(let i of nums)
//     {
//         if(unique_item.has(i))
//         {
//             return true;
//         }
//         unique_item.add(i)
//     }
//     return false;
   
// }
// console.log(conditionRepeatTrueOrFalse(nums1),nums1)
// console.log(conditionRepeatTrueOrFalse(nums2),nums2)

// 3.

// var num = 38;
// function addValues(num)
// {
//     while(num>=10)
//     {
//         let sum = 0;
//         while(num>0)
//         {
//             sum += num % 10;
//             num = Math.floor(num/10)
//         }
//         num = sum;
//     }
//     return num
// }
// console.log("The output is :",(addValues(num)))

// 4.

var s = ["h","e","l","l","o"]
console.log(s.reverse())

// 5.   n10 = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.
        // formula :F(n) = F(n-1) + F(n-2) 
// function fibnoNumber(n1)
// {
//     if(n1<0)
//     {
//         console.log("Incorrect Input")
//     }
//     else if(n1===0)
//     {
//         return 0;
//     }
//     else if(n1===1)
//     {
//         return 1;
//     }
//     else {
//          return fibnoNumber(n1-1)+fibnoNumber(n1-2) 
//     }
// }
// console.log(fibnoNumber(10))

// 6. 

// function duplicateZero(arr11,k)
// {
//     var N = arr11.length;
//     for(var i=0;i<N;i++)
//     {
//         if(arr11[i] == k)
//         {

//             arr11.splice(i+1,0,k);
//             i++;
//             arr11.pop();
//         }

//     }
//     return arr11;
   
// }

// var arr11 =[ 1, 0, 2, 3, 0, 4, 5, 0 ];
// var k = 0;
// var ans= duplicateZero(arr11,k)
// for (var i =0; i < ans.length; i++) 
//     document.write(ans[i]+"")

// 7.

// const intnum1 = [1,2,2,1]
// const intnum2 = [2,2]

// function intersect(intnum1,intnum2) 
// {
//     var res=[];
//     for(var i=0;i<intnum1.length;i++)
//     {
//         const currentNum = intnum1[i];
//         if(intnum2.includes(currentNum) && !res.includes(currentNum))
//         res.push(currentNum)
//     }
//     return res;    
// }
// const result = (intersect(intnum1,intnum2))
// console.log("Array Intersection is : ",result)

// 8.

// function transposeMatrix(matrix)
// {
//     const rows = matrix.length;
//     const columns = matrix[0].length;
//     const transposedMatrix=[]

//     for (let j=0;j<columns;j++)
//     {
//         transposedMatrix[j]=[];
//         for(let i=0;i<rows;i++)
//         {
//             transposedMatrix[j][i] = matrix[i][j]
//         }
//     }
//     return transposedMatrix
// }
// const originalMatrix =[[1,2,3],[4,5,6],[7,8,9]];
// const transposed = transposeMatrix(originalMatrix);
// console.log("Original Matrix: ")
// console.log(originalMatrix)
// console.log("\nTransposed Matrix")
// console.log(transposed)

// 9.

// function searchWordPosition(sentence, searchWord) {
//     // Convert both the sentence and search word to lowercase for case-insensitive search
//     const lowerCaseSentence = sentence.toLowerCase();
//     const lowerCaseSearchWord = searchWord.toLowerCase();

//     // Find the index of the search word in the lowercased sentence
//     const position = lowerCaseSentence.indexOf(lowerCaseSearchWord);

//     // If the search word is found, return the 1-based index, otherwise return -1
//     return position + 1;
// }
// // Example usage
// const sentence = "i love eating burger";
// const searchWord = "burg";
// const output = searchWordPosition(sentence, searchWord);

// console.log(output);

// 10.

// function minSumAfterSplitDig(num)
// {
//     const digits = Array.from(String(num), Number)
//     digits.sort((a,b)=>a-b);

//     let num1 =0;
//     let num2 =0;
//     for (let i = 0; i < digits.length; i++) 
//     {
//         if(i%2===0)
//         {
//             num1=num1*10 + digits[i];
//         }
//         else
//         {
//             num2=num2*10 + digits[i]
//         }
//     }
//     const sum = num1+num2;
//     return sum;
// }
// const num = 2932;
// const result = minSumAfterSplitDig(num)
// console.log(result)

// 11.

// function maxProfitDays(prices)
// {
//         const n = prices.length;
//         if(n<=1)
//         {
//                 console.log("Not enough days to make a profit")
//                 return ;
//         }
//         let buyDay = 0;
//         let sellDay = 0;
//         let maxProfit = 0;
//         for(let i =1;i<n;i++)
//         {
//                 if(prices[i]>prices[sellDay])
//                 {
//                         sellDay=i;
//                 }
//                 else{
//                         const profit = prices[sellDay]
//                         if(profit>maxProfit)
//                         {
//                                 maxProfit=profit;
//                         }
//                         buyDay=i;
//                         sellDay=i;
//                 }
//         }
//         const finalProfit = prices[sellDay]-prices[buyDay]
//         if(finalProfit>maxProfit)
//         {
//                 maxProfit=finalProfit;
//         }
//         if(maxProfit>0)
//         {
//                 console.log(`Buy on day ${buyDay} and sell on day ${sellDay} for a maximum profit of ${maxProfit}`)
//         }
//         else{
//                 console.log("No Profit can be made")
//         }
// }
// const stockPrices = [100,180, 260, 310, 40, 535, 695];
// maxProfitDays(stockPrices)


// 12.

// function lenStr(s){
//         const n = s.length;
//         let maxLength = 0;
//         let left = 0;
//         let right =0;
//         const charIndexMap = {};
//         while(right<n)
//         {
//                 const currentChar = s[right];
//                 if(charIndexMap[currentChar] !== undefined && charIndexMap[currentChar]>=left)
//                 {
//                         left = charIndexMap[currentChar]+1;
//                 }
//                 charIndexMap[currentChar]=right;
//                 maxLength = Math.max(maxLength,right-left+1);
//                 right++;
//         }
//         return maxLength;
// }
// const inputString =  "abcabcbbd";
// const result = lenStr(inputString);
// console.log(result)

// 13.

// function moveZerosToEnd(nums) 
// {
//         const n = nums.length;
//         let nonZeroIndex = 0;
      
//         // Move non-zero elements to the front of the array
//         for (let i = 0; i < n; i++) {
//           if (nums[i] !== 0) {
//             nums[nonZeroIndex] = nums[i];
//             nonZeroIndex++;
//           }
//         }
      
//         // Fill the remaining positions with zeros
//         for (let i = nonZeroIndex; i < n; i++) {
//           nums[i] = 0;
//         }
      
//         return nums;
// }
      
//       // Example usage
//  const inputArray = [0, 1, 0, 12, 3];
//  moveZerosToEnd(inputArray);
// console.log(inputArray);


// 14.

// function timeToBuyTickets(tickets,k)
// {
//         const n = tickets.length;
//         const queue=Array.from({length:n},(_,index)=>index);
//         let time =0;
//         while(tickets[k]>0)
//         {
//                 const currentPerson = queue.shift();
//                 if(tickets[currentPerson]>0)
//                 {       
//                         tickets[currentPerson]--;
//                         queue.push(currentPerson);
//                         time++;
//                 }
//         }
//         return time;
// }
// const tickets = [2,3,2]
// const k=2;
// const result = timeToBuyTickets(tickets,k)
// console.log(result)

// 15.

// function removeTrailZero(num){
//         const trimNum = num.replace(/0+$/,'');
//         return trimNum;
// }
// const inptnUm =  "51230100";
// const otptNum = removeTrailZero(inptnUm);
// console.log(otptNum)