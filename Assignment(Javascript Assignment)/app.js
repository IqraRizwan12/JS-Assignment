// JAVASCRIPT REVISION ASSIGNMENT
// QUESTION NO 3:

// var a = +prompt('Enter a number to prints it multiplication tble')
// var b = +prompt('Enter lenght of multiplication table')

// document.write('Multiplication table of ' +  a  +' <br> '+ 'Length ' + b +'<br>'+ '<br>')

// for (var i=1 ; i<=b ; i++){
//     document.write(a + 'x' + i + '=' + a*i + '<br>')
// }

// QUESTION NO 5:

//  var fruits = ['apple','banana','mango','orange','strawberry']

//  for(var i=0 ; i<fruits.length ; i++){
//     document.write(fruits[i]+'<br>' ) 
    
//  }
//  document.write('<br>')

//  for(var i=0 ; i<fruits.length ; i++){
//     document.write(' Elements at index ' + i + ' is ' + fruits[i] + '<br>')
//  }


// QUESTION NO 8:
  
// var b = prompt ('Welcome to ABC Bakery! What do you want to order?')
// var abc = b.slice().toLowerCase()
// var a = ['cake','apple pie', 'cookie','chips','patties']
// var match = false


// for(var i=0; i<a.length;i++){
//     if(abc == a[i]){
//         match = true
//         alert(abc + ' is available at index ' + a.indexOf(abc) + ' in our bakery') 
//         break 
//     }
    
// }

// if(match == false){
//     alert(' We are sorry, '+ abc + ' is not available in our bakery ')
// }
        
    
// QUESTION NO 13:

// var students = ["Ali", "Sami", "Taha", "Inam"]
// var scores = [58, 73, 89, 90]


// for(var i=0 ; i<students.length ;i++){
//     document.write('<table border="1">' + '<tr>'+'<td>'+  students[i]
//     + '</td>'+ '<td>' + scores[i] + '</td>'+ '</tr>' + '</table>' )   
// }

   
// Question no 15:

// var a = [[1,2,3],[4,5,6],[7,8,9]]


// for(var i=0 ; i<a.length ; i++){
//     var row = a[i]
//     var rowStr = ""

//     for( var j= 0 ; j<row.length;j++ ){
//         rowStr += row[j] + ""
//     }
//    document.write(rowStr +'<br>')
// }
   




// CHAPTER FUNCTIONS

    
// QUESTION NO 3:

// function username(){
//     var firstName = prompt('Enter first name')
//     var lastName = prompt('Enter last name')

//     document.write(' Welcome '+ firstName + ' ' + lastName)

// }
// username()


// Question no 5:

// var a = +prompt('Enter first number')
// var b = +prompt('Enter second number')
// var sign = prompt('Enter the operator')

// function calc(num1,num2,oper){
   
//     if(oper == '+'){
//        return num1 + num2
//     }
//     else if(oper == '-'){
//        return num1 - num2
//     }
//     else if(oper == '*'){
//        return num1 * num2
//     }
//     else if(oper == '/'){
//        return num1 / num2
//     } 
// }
// document.write(calc(a,b,sign))


// Question no 19:

// function checkPalindrome(a){
//     var word = a.length
//    for( var i=0; i< word/2 ; i++){
//     if (a[i] !== a[word-1-i]) {
//         document.write('The entry is not palindrome' +'<br>')
//         return false  
       
//     }
    
//    }
//    document.write('The entry is a palindrome' +'<br>')
//    return true
   

// }
// var a1 = 'madam'
// var a2 = 'fox'
//  document.write (checkPalindrome('madam')+'<br>')
//  document.write (checkPalindrome('fox'))


// Question no 29:

// function ctf(){
//     var cTemp = 60
//     var ctf = cTemp*9/5 + 32
//     var cTof = cTemp + '\xB0C is ' + ctf + '\xB0F. '
//     document.write(cTof + '<br>')
// }
// ctf()

// function ftc(){
//     var fTemp = 50
//     var ftc = (fTemp - 32)* 5/9
//     var fToc = fTemp + '\xB0F is ' + ftc + '\xB0C. '
//     document.write(fToc)
// }
// ftc()