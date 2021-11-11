const Posts = () => {

    return (
        
        <div className="create">
        <h2> Quoi de neuf ?</h2>
        <form onSubmit="#">       
         <label> Tout va bien .... ? </label>
            <textarea 
            required
            ></textarea> 
        
            <input
            type="file"
            name="post_image"
            id="post_image"
            className="icons_container__add_file"
            onInput="#"
            />      
           <button>Ajout post</button> 
        
        </form>
    </div>

    )
}

export default Posts;