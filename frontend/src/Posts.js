import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Form, Button, } from 'react-bootstrap';

const Posts = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/posts/",  {
            method: 'GET',
          })
          .then(res => res.json())
          .then((post) => {
                 
                  setPost(post.data);
              },
              (error) => {
            
                  alert(error);
              }
          )
      }, [])

    return (
        
        <React.Fragment>  
            <div className="create container">
            <h2> Quoi de neuf ?</h2>
            <Form className="log">
                <Form.Group className="texarea mb-3" controlId="formBasicTextarea">
                    <Form.Control as="textarea" placeholder="Tout va bien ... ? :)" />
                </Form.Group>

                <Form.Group className=" mb-3" controlId="formFileSm">
                    <Form.Control type="file" size="sm" />
                </Form.Group>

                <Button type="submit"> Ajout un post </Button>
            </Form>
            </div> 

{/*        
     <div className="card gedf-card">
       <div className="card-body">

           <a className="card-link" href=" ">
               <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
           </a>

           <p className="card-text">
          
          </p>
       </div>
       <div className="card-footer">
           <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
           <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>

       </div>
   </div>   */}
    </React.Fragment>
   

 

    )
}

export default Posts;


     /* <div className="card gedf-card">
       <div class="card-body">

           <a class="card-link" href=" ">
               <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
           </a>

           <p class="card-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium
               esse magnam nemo dolor
               sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
           </p>
       </div>
       <div class="card-footer">
           <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
           <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>

       </div>
   </div> */
 