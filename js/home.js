window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  const createInnerHtml = () => {

    const headerHtml =
        `<tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>`;
    
    const innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" src="../Assets/profile-images/Ellipse -1.png" alt="Ellipse-1"></td>
            <td>Anusha Nallapu</td>
            <td>Female</td>
            <td>
            <div class="dept-label">Sales</div>
            <div class="dept-label">Finance</div>
            </td>
            <td>&#8377; 3000000</td>
            <td>16 Oct 2021</td>
            <td>
            <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
            <img src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
            </td>
        </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
    }

    
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
      {
        _name: 'Anusha Nallapu',
        _gender: 'Female',
        _department: [
          'HR',
          'Sales',
          'Finance'
        ],
        _salary: 10000000,
        _startDate: '16 oct 2021',
        _note: 'Test to view from JSON',
        _id: new Date().getTime(),
        _profileImage: '../Assets/profile-images/Ellipse -1.png'
      },
      {
        _name: 'Ashwath',
        _gender: 'Male',
        _department: [
          'Hr'
        ],
        _salary: 5000000,
        _startDate: '01 Sept 2022',
        _note: 'Test to view from JSON',
        _id: new Date().getTime(),
        _profileImage: '../Assets/profile-images/Ellipse -3.png'
      }
    ];
    return employeePayrollListLocal;
  }
  const getDepartmentHtml = (departmentList) => {
    let departmentHtml = '';
    for(const department of departmentList){
      departmentHtml = `${departmentHtml} <div class='dept-label'>${department}</div>`
    }
    return departmentHtml
  }

