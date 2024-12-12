// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract StudentInfo {
    struct Student{
        string name;
        address studentAddress;
        uint256 rollNumber;
    }

    event StudentAdd(Student);

    Student public studentInstance;

    function createStudent(string memory _name,address _studentAddress,uint256 _rollNumber) public {
        studentInstance.name = _name;
        studentInstance.studentAddress = _studentAddress;
        studentInstance.rollNumber = _rollNumber ;
       emit StudentAdd(studentInstance);
    }
}