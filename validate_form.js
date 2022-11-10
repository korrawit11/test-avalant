function required() {
  let empty = document.forms['form']['text'].value
  let empty1 = document.forms['form1']['text1'].value
  let empty2 = document.forms['form2']['address'].value
  let empty3 = document.forms['form3']['check'].value
  let empty4 = document.forms['form4']['current'].value
  if (empty,empty1,empty2,empty3,empty4 == '') {
    alert('Please input all field')
    return false
  } else {
    alert('Thank you for information')
    return true
  }
}