//DOCUMENT OBJECT MODEL
//1.innerText: returns all html nodes (which is vissible )
//2.textContent : returns all text content(if we make the display hidden to span or other attribbute in the text then it will not be visible)
//3.innerHTML  : gives the text in the selected node(it will disply every content and the other tags that we define )



//adding elements to the html 
//suppose if we want to add the child li element to the existing parent li then create a function mentioning which element need to add then append the element tot he parent or child as per our requiremtn then call the functon

//document.getelemtntbyid-->used to select the perticulat id or class and target that for changes or other tasks
//getattribute=returns the attribute that we asked for. ex-.document.getAttribute('id'). this gives the id name 
//setattribite=we can set the class name or id name .ex-> document.setAttribute('id',''title). this renames the id name from previous name to title

//document.queryselector-->will select the 1st element if multiple elements are defined
//document.queryselectorAll-->will select the all the element if multiple elements are defined

//if we define ul and 5 li inside thyen select the wuaryselectorall the it will be visible like array but it is not array it is node list but we can perform foreach
//so if we wan tot cahnge the color or any other property the we need to select the element inside like [0] and we can performt he action

//if we define the nuber of elements using document.getelementbyclassname then it will return the html collection and we dont have the array format to loop through so we need to convert it into the array and later we can perform the required  operation so we will convert the html collection into array like below

//Array.from() inside the bracket we need to give the element that we need to convert into array so that we can perform the operation 

//CLASSSNAME WILL DEFINE IN THE HTML COLLECTION FORMAT AND THE QUAERYSELECTORALL WILL DEFINE IN THE HTML COLLECTION FORMAT 

//RELATIONS
//children--->this will returns the child elements inside the parent element

//PARENT TO CHILD 
//1.FirstElementChild 2.LastElementChild

//CHILD TO PARENT
//1.(child element variable ).parentElement 2.(child element variable ).nextElementSibling

//CREATING THE ELEMENT using the create element property
