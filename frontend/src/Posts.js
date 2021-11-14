import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const Posts = () => {

    return (
        
   
    <div className="create container">
     <h2> Quoi de neuf ?</h2>
     <Form>
         <Form.Group className="texarea mb-3" controlId="formBasicTextarea">
             <Form.Control as="textarea" placeholder="Tout va bien ... ? :)" />
         </Form.Group>

         <Form.Group className=" mb-3" controlId="formFileSm">
             <Form.Control type="file" size="sm" />
         </Form.Group>

         <Button type="submit"> Ajout </Button>
     </Form>

     <div className="card gedf-card">
     <div class="card-body">
                       
                        <a class="card-link" href=" ">
                            <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        
                    </div>
     </div>
 </div>
 

    )
}

export default Posts;


// <form onSubmit="#">       
//          <label> Tout va bien .... ? </label>
//             <textarea 
//             required
//             ></textarea> 
//             <input
//             type="file"
//             className="image_file"
//             onInput="#"
//             />      
//            <button>Ajout post</button> 
        
//         </form>