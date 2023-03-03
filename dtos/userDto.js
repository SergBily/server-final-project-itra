class UserDto {
  email;

  id;

  name;

  role;

  status;

  registrationDate;

  constructor(model) {
    this.name = model.name;
    this.email = model.email;
    this.id = model._id;
    this.role = model.role;
    this.status = model.status;
    this.registrationDate = model.createdAt;
  }
}

export default UserDto;
