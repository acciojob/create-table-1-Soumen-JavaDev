function insert_Row() {
	let ele=document.createElement("tr");
	ele.innerHTML=`<td>New Cell1</td>
			<td>New Cell2</td> `;
	let topid=document.querySelector("#sampleTable");
 topid.insertAdjacentElement("afterbegin", ele);
  
  
}
