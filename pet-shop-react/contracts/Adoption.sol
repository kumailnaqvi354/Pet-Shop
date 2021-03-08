pragma solidity ^0.5.0;


contract Adoption{
    address[16] public adopters;

    function adopt(uint petId)public  returns (uint){
        require(petId >= 0 && petId <=15);
        // require(adopters[petId] != 0x0000000000000000000000000000000000000000,"Already Adopted" );
       
        adopters[petId] = msg.sender;

        return petId;
        
    }

    function removeAdoption(uint petId)public returns (uint){
        require(petId >=0 && petId <=15);
        // require(adopters[petId] != "0x0000000000000000000000000000000000000000","You have not adopted this pet" );
        delete adopters[petId];
        return petId;
    }

    function getAdopters() public view returns (address[16] memory){
        return adopters;  
    }


}
