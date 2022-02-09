// import { useState } from 'react';
// import { Label, Form, Button } from 'react-bootstrap';


const Users = () => {

    // const [email, setEmail] = useState("");
    // // const [password, setPassword] = useState(""); 
    // const [firstname, setPrenom] = useState("");
    // const [lastname, setNom] = useState("");

    return (

    <div className="create">
      <h2>PROFIL DETAILS</h2>

      <div class="container emp-profile">
          <div class="row">
              <div class="col-md-6">
                  <div class="profile-img">
                      <img src="../images/random_photo.png" alt="random_photo" />
                      <div class="file btn btn-lg btn-primary">
                          Change Photo
                          <input type="file" name="file" />
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="profile-head">
                      <h5>
                          {/* <Label> {firstname} {lastname}</Label> */}
                      </h5>
                      <h6>
                          Web Developer and Designer
                      </h6>
                      <div>
                          <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                      </div>
                  </div>
              </div>

          </div>
          <div class="row">
              <div class="col-md-8">
                  <div class="tab-content profile-tab" id="myTabContent">
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div class="row">
                              <div class="col-md-6">
                                  <label>Prenom</label>
                              </div>
                              <div class="col-md-6">
                                  <p> FIRSTNAME</p>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <label>Nom</label>
                              </div>
                              <div class="col-md-6">
                                  <p>LASTNAME</p>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <label>Email</label>
                              </div>
                              <div class="col-md-6">
                                  <p>EMAIL</p>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <label>Mot de passe</label>
                              </div>
                              <div class="col-md-6">
                                  <p>Password **********</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
)}


export default Users;