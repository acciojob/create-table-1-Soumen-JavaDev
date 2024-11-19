function insert_Row() {
	let ele=document.createElement("tr");
	let table=document.querySelector("#sampleTable");
	let cell1=document.createElement("td");
	let cell2=document.createElement("td");
	cell1.innerHTML="New Cell1";
	cell2.innerHTML="New Cell2";

	ele.appendChild(cell1);
	ele.appendChild(cell2);
  table.insertBefore(ele, table.firstChild);
  
  
}
