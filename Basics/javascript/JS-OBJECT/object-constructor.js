function Student(username,password,email){
    this.user = username,  // handle useername value at global scope
    this.password = password,
    this.email = email
} // JS object constructor

const user1 = new Student('root','root123','root@root.com')
console.log(user1);