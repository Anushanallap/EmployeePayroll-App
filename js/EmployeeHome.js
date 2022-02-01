window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHTML = "<tr> <th></th> <th>Name</th> <th>Gender</th> <th>Department</th>"+
    "<th>Salary</th> <th>StartDate</th><th>Actions</th> </tr>";
    const innerHTML = ` ${headerHTML}
    
<tr>
<td>
    <img class="profile" src="../Assets/profile-images/Ellipse -3.png">
</td>
<td> 
    Mohammed Atif S
</td>
<td>Male</td>
<td>
    <div class="dept-label">Engineer</div>
    <div class="dept-label">Others</div>
</td>
<td>400000</td>
<td>09 Nov 2021</td>
<td>
    <img alt="delete" src="../Assets/icons/delete-black-18dp.svg">
    <img alt="edit" src="../Assets/icons/create-black-18dp.svg">
</td>
  </tr>  `;
    document.querySelector("#display").innerHTML = innerHTML;
}