pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract petshop is ERC721{
    
   constructor() ERC721("petshop", "PS") public {
  }

//  mapping(address => petInfo) public OnlyOwner;
   
    struct petInfo{
        string name;
        string location;
        uint256 age;
        string image;
        uint256 price;
        address owner;
    }
    uint256 petId;
    
    petInfo[] petlist; 
    
    address Owner = 0xed3a9FCe08f947BA39096BCad529741e0260A12c;

    function addPet(string memory _petName, string memory _location, uint256 _age,string memory _image, uint256 _price)public returns(bool _status){
        
         require(
          Owner == msg.sender,
            "Error: Only Owner run this"
        );
        
        petInfo memory tempinfo;
            
        petId++;
        
        tempinfo = petInfo({
            name : _petName,
            location :_location,
            age :_age,
            price : _price,
            owner: Owner,
            image: _image
        });
        
        petlist.push(tempinfo);
        _mint(msg.sender, petId);
        
        
        return _status = true;
    }
    
  function _transferFrom(address from, address to, uint256 tokenId) public payable returns(bool){
      
      petInfo memory tempinfo;
        require(ownerOf(tokenId) == from, "ERC721: transfer of token that is not own");
        require(to != address(0), "ERC721: transfer to the zero address");
        require(msg.value > 0 && msg.value == tempinfo.price);
        
        address payable _owner =  payable(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);
        bool isFundSend =  _owner.send(msg.value);
        petlist[tokenId].owner = to;

        emit Transfer(Owner, msg.sender, tokenId);
        
        return isFundSend;
    }
    
}