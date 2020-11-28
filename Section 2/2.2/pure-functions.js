// comment not pure function because when call function it have side effect with constructor variable
// class ProfileManager {

//   constructor(user) {
//     this.user = user;
//     this.profileUrl = "";
//     this.username = "";
//     this.domain = "http://mysocialnetwork.com/";
//   }

//   createUsername() {
//     let random = Math.floor(Math.random() * 100000);
//     this.username = `${this.user.firstName}.${this.user.lastName}.${random}`;
//   }

//   createProfileUrl() {
//     this.profileUrl = `${this.domain}${this.username}`;
//   }

// }

// let user = {
//   id: 7685, firstName: 'John', lastName: 'Smith'
// };

// let manager = new ProfileManager(user);
// manager.createUsername()
// manager.createProfileUrl()

class ProfileManager {

    constructor(user) {
      this.user = user;
      // this.profileUrl = "";
      // this.username = "";
      // this.domain = "http://mysocialnetwork.com/";
    }

    createUsername(user) {
      // let random = Math.floor(Math.random() * 100000);
      // this.user = `${user.firstName}.${user.lastName}.${random}`;
      return `${user.firstName}.${user.lastName}.${user.id}`;
    }

    createProfileUrl(domain, username) {
        // this.profileUrl = `${domain}${username}`;
        return  `${domain}${username}`;
    }

}

let user = {
    id: 7685, firstName: 'John', lastName: 'Smith'
};

let manager = new ProfileManager(user);
let profileUrl = manager.createProfileUrl("https://mysocialnetwork.com", createUsername(user));